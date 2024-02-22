class cardDestacados extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['message'];
	}

	connectedCallback() {
		this.render();
	}

	//Este metodo le da un nuevo valores a las propiedades cada vez que las cambiamos
	//que queremos observar
	attributeChangeCallback(propName, oldValue, newValue) {
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

customElements.define('card-destacados', cardDestacados);
export default cardDestacados;
