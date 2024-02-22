class SubBanner extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['title', 'image-src', 'subtitle', 'label'];
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
          <link rel='stylesheet' href='./src/components/FALTA'></link>
          <h2 class="titulo" >${this.title || 'titulo'}</h2>
          <a aria-label="${this.title}">
              <div class="firstbutton">
                  <div class="imagendiv">
                      <img alt="${this.title}" src="${this.imageSrc || 'imagen'}" />
                  </div>
              </div>
          </a>
          <h3>${this.subtitle || 'subtitulo'}</h3>
          <button type="button">${this.label || 'boton'}</button>
      `;
	}
}

customElements.define('my-banner', SubBanner);
export default SubBanner;
