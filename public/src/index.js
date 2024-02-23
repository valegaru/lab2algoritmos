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
			title='Descubre las aventuras originales de Lara Croft en Tomb Raider I-III Remastered'></card-novedades-s>

			<button type="button">Ver todos los articulos de noticias</button>
			</section>

			<section><h2>Los más vendidos de Nintendo Switch</h2>
			<a>Ver la lista completa</a>
			<card-precio image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000003402/057249cf707a2a733c876c0eb453bb018ee6ea09f3aea5c350f4d76f70840d00'
			label='Overcooked! 2'
			date='1/9/21'
			description='La oferta termina en: <span>16 días</span>'
			price='15.975,00'
			platform='Nintendo Switch'
			></card-precio>

			<card-precio image='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000068688/1c5583f6bbce5bccdc923c25c35ba8f42128b55df84f4a2fbeea74b6d1d1516e'
			label='Super Mario Bros.™ Wonder'
			date='20/10/23'
			description=''
			price='328.600,00'
			platform='Nintendo Switch'
			></card-precio>

			<card-precio image='KeyArtstyles__StyledFrame-sc-u7um7j-0 bjkjEP"><div class="Imagestyles__ImageWrapper-sc-1244ond-0 PjcqG"><img alt="" loading="lazy" fetchpriority="low" class="Imagestyles__CloudinaryImage-sc-1244ond-1 gUGinS" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000049931/cf8adb2c74522b91412eb40b9d77216e8f8436fc4e63731e0dc262e6666930eb'
			label='Nintendo Switch™ Sports'
			date='29/4/22'
			price='219.000,00'
			platform='Nintendo Switch'
			></card-precio>

			<card-precio image='KeyArtstyles__StyledFrame-sc-u7um7j-0 bjkjEP"><div class="Imagestyles__ImageWrapper-sc-1244ond-0 PjcqG"><img alt="" loading="lazy" fetchpriority="low" class="Imagestyles__CloudinaryImage-sc-1244ond-1 gUGinS" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000000153/de697f487a36d802dd9a5ff0341f717c8486221f2f1219b675af37aca63bc453'
			label='Mario Kart™ 8 Deluxe'
			date='28/4/17'
			price='328.600,00'
			platform='Nintendo Switch'
			></card-precio>

			</section>

			<section><h2>Nuevos lanzamientos de Nintendo Switch</h2>
			<a>Ver la lista completa</a>

			<card-precio image='KeyArtstyles__StyledFrame-sc-u7um7j-0 bjkjEP"><div class="Imagestyles__ImageWrapper-sc-1244ond-0 PjcqG"><img alt="" loading="lazy" fetchpriority="low" class="Imagestyles__CloudinaryImage-sc-1244ond-1 gUGinS" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000072191/b6b4d48d8cba9a8717c6d60857444232ac863789e112f88bb51414ec153aa8f0'
			label='Mario vs. Donkey Kong™'
			date='16/2/24'
			description='¡Nuevo!'
			price='273.800,00'
			platform='Nintendo Switch'
			></card-precio>

			<card-precio image='KeyArtstyles__StyledFrame-sc-u7um7j-0 bjkjEP"><div class="Imagestyles__ImageWrapper-sc-1244ond-0 PjcqG"><img alt="" loading="lazy" fetchpriority="low" class="Imagestyles__CloudinaryImage-sc-1244ond-1 gUGinS" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000072196/a0791bd734bb7fab6e666fac84b3861283a2609f0f98a477afbc59d62cb06271'
			label='Another Code™: Recollection'
			date='19/1/24'
			description='Versión de prueba gratuita'
			price='328.600,00'
			platform='Nintendo Switch'
			></card-precio>

			<card-precio image='KeyArtstyles__StyledFrame-sc-u7um7j-0 bjkjEP"><div class="Imagestyles__ImageWrapper-sc-1244ond-0 PjcqG"><img alt="" loading="lazy" fetchpriority="low" class="Imagestyles__CloudinaryImage-sc-1244ond-1 gUGinS" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000068678/5b072b55e8a6993071b4cde9f74d9cf7aeac0b52141177efed6c8ce9b580a435'
			label='WarioWare™: Move It!'
			date='3/11/23'
			price='273.800,00'
			platform='Nintendo Switch'
			></card-precio>

			<card-precio image='KeyArtstyles__StyledFrame-sc-u7um7j-0 bjkjEP"><div class="Imagestyles__ImageWrapper-sc-1244ond-0 PjcqG"><img alt="" loading="lazy" fetchpriority="low" class="Imagestyles__CloudinaryImage-sc-1244ond-1 gUGinS" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000068683/fe4afe940b0e707798332e86f0af56cdbde48da59dc37cdfb8d59febb88ac72a'
			label='Super Mario RPG™'
			date='17/11/23'
			price='328.600,00'
			platform='Nintendo Switch'
			></card-precio>

			</section>
			`;
	}
}

customElements.define('app-container', AppContainer);
export default AppContainer;
