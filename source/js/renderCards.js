const imgFormat = ".webp";
export function renderCard(cards) {
  const cardList = document.querySelector(".card__list");

  const template = document
    .getElementById("template")
    .content.querySelector(".card__item");

  function getSource(item) {
    let source = "";
    let srcset = "";
    item.forEach((i, index) => {
      srcset = `img/cards/` + i.srcset + imgFormat + " " + i.x + "x";
      index === 0 ? (source += srcset) : (source = source + ", " + srcset);
    });
    return source;
  }

  cardList.innerHTML = "";
  cards.forEach((card) => {
    const item = template.cloneNode(true);
    item.querySelector(".card__img").alt = card.img.alt;

    item.querySelector(".card__img").src =
      `img/cards/` + card.img.src + imgFormat;
    item.querySelector(".card__source").srcset = getSource(card.source);

    item.querySelector(".card__category").textContent = card.category;
    item.querySelector(".card__title").textContent = card.title;
    item.querySelector(".post-meta__author").textContent = card.author;
    item.querySelector(".post-meta__date").textContent = card.date;
    item.querySelector(".post-meta__view").textContent = card.view + " Views";
    item.querySelector(".card__content").textContent = card.content;
    cardList.appendChild(item);
  });
}
