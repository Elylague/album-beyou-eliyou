(()=>{console.log("Hello World!");const e=document.querySelectorAll("section div.friend img"),i=document.querySelector("section div.friend .bouton"),t=document.querySelectorAll("section div.family img"),o=document.querySelector("section div.family .bouton-family"),n=document.querySelectorAll("section div.maraine img"),a=document.querySelector("section div.maraine .bouton-maraine"),s=document.querySelectorAll("section div.beyou-eliyou img"),l=document.querySelector("section div.beyou-eliyou .bouton-beyou-eliyou"),c=document.querySelectorAll("section div.beyou img"),m=document.querySelector("section div.beyou .bouton-beyou");i.addEventListener("click",(i=>{for(let t=1;t<e.length;t++)e[t].classList.contains("see-image-animation")?(e[t].classList.remove("see-image-animation"),e[t].classList.add("hide-image-animation"),i.target.textContent="voir plus"):(console.log("second block"),e[t].classList.remove("hide-image-animation"),e[t].classList.add("see-image-animation"),i.target.textContent="voir moins");console.log("my bouton")}));const d=["image-family-1","image-family-2","image-family-3"];function*r(){yield c[0],yield c[1],yield c[2]}o.addEventListener("click",(e=>{e.preventDefault();for(let e=1;e<t.length;e++)t[e].classList.toggle(d[e])})),a.addEventListener("click",(e=>{for(let i=1;i<n.length;i++)n[i].classList.contains("see-image-animation")?(console.log("maraine"),n[i].classList.remove("see-image-animation"),n[i].classList.add("hide-image-animation"),e.target.textContent="voir plus"):(console.log("second block"),n[i].classList.remove("hide-image-animation"),n[i].classList.add("see-image-animation"),e.target.textContent="voir moins")})),l.addEventListener("click",(e=>{for(let i=1;i<s.length;i++)s[i].classList.contains("see-image-animation")?(console.log("Beyou Eliyou"),s[i].classList.remove("see-image-animation"),s[i].classList.add("hide-image-animation"),e.target.textContent="voir plus"):(console.log("second block"),s[i].classList.remove("hide-image-animation"),s[i].classList.add("see-image-animation"),e.target.textContent="voir moins")}));let u=function*(){for(;;)yield*r()}(),g=1;m.addEventListener("click",(e=>{g+=3;let i=u.next().value;i.style.position="absolute",i.style.zIndex=g}))})();