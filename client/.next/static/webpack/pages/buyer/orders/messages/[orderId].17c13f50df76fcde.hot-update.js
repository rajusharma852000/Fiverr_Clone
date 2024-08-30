"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/buyer/orders/messages/[orderId]",{

/***/ "./src/components/Messages/MessageContainer.jsx":
/*!******************************************************!*\
  !*** ./src/components/Messages/MessageContainer.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/constants */ \"./src/utils/constants.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_BsCheckAll_react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=BsCheckAll!=!react-icons/bs */ \"__barrel_optimize__?names=BsCheckAll!=!./node_modules/react-icons/bs/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaRegPaperPlane_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FaRegPaperPlane!=!react-icons/fa */ \"__barrel_optimize__?names=FaRegPaperPlane!=!./node_modules/react-icons/fa/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst MessageContainer = ()=>{\n    _s();\n    const scrollableDivRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { orderId } = router.query;\n    const [{ userInfo }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [recipentId, setRecipentId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined);\n    const [messageText, setMessageText] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [reRender, setReRender] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(\"yes ********\");\n        const getMessages = async ()=>{\n            var _data_message;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.GET_MESSAGES, \"/\").concat(orderId), {\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.jwt)\n                }\n            });\n            setMessages(data === null || data === void 0 ? void 0 : data.messages);\n            setReRender(data === null || data === void 0 ? void 0 : (_data_message = data.message) === null || _data_message === void 0 ? void 0 : _data_message.length);\n            setRecipentId(data === null || data === void 0 ? void 0 : data.recipentId);\n        };\n        if (orderId && userInfo) {\n            getMessages();\n        }\n    }, [\n        orderId,\n        userInfo,\n        reRender\n    ]);\n    function formatTime(timestamp) {\n        const date = new Date(timestamp);\n        let hours = date.getHours();\n        let minutes = date.getMinutes();\n        const ampm = hours >= 12 ? \"PM\" : \"AM\";\n        hours %= 12;\n        hours = hours || 12;\n        minutes = minutes < 10 ? \"0\" + minutes : minutes;\n        const formattedTime = \"\".concat(hours, \":\").concat(minutes, \" \").concat(ampm);\n        return formattedTime;\n    }\n    const sendMessage = async ()=>{\n        if (messageText.length) {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.ADD_MESSAGE, \"/\").concat(orderId), {\n                message: messageText,\n                recipentId\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.jwt)\n                }\n            });\n            if (response.status === 201) {\n                setMessages([\n                    ...messages,\n                    response.data.message\n                ]);\n                setMessageText(\"\");\n                setReRender((length + 1) % 2); //just to re-render the component\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-[80vh]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-h-[80vh]   flex flex-col justify-center items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white py-8 px-4 shadow-2xl sm:rounded-lg sm:px-10 w-[80vw] border flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: scrollableDivRef,\n                            className: \"space-y-4 h-[50vh] overflow-y-auto pr-4 \",\n                            children: messages.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex \".concat((message === null || message === void 0 ? void 0 : message.senderId) === userInfo.id ? \"justify-end\" : \"justify-start\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"inline-block rounded-lg \".concat((message === null || message === void 0 ? void 0 : message.senderId) === (userInfo === null || userInfo === void 0 ? void 0 : userInfo.id) ? \"bg-[#1DBF73] text-white\" : \"bg-gray-100 text-gray-800\", \" px-4 py-2 max-w-xs break-all\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: message === null || message === void 0 ? void 0 : message.text\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 41\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-sm text-gray-600\",\n                                                children: formatTime(message === null || message === void 0 ? void 0 : message.createdAt)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 41\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: (message === null || message === void 0 ? void 0 : message.senderId) === userInfo.id && (message === null || message === void 0 ? void 0 : message.isRead) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsCheckAll_react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsCheckAll, {}, void 0, false, {\n                                                    fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 49\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, message === null || message === void 0 ? void 0 : message.id, false, {\n                                    fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 33\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8 flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"rounded-full py-2 px-4 mr-2 w-full border-zinc-300 border-2 bg-[#fff4f4] hover:bg-white\",\n                                placeholder: \"Type a message...\",\n                                name: \"message\",\n                                onChange: (e)=>setMessageText(e.target.value),\n                                value: messageText\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-[#1DBF73] text-white rounded-full px-4 py-2 hover:bg-[#18a262]\",\n                                onClick: sendMessage,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaRegPaperPlane_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaRegPaperPlane, {}, void 0, false, {\n                                    fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                lineNumber: 114,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                lineNumber: 73,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n            lineNumber: 72,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MessageContainer, \"6hxU0dQd4DD45K+vz5af8f0iZMw=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = MessageContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageContainer);\nvar _c;\n$RefreshReg$(_c, \"MessageContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlcy9NZXNzYWdlQ29udGFpbmVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDSTtBQUNwQztBQUNjO0FBQ21CO0FBQ2pCO0FBQ0U7QUFDSztBQUVqRCxNQUFNWSxtQkFBbUI7O0lBQ3JCLE1BQU1DLG1CQUFtQk4sNkNBQU1BLENBQUM7SUFDaEMsTUFBTSxDQUFDTyxRQUFRLEdBQUdMLHdEQUFVQTtJQUM1QixNQUFNTSxTQUFTWCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFWSxPQUFPLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUNoQyxNQUFNLENBQUMsRUFBRUMsUUFBUSxFQUFFLENBQUMsR0FBR2xCLHVFQUFnQkE7SUFDdkMsTUFBTSxDQUFDbUIsWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQ2E7SUFDN0MsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdmLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2dCLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDa0IsVUFBVUMsWUFBWSxHQUFHbkIsK0NBQVFBLENBQUM7SUFFekNGLGdEQUFTQSxDQUFDO1FBQ05zQixRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNQyxjQUFjO2dCQU9KQztZQU5aLE1BQU0sRUFBRUEsSUFBSSxFQUFFLEdBQUcsTUFBTTVCLGlEQUFTLENBQUMsR0FBbUJhLE9BQWhCZCwwREFBWUEsRUFBQyxLQUFXLE9BQVJjLFVBQVc7Z0JBQzNEaUIsU0FBUztvQkFDTEMsZUFBZSxVQUFzQixPQUFacEIsUUFBUXFCLEdBQUc7Z0JBQ3hDO1lBQ0o7WUFDQVYsWUFBWU0saUJBQUFBLDJCQUFBQSxLQUFNUCxRQUFRO1lBQzFCRyxZQUFZSSxpQkFBQUEsNEJBQUFBLGdCQUFBQSxLQUFNSyxPQUFPLGNBQWJMLG9DQUFBQSxjQUFlTSxNQUFNO1lBQ2pDakIsY0FBY1csaUJBQUFBLDJCQUFBQSxLQUFN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QWVBLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlcy9NZXNzYWdlQ29udGFpbmVyLmpzeD9lNDZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlUHJvdmlkZXIgfSBmcm9tICdAL2NvbnRleHQvU3RhdGVDb250ZXh0JztcclxuaW1wb3J0IHsgQUREX01FU1NBR0UsIEdFVF9NRVNTQUdFUyB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcclxuaW1wb3J0IHsgQnNDaGVja0FsbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcclxuaW1wb3J0IHsgRmFSZWdQYXBlclBsYW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuY29uc3QgTWVzc2FnZUNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNjcm9sbGFibGVEaXZSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgb3JkZXJJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgW3sgdXNlckluZm8gfV0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XHJcbiAgICBjb25zdCBbcmVjaXBlbnRJZCwgc2V0UmVjaXBlbnRJZF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW21lc3NhZ2VUZXh0LCBzZXRNZXNzYWdlVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3JlUmVuZGVyLCBzZXRSZVJlbmRlcl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwieWVzICoqKioqKioqXCIpO1xyXG4gICAgICAgIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtHRVRfTUVTU0FHRVN9LyR7b3JkZXJJZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMuand0fWAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMoZGF0YT8ubWVzc2FnZXMpO1xyXG4gICAgICAgICAgICBzZXRSZVJlbmRlcihkYXRhPy5tZXNzYWdlPy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBzZXRSZWNpcGVudElkKGRhdGE/LnJlY2lwZW50SWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKG9yZGVySWQgJiYgdXNlckluZm8pIHtcclxuICAgICAgICAgICAgZ2V0TWVzc2FnZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbb3JkZXJJZCwgdXNlckluZm8sIHJlUmVuZGVyXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZXN0YW1wKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgY29uc3QgYW1wbSA9IGhvdXJzID49IDEyID8gXCJQTVwiIDogXCJBTVwiO1xyXG4gICAgICAgIGhvdXJzICU9IDEyO1xyXG4gICAgICAgIGhvdXJzID0gaG91cnMgfHwgMTI7XHJcbiAgICAgICAgbWludXRlcyA9IG1pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXM7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9ICR7YW1wbX1gO1xyXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAobWVzc2FnZVRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtBRERfTUVTU0FHRX0vJHtvcmRlcklkfWAsXHJcbiAgICAgICAgICAgICAgICB7IG1lc3NhZ2U6IG1lc3NhZ2VUZXh0LCByZWNpcGVudElkIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy5qd3R9YCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgcmVzcG9uc2UuZGF0YS5tZXNzYWdlXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlVGV4dChcIlwiKTtcclxuICAgICAgICAgICAgICAgIHNldFJlUmVuZGVyKChsZW5ndGggKyAxKSAlIDIpOyAvL2p1c3QgdG8gcmUtcmVuZGVyIHRoZSBjb21wb25lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzgwdmhdXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LWgtWzgwdmhdICAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHktOCBweC00IHNoYWRvdy0yeGwgc206cm91bmRlZC1sZyBzbTpweC0xMCB3LVs4MHZ3XSBib3JkZXIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17c2Nyb2xsYWJsZURpdlJlZn0gY2xhc3NOYW1lPVwic3BhY2UteS00IGgtWzUwdmhdIG92ZXJmbG93LXktYXV0byBwci00IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttZXNzYWdlPy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCAke21lc3NhZ2U/LnNlbmRlcklkID09PSB1c2VySW5mby5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImp1c3RpZnktZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJqdXN0aWZ5LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5saW5lLWJsb2NrIHJvdW5kZWQtbGcgJHttZXNzYWdlPy5zZW5kZXJJZCA9PT0gdXNlckluZm8/LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJnLVsjMURCRjczXSB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctZ3JheS0xMDAgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBweC00IHB5LTIgbWF4LXcteHMgYnJlYWstYWxsYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21lc3NhZ2U/LnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdFRpbWUobWVzc2FnZT8uY3JlYXRlZEF0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlPy5zZW5kZXJJZCA9PT0gdXNlckluZm8uaWQgJiYgbWVzc2FnZT8uaXNSZWFkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJzQ2hlY2tBbGwgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcHktMiBweC00IG1yLTIgdy1mdWxsIGJvcmRlci16aW5jLTMwMCBib3JkZXItMiBiZy1bI2ZmZjRmNF0gaG92ZXI6Ymctd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGEgbWVzc2FnZS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2VUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzFEQkY3M10gdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgcHgtNCBweS0yIGhvdmVyOmJnLVsjMThhMjYyXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZW5kTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhUmVnUGFwZXJQbGFuZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VDb250YWluZXJcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlUHJvdmlkZXIiLCJBRERfTUVTU0FHRSIsIkdFVF9NRVNTQUdFUyIsImF4aW9zIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUNvb2tpZXMiLCJCc0NoZWNrQWxsIiwiRmFSZWdQYXBlclBsYW5lIiwiTWVzc2FnZUNvbnRhaW5lciIsInNjcm9sbGFibGVEaXZSZWYiLCJjb29raWVzIiwicm91dGVyIiwib3JkZXJJZCIsInF1ZXJ5IiwidXNlckluZm8iLCJyZWNpcGVudElkIiwic2V0UmVjaXBlbnRJZCIsInVuZGVmaW5lZCIsIm1lc3NhZ2VUZXh0Iiwic2V0TWVzc2FnZVRleHQiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwicmVSZW5kZXIiLCJzZXRSZVJlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJnZXRNZXNzYWdlcyIsImRhdGEiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImp3dCIsIm1lc3NhZ2UiLCJsZW5ndGgiLCJmb3JtYXRUaW1lIiwidGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJhbXBtIiwiZm9ybWF0dGVkVGltZSIsInNlbmRNZXNzYWdlIiwicmVzcG9uc2UiLCJwb3N0Iiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwibWFwIiwic2VuZGVySWQiLCJpZCIsInAiLCJ0ZXh0Iiwic3BhbiIsImNyZWF0ZWRBdCIsImlzUmVhZCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibmFtZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Messages/MessageContainer.jsx\n"));

/***/ })

});