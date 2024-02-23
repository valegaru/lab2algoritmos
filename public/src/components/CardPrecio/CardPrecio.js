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
            <div class="mensajeDestacados">${this.description}</div>
            <p>${this.price || 'Precio'}</p>
            <div class="consolaDestacados">
              <span>${this.platform || 'Plataforma'}</span>
            </div>
            <button
			class="WishlistButtonstyles__Heart-sc-1ud0cp0-0 iVkbLZ ProductTilestyles__WishlistHeart-sc-m1loqs-0 eOhczy"
			title="Agregar a la lista de deseos"
			aria-label="Agregar a la lista de deseos"
			aria-pressed="false"
			><svg
				viewBox="0 0 54 54"
				fill="currentColor"
				stroke="currentColor"
				width="24"
				role="presentation"
				alt=""
				data-testid="heartspark"
				color="currentColor"
				size="24"
			>
				<g class="hearts">
					<path
						class="heart heart-outline"
						d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"
					></path>
				</g>
        `;
	}
}

customElements.define('card-precio', CardPrecio);
export default CardPrecio;
