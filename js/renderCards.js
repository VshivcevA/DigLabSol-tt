const imgFormat=".webp";export function renderCard(e){const t=document.querySelector(".card__list"),r=document.getElementById("template").content.querySelector(".card__item");t.innerHTML="",e.forEach((e=>{const c=r.cloneNode(!0);c.querySelector(".card__img").alt=e.img.alt,c.querySelector(".card__img").src="img/cards/"+e.img.src+".webp",c.querySelector(".card__source").srcset=function(e){let t="",r="";return e.forEach(((e,c)=>{r="img/cards/"+e.srcset+".webp "+e.x+"x",0===c?t+=r:t=t+", "+r})),t}(e.source),c.querySelector(".card__category").textContent=e.category,c.querySelector(".card__title").textContent=e.title,c.querySelector(".post-meta__author").textContent=e.author,c.querySelector(".post-meta__date").textContent=e.date,c.querySelector(".post-meta__view").textContent=e.view+" Views",c.querySelector(".card__content").textContent=e.content,t.appendChild(c)}))}