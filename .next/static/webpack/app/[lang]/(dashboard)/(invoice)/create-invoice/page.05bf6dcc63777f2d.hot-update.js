"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lang]/(dashboard)/(invoice)/create-invoice/page",{

/***/ "(app-pages-browser)/./app/[lang]/(dashboard)/(forms)/form-select/apiSituacionSelect.js":
/*!**************************************************************************!*\
  !*** ./app/[lang]/(dashboard)/(forms)/form-select/apiSituacionSelect.js ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchAverias: function() { return /* binding */ fetchAverias; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nconst apiProblemas = \"https://localhost:7180/api/ticketuser/gettipoproblema\";\nconst fetchAverias = async (tipoProblema)=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(apiProblemas, {\n            params: {\n                tipoProblema\n            }\n        });\n        return response.data.averias;\n    } catch (err) {\n        var _err_response_data, _err_response;\n        setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || \"Error desconocido\");\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbGFuZ10vKGRhc2hib2FyZCkvKGZvcm1zKS9mb3JtLXNlbGVjdC9hcGlTaXR1YWNpb25TZWxlY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsZUFBZTtBQUVkLE1BQU1DLGVBQWUsT0FBT0M7SUFDakMsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTUosNkNBQUtBLENBQUNLLEdBQUcsQ0FBQ0osY0FBYztZQUM3Q0ssUUFBUTtnQkFBRUg7WUFBYTtRQUN6QjtRQUNBLE9BQU9DLFNBQVNHLElBQUksQ0FBQ0MsT0FBTztJQUM5QixFQUFFLE9BQU9DLEtBQUs7WUFDSEEsb0JBQUFBO1FBQVRDLFNBQVNELEVBQUFBLGdCQUFBQSxJQUFJTCxRQUFRLGNBQVpLLHFDQUFBQSxxQkFBQUEsY0FBY0YsSUFBSSxjQUFsQkUseUNBQUFBLG1CQUFvQkUsT0FBTyxLQUFJO0lBQzFDO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvW2xhbmddLyhkYXNoYm9hcmQpLyhmb3JtcykvZm9ybS1zZWxlY3QvYXBpU2l0dWFjaW9uU2VsZWN0LmpzPzYwYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgYXBpUHJvYmxlbWFzID0gXCJodHRwczovL2xvY2FsaG9zdDo3MTgwL2FwaS90aWNrZXR1c2VyL2dldHRpcG9wcm9ibGVtYVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQXZlcmlhcyA9IGFzeW5jICh0aXBvUHJvYmxlbWEpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYXBpUHJvYmxlbWFzLCB7XHJcbiAgICAgIHBhcmFtczogeyB0aXBvUHJvYmxlbWEgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5hdmVyaWFzO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgc2V0RXJyb3IoZXJyLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IFwiRXJyb3IgZGVzY29ub2NpZG9cIik7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJhcGlQcm9ibGVtYXMiLCJmZXRjaEF2ZXJpYXMiLCJ0aXBvUHJvYmxlbWEiLCJyZXNwb25zZSIsImdldCIsInBhcmFtcyIsImRhdGEiLCJhdmVyaWFzIiwiZXJyIiwic2V0RXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[lang]/(dashboard)/(forms)/form-select/apiSituacionSelect.js\n"));

/***/ })

});