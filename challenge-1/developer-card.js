class DeveloperCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
            <link rel="stylesheet" href="./index.css">
            <div class="card-container">
              <div class="card-header">
                  <div class="card-title">Jalasoft</div>
              </div>
              <img src="https://scontent.flpb2-2.fna.fbcdn.net/v/t1.18169-9/10363563_674978755907906_1179458556909457241_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=25UOiMjylIUAX9cHs9s&_nc_ht=scontent.flpb2-2.fna&oh=00_AfCWXDi_UtS4zUHFTGaUkCHtOHa7dgZOHmbc8MjhH3j2MA&oe=662557BF" alt="developer">
                
              <div class="card-details">
                <div class="card-role">Luis Rivas</div>
                <div class="card-role">Developer</div>
              </div>
            </div>
        `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("developer-card", DeveloperCard);
