(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"arguments":[{"subsets":["latin"],"variable":"--font-sora","weight":["100","200","300","400","500","600","700","800"]}],"import":"Sora","path":"components/Layout.jsx","variableName":"sora"}
var Layout_jsx_variableName_sora_ = __webpack_require__(861);
var Layout_jsx_variableName_sora_default = /*#__PURE__*/__webpack_require__.n(Layout_jsx_variableName_sora_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-icons/ri"
const ri_namespaceObject = require("react-icons/ri");
;// CONCATENATED MODULE: ./components/Socials.jsx



const socialData = [
    {
        name: "YouTube",
        link: "https://youtube.com",
        Icon: ri_namespaceObject.RiYoutubeLine
    },
    {
        name: "Instagram",
        link: "https://instagram.com",
        Icon: ri_namespaceObject.RiInstagramLine
    },
    {
        name: "Facebook",
        link: "https://facebook.com",
        Icon: ri_namespaceObject.RiFacebookLine
    },
    {
        name: "Dribbble",
        link: "https://dribbble.com",
        Icon: ri_namespaceObject.RiDribbbleLine
    },
    {
        name: "Pinterest",
        link: "https://pinterest.com",
        Icon: ri_namespaceObject.RiPinterestLine
    },
    {
        name: "Github",
        link: "https://github.com/sanidhyy/modern-portfolio",
        Icon: ri_namespaceObject.RiGithubLine
    }
];
const Socials = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "flex items-center gap-x-5 text-lg",
        children: socialData.map((social, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                title: social.name,
                href: social.link,
                target: "_blank",
                rel: "noreferrer noopener",
                className: `${social.name === "Github" ? "bg-accent rounded-full p-[5px] hover:text-white" : "hover:text-accent"} transition-all duration-300`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(social.Icon, {
                        "aria-hidden": true
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "sr-only",
                        children: social.name
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const components_Socials = (Socials);

;// CONCATENATED MODULE: ./components/Header.jsx




const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        className: "absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container mx-auto",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: "/logo.png",
                            alt: "logo",
                            width: 220,
                            height: 48,
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(components_Socials, {})
                ]
            })
        })
    });
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9332);
// EXTERNAL MODULE: external "react-icons/hi2"
var hi2_ = __webpack_require__(5774);
;// CONCATENATED MODULE: ./components/Nav.jsx



// icons

// nav data
const navData = [
    {
        name: "home",
        path: "/",
        Icon: hi2_.HiHome
    },
    {
        name: "about",
        path: "/about",
        Icon: hi2_.HiUser
    },
    {
        name: "services",
        path: "/services",
        Icon: hi2_.HiRectangleGroup
    },
    {
        name: "work",
        path: "/work",
        Icon: hi2_.HiViewColumns
    },
    {
        name: "testimonials",
        path: "/testimonials",
        Icon: hi2_.HiChatBubbleBottomCenterText
    },
    {
        name: "contact",
        path: "/contact",
        Icon: hi2_.HiEnvelope
    }
];
const Nav = ()=>{
    const pathname = (0,navigation.usePathname)();
    return /*#__PURE__*/ jsx_runtime.jsx("nav", {
        className: "flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full",
            children: navData.map((link, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                    className: `${link.path === pathname && "text-accent"} relative flex items-center group hover:text-accent transition-all duration-300`,
                    href: link.path,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            role: "tooltip",
                            className: "absolute pr-14 right-0 hidden xl:group-hover:flex",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-white relative flex text-primary items-center p-[6px] rounded-[3px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "text-[12px] leading-none font-semibold capitalize",
                                        children: link.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2",
                                        "aria-hidden": true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime.jsx(link.Icon, {
                                "aria-hidden": true
                            })
                        })
                    ]
                }, i))
        })
    });
};
/* harmony default export */ const components_Nav = (Nav);

;// CONCATENATED MODULE: ./components/TopLeftImg.jsx


const TopLeftImg = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50 pointer-events-none select-none",
        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
            src: "/top-left-img.png",
            alt: "left cover bg",
            width: 400,
            height: 400
        })
    });
};
/* harmony default export */ const components_TopLeftImg = (TopLeftImg);

;// CONCATENATED MODULE: ./components/Layout.jsx






const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        className: `page bg-site text-white bg-cover bg-no-repeat ${(Layout_jsx_variableName_sora_default()).variable} font-sora relative`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Terabyte Innovations"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Terabyte Innovations - Unleashing Digital Possibilities"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "keywords",
                        content: "react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "author",
                        content: "Nitesh Kumar Chaurasiya"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "theme-color",
                        content: "#f13024"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(components_TopLeftImg, {}),
            /*#__PURE__*/ jsx_runtime.jsx(components_Nav, {}),
            /*#__PURE__*/ jsx_runtime.jsx(components_Header, {}),
            children
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 140:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Transition = ()=>{
    const transitionVariants = {
        initial: {
            x: "100%",
            width: "100%"
        },
        animate: {
            x: "0%",
            width: "0%"
        },
        exit: {
            x: [
                "0%",
                "100%"
            ],
            width: [
                "0%",
                "100%"
            ]
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                role: "status",
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]",
                variants: transitionVariants,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: {
                    delay: 0.2,
                    duration: 0.6,
                    ease: "easeInOut"
                },
                "aria-hidden": true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                role: "status",
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]",
                variants: transitionVariants,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: {
                    delay: 0.4,
                    duration: 0.6,
                    ease: "easeInOut"
                },
                "aria-hidden": true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                role: "status",
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]",
                variants: transitionVariants,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: {
                    delay: 0.6,
                    duration: 0.6,
                    ease: "easeInOut"
                },
                "aria-hidden": true
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transition);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2105);
/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(140);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_Transition__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_Transition__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function MyApp({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
            mode: "wait",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                className: "h-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                ]
            }, router.route)
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 9274:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5774:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/hi2");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,795,664,607], () => (__webpack_exec__(5879)));
module.exports = __webpack_exports__;

})();