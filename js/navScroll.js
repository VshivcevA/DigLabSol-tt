if(window.innerWidth>=1200){const e=document.querySelector(".nav");let s=0;const o=400,l=()=>window.pageYOffset||document.documentElement.scrollTop,n=()=>e.classList.contains("scroll-hide");window.addEventListener("scroll",(()=>{l()>s&&!n()&&l()>o&&e.classList.add("scroll-hide"),l()<s&&n()&&e.classList.remove("scroll-hide"),s=l()}))}