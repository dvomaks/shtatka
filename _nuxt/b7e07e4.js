(window.webpackJsonp=window.webpackJsonp||[]).push([[15,10,12],{881:function(e,n,t){"use strict";t.d(n,"f",(function(){return r})),t.d(n,"c",(function(){return l})),t.d(n,"d",(function(){return c})),t.d(n,"b",(function(){return v})),t.d(n,"g",(function(){return d})),t.d(n,"e",(function(){return f})),t.d(n,"h",(function(){return h})),t.d(n,"a",(function(){return x}));t(7),t(4),t(91);var o=t(238),r=function(e,n){return void 0!==n&&(e=e.filter((function(e){return e.place===n}))),{officers:e.filter((function(e){return"ОФІЦЕРИ"===e["o-sklad"]})).length,sergeants:e.filter((function(e){return"СЕРЖАНТИ"===e["o-sklad"]})).length,soldiers:e.filter((function(e){return"СОЛДАТИ"===e["o-sklad"]})).length}},l=function(e,n,t){return r(e.filter((function(e){return!(n&&e.r.toString()!==n.toString()||t&&e.vzv.toString()!==t.toString())})))},c=function(e){return r(e.filter((function(e){return!e.place})))},v=function(e){return r(e,o.b)},d=function(e){return r(e,o.d)},f=function(e){return r(e,o.f)},h=function(e,n,t){return r(e.filter((function(e){var r=!n||n.toString()===e.r.toString(),l=!t||t.toString()===e.vzv.toString(),c=t?r&&l:r;return e.place===o.e&&c})))},x=function(e,n,t){return r(e.filter((function(e){var r=!n||n.toString()===e.r.toString(),l=!t||t.toString()===e.vzv.toString(),c=t?r&&l:r;return e.place===o.e&&!c})))}},883:function(e,n,t){"use strict";t.r(n);var o=t(183),r=t(306),l=t(90),c=t(239),v={name:"VoinListItem",components:{UnitInfo:t(240).default,MoveUnitDialog:c.default},props:{voin:{type:Object,required:!0},showMoveBtn:{type:Boolean,default:!0}}},d=t(53),component=Object(d.a)(v,(function(){var e=this,n=e._self._c;return n(o.a,[n(l.a,[n(l.b,{domProps:{textContent:e._s(e.voin.pib)}})],1),e._v(" "),e.showMoveBtn?n(r.a,[n("move-unit-dialog",{attrs:{unit:e.voin}})],1):e._e(),e._v(" "),n(r.a,[n("unit-info",{attrs:{unit:e.voin}})],1)],1)}),[],!1,null,"c4a5bcd2",null);n.default=component.exports;installComponents(component,{MoveUnitDialog:t(239).default,UnitInfo:t(240).default})},887:function(e,n,t){"use strict";t.r(n);var o=t(308),r=t(876),l=t(310),c=(t(10),t(8),t(7),t(4),t(12),t(9),t(13),t(1)),v=t(148),d=t(129),f=t(0),h=t(5);function x(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var m=Object(h.a)(Object(v.a)("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(d.b)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(n){Object(c.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(f.s)(this))}}),y=t(126),O=t(214),_=t(24),j=Object(h.a)(O.a,_.a,Object(d.a)("expansionPanel","v-expansion-panel-content","v-expansion-panel")).extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,n){var t=this;e&&(this.isBooted=!0),null==n?this.isActive=e:this.$nextTick((function(){return t.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(y.a,this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(f.s)(n))])]})))}}),w=t(69),k=t(76);function P(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(n){Object(c.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var z=Object(h.a)(_.a,Object(d.a)("expansionPanel","v-expansion-panel-header","v-expansion-panel")).extend().extend({name:"v-expansion-panel-header",directives:{ripple:k.a},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(f.s)(this,"actions")||[this.$createElement(w.a,this.expandIcon)];return this.$createElement(y.c,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:S(S({},this.$listeners),{},{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(f.s)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),A=t(305),B=t(307),D=t(875),C=t(870),I=t(311),T=t(78),V=t(158),$=(t(91),t(31),t(883)),E=t(881),M=t(238),H={name:"VzvodPanel",components:{VoinListItem:$.default},props:{vzvod:{type:Array,required:!0},rotaKey:{type:String,required:!0},vzvodKey:{type:String,required:!0}},computed:{title:function(){return this.vzvod[0].r+" - "+this.vzvod[0].vzv},inListTitle:function(){var e=Object(E.c)(this.vzvod,this.rotaKey.toString(),this.vzvodKey.toString());return"За списком ".concat(e.officers,"-").concat(e.sergeants,"-").concat(e.soldiers)},inStock:function(){return this.vzvod.filter((function(e){return!e.place}))},inStockTitle:function(){var e=Object(E.f)(this.inStock);return"".concat(e.officers,"-").concat(e.sergeants,"-").concat(e.soldiers)},addedFromBatalion:function(){var e=this;return this.vzvod.filter((function(n){return n.place===M.e&&(e.rotaKey.toString()!==n.r.toString()||e.vzvodKey.toString()!==n.vzv.toString())}))},addedFromBatalionTitle:function(){var e=Object(E.f)(this.addedFromBatalion);return"".concat(e.officers,"-").concat(e.sergeants,"-").concat(e.soldiers)},inTotalStockTitle:function(){var e=Object(E.f)(this.inStock),n=Object(E.f)(this.addedFromBatalion),t=e.officers+n.officers,s=e.sergeants+n.sergeants,o=e.soldiers+n.soldiers;return"В наявності ".concat(t,"-").concat(s,"-").concat(o)},inHospital:function(){return this.vzvod.filter((function(e){return e.place===M.b}))},inHospitalTitle:function(){var e=Object(E.f)(this.inHospital);return"В лікарні ".concat(e.officers,"-").concat(e.sergeants,"-").concat(e.soldiers)},inVacation:function(){return this.vzvod.filter((function(e){return e.place===M.f}))},inVacationTitle:function(){var e=Object(E.f)(this.inVacation);return"В відпустці ".concat(e.officers,"-").concat(e.sergeants,"-").concat(e.soldiers)},takenAway:function(){return this.vzvod.filter((function(e){return e.place===M.d}))},takenAwayTitle:function(){var e=Object(E.f)(this.takenAway);return"В відрядженні ".concat(e.officers,"-").concat(e.sergeants,"-").concat(e.soldiers)},takenAwayInBatalion:function(){var e=this;return this.vzvod.filter((function(n){return n.place===M.e&&e.rotaKey.toString()===n.r.toString()&&e.vzvodKey.toString()===n.vzv.toString()}))},takenAwayInBatalionTitle:function(){var e=Object(E.f)(this.takenAwayInBatalion);return"В відряджені в інший взвод ".concat(e.officers,"-").concat(e.sergeants,"-").concat(e.soldiers)}}},K=t(53),component=Object(K.a)(H,(function(){var e=this,n=e._self._c;return n(m,[n(z,[e._v("\n    "+e._s(e.title)+" "),n(C.a),e._v(" "+e._s(e.inTotalStockTitle)+" "),n(C.a),e._v(" "+e._s(e.inListTitle)+"\n  ")],1),e._v(" "),n(j,[n(D.a,[n(r.a,{attrs:{cols:"12",md:"6"}},[n(o.a,{staticClass:"mx-auto",attrs:{"max-width":"500"}},[n(T.a,{attrs:{color:"deep-purple accent-4",dark:""}},[n(V.b,[e._v("\n                "+e._s(e.inTotalStockTitle)+"\n              ")])],1),e._v(" "),n(A.a,{attrs:{subheader:""}},[n(I.a,[e._v("Взвод "+e._s(e.inStockTitle))]),e._v(" "),n(B.a,[e._l(e.inStock,(function(e){return[n("voin-list-item",{attrs:{voin:e}})]}))],2)],1),e._v(" "),n(l.a),e._v(" "),n(A.a,{attrs:{subheader:""}},[n(I.a,[e._v("Приряджені "+e._s(e.addedFromBatalionTitle))]),e._v(" "),n(B.a,[e._l(e.addedFromBatalion,(function(e){return[n("voin-list-item",{attrs:{voin:e,"show-move-btn":!1}})]}))],2)],1)],1)],1),e._v(" "),n(r.a,{attrs:{cols:"12",md:"6"}},[n(D.a,[n(r.a,{attrs:{cols:"12"}},[n(o.a,{staticClass:"mx-auto",attrs:{"max-width":"500"}},[n(T.a,{attrs:{color:"indigo accent-4",dark:""}},[n(V.b,[e._v(e._s(e.takenAwayInBatalionTitle))])],1),e._v(" "),n(A.a,[n(B.a,[e._l(e.takenAwayInBatalion,(function(e){return[n("voin-list-item",{attrs:{voin:e}})]}))],2)],1)],1)],1),e._v(" "),n(r.a,{attrs:{cols:"12"}},[n(o.a,{staticClass:"mx-auto",attrs:{"max-width":"500"}},[n(T.a,{attrs:{color:"indigo accent-4",dark:""}},[n(V.b,[e._v(e._s(e.takenAwayTitle))])],1),e._v(" "),n(A.a,[n(B.a,[e._l(e.takenAway,(function(e){return[n("voin-list-item",{attrs:{voin:e}})]}))],2)],1)],1)],1),e._v(" "),n(r.a,{attrs:{cols:"12"}},[n(o.a,{staticClass:"mx-auto",attrs:{"max-width":"500"}},[n(T.a,{attrs:{color:"indigo accent-4",dark:""}},[n(V.b,[e._v(e._s(e.inVacationTitle))])],1),e._v(" "),n(A.a,[n(B.a,[e._l(e.inVacation,(function(e){return[n("voin-list-item",{attrs:{voin:e}})]}))],2)],1)],1)],1),e._v(" "),n(r.a,{attrs:{cols:"12"}},[n(o.a,{staticClass:"mx-auto",attrs:{"max-width":"500"}},[n(T.a,{attrs:{color:"indigo accent-4",dark:""}},[n(V.b,[e._v(e._s(e.inHospitalTitle))])],1),e._v(" "),n(A.a,[n(B.a,[e._l(e.inHospital,(function(e){return[n("voin-list-item",{attrs:{voin:e}})]}))],2)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"16bdb7c0",null);n.default=component.exports;installComponents(component,{VoinListItem:t(883).default})},893:function(e,n,t){var content=t(894);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(20).default)("48751daa",content,!0,{sourceMap:!1})},894:function(e,n,t){var o=t(19)(!1);o.push([e.i,'.theme--light.v-expansion-panels .v-expansion-panel{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panels .v-expansion-panel--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:rgba(0,0,0,.12)}.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.16}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:before{opacity:.04}.theme--dark.v-expansion-panels .v-expansion-panel{background-color:#1e1e1e;color:#fff}.theme--dark.v-expansion-panels .v-expansion-panel--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.32}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:before{opacity:.08}.v-expansion-panels{border-radius:4px;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;width:100%;z-index:1}.v-expansion-panels>*{cursor:auto}.v-expansion-panels>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.v-expansion-panels>:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active+.v-expansion-panel{border-top-left-radius:4px;border-top-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active .v-expansion-panel-header{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panel{flex:1 0 100%;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel:before{border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:-1;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-expansion-panel:not(:first-child):after{border-top:thin solid;content:"";left:0;position:absolute;right:0;top:0;transition:border-color .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-header{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-header{min-height:64px}.v-expansion-panel--active>.v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon{transform:rotate(-180deg)}.v-expansion-panel-header__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-expansion-panel-header__icon{margin-left:auto}.v-application--is-rtl .v-expansion-panel-header__icon{margin-right:auto}.v-expansion-panel-header{align-items:center;border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;font-size:.9375rem;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;transition:min-height .3s cubic-bezier(.25,.8,.5,1);width:100%}.v-application--is-ltr .v-expansion-panel-header{text-align:left}.v-application--is-rtl .v-expansion-panel-header{text-align:right}.v-expansion-panel-header:not(.v-expansion-panel-header--mousedown):focus:before{opacity:.12}.v-expansion-panel-header:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel-header>:not(.v-expansion-panel-header__icon){flex:1 1 auto}.v-expansion-panel-content{display:flex}.v-expansion-panel-content__wrap{padding:0 24px 16px;flex:1 1 auto;max-width:100%}.v-expansion-panels--accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel:before{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel:before{border-radius:0}',""]),e.exports=o},907:function(e,n,t){"use strict";t.r(n);var o=t(876),r=(t(10),t(8),t(7),t(4),t(12),t(9),t(13),t(1)),l=(t(191),t(192),t(893),t(226)),c=t(11);function v(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var f=l.a.extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return d(d({},l.a.options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(c.a)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"==typeof this.value[0]&&Object(c.a)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),o=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(o)}}}),h=t(875),x=(t(91),t(887)),m=t(75);function y(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var _={name:"InspirePage",components:{VzvodPanel:x.default},computed:O(O({},Object(m.c)({shtat:"localStorage/shtat"})),{},{batalion:function(){return this.fillBatalion(this.shtat)}}),methods:{fillBatalion:function(data){var e={};return data.forEach((function(n){e[n.r]||(e[n.r]=[]),e[n.r][n.vzv]||(e[n.r][n.vzv]=[]),e[n.r][n.vzv]||(e[n.r][n.vzv]=[]),e[n.r][n.vzv].push(n),n.to_rota&&(n.to_rota||e[n.to_rota]||(e[n.to_rota]=[]),e[n.to_rota][n.to_vzvod]||(e[n.to_rota][n.to_vzvod]=[]),e[n.to_rota][n.to_vzvod].push(n))})),e}}},j=t(53),component=Object(j.a)(_,(function(){var e=this,n=e._self._c;return n(h.a,[n(o.a,[n(f,[e._l(e.batalion,(function(t,o){return[e._l(t,(function(e,t){return[n("vzvod-panel",{attrs:{vzvod:e,"rota-key":o.toString(),"vzvod-key":t.toString()}})]}))]}))],2)],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{VzvodPanel:t(887).default})}}]);