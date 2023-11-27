(()=>{var e={426:(e,n,t)=>{"use strict";t.d(n,{Z:()=>l});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"body {\n    background: #F7F8F9;\n    height: 100%;\n    margin: 0;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100vh;\n    color: #344B60;\n}\n\n#header {\n    font-size: 3rem;\n}\n\n#titleContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#btn {\n    font-size: 1rem; \n    height: 2rem; \n    width: 7rem;\n    border: none;\n    border-radius: 5%;\n    color: #F7F8F9;\n    background-color: #B55459;\n}\n\n#btn:hover {\n    cursor: pointer;\n    background-color: #D7C054;\n}\n\n#mainContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 10rem;\n}\n\n.grid {\n    display: grid;\n    gap: .25rem;\n    width: 300px;\n    height: 300px;\n}\n\n.row {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    gap: .25rem;\n}\n\n.cell {\n    display: flex;\n    outline: solid;\n    outline-width: thin;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    width: 2rem;\n\theight: 2rem;\n    color: black;\n}\n\n.cell:hover {\n    color: #A7B7BF;\n    cursor: pointer;\n}\n\n.cell.clicked:hover {\n    color: black;\n}\n\n.cell-s {\n    background: #D7C054;\n}\n\n.cell-m {\n    background: #A7B7BF;\n}\n\n.cell-h {\n    background: #B55459;\n}\n\n#board2 .cell-s {\n    background: none;\n}\n\n.drag-over {\n    background-color: #A7B7BF;\n}\n\n@media only screen and (max-width: 600px) {\n    #content {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    #mainContainer {\n        display: flex;\n        flex-direction: column;\n        text-align: center;\n    }\n}",""]);const l=i},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=t(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var f=o(h,r);r.byIndex=l,n.splice(l,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=t(a[i]);n[l].references--}for(var s=r(e,o),c=0;c<a.length;c++){var d=t(a[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},314:e=>{e.exports=()=>{const e=[],n=[];for(let n=0;n<10;n++){const t=[];for(let e=0;e<10;e++){const r={row:n,col:e,shipInfo:null};t.push(r)}e.push(t)}function t(n,t,r,o){let a=0,i=0,l=[];for(let s=0;s<n.length;s++){for(let n=-1;n<=1;n++)for(let o=-1;o<=1;o++)if(a=Number(t)+n,i=Number(r)+o,a>=0&&a<e.length&&i>=0&&i<e.length&&!l.find((e=>e.row===a&&e.col===i))){if(null!==e[a][i].shipInfo)return{success:!1};l.push({row:a,col:i})}o?r++:t++}return{success:!0,surCells:l}}return{board:e,missedShots:n,placeShip:function(n,r,o,a){const i=t(n,r,o,a),l=Number(o)+Number(n.length-1),s=Number(r)+Number(n.length-1);if(!(a&&l<e.length||!a&&s<e.length)||!i.success)throw new Error("Ship placement is invalid");n.surCells=i.surCells;for(let t=0;t<n.length;t++)a?(e[r][o].shipInfo=n,o++):(e[r][o].shipInfo=n,r++)},receiveAttack:function(t,r){const o=e[t][r];return null!==o.shipInfo?(o.shipInfo.hit(),!0):(n.push({row:t,col:r}),!1)},displayShip:function(e,n,r,o){let a,i=t(e,n,r,o),l=Number(r)+Number(e.length-1),s=Number(n)+Number(e.length-1);if((o&&l<10||!o&&s<10)&&i.success){a=i.surCells;for(let t=0;t<e.length;t++){let e=`${n}-${r}`;document.getElementById("board1-"+e).classList.add("drag-over"),o?r++:n++}return a}throw new Error("Ship placement is invalid to display")},allShipsSunk:function(){for(let n=0;n<10;n++)for(let t=0;t<10;t++)if(null!==e[n][t].shipInfo&&!e[n][t].shipInfo.sunk)return!1;return!0}}}},544:e=>{const n=(e,n)=>{let t="player";return{board:e,name:n,changeTurn:function(){t="player"===t?"AI":"player"},getCurrentTurn:function(){return t}}};e.exports={createPlayer:n,createBot:(e,t)=>{const{changeTurn:r,getCurrentTurn:o}=n(e,t),a=[],i=[],l=()=>Math.floor(10*Math.random());return{board:e,name:t,occupiedSquares:a,prioCells:i,addCell:(e,n)=>{n.push(e)},changeTurn:r,getCurrentTurn:o,randomNumber:l,computerSelection:()=>{let e=i[0];if(console.log(i),0!==i.length)return a.find((e=>e.row===i[0].row&&e.col===i[0].col))?(i.shift(),e=i[0],i.shift(),e):(i.shift(),e);{let e=50;for(;e>0;){let n=l(),t=l();if(!a.find((e=>e.row===n&&e.col===t)))return a.push({row:n,col:t}),{row:n,col:t};e--}return!1}}}}}},576:e=>{e.exports=(e,n=0,t=!1)=>({length:e,hitTimes:n,sunk:t,hit:function(){this.hitTimes++,this.isSunk()},isSunk:function(){this.hitTimes===this.length&&(this.sunk=!0)},surCells:[],changeDir:function(e){console.log("old orientation: "+e),!0===e?(this.isHor=!1,console.log("new orientation: "+e)):(this.isHor=!0,console.log("new orientation: "+e))}})},872:(e,n,t)=>{const r=t(8),{player:o,ai:a}=r();let i,l,s,c="setUp";function d(){let e=document.createElement("div");e.id="mainContainer";let n=document.createElement("div");n.classList.add("boardContainer");let t=u(o.board,"board1");t.id="board1";let r=document.createElement("div");r.classList.add("boardContainer");let i=u(a.board,"board2");i.id="board2";let l=document.createElement("h3");l.textContent="Player Board",n.appendChild(l);let s=document.createElement("h3");s.textContent="AI Board",r.appendChild(s),n.appendChild(t),r.appendChild(i),e.appendChild(n),e.appendChild(r),document.getElementById("content").appendChild(e)}function u(e,n){let t=document.createElement("div");t.classList.add("grid");for(let a=0;a<e.board.length;a++){var r=document.createElement("div");r.classList.add("row"),t.appendChild(r);for(let t=0;t<e.board.length;t++){var o=document.createElement("div");o.classList.add("cell"),null!==e.board[a][t].shipInfo?(o.classList.add("cell-s"),o.draggable=!0,o.addEventListener("dragstart",p),o.isHor=e.board[a][t].shipInfo.isHor):(o.classList.add("cell-n"),o.addEventListener("dragover",h),o.addEventListener("dragleave",f),o.addEventListener("drop",m)),o.id=`${n}-${a}-${t}`,"board2"===n&&o.addEventListener("click",g),r.appendChild(o)}}return t}function p(e){e.dataTransfer.setData("text/plain",e.target.id);const n=e.target.id,[t,r,a]=n.split("-"),c=o.board.board[r][a].shipInfo;i=c,l=r,s=a}function h(e){e.preventDefault(),e.target.classList.add("drag-over");const n=e.dataTransfer.getData("text/plain"),[t,r,a]=n.split("-"),i=o.board.board[r][a].shipInfo,l=e.target.id;let[s,c,d]=l.split("-");o.board.displayShip(i,c,d,i.isHor)}function f(e){e.target.classList.remove("drag-over");const n=e.dataTransfer.getData("text/plain"),[t,r,a]=n.split("-"),i=o.board.board[r][a].shipInfo,l=e.target.id;let[s,c,d]=l.split("-");o.board.displayShip(i,c,d,i.isHor).forEach((e=>{document.getElementById("board1-"+e.row+"-"+e.col).classList.remove("drag-over")}))}function m(e){e.target.classList.remove("drag-over");const n=e.dataTransfer.getData("text/plain"),[t,r,a]=n.split("-"),i=o.board.board[r][a].shipInfo,c=e.target.id,[u,p,h]=c.split("-");try{i.surCells.forEach((e=>{o.board.board[e.row][e.col].shipInfo=null})),o.board.placeShip(i,p,h,i.isHor);const e=document.getElementById("mainContainer");l=p,s=h,e.remove(),d()}catch(e){o.board.placeShip(i,r,a,i.isHor)}}function g(e){const n=e.target,t=n.id,[r,i,l]=t.split("-");if(!n.classList.contains("clicked")){if(a.board.receiveAttack(i,l)){n.classList.remove("cell-s"),n.classList.add("cell-h"),n.innerText="⦿";const e=a.board.board[i][l].shipInfo;e.sunk&&b(e,"board2")}else n.classList.remove("cell-n"),n.innerText="○",n.classList.add("cell-m");n.classList.add("clicked"),function(){const e=a.computerSelection(),{row:n,col:t}=e,r=document.getElementById(`board1-${n}-${t}`),i=o.board.board[n][t].shipInfo;if(e&&o.board.receiveAttack(n,t)){r.classList.remove("cell-s"),r.classList.add("cell-h"),r.innerText="⦿";for(let e=0;e<i.surCells.length;e++)a.addCell(i.surCells[e],a.prioCells);i.sunk&&(a.prioCells.length=0,b(i,"board1"))}else r.classList.remove("cell-n"),r.innerText="○",r.classList.add("cell-m")}(),function(){if(a.board.allShipsSunk())setTimeout((()=>{alert("You Win!")}),1500);else{if(!o.board.allShipsSunk())return;setTimeout((()=>{alert("You Lose!")}),1500)}}()}}function b(e,n){e.surCells.forEach((e=>{const t=document.getElementById(`${n}-${e.row}-${e.col}`);t&&(t.innerText="✘",t.classList.add("clicked"),"board1"===n&&a.addCell({row:e.row,col:e.col},a.occupiedSquares))}))}document.addEventListener("keydown",(function(e){if("r"===e.key)try{i.surCells.forEach((e=>{o.board.board[e.row][e.col].shipInfo=null})),i.changeDir(i.isHor),o.board.placeShip(i,l,s,i.isHor),document.getElementById("mainContainer").remove(),d()}catch(e){o.board.placeShip(i,l,s,!i.isHor)}})),e.exports=function e(){!function(){let n=document.createElement("div");n.id="headerContainer";let t=document.createElement("div");t.id="titleContainer";let r=document.createElement("h1");r.id="header",r.textContent="Battleship";let o=document.createElement("button");o.id="btn",o.innerText="Start Game",o.addEventListener("click",(function(n){n.preventDefault,c="start",document.getElementById("mainContainer").remove(),r.remove(),o.remove(),e()})),t.appendChild(r),t.appendChild(o),n.appendChild(t),document.getElementById("content").appendChild(n)}(),d(),function(){const e=document.getElementById("board1"),n=document.getElementById("board2"),t=document.getElementById("btn"),r=document.getElementById("headerContainer");if("setUp"===c){n.style.pointerEvents="none";let e=document.createElement("h4");e.id="gameInfo",e.innerHTML="Drag and rotate (using 'r' key) ships. Press 'Start' to being. <br>Note: ships cannot be placed within 1 cell of each other",r.appendChild(e)}else e.style.pointerEvents="none",t.parentNode.removeChild(t),gameInfo.remove()}()}},8:(e,n,t)=>{const{createPlayer:r,createBot:o}=t(544),a=t(314),i=t(576),l=()=>{const e=["carrier","battleship","destroyer","submarine","patrolBoat"],n=[];for(let t=0;t<e.length;t++){let r=e[t];r=i(t+1),n.push(r)}return n},s=(e,n)=>{if(0===n.length)return;const t=c(),r=c(),o=Math.random()<.5,a=n[0];try{e.placeShip(a,t,r,o),a.isHor=o,s(e,n.slice(1))}catch(t){s(e,n)}},c=()=>Math.floor(10*Math.random());e.exports=()=>{const e=a(),n=a(),t=l(),i=l(),c=r(e,"player"),d=o(n,"ai");return s(e,i),s(n,t),{player:c,ai:d}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{"use strict";var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),l=t(565),s=t.n(l),c=t(216),d=t.n(c),u=t(589),p=t.n(u),h=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals,t(872)()})()})();