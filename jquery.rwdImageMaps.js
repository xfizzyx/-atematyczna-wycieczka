/*
* rwdImageMaps jQuery plugin v1.6
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2016 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
!function(d){d.fn.rwdImageMaps=function(){function a(o){t.each(function(){var a;void 0!==d(this).attr("usemap")&&(a=d(this),d("<img />").on("load",function(){var n=a.attr("w_width"),i=a.attr("w_height");n&&i||((t=new Image).src=a.attr("src"),n=n||t.width,i=i||t.height);var s=a.width()/100,h=a.height()/100,t=a.attr("usemap").replace("#",""),c="coords";d('map[name="'+t+'"]').find("area").each(function(){var t=d(this);t.data(c)&&0==o||t.data(c,t.attr(c));for(var a=t.data(c).split(","),r=new Array(a.length),e=0;e<r.length;++e)r[e]=e%2==0?parseInt(a[e]/n*100*s):parseInt(a[e]/i*100*h);t.attr(c,r.toString())})}).attr("src",a.attr("src")))})}var t=this;return a(),removeEventListener("resize",t=>{a(0)}),addEventListener("resize",t=>{a(0)}),this}}(jQuery);