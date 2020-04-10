"use strict";
(function () {
  window.addEventListener("load", button);

  function button() {
    art();
    id("promptDemo").addEventListener("click", promptDemo);
  }

  function promptDemo() {
    let name = prompt("Type in your name!");
    alert("Hello " + name + "!");
  }

  function art() {
    id("rect").style.border = "2px solid black";
    id("rect").style.width = "400px";
    id("rect").style.height = "200px";
    id("rect").style.backgroundColor = "red";
    id("rect").style.zIndex = "-1";

    // star
    let ctx = id("star").getContext('2d');
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.moveTo(108, 0.0);
    ctx.lineTo(141, 70);
    ctx.lineTo(218, 78.3);
    ctx.lineTo(162, 131);
    ctx.lineTo(175, 205);
    ctx.lineTo(108, 170);
    ctx.lineTo(41.2, 205);
    ctx.lineTo(55, 131);
    ctx.lineTo(1, 78);
    ctx.lineTo(75, 68);
    ctx.lineTo(108, 0);
    ctx.closePath();
    ctx.fill();
    id("star").style.width = "200px";
    id("star").style.height = "100px";
    id("star").style.margin = "40px 0 0 130px";
  }

  function id(name) {
    return document.getElementById(name);
  }
})();