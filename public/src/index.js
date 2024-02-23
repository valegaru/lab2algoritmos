//abuelo
import * as components from './components/index.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
		<section><h2>Destacados</h2></section>

			<card-destacados image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/en_US/merchandising/feature-banner/N531KN2tQZ/i7a6mlD0xI3/Switch_16x9_PrincessPeachShowtime_KeyArt'
			label='Princess Peach Showtime!'
			description='Reserva ya'
			platform='Nintendo Switch'></card-destacados>

			<card-destacados image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/en_US/articles/2024/try-the-latest-game-trial-ea-sports-fc-24/Ncom-NSO-1920x1080-SP_v01'
			label='Pon a prueba el nuevo juego de muestra!'
			description='Más información'
			platform='Nintendo Switch'
			></card-destacados>

			<card-destacados image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000077705/6fa932eda55c5e713e339667c138a8a4009d439e5d983102cc53d4c0bb84a445'
			label='Endless Ocean Luminous'
			description='Reserva ya'
			platform='Nintendo Switch'
			></card-destacados>

			<card-destacados image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70070000016787/f70cc1e8d0a7b4d1e8852db4e77b375551f72edea72413a2d016dd3ce84fe214'
			label='Splatoon 3: Pase de expansión, La cara del orden DLC'
			description='Próximos lanzamientos'
			platform='Nintendo Switch'
			></card-destacados>

			<card-destacados image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/en_US/merchandising/feature-banner/N531KN2tQZ/i7a6mlD0xI3/Switch_16x9AnotherCodeRecollection_KeyArt'
			label='Another Code: Recollection'
			description='Disponible ya'
			platform='Nintendo Switch'
			></card-destacados>

			<hr>
<section class="tienda">
<my-banner title='Tienda de juegos'
image='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/es_LA/merchandising/homepage-banners/4576x744_LATAM_GameStoreBanner_01_SP'
subtitle='¡Compra, descarga y juega de inmediato!'
label'Comprar juegos'
></my-banner>
</section>
<hr>
<section class="Explora">
<my-banner title='Explora las consolas de videojuegos'
image='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/en_US/switch/site-design-update/switch-family-es'
subtittle='Familia Nintendo Switch'
label='Más detalles'></my-banner>
</section>
<hr>

<section><h2>Novedades</h2>
			<card-novedades-l
			image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_600/ncom/en_US/articles/2024/side-order-the-new-splatoon-3-single-player-campaign-dlc-is-available-now/1920x1080_Splatoon3_SideOrder_SP'
			date='22/02/24'
			title='Contenido descargable de Splatoon 3: ¡Ya está disponible la nueva y cheverísima campaña para un solo
			jugador!'
			preview='Damas y calameros, nos sentimos orgullosos de anunciar que ya puedes ordenar (porque ya está disponible) el
			contenido descargable* del juego Splatoon™ 3: La cara del orden. Esta segunda ola de contenido descargable del
			Pase de expansión de Splatoon™…'></card-novedades-l>

			<card-novedades-l
			image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_600/ncom/en_US/articles/2024/feb-update-see-what-games-were-added-to-the-nintendo-64-super-nes-and-nes-collections/2250x1266_NSO_SP'
			date='21/02/24'
			title='¡Novedades de febrero! Mira los juegos que se agregaron a los catálogos de Nintendo 64, Super NES y NES'
			preview='¿Quieres disfrutar algunos juegos clásicos? Los suscriptores de Nintendo Switch Online obtienen acceso instantáneo
			a un gran catálogo de juegos de Game Boy™, Super NES™ y NES™. Por su parte, los suscriptores de Nintendo Switch
			Online + Paquete de ex…'></card-novedades-l>



			<card-novedades-s
			image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/en_US/articles/2024/try-the-latest-game-trial-ea-sports-fc-24/Ncom-NSO-1920x1080-SP_v01'
			date='19/02/24'
			title='Pon a prueba el nuevo juego de muestra, EA SPORTS FC™ 24'></card-novedades-s>

			<card-novedades-s
			image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_400/ncom/en_US/articles/2024/a-classic-rivalry-reignites-in-mario-vs-donkey-kong-available-now/2250x1266_MDK'
			date='16/02/24'
			title='¡Una clásica rivalidad ha regresado en el juego Mario vs. Donkey Kong!'></card-novedades-s>

			<card-novedades-s
			date='15/02/24'
			title='¡Los elementos icónicos inspirados en el juego Mario vs. Donkey Kong están aquí por tiempo limitado!'
			image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_400/ncom/en_US/articles/2024/icon-elements-inspired-by-the-mario-vs-donkey-kong-game-are-here-for-a-limited-time/LHA-1365-Missions_Rewards-Icons-MvDK-Social-SP_v01'></card-novedades-s>

			<card-novedades-s
			image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_400/ncom/en_US/articles/2024/discover-lara-crofts-original-adventures-in-tomb-raider-i-iii-remastered/1920x1080_TombRaider'
			date='14/02/24'
			title='Descubre las aventuras originales de Lara Croft en Tomb Raider I-III Remastered
			Leer más
			Ver todos los artículos de noticias
			Los más vendido'></card-novedades-s>

			<button type="button">Ver todos los articulos de noticias</button>
			</section>

			<section><h2>Los más vendidos de Nintendo Switch</h2>
			<a>Ver la lista completa</a>
			<card-precio></card-precio>
			</section>

			<section><h2>Nuevos lanzamientos de Nintendo Switch</h2>
			<a>Ver la lista completa</a>
			<card-precio></card-precio>
			</section>
			`;
	}
}

customElements.define('app-container', AppContainer);
export default AppContainer;
