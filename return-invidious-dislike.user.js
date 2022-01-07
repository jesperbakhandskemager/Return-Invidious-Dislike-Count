// ==UserScript==
// @name         Return Dislike Count Invidious
// @namespace    https://github.com/jesperbakhandskemager/Return-Invidious-Dislike-Count
// @encoding     utf-8
// @version      0.1
// @description  Return the dislike count to Invidious
// @author       Jesper Bak Handskemager
// @icon         https://www.google.com/s2/favicons?domain=yewtu.be
// @downloadURL  https://raw.githubusercontent.com/jesperbakhandskemager/Return-Invidious-Dislike-Count/master/return-invidious-dislike.user.js
// @updateURL    https://raw.githubusercontent.com/jesperbakhandskemager/Return-Invidious-Dislike-Count/master/return-invidious-dislike.user.js
// @connect      returnyoutubedislikeapi.com
// @include      https://www.returnyoutubedislikeapi.com/*
// @grant        GM.xmlHttpRequest
// @run-at       document-end
// @match        https://invidious.snopyta.org/watch?v=*
// ==/UserScript==


var video_data = JSON.parse(document.getElementById('video_data').innerHTML);

GM.xmlHttpRequest({
  method: "GET",
  url: "https://returnyoutubedislikeapi.com/votes?videoId=" + video_data.id,
  onload: function(response) {
  var data = JSON.parse(response.responseText);
  document.getElementById("dislikes").innerHTML = "<i class='icon ion-ios-thumbs-down'></i> " + data.dislikes.toLocaleString('en-US');
  }
});