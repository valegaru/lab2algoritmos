class SubBanner extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['title', 'image', 'subtitle', 'label'];
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
          <link rel='stylesheet' href='./src/components/SubBanner/SubBanner.css'></link>
					<section class="container">
          <h2 class="titulo" >${this.title || 'titulo'}</h2>
              <div class="firstbutton">
                  <div class="imagendiv">
                      <img src="${this.image || 'imagen'}" />
                  </div>
              </div>
							<div class="avisoboton">
          <h3>${this.subtitle || 'subtitulo'}</h3>
          <button type="button">${this.label || 'boton'}</button>
					</div>
					</section>

      `;
	}
}

customElements.define('my-banner', SubBanner);
export default SubBanner;
