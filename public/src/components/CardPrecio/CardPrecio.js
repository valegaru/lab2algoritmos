class CardPrecio extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['image', 'label', 'date', 'price', 'description', 'platform'];
	}

	connectedCallback() {
		this.render();
	}

	// Este método se llama cuando se cambia alguno de los atributos observados
	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}
	render() {
		this.shadowRoot.innerHTML = `
          <link rel='stylesheet' href='./src/components/card-destacados/card-destacados.css'></link>
          <a class="CardPrecio" href="#">
          <div class="imgPrecio">
            <img src="${this.image || 'URL_default_imagen'}"/>
          </div>
          <div class="ContenidoDestacados">
            <h3 class="tituloDestacados">${this.label || 'Título del Producto'}</h3>
            <p>${this.date || 'date'}</p>
            <div class="mensajeDestacados">${this.description || 'Descripción del Producto'}</div>
            <p>${this.price || 'Precio'}</p>
            <div class="consolaDestacados">
              <span>${this.platform || 'Plataforma'}</span>
            </div>
            <button
              class="WishlistButtonstyles__Heart-sc-1ud0cp0-0 iVkbLZ ProductTilestyles__WishlistHeart-sc-m1loqs-0 eOhczy"
              title="Agregar a la lista de deseos"
              aria-label="Agregar a la lista de deseos"
              aria-pressed="false"
            >
              <svg
                viewBox="0 0 54 54"
                fill="currentColor"
                stroke="currentColor"
                width="24"
                role="presentation"
                alt=""
                data-testid="heartspark"
                color="currentColor"
                size="24"
              ></svg>
            </button>
          </div> </a>`;
	}
}

customElements.define('card-precio', CardPrecio);
export default CardPrecio;
