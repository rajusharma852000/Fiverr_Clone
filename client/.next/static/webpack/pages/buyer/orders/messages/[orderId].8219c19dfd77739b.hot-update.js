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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/constants */ \"./src/utils/constants.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_BsCheckAll_react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=BsCheckAll!=!react-icons/bs */ \"__barrel_optimize__?names=BsCheckAll!=!./node_modules/react-icons/bs/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaRegPaperPlane_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FaRegPaperPlane!=!react-icons/fa */ \"__barrel_optimize__?names=FaRegPaperPlane!=!./node_modules/react-icons/fa/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst MessageContainer = ()=>{\n    _s();\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { orderId } = router.query;\n    const [{ userInfo }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [recipentId, setRecipentId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined);\n    const [messageText, setMessageText] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [length, setLength] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const getMessages = async ()=>{\n            var _data_message;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.GET_MESSAGES, \"/\").concat(orderId), {\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.jwt)\n                }\n            });\n            setMessages(data === null || data === void 0 ? void 0 : data.messages);\n            setLength(data === null || data === void 0 ? void 0 : (_data_message = data.message) === null || _data_message === void 0 ? void 0 : _data_message.length);\n            setRecipentId(data === null || data === void 0 ? void 0 : data.recipentId);\n        };\n        if (orderId && userInfo) {\n            getMessages();\n        }\n    }, [\n        orderId,\n        userInfo,\n        length\n    ]);\n    function formatTime(timestamp) {\n        const date = new Date(timestamp);\n        let hours = date.getHours();\n        let minutes = date.getMinutes();\n        const ampm = hours >= 12 ? \"PM\" : \"AM\";\n        hours %= 12;\n        hours = hours || 12;\n        minutes = minutes < 10 ? \"0\" + minutes : minutes;\n        const formattedTime = \"\".concat(hours, \":\").concat(minutes, \" \").concat(ampm);\n        return formattedTime;\n    }\n    const sendMessage = async ()=>{\n        if (messageText.length) {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.ADD_MESSAGE, \"/\").concat(orderId), {\n                message: messageText,\n                recipentId\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.jwt)\n                }\n            });\n            setLength((length + 1) % 2);\n            setMessages([\n                ...messages,\n                response.data.message\n            ]);\n            setMessageText(\"\");\n            if (response.status === 201) {}\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-[80vh]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-h-[80vh]   flex flex-col justify-center items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white py-8 px-4 shadow-2xl sm:rounded-lg sm:px-10 w-[80vw] border flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-4 h-[50vh] overflow-y-auto pr-4 \",\n                            children: messages.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex \".concat((message === null || message === void 0 ? void 0 : message.senderId) === userInfo.id ? \"justify-end\" : \"justify-start\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"inline-block rounded-lg \".concat((message === null || message === void 0 ? void 0 : message.senderId) === (userInfo === null || userInfo === void 0 ? void 0 : userInfo.id) ? \"bg-[#1DBF73] text-white\" : \"bg-gray-100 text-gray-800\", \" px-4 py-2 max-w-xs break-all\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: message === null || message === void 0 ? void 0 : message.text\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 41\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-sm text-gray-600\",\n                                                children: formatTime(message === null || message === void 0 ? void 0 : message.createdAt)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 41\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: (message === null || message === void 0 ? void 0 : message.senderId) === userInfo.id && (message === null || message === void 0 ? void 0 : message.isRead) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsCheckAll_react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsCheckAll, {}, void 0, false, {\n                                                    fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 49\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, message === null || message === void 0 ? void 0 : message.id, false, {\n                                    fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 33\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8 flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"rounded-full py-2 px-4 mr-2 w-full border:bg-zinc-600 border-4 bg-[#fff4f4]\",\n                                placeholder: \"Type a message...\",\n                                name: \"message\",\n                                onChange: (e)=>setMessageText(e.target.value),\n                                value: messageText\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-[#1DBF73] text-white rounded-full px-4 py-2 hover:bg-[#18a262]\",\n                                onClick: sendMessage,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaRegPaperPlane_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaRegPaperPlane, {}, void 0, false, {\n                                    fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                                lineNumber: 111,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n                lineNumber: 70,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n            lineNumber: 69,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\SAMSUNG M31\\\\Lets Code\\\\6_PROJECTS\\\\5_Fiverr_Clone\\\\fiverr\\\\src\\\\components\\\\Messages\\\\MessageContainer.jsx\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MessageContainer, \"IVoErJBb6iRMq6UiSv7vRPTOqcs=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = MessageContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageContainer);\nvar _c;\n$RefreshReg$(_c, \"MessageContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlcy9NZXNzYWdlQ29udGFpbmVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDSTtBQUNwQztBQUNjO0FBQ1c7QUFDVDtBQUNFO0FBQ0s7QUFFakQsTUFBTVcsbUJBQW1COztJQUNyQixNQUFNLENBQUNDLFFBQVEsR0FBR0osd0RBQVVBO0lBQzVCLE1BQU1LLFNBQVNULHNEQUFTQTtJQUN4QixNQUFNLEVBQUVVLE9BQU8sRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQ2hDLE1BQU0sQ0FBQyxFQUFFQyxRQUFRLEVBQUUsQ0FBQyxHQUFHaEIsdUVBQWdCQTtJQUN2QyxNQUFNLENBQUNpQixZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDWTtJQUM3QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2QsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDZSxVQUFVQyxZQUFZLEdBQUdoQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ2lCLFFBQVFDLFVBQVUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRXJDRCxnREFBU0EsQ0FBQztRQUNOLE1BQU1vQixjQUFjO2dCQU9OQztZQU5WLE1BQU0sRUFBRUEsSUFBSSxFQUFFLEdBQUcsTUFBTXhCLGlEQUFTLENBQUMsR0FBbUJXLE9BQWhCWiwwREFBWUEsRUFBQyxLQUFXLE9BQVJZLFVBQVc7Z0JBQzNEZSxTQUFTO29CQUNMQyxlQUFlLFVBQXNCLE9BQVpsQixRQUFRbUIsR0FBRztnQkFDeEM7WUFDSjtZQUNBUixZQUFZSSxpQkFBQUEsMkJBQUFBLEtBQU1MLFFBQVE7WUFDMUJHLFVBQVVFLGlCQUFBQSw0QkFBQUEsZ0JBQUFBLEtBQU1LLE9BQU8sY0FBYkwsb0NBQUFBLGNBQWVILE1BQU07WUFDL0JOLGNBQWNTLGlCQUFBQSwyQkFBQUEsS0FBTVYsVUFBVTtRQUNsQztRQUNBLElBQUlILFdBQVdFLFVBQVU7WUFDckJVO1FBQ0o7SUFDSixHQUFHO1FBQUNaO1FBQVNFO1FBQVVRO0tBQU87SUFHOUIsU0FBU1MsV0FBV0MsU0FBUztRQUN6QixNQUFNQyxPQUFPLElBQUlDLEtBQUtGO1FBQ3RCLElBQUlHLFFBQVFGLEtBQUtHLFFBQVE7UUFDekIsSUFBSUMsVUFBVUosS0FBS0ssVUFBVTtRQUM3QixNQUFNQyxPQUFPSixTQUFTLEtBQUssT0FBTztRQUNsQ0EsU0FBUztRQUNUQSxRQUFRQSxTQUFTO1FBQ2pCRSxVQUFVQSxVQUFVLEtBQUssTUFBTUEsVUFBVUE7UUFDekMsTUFBTUcsZ0JBQWdCLEdBQVlILE9BQVRGLE9BQU0sS0FBY0ksT0FBWEYsU0FBUSxLQUFRLE9BQUxFO1FBQzdDLE9BQU9DO0lBQ1g7SUFFQSxNQUFNQyxjQUFjO1FBQ2hCLElBQUl2QixZQUFZSSxNQUFNLEVBQUU7WUFDcEIsTUFBTW9CLFdBQVcsTUFBTXpDLGtEQUFVLENBQUMsR0FBa0JXLE9BQWZiLHlEQUFXQSxFQUFDLEtBQVcsT0FBUmEsVUFDaEQ7Z0JBQUVrQixTQUFTWjtnQkFBYUg7WUFBVyxHQUNuQztnQkFDSVksU0FBUztvQkFDTEMsZUFBZSxVQUFzQixPQUFabEIsUUFBUW1CLEdBQUc7Z0JBQ3hDO1lBQ0o7WUFFSk4sVUFBVSxDQUFDRCxTQUFTLEtBQUs7WUFDekJELFlBQVk7bUJBQUlEO2dCQUFVc0IsU0FBU2pCLElBQUksQ0FBQ0ssT0FBTzthQUFDO1lBQ2hEWCxlQUFlO1lBQ2YsSUFBSXVCLFNBQVNFLE1BQU0sS0FBSyxLQUFLLENBQzdCO1FBQ0o7SUFDSjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNYLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDVjFCLFNBQVMyQixHQUFHLENBQUMsQ0FBQ2pCLHdCQUNYLDhEQUFDZTtvQ0FFR0MsV0FBVyxRQUdOLE9BSGNoQixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNrQixRQUFRLE1BQUtsQyxTQUFTbUMsRUFBRSxHQUM5QyxnQkFDQTs4Q0FHTiw0RUFBQ0o7d0NBQ0dDLFdBQVcsMkJBR04sT0FIaUNoQixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNrQixRQUFRLE9BQUtsQyxxQkFBQUEsK0JBQUFBLFNBQVVtQyxFQUFFLElBQ2xFLDRCQUNBLDZCQUNEOzswREFFTCw4REFBQ0M7MERBQUdwQixvQkFBQUEsOEJBQUFBLFFBQVNxQixJQUFJOzs7Ozs7MERBQ2pCLDhEQUFDQztnREFBS04sV0FBVTswREFDWGYsV0FBV0Qsb0JBQUFBLDhCQUFBQSxRQUFTdUIsU0FBUzs7Ozs7OzBEQUVsQyw4REFBQ0Q7MERBQ0l0QixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNrQixRQUFRLE1BQUtsQyxTQUFTbUMsRUFBRSxLQUFJbkIsb0JBQUFBLDhCQUFBQSxRQUFTd0IsTUFBTSxtQkFDakQsOERBQUMvQyx3RkFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBbEJsQnVCLG9CQUFBQSw4QkFBQUEsUUFBU21CLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztrQ0EyQmhDLDhEQUFDSjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNTO2dDQUNHQyxNQUFLO2dDQUNMVixXQUFVO2dDQUNWVyxhQUFZO2dDQUNaQyxNQUFLO2dDQUNMQyxVQUFVLENBQUNDLElBQU16QyxlQUFleUMsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO2dDQUM5Q0EsT0FBTzVDOzs7Ozs7MENBRVgsOERBQUM2QztnQ0FDR1AsTUFBSztnQ0FDTFYsV0FBVTtnQ0FDVmtCLFNBQVN2QjswQ0FFVCw0RUFBQ2pDLGtHQUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUM7R0FqSE1DOztRQUNnQkgsb0RBQVVBO1FBQ2JKLGtEQUFTQTtRQUVESixtRUFBZ0JBOzs7S0FKckNXO0FBbUhOLCtEQUFlQSxnQkFBZ0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZUNvbnRhaW5lci5qc3g/ZTQ2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSAnQC9jb250ZXh0L1N0YXRlQ29udGV4dCc7XHJcbmltcG9ydCB7IEFERF9NRVNTQUdFLCBHRVRfTUVTU0FHRVMgfSBmcm9tICdAL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5pbXBvcnQgeyBCc0NoZWNrQWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xyXG5pbXBvcnQgeyBGYVJlZ1BhcGVyUGxhbmUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG5jb25zdCBNZXNzYWdlQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcygpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IG9yZGVySWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IFt7IHVzZXJJbmZvIH1dID0gdXNlU3RhdGVQcm92aWRlcigpO1xyXG4gICAgY29uc3QgW3JlY2lwZW50SWQsIHNldFJlY2lwZW50SWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IFttZXNzYWdlVGV4dCwgc2V0TWVzc2FnZVRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsZW5ndGgsIHNldExlbmd0aF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtHRVRfTUVTU0FHRVN9LyR7b3JkZXJJZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMuand0fWAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMoZGF0YT8ubWVzc2FnZXMpO1xyXG4gICAgICAgICAgICBzZXRMZW5ndGgoZGF0YT8ubWVzc2FnZT8ubGVuZ3RoKTtcclxuICAgICAgICAgICAgc2V0UmVjaXBlbnRJZChkYXRhPy5yZWNpcGVudElkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChvcmRlcklkICYmIHVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIGdldE1lc3NhZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW29yZGVySWQsIHVzZXJJbmZvLCBsZW5ndGhdKTtcclxuICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZXN0YW1wKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgY29uc3QgYW1wbSA9IGhvdXJzID49IDEyID8gXCJQTVwiIDogXCJBTVwiO1xyXG4gICAgICAgIGhvdXJzICU9IDEyO1xyXG4gICAgICAgIGhvdXJzID0gaG91cnMgfHwgMTI7XHJcbiAgICAgICAgbWludXRlcyA9IG1pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXM7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9ICR7YW1wbX1gO1xyXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4geyAgIFxyXG4gICAgICAgIGlmIChtZXNzYWdlVGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke0FERF9NRVNTQUdFfS8ke29yZGVySWR9YCxcclxuICAgICAgICAgICAgICAgIHsgbWVzc2FnZTogbWVzc2FnZVRleHQsIHJlY2lwZW50SWQgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzLmp3dH1gLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNldExlbmd0aCgobGVuZ3RoICsgMSkgJSAyKTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCByZXNwb25zZS5kYXRhLm1lc3NhZ2VdKTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZVRleHQoXCJcIik7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bODB2aF1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC1bODB2aF0gICBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS04IHB4LTQgc2hhZG93LTJ4bCBzbTpyb3VuZGVkLWxnIHNtOnB4LTEwIHctWzgwdnddIGJvcmRlciBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IGgtWzUwdmhdIG92ZXJmbG93LXktYXV0byBwci00IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttZXNzYWdlPy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCAke21lc3NhZ2U/LnNlbmRlcklkID09PSB1c2VySW5mby5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImp1c3RpZnktZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJqdXN0aWZ5LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5saW5lLWJsb2NrIHJvdW5kZWQtbGcgJHttZXNzYWdlPy5zZW5kZXJJZCA9PT0gdXNlckluZm8/LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJnLVsjMURCRjczXSB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctZ3JheS0xMDAgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBweC00IHB5LTIgbWF4LXcteHMgYnJlYWstYWxsYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21lc3NhZ2U/LnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdFRpbWUobWVzc2FnZT8uY3JlYXRlZEF0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlPy5zZW5kZXJJZCA9PT0gdXNlckluZm8uaWQgJiYgbWVzc2FnZT8uaXNSZWFkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJzQ2hlY2tBbGwgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcHktMiBweC00IG1yLTIgdy1mdWxsIGJvcmRlcjpiZy16aW5jLTYwMCBib3JkZXItNCBiZy1bI2ZmZjRmNF1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGEgbWVzc2FnZS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2VUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzFEQkY3M10gdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgcHgtNCBweS0yIGhvdmVyOmJnLVsjMThhMjYyXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZW5kTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhUmVnUGFwZXJQbGFuZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VDb250YWluZXJcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlUHJvdmlkZXIiLCJBRERfTUVTU0FHRSIsIkdFVF9NRVNTQUdFUyIsImF4aW9zIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvb2tpZXMiLCJCc0NoZWNrQWxsIiwiRmFSZWdQYXBlclBsYW5lIiwiTWVzc2FnZUNvbnRhaW5lciIsImNvb2tpZXMiLCJyb3V0ZXIiLCJvcmRlcklkIiwicXVlcnkiLCJ1c2VySW5mbyIsInJlY2lwZW50SWQiLCJzZXRSZWNpcGVudElkIiwidW5kZWZpbmVkIiwibWVzc2FnZVRleHQiLCJzZXRNZXNzYWdlVGV4dCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJsZW5ndGgiLCJzZXRMZW5ndGgiLCJnZXRNZXNzYWdlcyIsImRhdGEiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImp3dCIsIm1lc3NhZ2UiLCJmb3JtYXRUaW1lIiwidGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJhbXBtIiwiZm9ybWF0dGVkVGltZSIsInNlbmRNZXNzYWdlIiwicmVzcG9uc2UiLCJwb3N0Iiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwic2VuZGVySWQiLCJpZCIsInAiLCJ0ZXh0Iiwic3BhbiIsImNyZWF0ZWRBdCIsImlzUmVhZCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibmFtZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Messages/MessageContainer.jsx\n"));

/***/ })

});