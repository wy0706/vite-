const d=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};d();const h="modulepreload",m=function(o){return"/"+o},c={},g=function(r,s,l){return!s||s.length===0?r():Promise.all(s.map(e=>{if(e=m(e),e in c)return;c[e]=!0;const t=e.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":h,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t)return new Promise((u,a)=>{n.addEventListener("load",u),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())},p="/f3f89b12.fullScreen.svg",f=`<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1660369691838" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7114" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css">@font-face { font-family: feedback-iconfont; src: url("//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944") format("woff2"), url("//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944") format("woff"), url("//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944") format("truetype"); }\r
</style></defs><path d="M768 298.656h170.656V384h-256V128H768v170.656zM341.344 384h-256V298.656H256V128h85.344v256zM768 725.344V896h-85.344v-256h256v85.344H768zM341.344 640v256H256v-170.656H85.344V640h256z" p-id="7115"></path></svg>`;console.log("svgIcon",p,f);document.body.innerHTML=f;const v=document.getElementsByTagName("svg")[0];v.onmouseenter=function(){this.style.fill="red"};g(()=>import("./imageLoader.6e13f8ae.js"),[]);console.log("jsonFile",name);fetch("/api/users",{method:"post"}).then(o=>{console.log("data",o)}).catch(o=>{console.log("error",o)});