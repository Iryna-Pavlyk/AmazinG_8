import{A,S as p,N as f,K as y,M as q}from"./assets/vendor-2e5c0932.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{b(".accordion-container"),b(".accordion-container-about")});function b(e){document.querySelectorAll(`${e} .ac`).forEach(o=>I(o)),new A(e,{duration:400,showMultiple:!0,onOpen:o=>{h(o),L(o,!0)},onClose:o=>{h(o),L(o,!1)}})}function I(e){const t=e.querySelector(".arrow-down"),o=e.querySelector(".arrow-up");t.style.display="block",o.style.display="none"}function h(e){const t=e.querySelector(".arrow-down"),o=e.querySelector(".arrow-up");t.style.display=t.style.display==="none"?"block":"none",o.style.display=o.style.display==="none"?"block":"none"}function L(e,t){e.querySelector(".ac-trigger").setAttribute("aria-expanded",t)}const a=document.querySelector(".header__backdrop"),P=document.querySelector(".header__menu-btn"),O=document.querySelector(".header__menu-close-btn");P.addEventListener("click",()=>{window.innerWidth<768?a.classList.remove("visually-hidden"):a.classList.toggle("visually-hidden")});O.addEventListener("click",()=>{a.classList.add("visually-hidden")});a.addEventListener("click",e=>{if(e.target.classList.contains("header__nav-link"))a.classList.add("visually-hidden");else return});new p(".swiper-container",{modules:[f,y],slidesPerView:4,allowTouchMove:!0,slideToClickedSlide:!0,spaceBetween:16,grabCursor:!0,keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}});new p(".projectsSwiper",{modules:[f,y],slidesPerView:"auto",loop:!0,keyboard:{enabled:!0},spaceBetween:500,grabCursor:!0,navigation:{nextEl:".swiper-button-next1",prevEl:".swiper-button-prev1"}});new p(".about-swiper-container",{loop:!0,setWrapperSize:!0,modules:[f,y,q],spaceBetween:0,simulateTouch:!0,grabCursor:!0,slideActiveClass:"about-slide-active",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});async function x(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(e.statusText||e.status);const t=await e.json();t.error?S(t.error):_(t)}catch{S("Failed to fetch reviews. Please try again later.")}}function _(e){const t=document.getElementById("reviewsList");if(t.innerHTML="",e.length===0)t.innerHTML='<div class="swiper-slide">Not found</div>';else{const o=e.map(i=>`
            <li class="swiper-slide" id="swiper-slide">
                <div class="review-card" id="review_${i._id}"> 
                    <div class="avatar-review-js">
                        <img class="review-img-js" src="${i.avatar_url}" alt="Avatar of ${i.author}">
                    </div>
                    <div class="review-content-js">
                        <p class="author-review-js">${i.author}</p>
                        <p class="text-review-js">${i.review}</p>
                    </div>
               </div>
                </li>`).join("");t.innerHTML=o}}function S(e){alert(e)}document.addEventListener("DOMContentLoaded",x);document.addEventListener("DOMContentLoaded",function(){function t(s,c){s.forEach(function(w){const k=w.target.querySelectorAll(".my-covers-item-img");w.isIntersecting&&k.forEach(function(g){g.style.animation="none",requestAnimationFrame(function(){setTimeout(o,50,g)})})})}function o(s){s.style.animation="slideInFromBottomRight 2s ease-in-out forwards"}const i={root:null,threshold:.1},r=new IntersectionObserver(t,i);document.querySelectorAll(".covers-item").forEach(function(s){r.observe(s)})});const l=document.querySelector(".form-sect-work"),E=document.querySelector(".backdrop-sect-work"),n=l.elements.email_work,m=l.elements.message_work,M=document.querySelector(".btn-close-work"),d=document.querySelector(".input-email-text"),u=document.querySelector(".input-email-text2"),v="key",V="https://65ef278dead08fa78a4fefb5.mockapi.io/contacts/portfolio-js";function j(){const e=JSON.parse(localStorage.getItem(v));e&&(n.value=e.email,m.value=e.comments)}j();l.addEventListener("submit",T);l.addEventListener("input",()=>{const e={email:n.value.trim(),comments:m.value.trim()};localStorage.setItem(v,JSON.stringify(e)),n.value.includes("@")?(n.classList.add("input-email-green"),d.style.display="block",u.style.display="none"):n.value.includes("@")||(n.classList.add("input-email-red"),n.classList.remove("input-email-green"),d.style.display="none",u.style.display="block",n.value===""&&(n.classList.remove("input-email-green"),n.classList.remove("input-email-red"),d.style.display="none",u.style.display="none"))});async function T(e){try{if(e.preventDefault(),n.value===""||m==="")return alert("All form fields must be filled in");const t={email:n.value.trim(),comments:m.value.trim()};await C({email:t.email,comment:t.comments}),n.classList.remove("input-email-green"),n.classList.remove("input-email-red"),d.style.display="none",u.style.display="none",E.classList.add("is-open"),localStorage.removeItem(v),l.reset()}catch(t){console.log(t)}}M.addEventListener("click",()=>{E.classList.remove("is-open")});function C(e){try{return fetch(V,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(t=>{if(!t.ok)throw new Error(t.status||t.statusText);return t.json()})}catch(t){console.log(t),alert("Error! Please enter the data again")}}
//# sourceMappingURL=commonHelpers.js.map