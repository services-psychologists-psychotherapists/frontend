"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[598],{"./src/components/generic/NavigationLink/NavigationLink.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Link:function(){return Link},NavLink:function(){return NavLink},__namedExportsOrder:function(){return __namedExportsOrder}});var _NavLink$parameters,_NavLink$parameters2,_NavLink$parameters2$,_Link$parameters,_Link$parameters2,_Link$parameters2$doc,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/storybook-addon-react-router-v6/dist/index.mjs")),_NavigationLink__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/components/App/App.css"),__webpack_require__("./src/components/generic/NavigationLink/NavigationLink.jsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Navigation/Navigation Link",component:_NavigationLink__WEBPACK_IMPORTED_MODULE_3__.Z,decorators:[storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_1__.EN],tags:["autodocs"],argTypes:{link:{type:"string"},navLink:{type:"bool",description:"Отключает активное состояние ссылки текущей страницы",defaultValue:!0},text:{name:"label"}}};var Template=function link(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_NavigationLink__WEBPACK_IMPORTED_MODULE_3__.Z,(0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},args))},NavLink=Template.bind({}),Link=Template.bind({});NavLink.args={text:"Каталог психологов",link:"/"},Link.args={text:"Каталог психологов",link:"/",navLink:!1},NavLink.parameters=(0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},NavLink.parameters),{},{docs:(0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_NavLink$parameters=NavLink.parameters)||void 0===_NavLink$parameters?void 0:_NavLink$parameters.docs),{},{source:(0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"function link(args) {\n  return <NavigationLink {...args} />;\n}"},null===(_NavLink$parameters2=NavLink.parameters)||void 0===_NavLink$parameters2||null===(_NavLink$parameters2$=_NavLink$parameters2.docs)||void 0===_NavLink$parameters2$?void 0:_NavLink$parameters2$.source)})}),Link.parameters=(0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},Link.parameters),{},{docs:(0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_Link$parameters=Link.parameters)||void 0===_Link$parameters?void 0:_Link$parameters.docs),{},{source:(0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"function link(args) {\n  return <NavigationLink {...args} />;\n}"},null===(_Link$parameters2=Link.parameters)||void 0===_Link$parameters2||null===(_Link$parameters2$doc=_Link$parameters2.docs)||void 0===_Link$parameters2$doc?void 0:_Link$parameters2$doc.source)})});var __namedExportsOrder=["NavLink","Link"]},"./src/components/generic/NavigationLink/NavigationLink.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return NavigationLink_NavigationLink}});__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function NavigationLink_NavigationLink(_ref){var link=_ref.link,text=_ref.text,Tag=_ref.navLink?dist.OL:dist.rU;return(0,jsx_runtime.jsx)(Tag,{to:link,className:"nav-link",children:text})}NavigationLink_NavigationLink.defaultProps={navLink:!0},NavigationLink_NavigationLink.__docgenInfo={description:"",methods:[],displayName:"NavigationLink",props:{navLink:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},link:{description:"",type:{name:"string"},required:!0},text:{description:"",type:{name:"string"},required:!0}}}},"./src/components/App/App.css":function(){}}]);