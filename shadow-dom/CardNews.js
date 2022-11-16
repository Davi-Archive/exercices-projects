class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const autor = document.createElement("span");
    const linkTitle = document.createElement("a");
    const newsContent = document.createElement("p");

    linkTitle.href = this.getAttribute("link-url");

    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
    linkTitle.textContent = this.getAttribute("title");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const newsImage = document.createElement("img");
    cardRight.appendChild(newsImage);
    newsImage.src = this.getAttribute("img-url") || "default.png";
    newsImage.alt = "Foto da Notícia";

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
      width:80%;
    }

    img {
      width:200px;
      height:120px;
    }

    `;

    return style;
  }
}

customElements.define("card-news", CardNews);
