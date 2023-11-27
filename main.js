(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"body {\n    background: #F7F8F9;\n    height: 100%;\n    margin: 0;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    color: #344B60;\n}\n\n#header {\n    font-size: 2rem;\n    gap: 1rem;\n}\n\n#titleContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#btn {\n    font-size: 1rem; \n    height: 2rem; \n    width: 7rem;\n    border: none;\n    border-radius: 5%;\n    color: #F7F8F9;\n    background-color: #B55459;\n}\n\n#btn:hover {\n    cursor: pointer;\n    background-color: #D7C054;\n}\n\n#mainContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 10rem;\n}\n\n.grid {\n    display: grid;\n    gap: .25rem;\n    width: 300px;\n    height: 300px;\n}\n\n.row {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    gap: .25rem;\n}\n\n.cell {\n    display: flex;\n    outline: solid;\n    outline-width: thin;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    width: 2rem;\n\theight: 2rem;\n    color: black;\n}\n\n.cell:hover {\n    color: #A7B7BF;\n    cursor: pointer;\n}\n\n.cell.clicked:hover {\n    color: black;\n}\n\n.cell-s {\n    background: #D7C054;\n}\n\n.cell-m {\n    background: #A7B7BF;\n}\n\n.cell-h {\n    background: #B55459;\n}\n\n#board2 .cell-s {\n    background: none;\n}\n\n.drag-over {\n    background-color: #A7B7BF;\n}",""]);const l=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=n(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,r);r.byIndex=l,t.splice(l,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=n(a[i]);t[l].references--}for(var s=r(e,o),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},314:e=>{e.exports=()=>{const e=[],t=[];for(let t=0;t<10;t++){const n=[];for(let e=0;e<10;e++){const r={row:t,col:e,shipInfo:null};n.push(r)}e.push(n)}function n(t,n,r,o){let a=0,i=0,l=[];for(let s=0;s<t.length;s++){for(let t=-1;t<=1;t++)for(let o=-1;o<=1;o++)if(a=Number(n)+t,i=Number(r)+o,a>=0&&a<e.length&&i>=0&&i<e.length&&!l.find((e=>e.row===a&&e.col===i))){if(null!==e[a][i].shipInfo)return{success:!1};l.push({row:a,col:i})}o?r++:n++}return{success:!0,surCells:l}}return{board:e,missedShots:t,placeShip:function(t,r,o,a){const i=n(t,r,o,a),l=Number(o)+Number(t.length-1),s=Number(r)+Number(t.length-1);if(!(a&&l<e.length||!a&&s<e.length)||!i.success)throw new Error("Ship placement is invalid");t.surCells=i.surCells;for(let n=0;n<t.length;n++)a?(e[r][o].shipInfo=t,o++):(e[r][o].shipInfo=t,r++)},receiveAttack:function(n,r){const o=e[n][r];return null!==o.shipInfo?(o.shipInfo.hit(),!0):(t.push({row:n,col:r}),!1)},displayShip:function(e,t,r,o){let a,i=n(e,t,r,o),l=Number(r)+Number(e.length-1),s=Number(t)+Number(e.length-1);if((o&&l<10||!o&&s<10)&&i.success){a=i.surCells;for(let n=0;n<e.length;n++){let e=`${t}-${r}`;document.getElementById("board1-"+e).classList.add("drag-over"),o?r++:t++}return a}throw new Error("Ship placement is invalid to display")},allShipsSunk:function(){for(let t=0;t<10;t++)for(let n=0;n<10;n++)if(null!==e[t][n].shipInfo&&!e[t][n].shipInfo.sunk)return!1;return!0}}}},544:e=>{const t=(e,t)=>{let n="player";return{board:e,name:t,changeTurn:function(){n="player"===n?"AI":"player"},getCurrentTurn:function(){return n}}};e.exports={createPlayer:t,createBot:(e,n)=>{const{changeTurn:r,getCurrentTurn:o}=t(e,n),a=[],i=[],l=()=>Math.floor(10*Math.random());return{board:e,name:n,occupiedSquares:a,prioCells:i,addCell:(e,t)=>{t.push(e)},changeTurn:r,getCurrentTurn:o,randomNumber:l,computerSelection:()=>{let e=i[0];if(console.log(i),0!==i.length)return a.find((e=>e.row===i[0].row&&e.col===i[0].col))?(i.shift(),e=i[0],i.shift(),e):(i.shift(),e);{let e=50;for(;e>0;){let t=l(),n=l();if(!a.find((e=>e.row===t&&e.col===n)))return a.push({row:t,col:n}),{row:t,col:n};e--}return!1}}}}}},576:e=>{e.exports=(e,t=0,n=!1)=>({length:e,hitTimes:t,sunk:n,hit:function(){this.hitTimes++,this.isSunk()},isSunk:function(){this.hitTimes===this.length&&(this.sunk=!0)},surCells:[],changeDir:function(e){console.log("old orientation: "+e),!0===e?(this.isHor=!1,console.log("new orientation: "+e)):(this.isHor=!0,console.log("new orientation: "+e))}})},872:(e,t,n)=>{const r=n(8),{player:o,ai:a}=r();let i,l,s,c="setUp";function d(){let e=document.createElement("div");e.id="mainContainer";let t=document.createElement("div");t.classList.add("boardContainer");let n=u(o.board,"board1");n.id="board1";let r=document.createElement("div");r.classList.add("boardContainer");let i=u(a.board,"board2");i.id="board2";let l=document.createElement("h3");l.textContent="Player Board",t.appendChild(l);let s=document.createElement("h3");s.textContent="AI Board",r.appendChild(s),t.appendChild(n),r.appendChild(i),e.appendChild(t),e.appendChild(r),document.getElementById("content").appendChild(e)}function u(e,t){let n=document.createElement("div");n.classList.add("grid");for(let a=0;a<e.board.length;a++){var r=document.createElement("div");r.classList.add("row"),n.appendChild(r);for(let n=0;n<e.board.length;n++){var o=document.createElement("div");o.classList.add("cell"),null!==e.board[a][n].shipInfo?(o.classList.add("cell-s"),o.draggable=!0,o.addEventListener("dragstart",p),o.isHor=e.board[a][n].shipInfo.isHor):(o.classList.add("cell-n"),o.addEventListener("dragover",h),o.addEventListener("dragleave",f),o.addEventListener("drop",m)),o.id=`${t}-${a}-${n}`,"board2"===t&&o.addEventListener("click",g),r.appendChild(o)}}return n}function p(e){e.dataTransfer.setData("text/plain",e.target.id);const t=e.target.id,[n,r,a]=t.split("-"),c=o.board.board[r][a].shipInfo;i=c,l=r,s=a}function h(e){e.preventDefault(),e.target.classList.add("drag-over");const t=e.dataTransfer.getData("text/plain"),[n,r,a]=t.split("-"),i=o.board.board[r][a].shipInfo,l=e.target.id;let[s,c,d]=l.split("-");o.board.displayShip(i,c,d,i.isHor)}function f(e){e.target.classList.remove("drag-over");const t=e.dataTransfer.getData("text/plain"),[n,r,a]=t.split("-"),i=o.board.board[r][a].shipInfo,l=e.target.id;let[s,c,d]=l.split("-");o.board.displayShip(i,c,d,i.isHor).forEach((e=>{document.getElementById("board1-"+e.row+"-"+e.col).classList.remove("drag-over")}))}function m(e){e.target.classList.remove("drag-over");const t=e.dataTransfer.getData("text/plain"),[n,r,a]=t.split("-"),i=o.board.board[r][a].shipInfo,c=e.target.id,[u,p,h]=c.split("-");try{i.surCells.forEach((e=>{o.board.board[e.row][e.col].shipInfo=null})),o.board.placeShip(i,p,h,i.isHor),console.log("final dir: "+i.isHor);const e=document.getElementById("mainContainer");l=p,s=h,e.remove(),d()}catch(e){console.log("caught error, doing old ship placement"),o.board.placeShip(i,r,a,i.isHor)}}function g(e){const t=e.target,n=t.id,[r,i,l]=n.split("-");if(!t.classList.contains("clicked")){if(a.board.receiveAttack(i,l)){t.classList.remove("cell-s"),t.classList.add("cell-h"),t.innerText="⦿";const e=a.board.board[i][l].shipInfo;e.sunk&&b(e,"board2")}else t.classList.remove("cell-n"),t.innerText="○",t.classList.add("cell-m");t.classList.add("clicked"),function(){const e=a.computerSelection(),{row:t,col:n}=e,r=document.getElementById(`board1-${t}-${n}`),i=o.board.board[t][n].shipInfo;if(e&&o.board.receiveAttack(t,n)){r.classList.remove("cell-s"),r.classList.add("cell-h"),r.innerText="⦿";for(let e=0;e<i.surCells.length;e++)a.addCell(i.surCells[e],a.prioCells);i.sunk&&(a.prioCells.length=0,b(i,"board1"))}else r.classList.remove("cell-n"),r.innerText="○",r.classList.add("cell-m")}(),function(){if(a.board.allShipsSunk())setTimeout((()=>{alert("You Win!")}),1500);else{if(!o.board.allShipsSunk())return;setTimeout((()=>{alert("You Lose!")}),1500)}}()}}function b(e,t){e.surCells.forEach((e=>{const n=document.getElementById(`${t}-${e.row}-${e.col}`);n&&(n.innerText="✘",n.classList.add("clicked"),"board1"===t&&a.addCell({row:e.row,col:e.col},a.occupiedSquares))}))}document.addEventListener("keydown",(function(e){if("r"===e.key)try{i.surCells.forEach((e=>{o.board.board[e.row][e.col].shipInfo=null})),i.changeDir(i.isHor),o.board.placeShip(i,l,s,i.isHor),document.getElementById("mainContainer").remove(),d()}catch(e){console.log("Caught error for ship rotation"),o.board.placeShip(i,l,s,!i.isHor)}})),e.exports=function e(){!function(){let t=document.createElement("div");t.id="headerContainer";let n=document.createElement("div");n.id="titleContainer";let r=document.createElement("h1");r.id="header",r.textContent="Battleship";let o=document.createElement("button");o.id="btn",o.innerText="Start Game",o.addEventListener("click",(function(t){t.preventDefault,c="start",console.log(c),document.getElementById("mainContainer").remove(),r.remove(),o.remove(),e()})),n.appendChild(r),n.appendChild(o),t.appendChild(n),document.getElementById("content").appendChild(t)}(),d(),function(){const e=document.getElementById("board1"),t=document.getElementById("board2"),n=document.getElementById("btn"),r=document.getElementById("headerContainer");if("setUp"===c){t.style.pointerEvents="none";let e=document.createElement("h4");e.id="gameInfo",e.innerHTML="Drag and rotate (using 'r' key) ships. Press 'Start' to being. <br>Note: ships cannot be placed within 1 cell of each other",r.appendChild(e)}else e.style.pointerEvents="none",n.parentNode.removeChild(n),gameInfo.remove()}()}},8:(e,t,n)=>{const{createPlayer:r,createBot:o}=n(544),a=n(314),i=n(576),l=()=>{const e=["carrier","battleship","destroyer","submarine","patrolBoat"],t=[];for(let n=0;n<e.length;n++){let r=e[n];r=i(n+1),t.push(r)}return t},s=(e,t)=>{if(0===t.length)return;const n=c(),r=c(),o=Math.random()<.5,a=t[0];try{e.placeShip(a,n,r,o),a.isHor=o,s(e,t.slice(1))}catch(n){s(e,t)}},c=()=>Math.floor(10*Math.random());e.exports=()=>{const e=a(),t=a(),n=l(),i=l(),c=r(e,"player"),d=o(t,"ai");return s(e,i),s(t,n),{player:c,ai:d}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),l=n(565),s=n.n(l),c=n(216),d=n.n(c),u=n(589),p=n.n(u),h=n(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals,n(872)()})()})();