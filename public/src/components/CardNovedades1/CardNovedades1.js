class CardNovedadesLarge extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['label', 'date', 'title', 'preview', 'href', 'image'];
	}

	connectedCallback() {
		this.render();
	}

	// Este método actualiza las propiedades cada vez que se modifican
	// y que queremos observar
	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
          <link rel='stylesheet' href='./src/components/CardNovedades1/CardNovedades1.css'></link>
          <div class="imagenprincipal">
            <img src="${this.image}" />
          </div>
          <div class="piedeimgen">
            <p class="fecha">${this.date}</p>
            <h3 class="titulo">${this.title}</h3>
            <p class="resumen">${this.preview}</p>
            <span class="leermas">Leer más</span>
          </div>
      `;
	}
}

customElements.define('card-novedades-l', CardNovedadesLarge);
export default CardNovedadesLarge;
