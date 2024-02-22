class CardNovedadesLarge extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['label'];
	}

	connectedCallback() {
		this.render();
	}

	//Este metodo le da un nuevo valores a las propiedades cada vez que las cambiamos
	//que queremos observar
	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
			<link rel='stylesheet' href='./src/components/card-destacados/card-destacados.css'></link>
			<p>${this.message || `aca voy poniendo lo que contiene el elemento`}</p>

			`;
	}
}

customElements.define('card-novedades-l', CardNovedadesLarge);
export default CardNovedadesLarge;
