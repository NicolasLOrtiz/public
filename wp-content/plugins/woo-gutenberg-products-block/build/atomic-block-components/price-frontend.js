(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[6],{119:function(e,t){},145:function(e,t,r){"use strict";r.d(t,"c",(function(){return f})),r.d(t,"b",(function(){return y})),r.d(t,"a",(function(){return b}));var c=r(6),n=r.n(c),a=r(23),o=r.n(a),i=r(2);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l,p,m={code:i.CURRENCY.code,symbol:i.CURRENCY.symbol,thousandSeparator:i.CURRENCY.thousandSeparator,decimalSeparator:i.CURRENCY.decimalSeparator,minorUnit:i.CURRENCY.precision,prefix:(l=i.CURRENCY.symbol,p=i.CURRENCY.symbolPosition,{left:l,left_space:" "+l,right:"",right_space:""}[p]||""),suffix:function(e,t){return{left:"",left_space:"",right:e,right_space:" "+e}[t]||""}(i.CURRENCY.symbol,i.CURRENCY.symbolPosition)},f=function(e){if(!e||"object"!==o()(e))return m;var t=e.currency_code,r=e.currency_symbol,c=e.currency_thousand_separator,n=e.currency_decimal_separator,a=e.currency_minor_unit,i=e.currency_prefix,s=e.currency_suffix;return{code:t||"USD",symbol:r||"$",thousandSeparator:"string"==typeof c?c:",",decimalSeparator:"string"==typeof n?n:".",minorUnit:Number.isFinite(a)?a:2,prefix:"string"==typeof i?i:"$",suffix:"string"==typeof s?s:""}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u(u({},m),e)},b=function(e,t){if(""===e||void 0===e)return"";var r=parseInt(e,10);if(!Number.isFinite(r))return"";var c=y(t),n=r/Math.pow(10,c.minorUnit),a=c.prefix+n+c.suffix,o=document.createElement("textarea");return o.innerHTML=a,o.value}},282:function(e,t){},295:function(e,t,r){"use strict";r.r(t);var c=r(6),n=r.n(c),a=(r(4),r(5)),o=r.n(a),i=r(39),s=r(145),u=r(67),l=r(185),p=r(8),m=r(184),f=(r(282),function(e){return e.price_range&&e.price_range.min_amount&&e.price_range.max_amount}),y=function(e){var t,r=e.currency,c=e.minAmount,a=e.maxAmount,s=e.classes,l=e.style,m=Object(u.useInnerBlockLayoutContext)().parentClassName;return React.createElement("span",{className:o()("wc-block-components-product-price__value",(t={},n()(t,"".concat(m,"__product-price__value"),m),n()(t,s,Object(p.E)()),t)),style:Object(p.E)()?l:{}},React.createElement(i.a,{currency:r,value:c})," — ",React.createElement(i.a,{currency:r,value:a}))},b=function(e){var t,r,c=e.currency,a=e.price,s=e.regularPrice,l=e.saleClasses,m=void 0===l?"":l,f=e.saleStyle,y=void 0===f?{}:f,b=e.classes,d=void 0===b?"":b,v=e.style,O=void 0===v?{}:v,_=Object(u.useInnerBlockLayoutContext)().parentClassName;return React.createElement(React.Fragment,null,React.createElement("del",{className:o()("wc-block-components-product-price__regular",(t={},n()(t,"".concat(_,"__product-price__regular"),_),n()(t,d,Object(p.E)()),t)),style:Object(p.E)()?O:{}},React.createElement(i.a,{currency:c,value:s})),React.createElement("span",{className:o()("wc-block-components-product-price__value","is-discounted",(r={},n()(r,"".concat(_,"__product-price__value"),_),n()(r,m,Object(p.E)()),r)),style:Object(p.E)()?y:{}},React.createElement(i.a,{currency:c,value:a})))},d=function(e){var t=e.currency,r=e.price,c=e.classes,a=void 0===c?"":c,s=e.style,l=void 0===s?{}:s,m=Object(u.useInnerBlockLayoutContext)().parentClassName;return React.createElement("span",{className:o()("wc-block-components-product-price__value","".concat(m,"__product-price__value"),n()({},a,Object(p.E)())),style:Object(p.E)()?l:{}},React.createElement(i.a,{currency:t,value:r}))};t.default=Object(m.withProductDataContext)((function(e){var t,r,c,a=e.className,i=e.align,m=e.fontSize,v=e.customFontSize,O=e.saleFontSize,_=e.customSaleFontSize,g=e.color,j=e.customColor,C=e.saleColor,E=e.customSaleColor,R=Object(u.useInnerBlockLayoutContext)().parentClassName,h=Object(u.useProductDataContext)().product,w=Object(l.getColorClassName)("color",g),S=Object(l.getFontSizeClass)(m),N=Object(l.getColorClassName)("color",C),x=Object(l.getFontSizeClass)(O),P=o()((t={"has-text-color":g||j,"has-font-size":m||v},n()(t,w,w),n()(t,S,S),t)),k=o()((r={"has-text-color":C||E,"has-font-size":O||_},n()(r,N,N),n()(r,x,x),r)),U={color:j,fontSize:v},D={color:E,fontSize:_};if(!h.id)return React.createElement("div",{className:o()(a,"price","wc-block-components-product-price",n()({},"".concat(R,"__product-price"),R))});var z=h.prices,F=Object(s.c)(z);return React.createElement("div",{className:o()(a,"price","wc-block-components-product-price",(c={},n()(c,"".concat(R,"__product-price"),R),n()(c,"wc-block-components-product-price--align-".concat(i),i&&Object(p.E)()),c))},f(z)?React.createElement(y,{currency:F,minAmount:z.price_range.min_amount,maxAmount:z.price_range.max_amount,classes:P,style:U}):z.price!==z.regular_price?React.createElement(b,{currency:F,price:z.price,regularPrice:z.regular_price,saleClasses:k,saleStyle:D,classes:P,style:U}):React.createElement(d,{currency:F,price:z.price,classes:P,style:U}))}))},39:function(e,t,r){"use strict";var c=r(11),n=r.n(c),a=r(6),o=r.n(a),i=r(15),s=r.n(i),u=r(98),l=r(5),p=r.n(l);r(119);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.className,r=e.value,c=e.currency,a=e.onValueChange,o=s()(e,["className","value","currency","onValueChange"]);if("-"===r)return null;var i=r/Math.pow(10,c.minorUnit);if(!Number.isFinite(i))return null;var l=p()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),m=f(f(f({displayType:"text"},o),function(e){return{thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0}}(c)),{},{value:void 0,currency:void 0,onValueChange:void 0}),y=a?function(e){var t=e.value*Math.pow(10,c.minorUnit);a(t)}:function(){};return React.createElement(u.a,n()({className:l},m,{value:i,onValueChange:y}))}}}]);