/*!build time : 2013-09-28 9:06:30 PM*/
KISSY.add("kg/KOrgChart/2.0.0/KAdapter",function(){!function(a,b){var c=KISSY,d=c.Env.host,e=c.now(),f=function(){var a=function(b,c){return new a.fn.init(b,c)};return a.fn=a.prototype={constructor:a,init:function(a){return c.isFunction(a)?(c.ready(a),void 0):c.mix(this,c.isObject(a)?c.one(a):c.all(a))}},a.fn.init.prototype=a.fn,a.fn.kMix=a.kMix=function(a,b){return c.mix(a,b)},a.kMix(a,c),a.fn.extend=a.extend=function(){for(var a={},b=arguments.length,d=0;b>d;d++)c.mix(a,arguments[d]);return a},a.fn.cache=a.cache=function(a,c){var f=this,g=d[f.attr("key")];return"__ks_data_"+e++,g||f.attr("key",e),c===b?a!==b?g&&g[a]:g=f[e]=f[e]||{}:(g=d[e]=d[e]||{},g[a]=c,this)},a.fn.bind=function(a,b){this.on(a,b)},a.fn.is=function(a){return"string"==typeof a?this[0].nodeName.toLowerCase()===a.toLowerCase():!1},a.fn.find=function(a){var b=a.indexOf(":first")>-1?this.first(a.replace(":first","")):a.indexOf(":last")>-1?this.last(a.replace(":last","")):this.all(a);return $(b)},a.fn.nextAll=function(){for(var a=0,b=[],c=this.next();c;)b[a++]=c[0],c=c.next();return $(b)},a}();a.jQuery=a.$=f}(window)},{requires:["node","dom"]});