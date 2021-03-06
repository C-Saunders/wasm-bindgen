extern crate parity_wasm;
extern crate tempfile;
extern crate wasm_bindgen_wasm_interpreter;

use std::fs;
use std::process::Command;

use wasm_bindgen_wasm_interpreter::Interpreter;

fn interpret(wat: &str, name: &str, result: Option<&[u32]>) {
    let input = tempfile::NamedTempFile::new().unwrap();
    let output = tempfile::NamedTempFile::new().unwrap();
    fs::write(input.path(), wat).unwrap();
    let status = Command::new("wat2wasm")
        .arg(input.path())
        .arg("-o")
        .arg(output.path())
        .status()
        .unwrap();
    println!("status: {}", status);
    assert!(status.success());
    let module = parity_wasm::deserialize_file(output.path()).unwrap();
    let mut i = Interpreter::new(&module);
    assert_eq!(i.interpret(name, &module), result);
}

#[test]
fn smoke() {
    let wat = r#"
        (module
            (export "foo" (func $foo))

            (func $foo)
        )
    "#;
    interpret(wat, "foo", Some(&[]));
    interpret(wat, "bar", None);

    let wat = r#"
        (module
            (import "__wbindgen_placeholder__" "__wbindgen_describe"
              (func $__wbindgen_describe (param i32)))

            (func $foo
                i32.const 1
                call $__wbindgen_describe
            )

            (export "foo" (func $foo))
        )
    "#;
    interpret(wat, "foo", Some(&[1]));
}

#[test]
fn locals() {
    let wat = r#"
        (module
            (import "__wbindgen_placeholder__" "__wbindgen_describe"
              (func $__wbindgen_describe (param i32)))

            (func $foo
                (local i32)
                i32.const 2
                set_local 0
                get_local 0
                call $__wbindgen_describe
            )

            (export "foo" (func $foo))
        )
    "#;
    interpret(wat, "foo", Some(&[2]));
}

#[test]
fn globals() {
    let wat = r#"
        (module
            (import "__wbindgen_placeholder__" "__wbindgen_describe"
              (func $__wbindgen_describe (param i32)))

            (global i32 (i32.const 0))

            (func $foo
                (local i32)
                get_global 0
                set_local 0
                get_local 0
                call $__wbindgen_describe
                get_local 0
                set_global 0
            )

            (export "foo" (func $foo))
        )
    "#;
    interpret(wat, "foo", Some(&[256]));
}

#[test]
fn arithmetic() {
    let wat = r#"
        (module
            (import "__wbindgen_placeholder__" "__wbindgen_describe"
              (func $__wbindgen_describe (param i32)))

            (func $foo
                i32.const 1
                i32.const 2
                i32.add
                call $__wbindgen_describe
                i32.const 2
                i32.const 1
                i32.sub
                call $__wbindgen_describe
            )

            (export "foo" (func $foo))
        )
    "#;
    interpret(wat, "foo", Some(&[3, 1]));
}

#[test]
fn return_early() {
    let wat = r#"
        (module
            (import "__wbindgen_placeholder__" "__wbindgen_describe"
              (func $__wbindgen_describe (param i32)))

            (func $foo
                i32.const 1
                i32.const 2
                call $__wbindgen_describe
                return
            )

            (export "foo" (func $foo))
        )
    "#;
    interpret(wat, "foo", Some(&[2]));
}

#[test]
fn loads_and_stores() {
    let wat = r#"
        (module
            (import "__wbindgen_placeholder__" "__wbindgen_describe"
              (func $__wbindgen_describe (param i32)))

            (global i32 (i32.const 0))
            (memory 1)

            (func $foo
                (local i32)

                ;; decrement the stack pointer, setting our local to the
                ;; lowest address of our stack
                get_global 0
                i32.const 16
                i32.sub
                set_local 0
                get_local 0
                set_global 0

                ;; store 1 at fp+0
                get_local 0
                i32.const 1
                i32.store offset=0

                ;; store 2 at fp+4
                get_local 0
                i32.const 2
                i32.store offset=4

                ;; store 3 at fp+8
                get_local 0
                i32.const 3
                i32.store offset=8

                ;; load fp+0 and call
                get_local 0
                i32.load offset=0
                call $__wbindgen_describe

                ;; load fp+4 and call
                get_local 0
                i32.load offset=4
                call $__wbindgen_describe

                ;; load fp+8 and call
                get_local 0
                i32.load offset=8
                call $__wbindgen_describe

                ;; increment our stack pointer
                get_local 0
                i32.const 16
                i32.add
                set_global 0
            )

            (export "foo" (func $foo))
        )
    "#;
    interpret(wat, "foo", Some(&[1, 2, 3]));
}

#[test]
fn calling_functions() {
    let wat = r#"
        (module
            (import "__wbindgen_placeholder__" "__wbindgen_describe"
              (func $__wbindgen_describe (param i32)))

            (global i32 (i32.const 0))
            (memory 1)

            (func $foo
                call $bar
            )

            (func $bar
                i32.const 0
                call $__wbindgen_describe
            )

            (export "foo" (func $foo))
        )
    "#;
    interpret(wat, "foo", Some(&[0]));
}
