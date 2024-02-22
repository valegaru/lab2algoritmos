class CardDestacados extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['label', 'image', 'description', 'platform'];
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
					<link rel='stylesheet' href='./src/components/card-destacados/card-destacados.css'></link>
					<a class="CardDestacados" href="#">
							<div class="imgDestacados">
									<img src="${this.image || 'URL_default_imagen'}" alt="Product Image" loading="lazy">
							</div>
							<div class="ContenidoDestacados">
									<h3 class="tituloDestacados">${this.label || 'Título del Producto'}</h3>
									<div class="mensajeDestacados">${this.description || 'Descripción del Producto'}</div>
									<div class="consolaDestacados">
											<span>${this.platform || 'Plataforma'}</span>
									</div>
							</div>
					</a>`;
	}
}

customElements.define('card-destacados', CardDestacados);
export default CardDestacados;
