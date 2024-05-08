/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["My boss", "My colleague", "My neighbor", "The bird"];
  let action = ["changed", "borrowed", "painted", "stored"];
  let what = ["my pencil", "my sandwich", "the notebook", "the meeting notes"];
  let when = ["yesterday", "this morning", "last week", "during the meeting"];

  let whorandom = Math.floor(Math.random() * who.length);
  let actionrandom = Math.floor(Math.random() * action.length);
  let whatrandom = Math.floor(Math.random() * what.length);
  let whenrandom = Math.floor(Math.random() * when.length);

  let excusewho = who[whorandom];
  let excuseaction = action[actionrandom];
  let excusewhat = what[whatrandom];
  let excusewhen = when[whenrandom];

  let resultado =
    excusewho + " " + excuseaction + " " + excusewhat + " " + excusewhen;
  document.getElementById("excuse").innerHTML = resultado;
};
