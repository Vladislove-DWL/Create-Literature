(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();function m(e){e.insertAdjacentHTML("beforeBegin",`<div class="card">
        <form>
            <h3>Фамилия автора:</h3>
            <input class="lastname" type="text" placeholder="Пушкин">
            
            <h3>Инициалы автора:</h3>
            <input class="firstname" type="text" placeholder="А. С.">
            
            <h3>Название книги:</h3>
            <input class="nameOfBook" type="text" placeholder="Медный всадник">
            
            <h3>Город издательства:</h3>
            <input class="nameOfCity" type="text" placeholder="Москва">
            
            <h3>Название издательства:</h3>
            <input class="nameOfPublisher" type="text" placeholder="Просвещение">
            
            <h3>Год издания:</h3>
            <input class="yearOfPublishing" type="text" placeholder="1995">
           
            <h3>Количество страниц:</h3>
            <input class="numberOfPage" type="text" placeholder=" 255">     
        </form>
    </div>`)}function y(e){e.insertAdjacentHTML("beforeBegin",`<div class="card">
        <form>
            <h3>Фамилия первого автора:</h3>
            <input class="lastname" type="text" placeholder="Пушкин">
                
            <h3>Инициалы первого автора:</h3>
            <input class="firstname" type="text" placeholder="А. С.">

            <h3>Фамилия второго автора:</h3>
            <input class="lastname2" type="text" placeholder="Толстой">
                
            <h3>Инициалы второго автора:</h3>
            <input class="firstname2" type="text" placeholder="Л. Н.">
                
            <h3>Название книги:</h3>
            <input class="nameOfBook" type="text" placeholder="Медный всадник">
                
            <h3>Город издательства:</h3>
            <input class="nameOfCity" type="text" placeholder="Москва">
                
            <h3>Название издательства:</h3>
            <input class="nameOfPublisher" type="text" placeholder="Просвещение">
                
            <h3>Год издания:</h3>
            <input class="yearOfPublishing" type="text" placeholder="1995">
            
            <h3>Количество страниц:</h3>
            <input class="numberOfPage" type="text" placeholder=" 255">     
        </form>
    </div>`)}function O(){let e=document.querySelector(".card");e&&e.remove()}function g(){const e=document.querySelectorAll("input");let r=!0;for(let o=0;o<e.length;o++)e[o].value.trim()===""&&(e[o].placeholder="Не заполнено",r=!1);return r}const i=document.querySelector("#source"),h=document.querySelector(".btnGenerate"),v=document.querySelector(".btnReset"),s=document.querySelector(".userResult"),b=document.querySelector("body");let c=0;const p={};i.addEventListener("click",()=>{O(),i.value==="oneAuthor"?m(h):i.value==="twoAuthor"&&y(h)});b.addEventListener("change",e=>{const r=e.target;if(r.tagName==="INPUT"){const o=r.classList.value;p[o]=r.value}});h.addEventListener("click",()=>{if(g()){c++;let e;if(i.value==="oneAuthor"){const{lastname:r,firstname:o,nameOfBook:a,nameOfCity:t,nameOfPublisher:n,yearOfPublishing:l,numberOfPage:u}=p;e=`${c}. ${r}, ${o} ${a} / ${o} ${r}. – ${t} : ${n}, ${l}. – ${u} c. – Текст : непосредственный.`}else if(i.value==="twoAuthor"){const{lastname:r,firstname:o,lastname2:a,firstname2:t,nameOfBook:n,nameOfCity:l,nameOfPublisher:u,yearOfPublishing:d,numberOfPage:f}=p;e=`${c}. ${r}, ${o} ${n} / ${o} ${r}, ${t} ${a}. – ${l} : ${u}, ${d}. – ${f} c. – Текст : непосредственный.`}c!==0?e+=`
`:e=s.value.trim()+newStroke,s.style.height="auto",s.style.height=s.scrollHeight+"px",s.value+=e}});v.addEventListener("click",()=>{s.value="",s.style.height="auto",c=0});
