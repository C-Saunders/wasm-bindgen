(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./defined-in-js.js":
/*!**************************!*\
  !*** ./defined-in-js.js ***!
  \**************************/
/*! exports provided: name, MyClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyClass\", function() { return MyClass; });\nfunction name() {\n    return 'World';\n}\n\nclass MyClass {\n    constructor() {\n        this._number = 42;\n    }\n\n    get number() {\n        return this._number;\n    }\n\n    set number(n) {\n        return this._number = n;\n    }\n\n    render() {\n        return `My number is: ${this.number}`;\n    }\n}\n\n\n//# sourceURL=webpack:///./defined-in-js.js?");

/***/ }),

/***/ "./import_js.js":
/*!**********************!*\
  !*** ./import_js.js ***!
  \**********************/
/*! exports provided: __wbg_name_178177c168bf5fbc, __wbg_new_cb9d1487d2d5ec0c, __wbg_number_838e20a25fee84e4, __wbg_setnumber_72249e5c835dd6f2, __wbg_render_11957f61acf13799, __wbg_log_2666fc61f873cb3f, run, __wbindgen_object_drop_ref, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextEncoder, TextDecoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_name_178177c168bf5fbc\", function() { return __wbg_name_178177c168bf5fbc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_cb9d1487d2d5ec0c\", function() { return __wbg_new_cb9d1487d2d5ec0c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_number_838e20a25fee84e4\", function() { return __wbg_number_838e20a25fee84e4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setnumber_72249e5c835dd6f2\", function() { return __wbg_setnumber_72249e5c835dd6f2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_render_11957f61acf13799\", function() { return __wbg_render_11957f61acf13799; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_2666fc61f873cb3f\", function() { return __wbg_log_2666fc61f873cb3f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _import_js_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import_js_bg */ \"./import_js_bg.wasm\");\n/* harmony import */ var _defined_in_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defined-in-js */ \"./defined-in-js.js\");\n/* tslint:disable */\n\n\n\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _import_js_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_import_js_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction passStringToWasm(arg) {\n\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = _import_js_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    return [ptr, buf.length];\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _import_js_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_import_js_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nfunction __wbg_name_178177c168bf5fbc(ret) {\n\n    const [retptr, retlen] = passStringToWasm(Object(_defined_in_js__WEBPACK_IMPORTED_MODULE_1__[\"name\"])());\n    const mem = getUint32Memory();\n    mem[ret / 4] = retptr;\n    mem[ret / 4 + 1] = retlen;\n\n}\n\nconst slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];\n\nlet slab_next = slab.length;\n\nfunction addHeapObject(obj) {\n    if (slab_next === slab.length) slab.push(slab.length + 1);\n    const idx = slab_next;\n    const next = slab[idx];\n\n    slab_next = next;\n\n    slab[idx] = { obj, cnt: 1 };\n    return idx << 1;\n}\n\nfunction __wbg_new_cb9d1487d2d5ec0c() {\n    return addHeapObject(new _defined_in_js__WEBPACK_IMPORTED_MODULE_1__[\"MyClass\"]());\n}\n\nfunction GetOwnOrInheritedPropertyDescriptor(obj, id) {\n    while (obj) {\n        let desc = Object.getOwnPropertyDescriptor(obj, id);\n        if (desc) return desc;\n        obj = Object.getPrototypeOf(obj);\n    }\nreturn {}\n}\n\nconst __wbg_number_838e20a25fee84e4_target = GetOwnOrInheritedPropertyDescriptor(typeof _defined_in_js__WEBPACK_IMPORTED_MODULE_1__[\"MyClass\"] === 'undefined' ? null : _defined_in_js__WEBPACK_IMPORTED_MODULE_1__[\"MyClass\"].prototype, 'number').get || function() {\n    throw new Error(`wasm-bindgen: MyClass.number does not exist`);\n};\n\nconst stack = [];\n\nfunction getObject(idx) {\n    if ((idx & 1) === 1) {\n        return stack[idx >> 1];\n    } else {\n        const val = slab[idx >> 1];\n\n        return val.obj;\n\n    }\n}\n\nfunction __wbg_number_838e20a25fee84e4(arg0) {\n    return __wbg_number_838e20a25fee84e4_target.call(getObject(arg0));\n}\n\nconst __wbg_setnumber_72249e5c835dd6f2_target = GetOwnOrInheritedPropertyDescriptor(typeof _defined_in_js__WEBPACK_IMPORTED_MODULE_1__[\"MyClass\"] === 'undefined' ? null : _defined_in_js__WEBPACK_IMPORTED_MODULE_1__[\"MyClass\"].prototype, 'number').set || function() {\n    throw new Error(`wasm-bindgen: MyClass.number does not exist`);\n};\n\nfunction __wbg_setnumber_72249e5c835dd6f2(arg0, arg1) {\n    return addHeapObject(__wbg_setnumber_72249e5c835dd6f2_target.call(getObject(arg0), arg1));\n}\n\nconst __wbg_render_11957f61acf13799_target = typeof _defined_in_js__WEBPACK_IMPORTED_MODULE_1__[\"MyClass\"] === 'undefined' ? null : _defined_in_js__WEBPACK_IMPORTED_MODULE_1__[\"MyClass\"].prototype.render || function() {\n    throw new Error(`wasm-bindgen: MyClass.render does not exist`);\n};\n\nfunction __wbg_render_11957f61acf13799(ret, arg0) {\n\n    const [retptr, retlen] = passStringToWasm(__wbg_render_11957f61acf13799_target.call(getObject(arg0)));\n    const mem = getUint32Memory();\n    mem[ret / 4] = retptr;\n    mem[ret / 4 + 1] = retlen;\n\n}\n\nconst __wbg_log_2666fc61f873cb3f_target = console.log;\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_log_2666fc61f873cb3f(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    __wbg_log_2666fc61f873cb3f_target(varg0);\n}\n/**\n* @returns {void}\n*/\nfunction run() {\n    return _import_js_bg__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\nfunction dropRef(idx) {\n\n    idx = idx >> 1;\n    if (idx < 4) return;\n    let obj = slab[idx];\n\n    obj.cnt -= 1;\n    if (obj.cnt > 0) return;\n\n    // If we hit 0 then free up our space in the slab\n    slab[idx] = slab_next;\n    slab_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) {\n    dropRef(i);\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"], __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"]))\n\n//# sourceURL=webpack:///./import_js.js?");

/***/ }),

/***/ "./import_js_bg.wasm":
/*!***************************!*\
  !*** ./import_js_bg.wasm ***!
  \***************************/
/*! exports provided: memory, __indirect_function_table, __heap_base, __data_end, __rustc_debug_gdb_scripts_section__, run, __wbindgen_malloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./import_js */ \"./import_js.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./import_js_bg.wasm?");

/***/ })

}]);