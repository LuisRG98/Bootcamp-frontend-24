class DeveloperCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
            <link rel="stylesheet" href="./index.css">
            <div class="card-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKp4ZqRkJd8JET0Y-yJXiLv-s6scKFY0b1iQ&usqp=CAU" alt="developer">
                <div class="card-details">
                    <div class="card-title">Luis Rivas</div>
                    <div class="card-role">Developer</div>
                </div>
            </div>
        `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("developer-card", DeveloperCard);
