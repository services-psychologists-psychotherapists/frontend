/*! For license information please see components-generic-Button-Button-stories.01f0cf6d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[72],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./src/components/generic/Button/Button.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},Secondary:function(){return Secondary},__namedExportsOrder:function(){return __namedExportsOrder}});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Secondary$parameters,_Secondary$parameters2,_Secondary$parameters3,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Button__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/generic/Button/Button.jsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/components/App/App.css"),__webpack_require__("./src/components/generic/Button/Button.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));__webpack_exports__.default={title:"Button",component:_Button__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["autodocs"],argTypes:{children:{type:"string",name:"label",defaultValue:"Войти"},type:{type:"string",description:"Тип кнопки",defaultValue:"button",options:["button","submit"],control:{type:"radio"}},variant:{type:"string",defaultValue:"primary",options:["primary","secondary"],control:{type:"radio"}},size:{type:"string",defaultValue:"l",options:["l","m"],control:{type:"inline-radio"}}}};var Template=function Btn(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.Z,(0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},args))},Primary=Template.bind({}),Secondary=Template.bind({});Secondary.args={children:"Войти",disabled:!1,type:"button",onClick:function onClick(){return console.log("pressed")},variant:"secondary"},Primary.args={children:"Подобрать психолога",disabled:!1,type:"button",onClick:function onClick(){return console.log("pressed")},variant:"primary"},Primary.parameters=(0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},Primary.parameters),{},{docs:(0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"function Btn(args) {\n  return <Button {...args} />;\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),Secondary.parameters=(0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},Secondary.parameters),{},{docs:(0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_Secondary$parameters=Secondary.parameters)||void 0===_Secondary$parameters?void 0:_Secondary$parameters.docs),{},{source:(0,D_programmer_psyhologists_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"function Btn(args) {\n  return <Button {...args} />;\n}"},null===(_Secondary$parameters2=Secondary.parameters)||void 0===_Secondary$parameters2||null===(_Secondary$parameters3=_Secondary$parameters2.docs)||void 0===_Secondary$parameters3?void 0:_Secondary$parameters3.source)})});var __namedExportsOrder=["Primary","Secondary"]},"./src/components/generic/Button/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Button}});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/generic/Button/Button.css");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){var onClick=_ref.onClick,children=_ref.children,type=_ref.type,disabled=_ref.disabled,variant=_ref.variant,className=_ref.className,size=_ref.size,classes="button button__".concat(variant," button_size_").concat(size," ").concat(className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:classes,onClick:function handlerBtnClick(e){e.preventDefault(),onClick()},type:type,disabled:disabled,size:size,children:children})}Button.defaultProps={disabled:!1,type:"button",variant:"primary",className:"",size:"l"},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},type:{defaultValue:{value:"'button'",computed:!1},description:"",type:{name:"enum",value:[{value:"'button'",computed:!1},{value:"'submit'",computed:!1}]},required:!1},variant:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1}]},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:"'l'",computed:!1},description:"",type:{name:"enum",value:[{value:"'l'",computed:!1},{value:"'m'",computed:!1}]},required:!1},onClick:{description:"",type:{name:"func"},required:!0},children:{description:"",type:{name:"node"},required:!0}}}},"./src/components/App/App.css":function(){},"./src/components/generic/Button/Button.css":function(){},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);