//Copyright 2012, etc.

/**
 * almond 0.1.2 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

(function(e,t){typeof define=="function"&&define.amd?define(["jquery","underscore"],t):e.ToH=t(e.$,e._)})(this,function(e,t){var n,r,s;return function(e){function c(e,t){var n=t&&t.split("/"),r=o.map,i=r&&r["*"]||{},s,u,a,f,l,c,h,p,d,v;if(e&&e.charAt(0)==="."&&t){n=n.slice(0,n.length-1),e=n.concat(e.split("/"));for(p=0;v=e[p];p++)if(v===".")e.splice(p,1),p-=1;else if(v===".."){if(p===1&&(e[2]===".."||e[0]===".."))return!0;p>0&&(e.splice(p-1,2),p-=2)}e=e.join("/")}if((n||i)&&r){s=e.split("/");for(p=s.length;p>0;p-=1){u=s.slice(0,p).join("/");if(n)for(d=n.length;d>0;d-=1){a=r[n.slice(0,d).join("/")];if(a){a=a[u];if(a){f=a,l=p;break}}}if(f)break;!c&&i&&i[u]&&(c=i[u],h=p)}!f&&c&&(f=c,l=h),f&&(s.splice(0,l,f),e=s.join("/"))}return e}function h(t,n){return function(){return l.apply(e,a.call(arguments,0).concat([t,n]))}}function p(e){return function(t){return c(t,e)}}function d(e){return function(n){t[e]=n}}function v(n){if(i.hasOwnProperty(n)){var r=i[n];delete i[n],u[n]=!0,f.apply(e,r)}if(!t.hasOwnProperty(n))throw new Error("No "+n);return t[n]}function m(e,t){var n,r,i=e.indexOf("!");return i!==-1?(n=c(e.slice(0,i),t),e=e.slice(i+1),r=v(n),r&&r.normalize?e=r.normalize(e,p(t)):e=c(e,t)):e=c(e,t),{f:n?n+"!"+e:e,n:e,p:r}}function g(e){return function(){return o&&o.config&&o.config[e]||{}}}var t={},i={},o={},u={},a=[].slice,f,l;f=function(n,r,s,o){var a=[],f,l,c,p,y,b;o=o||n;if(typeof s=="function"){r=!r.length&&s.length?["require","exports","module"]:r;for(b=0;b<r.length;b++){y=m(r[b],o),c=y.f;if(c==="require")a[b]=h(n);else if(c==="exports")a[b]=t[n]={},f=!0;else if(c==="module")l=a[b]={id:n,uri:"",exports:t[n],config:g(n)};else if(t.hasOwnProperty(c)||i.hasOwnProperty(c))a[b]=v(c);else if(y.p)y.p.load(y.n,h(o,!0),d(c),{}),a[b]=t[c];else if(!u[c])throw new Error(n+" missing "+c)}p=s.apply(t[n],a);if(n)if(l&&l.exports!==e&&l.exports!==t[n])t[n]=l.exports;else if(p!==e||!f)t[n]=p}else n&&(t[n]=s)},n=r=l=function(t,n,r,i){return typeof t=="string"?v(m(t,n).f):(t.splice||(o=t,n.splice?(t=n,n=r,r=null):t=e),n=n||function(){},i?f(e,t,n,r):setTimeout(function(){f(e,t,n,r)},15),l)},l.config=function(e){return o=e,l},s=function(e,t,n){t.splice||(n=t,t=[]),i[e]=[e,t,n]},s.amd={jQuery:!0}}(),s("../tools/almond",function(){}),s("tower-of-hanoi/toh-core",[],function(){var e=function(t,n,r,i){if(t==0)return;e.call(this,t-1,n,i,r),this.moveList.push([n,r]),e.call(this,t-1,i,r,n)};return function(t,n,r,i){if(!t)throw"number of disk must be provided.";n=n||0,r=r||2,i=i||1,this.moveList=[],this.solve=function(){return e.call(this,t,n,r,i),this.moveList}}}),s("tower-of-hanoi/peg",["jquery"],function(e){var t=function(e,t){this.id=e,t=t||{},this.width=t.width||10,this.height=t.height||200,this.color=t.color||"gray",this.sideMargin=t.sideMargin||this.height,this.topMargin=t.topMargin||this.height,this.disks=[]};return t.prototype.add=function(e){this.disks.push(e)},t.prototype.remove=function(){return this.disks.pop()},t.prototype.render=function(){var t=document.createElement("div");return t.setAttribute("class","peg"),this.$el=e(t),this.$el.width(this.width).height(this.height).css("display","inline-block").css("background-color",this.color).css("margin",this.topMargin+"px "+this.sideMargin+"px 0 "+this.sideMargin+"px"),this},t}),s("tower-of-hanoi/disk",["jquery"],function(e){var t=function(e,t){t=t||{},this.id=e,this.color=t.color||"lightblue",this.width=t.width||200,this.height=t.height||10,this.text=t.text||"",this.containerHeight=t.containerHeight,this.pegShift=t.pegShift,this.left=0,this.top=0};return t.prototype.render=function(){var t=document.createElement("div");return t.setAttribute("class","disk"),this.$el=e(t),this.$el.text(this.text).height(this.height).width(this.width).css("background-color",this.color).css("position","absolute").css({top:this.top,left:this.left}).css("position","absolute").css("z-index",1).css("text-align","center").css("font-weight","bold").css("border-radius","10px"),this},t.prototype.put=function(e){this.top=this.containerHeight-(e.disks.length+1)*this.height,this.left=this.pegShift*(e.id*2+1)-this.width/2,e.add(this),this.$el&&this.$el.css({top:this.top,left:this.left})},t.prototype.move=function(e,t){this.top=this.containerHeight-(e.disks.length+1)*this.height,this.left=this.pegShift*(e.id*2+1)-this.width/2,e.add(this),this.$el.animate({top:e.topMargin-this.height*1.5+"px"},"slow").animate({left:this.left+"px"},"slow").animate({top:this.top+"px"},"slow",t)},t}),s("tower-of-hanoi/toh-ui",["jquery","./peg","./disk"],function(e,t,n){var r=function(e){return Object.prototype.toString.call(e)==="[object Array]"?!0:!1},s=function(e,t){while(e.length<t)e=e.concat(e);return e.slice(0,t)},o=function(e){e=e||{};var n=e.disk||{};this.diskCount=n.count||3,this.processDiskColor(n.color),this.processDiskText(n.text),this.diskMaxWidth=n.maxWidth||200,this.diskMinWidth=n.minWidth||100,this.diskHeight=n.height||20;var r=e.peg||{};this.pegWidth=r.width||10,this.pegHeight=r.height||Math.min(this.diskCount*this.diskHeight*1.5,(this.diskCount+3)*this.diskHeight),this.containerWidth=(this.diskMaxWidth+this.pegWidth)*3,this.containerHeight=this.pegHeight*1.5+this.diskHeight*1.5,r={height:this.pegHeight,width:this.pegWidth,sideMargin:this.diskMaxWidth/2,topMargin:this.containerHeight-this.pegHeight},this.pegs=[new t(0,r),new t(1,r),new t(2,r)]};return o.prototype.processDiskText=function(e){var t=["",""];r(e)&&e.length>0?this.diskText=s(e,this.diskCount):e?this.diskText=s([e],this.diskCount):this.diskText=s(t,this.diskCount)},o.prototype.processDiskColor=function(e){var t=["#CC3300","#CC9933","#CC6633","#999933","#9966FF","#00CCFF"];r(e)&&e.length>0?this.diskColor=s(e,this.diskCount):this.diskColor=s(t,this.diskCount)},o.prototype.render=function(t){if(t)this.$container=e(t);else if(!this.$container){var r=document.createElement("div");r.setAttribute("class","toh-container"),this.$container=e(r),e("body").append(this.$container)}this.$container.width(this.containerWidth).height(this.containerHeight).css("background-color","rgba(216, 216, 216, 0.52)").css("position","relative"),this.$container.append(this.pegs[0].render().$el).append(this.pegs[1].render().$el).append(this.pegs[2].render().$el);var s=[];for(i=0;i<this.diskCount;i++){var o=new n(i,{color:this.diskColor[i],width:this.diskMaxWidth-(this.diskMaxWidth-this.diskMinWidth)/this.diskCount*(i+1),height:this.diskHeight,text:this.diskText[i],containerHeight:this.containerHeight,pegShift:(this.diskMaxWidth+this.pegWidth)/2});o.put(this.pegs[0]),this.$container.append(o.render().$el),s.push(o)}},o.prototype.moveDisk=function(e,t,n){this.pegs[e].remove().move(this.pegs[t],n)},o.prototype.runMoves=function(e,t){var n=function(){var r=e.shift();r?this.moveDisk(r[0],r[1],n.bind(this)):t&&t()};n.call(this)},o}),s("tower-of-hanoi/toh",["underscore","jquery","./toh-core","./toh-ui"],function(e,t,n,r){var i=function(e){e=e||{},e.disk=e.disk||{},this.diskCount=e.disk.count=e.disk.count||3,this.core=new n(this.diskCount),this.ui=new r(e),this.moves=this.core.solve(),this.currMoveIndex=0,this.running=!1};return i.prototype.render=function(e){this.ui.render(e)},i.prototype.next=function(e){if(this.running)throw"next() can't be called while disk is moving";if(this.currMoveIndex==this.moves.length-1)throw"no move left to complete";this.running=!0;var n=this.currMoveIndex;t(this).trigger("start",[n]),this.ui.moveDisk(this.moves[n][0],this.moves[n][1],function(){this.running=!1,t(this).trigger("stop",[n]),e&&e()}.bind(this)),this.currMoveIndex++},i.prototype.prev=function(e){if(this.running)throw"prev() can't be called while disk is moving";if(this.currMoveIndex==0)throw"move not started to rewind";this.running=!0;var n=this.currMoveIndex,r=this.moves[n-1];t(this).trigger("start",[n*-1]),this.ui.moveDisk(r[1],r[0],function(){this.running=!1,t(this).trigger("stop",[n*-1]),e&&e()}.bind(this)),this.currMoveIndex--},i.prototype.runAll=function(e){if(this.running)throw"next() can't be called while disk is moving";if(this.currMoveIndex==this.moves.length-1)throw"no move left to complete";this.running=!0;var n=this.currMoveIndex,r=this.moves.slice(n),i=function(){var s=r.shift();s&&this.running?(this.currMoveIndex++,this.ui.moveDisk(s[0],s[1],i.bind(this))):(this.running=!1,t(this).trigger("stop",[n]),e&&e())};t(this).trigger("start",[n]),i.call(this)},i.prototype.runAllBackward=function(e){if(this.running)throw"runAllBackward() can't be called while disk is moving";if(this.currMoveIndex==0)throw"move not started to rewind";this.running=!0;var n=this.currMoveIndex,r=this.moves.slice(0,n),i=function(){var s=r.pop();s&&this.running?(this.currMoveIndex--,this.ui.moveDisk(s[1],s[0],i.bind(this))):(this.running=!1,t(this).trigger("stop",[n]),e&&e())};t(this).trigger("start",[n]),i.call(this)},i.prototype.pause=function(){if(!this.running)throw"no move is running";this.running=!1},i.prototype.getSolution=function(){return this.moves},i.prototype.getProgress=function(){return this.currMoveIndex},i.prototype.version=function(){return"1.0.0, jQuery version is: "+t.fn.jquery},i}),s("tower-of-hanoi",["require","tower-of-hanoi/toh"],function(e){var t=e("tower-of-hanoi/toh");return t}),s("jquery",function(){return e}),s("underscore",function(){return t}),r("tower-of-hanoi")});