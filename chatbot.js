/* ==========================================================
   Luna Llena Tours · Asistente virtual (ES / EN)
   Sin dependencias, sin API keys, sin servidor.
   Integración: <script src="chatbot.js" defer></script>
   ========================================================== */
(function (root) {
  'use strict';

  var WA = '51930299443';
  var WA2 = '51982360927';
  var CATALOG = [{"seccion": "machupicchu", "nombre": "MAPI Full Day Tren Turístico Expeditions", "categoria": "Ruta en Tren", "badge": "Full Day", "duracion": "1 día | Fácil", "descripcion": "Viaje en tren turístico Expeditions desde Cusco/Ollantaytambo hasta Machu Picchu.", "incluye": ["Transporte Cusco-Ollantaytambo", "Tren turístico Expeditions ida y retorno", "Bus Consettur subida y bajada", "Ticket de ingreso a Machu Picchu", "Guía profesional bilingüe", "Box lunch"], "precio": "Extranjeros US$ 335 · Nacionales S/.999 US$ 295"}, {"seccion": "machupicchu", "nombre": "MAPI Full Day Tren Local (Peruanos)", "categoria": "Ruta en Tren", "badge": "Full Day", "duracion": "1 día | Fácil", "descripcion": "Tren local para nacionales. Experiencia auténtica hacia Machu Picchu.", "incluye": ["Transporte Cusco-Ollantaytambo", "Tren local ida y retorno", "Bus Consettur", "Ticket de ingreso", "Guía profesional", "Box lunch"], "precio": "Nacionales S/.390 (US$ 115)"}, {"seccion": "machupicchu", "nombre": "MAPI 2D/1N By Car - Hidroeléctrica", "categoria": "Ruta Alternativa", "badge": "2D/1N", "duracion": "2 días / 1 noche | Moderada", "descripcion": "Ruta alternativa por carretera hasta Hidroeléctrica con caminata de 3 horas.", "incluye": ["Transporte Cusco-Hidroeléctrica", "Caminata 3 horas a Aguas Calientes", "Bus Consettur", "Ticket de ingreso", "1 noche de hotel", "1 cena + 1 desayuno", "Guía profesional"], "precio": "Extranjeros US$ 235 Nacionales S/.665 (US$ 195)"}, {"seccion": "machupicchu", "nombre": "MAPI 2D/1N Conexión Valle Sagrado - Machu Picchu", "categoria": "Conexión Valle Sagrado", "badge": "2D/1N", "duracion": "2 días / 1 noche | Fácil", "descripcion": "Día 1: Pisac - Moray - Salinas de Maras - Ollantaytambo - Aguas Calientes. Día 2: Machu Picchu - Cusco.", "incluye": ["Transporte Cusco-Ollantaytambo", "Tren turístico Expeditions", "Bus Consettur", "Ticket de ingreso", "Alojamiento en hotel 2*3*4*", "Almuerzo buffet + desayuno", "Guía profesional"], "precio": "Extranjeros US$ 395 Nacionales S/.1210 (US$ 355)"}, {"seccion": "machupicchu", "nombre": "MAPI 02 DIAS/01 NOCHE PAX SIN TICKET DE INGRESO A MAPI", "categoria": "Trekking Extremo", "badge": "5D/4N", "duracion": "2 días / 1 noche | Fácil", "descripcion": "Cusco - Capuliyoc - Playa - Maranpata - Choquequirao - San Ignacio - Villa de Loros. Altitud: 1550m - 3100m.", "incluye": ["Transporte Cusco-Ollantaytambo", "Tren turístico Expeditions ida y retorno", "Bus Consettur subida y bajada", "Transfer personalizado en Aguas Calientes", "Guía profesional privado - bilingüe", "Box lunch"], "precio": "Extranjeros US$ 355 Nacionales S/.1120 (US$ 330)"}, {"seccion": "machupicchu", "nombre": "MAPI Full Day Tren Vistadome - Hiram Bingham", "categoria": "Ruta en Tren Premium", "badge": "Full Day", "duracion": "1 día | Fácil", "descripcion": "Tren turístico Vistadome o Hiram Bingham con ventanas panorámicas y coche bar observatorio.", "incluye": ["Transporte Cusco-Ollantaytambo", "Tren Vistadome o Hiram Bingham", "Bus Consettur", "Ticket de ingreso", "Guía profesional", "Botiquín - aid kits"], "precio": "Extranjeros US$ 475 Nacionales S/.1460 (US$ 430)"}, {"seccion": "machupicchu", "nombre": "MAPI 2D/1N Short Inka Trail", "categoria": "Trekking", "badge": "2D/1N", "duracion": "2 días / 1 noche | Moderada", "descripcion": "Día 1: Cusco - KM 104 - Wiñay Wayna - Puerta del Sol - Machu Picchu. Día 2: Aguas Calientes - Cusco.", "incluye": ["Box Lunch y cena", "Alojamiento Hotel 3*", "Desayuno - Breakfast", "Guía profesional"], "precio": "Extranjeros US$ 630 Nacionales S/.2005 (US$ 590)"}, {"seccion": "machupicchu", "nombre": "MAPI 4D/3N Traditional Inka Trail", "categoria": "Trekking Clásico", "badge": "4D/3N", "duracion": "4 días / 3 noches | Moderada/Desafío", "descripcion": "El clásico Camino Inca: KM 82 - Wayllabamba - Warmi Wañuska - Phuyupatamarca - Wiñay Wayna - Machu Picchu.", "incluye": ["Todas las comidas", "Instalaciones de campamento", "Guía profesional", "Distancia total: 42 km"], "precio": "Extranjeros US$ 830 Nacionales S/.2690 (US$ 790)"}, {"seccion": "machupicchu", "nombre": "MAPI 4D/3N Inka Jungle VIP", "categoria": "Aventura VIP", "badge": "4D/3N", "duracion": "4 días / 3 noches | Moderada", "descripcion": "Cusco - Abra Malaga - Santa Maria (biking + rafting) - Santa Teresa (hiking) - Hidroeléctrica (zip lining) - Machu Picchu.", "incluye": ["Todas las comidas", "Hotel Santa Maria y Santa Teresa", "Campamento", "60 km biking + rafting", "22 km hiking + zip lining"], "precio": "Extranjeros US$ 450 Nacionales S/.1325 (US$ 390)"}, {"seccion": "machupicchu", "nombre": "MAPI 3D/2N Valle Sagrado a Machu Picchu + Montaña de Colores", "categoria": "Trekking + Valle Sagrado", "badge": "3D/2N", "duracion": "3 días / 2 noches | Moderada", "descripcion": "Día 1: Pisac - Moray - Salinas - Ollantaytambo - Aguas Calientes. Día 2: Machu Picchu. Día 3: Montaña de Colores (5,200 msnm).", "incluye": ["Transporte completo", "Tren Expeditions", "Bus Consettur", "Ticket de ingreso", "Hotel 2*3*4*", "Almuerzos buffet", "Guía profesional"], "precio": "Extranjeros US$ 450 Nacionales S/.1270 (US$ 410)"}, {"seccion": "machupicchu", "nombre": "AUSANGATE + MONTAÑA DE COLORES 04 DIAS/03 NOCHES", "categoria": "Ruta en Tren VIP", "badge": "2D/1N", "duracion": "4 días / 3 noches | Moderado", "descripcion": "Una de las rutas de trekking de alta montaña más impresionantes y exigentes de la región del Cusco. Modalidad turismo vivencial, 26 km.", "incluye": ["Transporte privado ida y retorno", "Equipo de campamento completo (carpa de montaña para 02 personas, carpa cocina, comedor, ducha y baño completamente equipados)", "Colchonetas inflables por pasajero", "Arrieros, caballos de carga y de emergencia", "Alimentación completa (03 desayunos, 04 almuerzos, 03 cenas)", "Ticket de ingreso a la Montaña de Colores y los circuitos comunitarios del nevado Ausangate", "Transfer personalizado", "Guía profesional privado - bilingüe", "Personal de apoyo: arrieros, cocineros", "Box lunch"], "precio": "Extranjeros US$ 630 Nacionales S/.2005 (US$ 590)"}, {"seccion": "machupicchu", "nombre": "HUCHUY QOSQO TREK 02 DIAS/01 NOCHE", "categoria": "Ruta en Tren Lujo", "badge": "2D/1N VIP", "duracion": "2 días / 1 noche | Fácil", "descripcion": "Impresionante caminata en el corazón de los Andes, exploración del complejo arqueológico y descenso hacia el Valle Sagrado. Modalidad turismo vivencial, 26 km.", "incluye": ["Transporte privado ida y retorno", "01 noche de alojamiento en albergue rural", "Alimentación completa (01 desayuno, 02 almuerzos, 01 cena)", "Ticket de ingreso al centro arqueológico de Huchuyqosqo", "Transfer personalizado", "Guía profesional privado - bilingüe", "Personal de apoyo: arrieros, cocineros", "Box lunch"], "precio": "Extranjeros US$ 310 Nacionales S/.985 (US$ 290)"}, {"seccion": "machupicchu", "nombre": "MAPI 4D/3N Lares Trek", "categoria": "Trekking", "badge": "3D/2N", "duracion": "3 días / 2 noches | Moderada/Desafío", "descripcion": "Cusco - Pisac - Huaran - Cancha Cancha - Kiswarani - Ollantaytambo - Aguas Calientes - Machu Picchu.", "incluye": ["Todas las comidas", "Campamento + Hotel Intipunku Tambo", "Guía profesional", "Distancia: 26 km"], "precio": "Extranjeros US$ 570 Nacionales S/.1870 (US$ 550)"}, {"seccion": "machupicchu", "nombre": "MAPI 5D/4N Salkantay to Machu Picchu", "categoria": "Trekking Extremo", "badge": "5D/4N", "duracion": "5 días / 4 noches | Desafío", "descripcion": "Cusco - Soraypampa - Laguna Humantay - Paso 4650mt - Colpapampa - Aguas Termales - Lucmabamba - Llaqtapata - Machu Picchu.", "incluye": ["Todas las comidas", "Instalaciones de campamento", "Hotel Wiracocha Inn 2*", "Distancia total: 50+ km"], "precio": "Extranjeros US$ 650 Nacionales S/.2110 (US$ 620)"}, {"seccion": "machupicchu", "nombre": "CHOQUEQUIRAO TREK 04 DIAS/03 NOCHES", "categoria": "Trekking Challenger", "badge": "7D/6N", "duracion": "4 días / 3 noches | Desafío", "descripcion": "La ruta más extrema: Choquequirao - Pinchiunuyoc - Maizal - Yanama - Lucmabamba - Llaqtapata - Machu Picchu.", "incluye": ["Todas las comidas", "Carpas espaciosas de 4 estaciones", "Hotel Inti Punku Tambo", "Distancia: 80+ km"], "precio": "Extranjeros US$ 370 Nacionales S/.1055 (US$ 310)"}, {"seccion": "cusco", "nombre": "Valle Sagrado VIP + Maras Moray", "categoria": "Arqueológico", "badge": "Full Day", "duracion": "1 día | Fácil", "descripcion": "Chinchero - Moray - Salinas de Maras - Urubamba - Ollantaytambo - Pisaq.", "incluye": ["Recojo de hotel", "Guía bilingüe", "Transporte turístico A1", "Almuerzo buffet", "Balón de oxígeno", "Botella de agua + snack"], "precio": "Desde S/ 85"}, {"seccion": "cusco", "nombre": "Montaña de Colores (Vinicunca)", "categoria": "Naturaleza", "badge": "Full Day", "duracion": "1 día | Moderada", "descripcion": "Montaña de los 7 Colores a 5,200 msnm. Formación montañosa teñida de minerales: rojo, morado, verde, amarillo, rosado.", "incluye": ["Recojo de hotel", "Desayuno y almuerzo buffet", "Mantas térmicas", "Balón de oxígeno", "Bastones", "Guía bilingüe"], "precio": "Desde S/ 90"}, {"seccion": "cusco", "nombre": "Laguna Humantay", "categoria": "Naturaleza", "badge": "Full Day", "duracion": "1 día | Moderada", "descripcion": "Laguna de aguas turquesas coronada por el nevado Salkantay. Ceremonia milenaria a la Pachamama.", "incluye": ["Recojo de hotel", "Desayuno y almuerzo buffet", "Mantas térmicas", "Balón de oxígeno", "Bastones", "Guía bilingüe"], "precio": "Desde S/ 90"}, {"seccion": "cusco", "nombre": "City Tour Cusco", "categoria": "Cultural", "badge": "Medio Día", "duracion": "Medio día | Fácil", "descripcion": "Sacsayhuaman, Qenqo, Pucapucara, Tambomachay, Catedral y Coricancha. El \"Ombligo del Mundo\".", "incluye": ["Transporte turístico A1", "Balón de oxígeno", "Botiquín", "Guía bilingüe", "Botella de agua + snack"], "precio": "S/ 35"}, {"seccion": "cusco", "nombre": "Valle Sur", "categoria": "Arqueológico", "badge": "Full Day", "duracion": "1 día | Fácil", "descripcion": "Tipón, Pikillaqta, Templo de Andahuaylillas. Arquitectura hidráulica y escuela cusqueña.", "incluye": ["Transporte turístico A1", "Balón de oxígeno", "Botiquín", "Guía bilingüe", "Botella de agua + snack"], "precio": "S/ 50"}, {"seccion": "cusco", "nombre": "Huchuyqosqo Full Day", "categoria": "Arqueológico", "badge": "Full Day", "duracion": "1 día | Moderada", "descripcion": "\"Pequeño Cusco\" - Ciudad construida por el Inca Wiracocha para buscar paz y tranquilidad.", "incluye": ["Recojo del hotel", "Guía bilingüe", "Transporte turístico", "Ticket de ingreso", "Almuerzo", "Botella de agua + snack"], "precio": "S/ 120"}, {"seccion": "cusco", "nombre": "Lares Hot Spring Full Day", "categoria": "Termal", "badge": "Full Day", "duracion": "1 día | Fácil", "descripcion": "Baños termales medicinales ricos en sodio, potasio, magnesio, calcio, hierro, zinc. Ideales para dolores musculares y artritis.", "incluye": ["Recojo del hotel", "Guía bilingüe", "Transporte turístico", "Almuerzo", "Botella de agua + snack"], "precio": "S/ 170"}, {"seccion": "cusco", "nombre": "Siete Lagunas - Hot Spring", "categoria": "Naturaleza + Termal", "badge": "Full Day", "duracion": "1 día | Moderada", "descripcion": "Pacchanta al pie del nevado Ausangate. 7 lagunas de colores: turquesa, celeste, lapizlazul, magenta, azul.", "incluye": ["Recojo del hotel", "Desayuno y almuerzo", "Guía bilingüe", "Transporte + Transfer", "Bastones", "Botella de agua + snack"], "precio": "Desde S/ 100"}, {"seccion": "cusco", "nombre": "Cocalmayo 2D/1N - Hot Spring", "categoria": "Termal", "badge": "2D/1N", "duracion": "2 días / 1 noche | Fácil", "descripcion": "Baños termales a 1,600 msnm. Pozas de agua caliente natural entre vegetación y el río Urubamba.", "incluye": ["Transporte Cusco-Santa Teresa", "Almuerzo, cena, desayuno", "1 noche de hotel", "Ingreso a baños termales", "Transfer profesional"], "precio": "S/ 390"}, {"seccion": "cusco", "nombre": "Puente Queswachaca", "categoria": "Cultural", "badge": "Full Day", "duracion": "1 día | Moderada", "descripcion": "Puente inca de 28 metros suspendido a 30m sobre el río Apurímac. Construido con sogas de ichu mediante la \"minka\".", "incluye": ["Recojo del hotel", "Desayuno y almuerzo buffet", "Guía bilingüe", "Transporte + Transfer", "Bastones", "Botella de agua + snack"], "precio": "S/ 110"}, {"seccion": "cusco", "nombre": "Waqrapucara Full Day", "categoria": "Arqueológico", "badge": "Full Day", "duracion": "1 día | Moderada", "descripcion": "\"Fortaleza en forma de cuerno\" - Sitio arqueológico con formaciones rocosas en forma de cachos.", "incluye": ["Recojo del hotel", "Transporte turístico", "Guía bilingüe", "Desayuno buffet", "Box lunch", "Balón de oxígeno"], "precio": "S/ 120"}, {"seccion": "cusco", "nombre": "Free Walking Tour", "categoria": "Cultural", "badge": "GRATIS", "duracion": "2-3 horas | Fácil", "descripcion": "Descubre el centro histórico con guías indígenas calificados. Construcciones incas, acueductos, palacios, casa de Francisco Pizarro.", "incluye": ["Guía indígena calificado", "Recorrido por centro histórico", "Historia inca y colonial"], "precio": "¡GRATIS!"}, {"seccion": "cusco", "nombre": "City Tour con Realidad Virtual", "categoria": "Cultural", "badge": "Half Day", "duracion": "Medio día | Fácil", "descripcion": "Recorre Q’enqo, Tambomachay, Puca Pucara, Saqsayhuamán y Qoricancho con visores de realidad virtual que reconstruyen cómo eran estos lugares en tiempos incas: ceremonias, plazas y templos que hoy ya no existen.", "incluye": ["Recojo de hotel", "Transporte turístico", "Guía profesional bilingüe", "Experiencia de realidad virtual en varios puntos", "Boleto turístico del Cusco", "Ingreso al Convento de Santo Domingo"], "precio": "Consultar"}, {"seccion": "cusco", "nombre": "5 Ruinas: Saqsayhuamán, Q’enqo, Tambomachay, Puka Pukara e Inkilltambo", "categoria": "Arqueológico · Exclusivo", "badge": "Privado", "duracion": "Medio día | Moderada", "descripcion": "Servicio privado: el circuito clásico de las ruinas altas del Cusco y una caminata suave de unas 2 h 30 min por senderos, andenes y miradores hasta Inkilltambo, antiguo centro administrativo y ceremonial inca.", "incluye": ["Recojo de hotel", "Vehículo privado a elección (camioneta, H1 Staria o Sprinter)", "Guía profesional en español e inglés", "Agua mineral y snack por pasajero", "Boleto turístico del Cusco", "Desayunos ni almuerzos"], "precio": "Consultar"}, {"seccion": "cusco", "nombre": "Maras Vivencial", "categoria": "Vivencial · Cultural", "badge": "Full Day", "duracion": "1 día | Fácil", "descripcion": "Cuatro vivencias en un solo día: textilería en Chinchero, convivencia con la comunidad de Misminay, sesión de medicina andina y preparación de una pachamanca ancestral que se disfruta en el almuerzo. Por la tarde, Moray y las Salineras de Maras.", "incluye": ["Recojo de hotel", "Transporte turístico", "Guía profesional en español e inglés", "Almuerzo tradicional (pachamanca)", "Las cuatro experiencias vivenciales", "Boleto turístico del Cusco", "Ingreso a las Salineras de Maras", "Desayuno"], "precio": "Consultar"}, {"seccion": "cusco", "nombre": "Montaña Pallay Punchu", "categoria": "Naturaleza", "badge": "Full Day", "duracion": "1 día | Moderada", "descripcion": "Una alternativa menos concurrida a la Montaña de Colores: ascenso de unos 30 minutos hasta la cima de Pallay Punchu, con vistas de franjas multicolores. Al regreso, parada opcional en el complejo arqueológico de Raqchi.", "incluye": ["Recojo de hotel", "Transporte turístico", "Guía profesional bilingüe", "Desayuno y almuerzo buffet", "Bastones", "Ingreso a la montaña", "Ingreso a Raqchi (opcional)"], "precio": "Desde S/ 110"}, {"seccion": "cusco", "nombre": "Cuatrimotos en Valle Rojo + Montaña de Colores", "categoria": "Aventura · Naturaleza", "badge": "Aventura", "duracion": "1 día | Moderada", "descripcion": "Sube en cuatrimoto hasta el mirador del Valle Rojo, camina unos 20 minutos hasta la Montaña de Colores y regresa a la base para almorzar. Incluye instrucción previa de manejo.", "incluye": ["Recojo de hotel", "Transporte turístico", "Guía profesional bilingüe", "Cuatrimoto simple o doble", "Desayuno y almuerzo buffet", "Bastones", "Ingreso a la montaña"], "precio": "Desde S/ 190"}, {"seccion": "cusco", "nombre": "Cuatrimotos Maras y Moray", "categoria": "Aventura", "badge": "Medio día", "duracion": "Medio día | Moderada", "descripcion": "Dos horas de manejo en cuatrimoto entre campos y comunidades hasta las terrazas de Moray, con vistas de los nevados Verónica y Chicón; después, visita a las Salineras de Maras en movilidad.", "incluye": ["Recojo de hotel", "Transporte turístico", "Guía profesional", "Cuatrimoto simple o doble", "Ingreso a las Salineras de Maras", "Boleto turístico del Cusco"], "precio": "Desde S/ 120"}, {"seccion": "cusco", "nombre": "Cuatrimotos Morada de los Dioses + Laguna Piuray", "categoria": "Aventura", "badge": "Medio día", "duracion": "Medio día | Moderada", "descripcion": "Recorrido de 50 km en cuatrimoto (unas 2 h 30 min) por la Morada de los Dioses, con sus esculturas talladas en roca y madera, y la Laguna de Piuray. Incluye charla de seguridad y práctica previa.", "incluye": ["Recojo en Plaza Regocijo o centro de Cusco", "Transporte turístico", "Guía profesional", "Cuatrimoto simple o doble", "Ingresos adicionales según la ruta elegida"], "precio": "Desde S/ 120"}];

  /* ---------- Catálogo adicional (aventura y místico) ---------- */
  var EXTRA = [
    { sec: 'aventura', n: 'Cuatrimotos (ATV)', cat: 'Aventura', dur: 'Medio día', d: '7 rutas: Moray + Minas de Sal de Maras, Laguna de Huaypo + Maras, Moray + Laguna de Huaypo, Laguna de Huaypo + Piuray, Checoq – Tiobamba + Huaypo, Morada de los Dioses y Montaña de Colores. 3 turnos: 6:50, 10:00 y 13:00 hrs.', inc: [], p: 'Consultar', a: 'atv quad cuatrimoto cuatriciclo' },
    { sec: 'aventura', n: 'Bicicletas Down Hill', cat: 'Aventura', dur: 'Medio día', d: '4 rutas: Moray + Maras Pueblo + Salineras, Laguna de Huaypo + Maras + Salineras, Laguna de Huaypo + Moray + Maras, y Tambomachay + Puca Pucara + Qenqo + Sacsayhuaman. Bicicleta con suspensión delantera incluida.', inc: [], p: 'Consultar', a: 'bici bicicleta bike downhill mountain' },
    { sec: 'aventura', n: 'Water Bike – Laguna Huaypo', cat: 'Aventura', dur: '8:30 – 13:30 hrs', d: 'Bicicleta acuática a 3,500 msnm con instrucción completa, guía exclusivo y observación de aves.', inc: ['Chaleco salvavidas', 'Snack y bebida fría', 'Ingreso incluido'], p: 'Consultar', a: 'water bike acuatica laguna huaypo' },
    { sec: 'aventura', n: 'Zip Line – Raqchi', cat: 'Aventura', dur: '4 horas', d: '4 líneas de tirolesa (200, 300, 680 y 700 metros) sobre el cañón Pacchayoc con vistas al Valle Sagrado. Instructores especializados.', inc: [], p: 'Consultar', a: 'zip line zipline tirolesa canopy raqchi' },
    { sec: 'aventura', n: 'Stand Up Paddle Board', cat: 'Aventura', dur: '8:30 – 13:30 hrs', d: 'SUP en la Laguna de Huaypo, la flota de SUP más alta del mundo.', inc: ['Wetsuit y chaleco salvavidas', 'Cortavientos y remo', 'Paddle personal', 'Snack y bebida fría', 'Ingreso incluido'], p: 'Consultar', a: 'sup paddle paddleboard stand up' },
    { sec: 'aventura', n: 'Paseo en Caballos', cat: 'Aventura', dur: '1:45 hrs de cabalgata', d: 'Caballo de Paso Peruano. Rutas: Sacsayhuaman (4 ruinas), Maras – Moray y Laguna de Huaypo.', inc: ['Arriero profesional', 'Cascos incluidos'], p: 'Consultar', a: 'caballo caballos cabalgata horse riding' },
    { sec: 'aventura', n: 'Servicios Combinados', cat: 'Aventura', dur: 'Varía', d: '4 paquetes: Cuatrimotos + Water Bike, Cuatrimotos + Maras + Water Bike, Cuatrimotos + Zip Line, y Water Bike + Zip Line. Mejor relación precio-experiencia.', inc: [], p: 'Consultar', a: 'combinado combinados paquete combo' },
    { sec: 'aventura', n: 'Excursiones Privadas VIP', cat: 'Aventura', dur: 'Privado', d: '4 experiencias exclusivas: Canteras Cachiccata + Inti Punku, Montaña de Colores VIP, Laguna Humantay VIP y Waqrapucara VIP. Servicio personalizado.', inc: [], p: 'Consultar', a: 'vip privado privada exclusivo' },
    { sec: 'mistico', n: 'Wachuma – Experiencia privada para 2', cat: 'Turismo místico', dur: '6 – 7 horas', d: 'Ceremonia privada con peregrinaje por la naturaleza, meditación y acompañamiento.', inc: ['Limpieza y protección energética', 'Meditación Energética Inca', 'Medicina musical', 'Guía espiritual o chamán', 'Consulta médica previa en clínica aliada', 'Transporte privado hotel – centro ceremonial'], p: 'US$ 350 por persona · US$ 700 total (2 personas)', a: 'wachuma huachuma san pedro cactus privada pareja' },
    { sec: 'mistico', n: 'Wachuma – Retiro Full Day', cat: 'Turismo místico', dur: '7:00 a.m. – 2:30 p.m.', d: 'Retiro grupal o privado en el santuario ceremonial de Rumira (Valle Sagrado), con salida desde Cusco y regreso el mismo día.', inc: ['Limpieza y protección energética', 'Meditación Energética Inca', 'Medicina musical', 'Libro "Cusco Attractions"', '7 cristales de protección', 'Consulta médica previa en clínica aliada', 'Transporte privado'], p: 'US$ 200 por persona', a: 'wachuma huachuma full day retiro' },
    { sec: 'mistico', n: 'Wachuma – Retiro 2 días / 1 noche', cat: 'Turismo místico', dur: '2 días / 1 noche', d: 'Pernocte en el Valle Sagrado, cena y desayuno veganos y ceremonia al día siguiente. Grupal o privada.', inc: ['Cena y desayuno veganos', 'Limpieza y protección energética', 'Meditación Energética Inca', 'Medicina musical', 'Consulta médica previa en clínica aliada'], p: 'US$ 320 por persona', a: 'wachuma huachuma 2 dias noche retiro' },
    { sec: 'mistico', n: 'Ayahuasca – Full Day', cat: 'Turismo místico', dur: '7:00 a.m. – 3:30 p.m.', d: 'Experiencia de purificación en Valle Sagrado · Calca. La ceremonia dura aproximadamente de 3 a 5 horas y la conduce un guía espiritual o chamán.', inc: ['Introducción a la medicina ancestral', 'Limpieza y protección energética', 'Meditación Energética Inca', 'Medicina musical (ícaros)', 'Consulta médica previa en la clínica San José', 'Cuestionario de salud física y psicológica', 'Transporte privado ida y retorno', 'Grupos de máximo 6 personas'], p: 'S/ 650 por persona', a: 'ayahuasca full day purificacion' },
    { sec: 'mistico', n: 'Ayahuasca – 2 días / 1 noche Grupal', cat: 'Turismo místico', dur: '2 días / 1 noche', d: 'Pernocte en el santuario y ceremonia en grupo reducido (máximo 6 personas).', inc: ['Introducción a la medicina ancestral', 'Medicina musical (ícaros)', 'Consulta médica previa', 'Staff presente durante toda la ceremonia'], p: 'S/ 950 por persona', a: 'ayahuasca 2 dias noche grupal' },
    { sec: 'mistico', n: 'Ayahuasca – 2 días / 1 noche Privado', cat: 'Turismo místico', dur: '2 días / 1 noche', d: 'Experiencia privada con atención personalizada durante todo el retiro.', inc: ['Introducción a la medicina ancestral', 'Medicina musical (ícaros)', 'Consulta médica previa', 'Staff presente durante toda la ceremonia'], p: 'S/ 1,100 por persona', a: 'ayahuasca 2 dias noche privado privada' },
    { sec: 'mistico', n: 'Baño de Florecimiento – Las Yerberas', cat: 'Turismo místico', dur: 'Consultar', d: 'Ritual andino de limpieza y renovación con flores, hierbas aromáticas, sales y cuarzos. Se puede vivir como servicio independiente o como complemento de tu ceremonia. Tipos: Limpieza y purificación, Amor y abundancia, Prosperidad.', inc: [], p: 'Consultar', a: 'bano florecimiento yerberas limpieza flores' }
  ];

  var REGIONS = [
    { n: 'Lima', c: 5, d: 'City Tour, Circuito Mágico del Agua, Museo Larco, Pachacamac, Tour Gastronómico', k: 'lima' },
    { n: 'Ica – Paracas', c: 5, d: 'Huacachina, Islas Ballestas, Ruta del Pisco, City Tour Ica', k: 'ica paracas huacachina ballestas pisco' },
    { n: 'Nazca', c: 3, d: 'Líneas de Nazca, Sobrevuelo, Pirámide de Cahuachi', k: 'nazca nasca' },
    { n: 'Tacna', c: 1, d: 'Tacna Ciudad + Campiña + Arica 2D/1N', k: 'tacna arica' },
    { n: 'Arequipa', c: 5, d: 'Cañón del Colca, Vuelo de los Cóndores, Tour 4 en 1 con Puno', k: 'arequipa colca condores' },
    { n: 'Puno', c: 5, d: 'Islas Uros, Taquile, Amantani, Sillustani, Ruta del Sol', k: 'puno titicaca uros taquile amantani sillustani' },
    { n: 'Oxapampa', c: 8, d: 'Selva Central, Pozuzo, Ruta del Café Villa Rica', k: 'oxapampa pozuzo villa rica' },
    { n: 'Pucallpa', c: 4, d: 'Río Ucayali, Tingo María, Yacuruna', k: 'pucallpa ucayali tingo maria' },
    { n: 'Iquitos', c: 8, d: 'Río Amazonas, Reserva Tamshiyacu, Mercado de Belén', k: 'iquitos amazonas amazonia belen' },
    { n: 'Piura', c: 9, d: 'Máncora, Punta Sal, Manglares de Tumbes, Avistamiento de ballenas', k: 'piura mancora punta sal tumbes ballenas' },
    { n: 'Puerto Maldonado', c: 5, d: 'Reserva Tambopata, Lago Sandoval, Collpa de Guacamayos', k: 'maldonado tambopata sandoval' },
    { n: 'Ayacucho', c: 6, d: 'Aguas Turquezas Huancaraylla, Vilcashuamán, Millpu', k: 'ayacucho huancaraylla vilcashuaman millpu' },
    { n: 'Trujillo', c: 5, d: 'Chan Chan, Huaca del Sol y la Luna, Huanchaco, Surf', k: 'trujillo chan huanchaco huaca' },
    { n: 'Huancayo', c: 4, d: 'Nevado Huaytapallana, Laguna La Encantada', k: 'huancayo huaytapallana' },
    { n: 'Cajamarca', c: 4, d: 'Carnaval de Cajamarca, Baños del Inca, Ecoturismo', k: 'cajamarca banos inca' },
    { n: 'Tarapoto – San Martín', c: 5, d: 'Laguna Azul, Cataratas de Ahuashiyacu, Moyobamba, Chachapoyas', k: 'tarapoto san martin moyobamba chachapoyas ahuashiyacu' }
  ];

  var GUIDES = [
    ['Álvaro Oblitas Mora', 'Guía Oficial de Turismo · Español – Inglés'],
    ['Manuel Arbulu Zevallos', 'Guía Oficial de Turismo · Español – Inglés'],
    ['Christian Pérez Ferro', 'Guía Oficial de Turismo · Español – Inglés'],
    ['Alexander Huamán Soto', 'Guía Oficial de Turismo · Español – Inglés'],
    ['Leidy Canal Carreño', 'Guía Oficial de Turismo · Español – Inglés'],
    ['Christian Calero Díaz', 'Guía espiritual – Altomisayoc · Español – Inglés'],
    ['Fernando', 'Guía espiritual – Altomisayoc · Español – Inglés']
  ];

  /* ---------- Utilidades ---------- */
  function norm(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9$%\s\/\-\.]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function toks(s) { return norm(s).split(/[^a-z0-9]+/).filter(Boolean); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function wa(msg, num) { return 'https://wa.me/' + (num || WA) + '?text=' + encodeURIComponent(msg); }
  function L(lang, es, en) { return lang === 'en' ? en : es; }

  var STOP = toks('de la el los las un una unos unas y e o en con por menos mas hasta maximo soles sol dolares dolar usd under below budget presupuesto barato baratos economico economicos facil faciles easy cheap para que quiero quisiera quisiero me mi mis tu tus su sus lo se hay tienen tiene ofrecen ofrece info informacion del al es son the of and to for in a an is are i want would like about tell you do does have what how much cost price precio precios cuanto cuesta cuestan costo costos tarifa tarifas valor vale cual cuales como puedo puede podria podrian saber ver mostrar muestrame dime hablame quiero please por favor hola hello hi tour tours dia dias noche noches viaje viajes full day cusco peru machu picchu machupicchu mapi paquete paquetes excursion excursiones ir hacer para me interesa interesan de donde there any some can');

  var ALIASES = [
    [/Tren Turístico Expeditions/i, 'expedition expeditions tren train'],
    [/Tren Local/i, 'tren local train peruanos nacionales'],
    [/Vistadome/i, 'vistadome hiram bingham tren train lujo'],
    [/Hidroel/i, 'hidroelectrica hydroelectric santa teresa'],
    [/Short Inka Trail/i, 'camino inca corto short inca trail 2 dias km 104'],
    [/Traditional Inka Trail/i, 'camino inca inca trail clasico tradicional 4 dias'],
    [/Inka Jungle/i, 'inca jungle jungle selva aventura rafting'],
    [/Lares Trek/i, 'lares caminata trek'],
    [/Salkantay/i, 'salkantay trek caminata'],
    [/Ausangate/i, 'ausangate rainbow vinicunca trek caminata'],
    [/Choquequirao/i, 'choquequirao choquequirau trek caminata'],
    [/Huchuy Qosqo|Huchuyqosqo/i, 'huchuy qosqo huchuyqosqo cusco pequeno'],
    [/Montaña de Colores \(Vinicunca\)/i, 'montana colores vinicunca rainbow mountain arcoiris'],
    [/Humantay/i, 'humantay laguna lake'],
    [/Valle Sagrado VIP/i, 'valle sagrado sacred valley moray maras pisac ollantaytambo vip'],
    [/Valle Sur/i, 'valle sur tipon pikillaqta rumicolca andahuaylillas'],
    [/City Tour Cusco/i, 'city tour ciudad cusco medio dia'],
    [/Realidad Virtual/i, 'realidad virtual vr virtual reality'],
    [/Lares Hot Spring/i, 'lares termas aguas calientes hot spring'],
    [/Siete Lagunas/i, 'siete lagunas seven lakes termas hot spring'],
    [/Cocalmayo/i, 'cocalmayo termas santa teresa hot spring'],
    [/Queswachaca/i, 'queswachaca puente inca bridge ultimo'],
    [/Waqrapucara/i, 'waqrapucara waqra pucara'],
    [/Pallay Punchu/i, 'pallay punchu poncho montana'],
    [/Free Walking/i, 'free walking tour gratis gratuito caminata'],
    [/5 Ruinas/i, 'cinco ruinas saqsayhuaman sacsayhuaman qenqo tambomachay puka pukara inkilltambo'],
    [/Maras Vivencial/i, 'maras vivencial moray salineras vivencia']
  ];

  /* Preparar catálogo unificado */
  var ITEMS = [];
  CATALOG.forEach(function (t) {
    var durParts = String(t.duracion || '').split('|');
    ITEMS.push({
      sec: t.seccion === 'machupicchu' ? 'mapi' : 'cusco',
      n: t.nombre, cat: t.categoria || '', badge: t.badge || '',
      dur: (durParts[0] || '').trim(), diff: (durParts[1] || '').trim(),
      d: t.descripcion || '', inc: t.incluye || [], p: t.precio || 'Consultar', a: ''
    });
  });
  EXTRA.forEach(function (x) { ITEMS.push({ sec: x.sec, n: x.n, cat: x.cat, badge: '', dur: x.dur, diff: '', d: x.d, inc: x.inc, p: x.p, a: x.a }); });
  ITEMS.forEach(function (it, i) {
    it.i = i;
    ALIASES.forEach(function (al) { if (al[0].test(it.n)) it.a += ' ' + al[1]; });
    it.tags = norm([it.n, it.cat, it.d, it.a, it.dur].join(' '));
    it.tokset = {};
    toks(it.tags).forEach(function (w) { it.tokset[w] = 1; });
    it.nameTok = {};
    toks(it.n + ' ' + it.a).forEach(function (w) { it.nameTok[w] = 1; });
    it.days = parseDays(it.dur);
    it.price = parsePrice(it.p);
  });

  function parseDays(s) {
    var n = norm(s);
    if (/medio dia/.test(n)) return 0.5;
    if (/hora/.test(n) && !/dia/.test(n)) return 0.3;
    var m = n.match(/(\d+)\s*dias?/);
    if (m) return +m[1];
    if (/full|1 dia/.test(n)) return 1;
    return null;
  }
  function parsePrice(p) {
    var out = { usd: null, pen: null };
    var m;
    if ((m = /Extranjeros\s+US\$\s*(\d[\d,]*)/i.exec(p))) out.usd = +m[1].replace(/,/g, '');
    if ((m = /Nacionales\s+S\/\.?\s*(\d[\d,]*)/i.exec(p))) out.pen = +m[1].replace(/,/g, '');
    if (out.usd === null && out.pen === null) {
      if ((m = /US\$\s*(\d[\d,]*)/i.exec(p))) out.usd = +m[1].replace(/,/g, '');
      if ((m = /S\/\.?\s*(\d[\d,]*)/i.exec(p))) out.pen = +m[1].replace(/,/g, '');
      if (/gratis/i.test(p)) { out.pen = 0; out.usd = 0; }
    }
    return out;
  }
  function fmtPrice(p, lang) {
    var m = /Extranjeros\s+US\$\s*(\d[\d,]*)\s*·?\s*Nacionales\s+S\/\.?\s*(\d[\d,]*)\s*\(?\s*US\$\s*(\d[\d,]*)\s*\)?/i.exec(p);
    if (m) {
      return L(lang, 'Extranjeros: US$ ' + m[1] + ' · Nacionales: S/ ' + m[2] + ' (US$ ' + m[3] + ')',
        'Foreigners: US$ ' + m[1] + ' · Nationals: S/ ' + m[2] + ' (US$ ' + m[3] + ')');
    }
    m = /Nacionales\s+S\/\.?\s*(\d[\d,]*)\s*\(?\s*US\$\s*(\d[\d,]*)\s*\)?/i.exec(p);
    if (m && /^Nacionales/i.test(p)) return L(lang, 'Nacionales: S/ ' + m[1] + ' (US$ ' + m[2] + ')', 'Nationals: S/ ' + m[1] + ' (US$ ' + m[2] + ')');
    var r = String(p).replace(/S\/\.\s*/g, 'S/ ').replace(/^Desde/i, L(lang, 'Desde', 'From'));
    if (/^Consultar$/i.test(p)) return L(lang, 'Precio: consultar por WhatsApp', 'Price: ask on WhatsApp');
    if (/gratis/i.test(p)) return L(lang, '¡GRATIS!', 'FREE!');
    return r;
  }

  /* ---------- Idioma ---------- */
  var EN_W = toks('the you what how can want much where please hello hi thanks thank is are do does book price cost trip days include included available tell about any which best english speak payment pay tickets ticket');
  var ES_W = toks('el la los las que quiero cuanto donde hola gracias para con dias incluye precio tienen puedo una un de del por favor cuesta reservar entradas pagos');
  function detectLang(text, prev) {
    var t = toks(text), en = 0, es = 0;
    t.forEach(function (w) { if (EN_W.indexOf(w) >= 0) en++; if (ES_W.indexOf(w) >= 0) es++; });
    if (en > es) return 'en';
    if (es > en) return 'es';
    return prev || 'es';
  }

  /* ---------- Búsqueda de tours ---------- */
  function searchTours(text) {
    var q = toks(text).filter(function (w) { return STOP.indexOf(w) < 0 && w.length > 1; });
    if (!q.length) return [];
    var scored = [];
    ITEMS.forEach(function (it) {
      var s = 0, hits = 0;
      q.forEach(function (w) {
        if (it.nameTok[w]) { s += 3; hits++; }
        else if (it.tokset[w]) { s += 1; hits++; }
        else if (w.length >= 5) {
          for (var k in it.nameTok) { if (k.length >= 5 && (k.indexOf(w) === 0 || w.indexOf(k) === 0)) { s += 2; hits++; break; } }
        }
      });
      if (hits && (s >= 2 || hits >= 2)) scored.push({ it: it, s: s + hits / 10 });
    });
    scored.sort(function (a, b) { return b.s - a.s; });
    if (!scored.length) return [];
    var top = scored[0].s;
    return scored.filter(function (x) { return x.s >= top - 0.01 || x.s >= top * 0.75; }).slice(0, 5).map(function (x) { return x.it; });
  }

  function filterQuery(text) {
    var n = norm(text), f = {}, any = false, m;
    if ((m = /(\d+)\s*(dias?|days?)/.exec(n))) { f.days = +m[1]; any = true; }
    else if (/medio dia|half day|half-day/.test(n)) { f.days = 0.5; any = true; }
    else if (/un dia|1 dia|full day|one day|day trip/.test(n)) { f.days = 1; any = true; }
    if (/(\d+)\s*\+\s*(dias?|days?)|mas de (\d+)|(\d+)\s*dias o mas/.test(n)) { f.min = true; }
    if ((m = /(?:menos de|hasta|maximo|under|below|max|budget|presupuesto)\s*(?:de\s*)?(s\/|\$|us\$|usd)?\s*(\d+)\s*(soles|dolares|usd|s\/|dollars)?/.exec(n)) ||
        (m = /(s\/|us\$|\$)\s*(\d+)\s*(?:o menos|or less)/.exec(n))) {
      f.budget = +m[2];
      var cur = (m[1] || '') + ' ' + (m[3] || '');
      f.cur = /\$|usd|dolar|dollar/.test(cur) ? 'usd' : (/s\/|sol/.test(cur) ? 'pen' : (f.budget > 400 ? 'pen' : 'pen'));
      any = true;
    }
    if (/facil|easy|relax/.test(n)) { f.diff = 'facil'; any = true; }
    if (/desafi|challeng|dificil|hard|dificultad alta/.test(n)) { f.diff = 'desafio'; any = true; }
    if (/barato|economic|cheap|low cost|affordable/.test(n)) { f.cheap = true; any = true; }
    return any ? f : null;
  }
  function applyFilter(f) {
    var res = ITEMS.filter(function (it) {
      if (it.sec !== 'mapi' && it.sec !== 'cusco') return false;
      if (f.days !== undefined) {
        if (it.days === null) return false;
        if (f.min) { if (it.days < f.days) return false; }
        else if (f.days >= 4) { if (it.days < 4) return false; }
        else if (Math.floor(it.days) !== Math.floor(f.days) && it.days !== f.days) return false;
      }
      if (f.budget !== undefined) {
        var v = f.cur === 'usd' ? it.price.usd : it.price.pen;
        if (v === null || v === undefined || v > f.budget) return false;
      }
      if (f.diff === 'facil' && !/f[aá]cil/i.test(it.diff)) return false;
      if (f.diff === 'desafio' && !/desaf/i.test(it.diff)) return false;
      return true;
    });
    if (f.cheap) {
      res = res.filter(function (it) { return it.price.pen !== null; }).sort(function (a, b) { return a.price.pen - b.price.pen; }).slice(0, 8);
    }
    return res;
  }

  /* ---------- Render ---------- */
  function badge(it) { return it.badge ? '<span class="llb-tag">' + esc(it.badge) + '</span>' : ''; }
  function card(it, lang) {
    var inc = it.inc.slice(0, 5).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('');
    var more = it.inc.length > 5 ? '<li class="llb-more">+' + (it.inc.length - 5) + L(lang, ' más…', ' more…') + '</li>' : '';
    var sec = { mapi: 'catalogos', cusco: 'catalogos', aventura: 'aventura', mistico: 'misticos' }[it.sec];
    var meta = [it.dur, it.diff].filter(Boolean).map(esc).join(' · ');
    var msg = L(lang, 'Hola Luna Llena Tours, quiero información sobre: ' + it.n, 'Hello Luna Llena Tours, I would like information about: ' + it.n);
    return '<div class="llb-card"><div class="llb-card-h">' + esc(it.n) + badge(it) + '</div>' +
      (meta ? '<div class="llb-meta">🕒 ' + meta + '</div>' : '') +
      (it.d ? '<div class="llb-desc">' + esc(it.d) + '</div>' : '') +
      (inc ? '<div class="llb-inc">' + L(lang, 'Incluye', 'Includes') + ':</div><ul>' + inc + more + '</ul>' : '') +
      '<div class="llb-price">💰 ' + esc(fmtPrice(it.p, lang)) + '</div>' +
      '<div class="llb-btns"><button class="llb-btn" data-book="' + it.i + '">' + L(lang, '📅 Reservar', '📅 Book') + '</button>' +
      '<a class="llb-btn llb-btn-wa" target="_blank" rel="noopener" href="' + wa(msg) + '">WhatsApp</a>' +
      '<button class="llb-btn llb-btn-ghost" data-go="' + sec + '">' + L(lang, 'Ver en la web', 'See on site') + '</button></div></div>';
  }
  function listHtml(items, lang) {
    return '<div class="llb-list">' + items.map(function (it) {
      return '<button class="llb-li" data-tour="' + it.i + '"><b>' + esc(it.n) + '</b><span>' + esc(it.dur) + ' · ' + esc(fmtPrice(it.p, lang)) + '</span></button>';
    }).join('') + '</div>';
  }
  function waBtn(lang, msg, label) {
    return '<a class="llb-btn llb-btn-wa llb-block" target="_blank" rel="noopener" href="' + wa(msg) + '">💬 ' + esc(label || L(lang, 'Escribir por WhatsApp', 'Chat on WhatsApp')) + '</a>';
  }
  function menuChips(lang) {
    return [
      { l: L(lang, '🏛️ Machu Picchu', '🏛️ Machu Picchu'), c: 'mapi' },
      { l: L(lang, '🌄 Cusco tradicional', '🌄 Cusco classic'), c: 'cusco' },
      { l: L(lang, '🧗 Aventura', '🧗 Adventure'), c: 'aventura' },
      { l: L(lang, '🌿 Místico', '🌿 Mystic'), c: 'mistico' },
      { l: L(lang, '🇵🇪 Perú profundo', '🇵🇪 All of Peru'), c: 'peru' },
      { l: L(lang, '🎟️ Entradas', '🎟️ Tickets'), c: 'entradas' },
      { l: L(lang, '💳 Pagos', '💳 Payments'), c: 'pagos' },
      { l: L(lang, '📅 Reservar', '📅 Book'), c: 'reservar' },
      { l: L(lang, '🧭 Recomiéndame', '🧭 Recommend'), c: 'recomendar' }
    ];
  }
  var NOTE_PRICES = function (lang) {
    return L(lang, '<small>Tarifas referenciales, sujetas a disponibilidad. Las tarifas en soles no incluyen IGV.</small>',
      '<small>Reference rates, subject to availability. Rates in soles do not include IGV (VAT).</small>');
  };

  /* ---------- Intenciones ---------- */
  var INTENTS = [
    { id: 'human', w: 3, re: /whatsapp|contacto|contactar|telefono|llamar|numero|celular|correo|email|mail|contact|phone|call you|asesor|humano|persona real|agente|speak to|talk to/ },
    { id: 'ubicacion', w: 3, re: /donde (estan|queda|se ubica|es la oficina)|direccion|ubicacion|oficina|address|located|location|office|san blas|chihuampata|san borja/ },
    { id: 'pagos', w: 4, re: /pago|pagar|tarjeta|yape|plin|paypal|visa|mastercard|transferencia|deposito|western|remitly|payment|pay |card|cancel|anular|no show|politica|adelanto|50 ?%|igv|reembolso|refund|deposit/ },
    { id: 'entradas', w: 4, re: /entrada|boleto|ticket|tuboleto|circuito|admission|ingreso a machu|boleto turistico|integral/ },
    { id: 'reservar', w: 5, re: /reservar|reserva |quiero reservar|book |booking|cotiz|quote|hacer una reserva|separar|apartar/ },
    { id: 'aventura', w: 3, re: /aventura|cuatrimoto|atv|quad|down ?hill|bicicleta|bike|water bike|zip ?line|tirolesa|paddle|\bsup\b|caballo|cabalgata|adventure|horse|adrenalina/ },
    { id: 'mistico', w: 3, re: /wachuma|huachuma|san pedro|ayahuasca|ceremonia|mistic|espiritual|bano de florecimiento|yerbera|ceremony|spiritual|retiro|chaman|shaman/ },
    { id: 'peru', w: 3, re: /peru profundo|cobertura|regiones|todo el peru|other cities|otras ciudades|nationwide|lima|paracas|huacachina|ica\b|nazca|nasca|arequipa|colca|puno|titicaca|uros|taquile|iquitos|amazon|piura|mancora|tumbes|maldonado|tambopata|ayacucho|trujillo|huancayo|cajamarca|tarapoto|oxapampa|pucallpa|tacna/ },
    { id: 'guias', w: 3, re: /\bguias?\b|equipo|guide|team|quien(es)? (me )?(guia|acompan)|idiomas|ingles|english speaking/ },
    { id: 'empresa', w: 3, re: /quienes son|nosotros|empresa|agencia|\bruc\b|razon social|about you|about us|company|licencia|dircetur|tripadvisor|opiniones|reviews|resenas|confiable|confianza|legal|desde cuando|iso/ },
    { id: 'gratis', w: 3, re: /gratis|gratuito|free walking|free salsa|\bfree\b/ },
    { id: 'recomendar', w: 3, re: /recomiend|recomendar|que tour|sugerenc|primera vez|que me conviene|que hacer|recommend|suggest|what should|first time|best tour|mejor tour|ayudame a elegir|help me choose|itinerario/ },
    { id: 'mapi', w: 2, re: /machu ?picchu|\bmapi\b|inka trail|camino inca|inca trail|salkantay|inka jungle|inca jungle|tren a|train to/ },
    { id: 'cusco', w: 2, re: /tours? (en|de|por) cusco|cusco tradicional|cusco tours|tours in cusco|valle sagrado|cusco classic/ },
    { id: 'catalogo', w: 2, re: /catalogo|que tours|que ofrecen|que ofrece|que servicios|todos los tours|tours disponibles|what tours|what do you offer|packages|paquetes|menu|opciones|options|services/ },
    { id: 'precio', w: 1, re: /precio|cuanto|cuesta|costo|tarifa|price|how much|cost|rate/ },
    { id: 'gracias', w: 5, re: /^(muchas )?gracias|thank|thanks|chau|adios|hasta luego|bye|listo gracias|ok gracias/ },
    { id: 'saludo', w: 4, re: /^(hola|holi|buenas|buenos|buen dia|hello|hi\b|hey|saludos|good (morning|afternoon|evening))/ }
  ];

  function detectIntent(text) {
    var n = norm(text), best = null, bs = 0;
    INTENTS.forEach(function (it) {
      if (it.re.test(n)) {
        var s = it.w;
        if (s > bs) { bs = s; best = it.id; }
      }
    });
    return best;
  }

  function regionMatch(text) {
    var q = toks(text), hit = [];
    REGIONS.forEach(function (r) {
      var kw = r.k.split(' ');
      for (var i = 0; i < q.length; i++) {
        if (q[i].length >= 3 && kw.indexOf(q[i]) >= 0) { hit.push(r); break; }
      }
    });
    return hit;
  }

  /* ---------- Respuestas ---------- */
  var H = {};
  H.saludo = function (st) {
    var l = st.lang;
    return { parts: [L(l,
      '¡Hola! 👋 Soy el asistente virtual de <b>Luna Llena Tours</b>, operadores directos en Cusco desde 2018. Te ayudo con tours, precios, entradas, pagos y reservas. ¿Qué te gustaría ver?',
      'Hello! 👋 I\'m the virtual assistant of <b>Luna Llena Tours</b>, direct operators in Cusco since 2018. I can help with tours, prices, tickets, payments and bookings. What would you like to see?')], chips: menuChips(l) };
  };
  H.catalogo = function (st) {
    var l = st.lang;
    return { parts: [L(l,
      'Tenemos tres catálogos más aventura y turismo místico. Elige una categoría:',
      'We have three catalogs plus adventure and mystic tourism. Pick a category:')], chips: menuChips(l) };
  };
  H.mapi = function (st) {
    var l = st.lang, items = ITEMS.filter(function (i) { return i.sec === 'mapi'; });
    return { parts: [L(l, '🏛️ <b>Rutas a Machu Picchu</b> — en tren, en carro, trekking y combinados. Toca uno para ver detalles:',
      '🏛️ <b>Machu Picchu routes</b> — by train, by car, treks and combos. Tap one for details:'), listHtml(items, l), NOTE_PRICES(l)],
      chips: [{ l: L(l, '🎟️ Entrada a Machu Picchu', '🎟️ Machu Picchu tickets'), c: 'entradas' }, { l: L(l, '🧭 Recomiéndame', '🧭 Recommend'), c: 'recomendar' }, { l: L(l, '📅 Reservar', '📅 Book'), c: 'reservar' }] };
  };
  H.cusco = function (st) {
    var l = st.lang, items = ITEMS.filter(function (i) { return i.sec === 'cusco'; });
    return { parts: [L(l, '🌄 <b>Cusco Tradicional</b> — Valle Sagrado, Montaña de Colores, Humantay, termas, city tours y más:',
      '🌄 <b>Cusco Classic</b> — Sacred Valley, Rainbow Mountain, Humantay, hot springs, city tours and more:'), listHtml(items, l), NOTE_PRICES(l)],
      chips: [{ l: L(l, '🧗 Aventura', '🧗 Adventure'), c: 'aventura' }, { l: L(l, '🧭 Recomiéndame', '🧭 Recommend'), c: 'recomendar' }, { l: L(l, '📅 Reservar', '📅 Book'), c: 'reservar' }] };
  };
  H.aventura = function (st) {
    var l = st.lang, items = ITEMS.filter(function (i) { return i.sec === 'aventura'; });
    return { parts: [L(l, '🧗 <b>Cusco Aventura</b> — adrenalina pura en el Valle Sagrado, Maras, Moray y la Laguna de Huaypo. Toca una actividad:',
      '🧗 <b>Cusco Adventure</b> — pure adrenaline in the Sacred Valley, Maras, Moray and Huaypo Lagoon. Tap an activity:'), listHtml(items, l),
      L(l, '<small>Algunas actividades con precio: cuatrimotos desde S/ 120 (Maras–Moray y Morada de los Dioses + Piuray) y desde S/ 190 (Valle Rojo + Montaña de Colores). Para el resto, el precio se confirma por WhatsApp.</small>',
        '<small>Some priced activities: ATV from S/ 120 (Maras–Moray and Morada de los Dioses + Piuray) and from S/ 190 (Red Valley + Rainbow Mountain). For the rest, prices are confirmed on WhatsApp.</small>')],
      chips: [{ l: L(l, '📅 Reservar', '📅 Book'), c: 'reservar' }, { l: L(l, '🏛️ Machu Picchu', '🏛️ Machu Picchu'), c: 'mapi' }] };
  };
  H.mistico = function (st) {
    var l = st.lang, items = ITEMS.filter(function (i) { return i.sec === 'mistico'; });
    return { parts: [L(l, '🌿 <b>Turismo Místico</b> — ceremonias ancestrales en un espacio cuidado y acompañado. Servicios: Wachuma (desde US$ 200), Ayahuasca (desde S/ 650) y Baño de Florecimiento.',
      '🌿 <b>Mystic Tourism</b> — ancestral ceremonies in a protected, guided space. Services: Wachuma (from US$ 200), Ayahuasca (from S/ 650) and Flowering Bath.'), listHtml(items, l),
      L(l, '<small>Antes de reservar, consúltanos sobre tu estado de salud y medicación: se incluye consulta médica previa.</small>',
        '<small>Before booking, tell us about your health and medication: a prior medical consultation is included.</small>')],
      chips: [{ l: L(l, '📅 Reservar', '📅 Book'), c: 'reservar' }] };
  };
  H.peru = function (st, text) {
    var l = st.lang, hit = text ? regionMatch(text) : [];
    if (hit.length) {
      var html = hit.map(function (r) {
        return '<div class="llb-card"><div class="llb-card-h">' + esc(r.n) + '<span class="llb-tag">' + r.c + L(l, ' tours', ' tours') + '</span></div><div class="llb-desc">' + esc(r.d) + '</div></div>';
      }).join('');
      return { parts: [L(l, 'Sí, tenemos tours en esa zona del Perú 🇵🇪:', 'Yes, we have tours in that area of Peru 🇵🇪:'), html,
        L(l, 'Los precios de <b>Perú Profundo</b> se cotizan según fechas y grupo. Te los confirman por WhatsApp:', '<b>All-Peru</b> prices are quoted by dates and group size. Confirm on WhatsApp:'),
        waBtn(l, L(l, 'Hola Luna Llena Tours, quiero cotizar tours en ' + hit[0].n, 'Hello Luna Llena Tours, I would like a quote for tours in ' + hit[0].n))],
        chips: [{ l: L(l, '🇵🇪 Ver todas las regiones', '🇵🇪 All regions'), c: 'peru' }, { l: L(l, '📅 Reservar', '📅 Book'), c: 'reservar' }] };
    }
    var all = REGIONS.map(function (r) { return '<div class="llb-reg"><b>' + esc(r.n) + '</b> · ' + r.c + ' tours<br><span>' + esc(r.d) + '</span></div>'; }).join('');
    return { parts: [L(l, '🇵🇪 <b>Perú Profundo</b>: cobertura nacional en 16 regiones.', '🇵🇪 <b>All of Peru</b>: nationwide coverage in 16 regions.'), '<div class="llb-regs">' + all + '</div>',
      L(l, '¿Cuál región te interesa? Escríbela o consulta precios por WhatsApp.', 'Which region interests you? Type it or ask for prices on WhatsApp.'),
      waBtn(l, L(l, 'Hola Luna Llena Tours, quiero cotizar un tour en otras regiones del Perú.', 'Hello Luna Llena Tours, I would like a quote for a tour in other regions of Peru.'))],
      chips: menuChips(l).slice(0, 4) };
  };
  H.entradas = function (st, text) {
    var l = st.lang, n = norm(text || '');
    var circ = /circuito|circuit/.test(n);
    var parts = [];
    if (circ) {
      parts.push(L(l,
        '🎟️ <b>Boleto Turístico del Cusco</b><br>• <b>Circuito I · Zona Alta</b> (1 día): Saqsayhuamán, Q’enqo, Puka Pukara y Tambomachay.<br>• <b>Circuito II · Museos, Ciudad y Valle Sur</b> (2 días): museos de la ciudad (Qorikancha, Histórico Regional, Arte Contemporáneo y Arte Popular), Monumento a Pachacuteq, Centro Qosqo de Arte Nativo, y los parques de Tipón y Pikillaqta.<br>• <b>Circuito III · Valle Sagrado</b> (2 días): Ollantaytambo, Pisac, Chinchero y Moray.',
        '🎟️ <b>Cusco Tourist Ticket</b><br>• <b>Circuit I · Upper Zone</b> (1 day): Saqsayhuamán, Q’enqo, Puka Pukara and Tambomachay.<br>• <b>Circuit II · Museums, City and South Valley</b> (2 days): city museums (Qorikancha, Regional History, Contemporary Art and Popular Art), Pachacuteq Monument, Qosqo Native Art Center, and Tipón and Pikillaqta parks.<br>• <b>Circuit III · Sacred Valley</b> (2 days): Ollantaytambo, Pisac, Chinchero and Moray.'));
      parts.push(L(l,
        '🏔️ <b>Circuitos de Machu Picchu</b><br>• <b>1 · Panorámico</b>: la foto clásica desde la terraza superior; permite caminatas opcionales a Intipunku, Puente Inca o Montaña Machu Picchu.<br>• <b>2 · Clásico</b>: recorrido completo por la llacta (zona urbana y agrícola, Intihuatana y Templo del Sol).<br>• <b>3 · Realeza / Zona inferior</b>: para ingresos desde el Camino Inca o para quienes suben Waynapicchu o Huchuy Picchu.',
        '🏔️ <b>Machu Picchu circuits</b><br>• <b>1 · Panoramic</b>: the classic photo from the upper terrace; optional hikes to Intipunku, Inca Bridge or Machu Picchu Mountain.<br>• <b>2 · Classic</b>: the fullest tour of the citadel (urban and agricultural areas, Intihuatana and Temple of the Sun).<br>• <b>3 · Royalty / Lower zone</b>: for entries from the Inca Trail or for those climbing Waynapicchu or Huchuy Picchu.'));
      return { parts: parts, chips: [{ l: L(l, '💵 Ver tarifas', '💵 See rates'), c: 'entradas' }, { l: L(l, '📅 Reservar', '📅 Book'), c: 'reservar' }] };
    }
    parts.push(L(l,
      '🎟️ <b>Boleto Turístico del Cusco</b><br><u>Extranjeros</u>: Integral general (16 atractivos, 10 días) <b>S/ 130</b> · Integral estudiantes (18–25 años, carné vigente o ISIC) <b>S/ 70</b> · Parcial (un circuito I, II o III) <b>S/ 70</b>.<br><u>Nacionales</u>: Integral general <b>S/ 70</b> · Estudiantes y menores <b>S/ 40</b>.',
      '🎟️ <b>Cusco Tourist Ticket</b><br><u>Foreigners</u>: General integral (16 sites, 10 days) <b>S/ 130</b> · Student integral (ages 18–25, valid ID or ISIC) <b>S/ 70</b> · Partial (one circuit I, II or III) <b>S/ 70</b>.<br><u>Nationals</u>: General integral <b>S/ 70</b> · Students and minors <b>S/ 40</b>.'));
    parts.push(L(l,
      '🏔️ <b>Entrada a Machu Picchu</b><br><u>Extranjeros</u>: Adultos <b>S/ 152</b> · Estudiantes de educación superior <b>S/ 77</b> · Menores de 3 a 17 años <b>S/ 70</b>.<br><u>Nacionales y países de la CAN</u>: Adulto general (circuitos clásicos) <b>S/ 64</b> · Estudiantes y menores de 3 a 17 <b>S/ 32</b> · Rutas especiales con Huayna Picchu o montañas (adultos) <b>S/ 112</b>.',
      '🏔️ <b>Machu Picchu ticket</b><br><u>Foreigners</u>: Adults <b>S/ 152</b> · Higher-education students <b>S/ 77</b> · Ages 3–17 <b>S/ 70</b>.<br><u>Nationals and CAN countries</u>: General adult (classic circuits) <b>S/ 64</b> · Students and ages 3–17 <b>S/ 32</b> · Special routes with Huayna Picchu or mountains (adults) <b>S/ 112</b>.'));
    parts.push(L(l,
      '<small>Dónde comprarla: en línea en tuboleto.cultura.pe (reserva con meses de anticipación en temporada alta) o presencialmente en el centro cultural de Machu Picchu Pueblo, que vende hasta 1,000 boletos diarios y requiere hacer cola el día anterior con DNI o pasaporte físico. Tarifas referenciales sujetas a cambio por el Ministerio de Cultura. Las tarifas reducidas requieren documentación en boletería.</small>',
      '<small>Where to buy: online at tuboleto.cultura.pe (book months ahead in high season) or in person at the cultural center in Machu Picchu Pueblo, which sells up to 1,000 tickets a day and requires queuing the day before with a physical ID or passport. Reference rates, subject to change by the Ministry of Culture. Reduced rates require documents at the ticket office.</small>'));
    return { parts: parts, chips: [{ l: L(l, '🗺️ Ver circuitos', '🗺️ See circuits'), c: 'circuitos' }, { l: L(l, '🏛️ Tours a Machu Picchu', '🏛️ Machu Picchu tours'), c: 'mapi' }, { l: L(l, '📅 Reservar', '📅 Book'), c: 'reservar' }] };
  };
  H.pagos = function (st) {
    var l = st.lang;
    return { parts: [L(l,
      '💳 <b>Formas de pago y política de reservas</b><br>• La reserva se hace con el <b>pago del 50%</b> del costo total, para asegurar lo sujeto a disponibilidad (tickets de Machu Picchu, tren turístico, vuelos, hoteles, etc.). El <b>50% restante</b> se paga días antes de los tours.<br>• Toda reserva se solicita por <b>WhatsApp, e-mail o teléfono</b>.<br>• Cancelaciones de último momento: cobro <b>NO SHOW del 100%</b>.<br>• Tarifas en soles, no incluyen IGV.<br>• Consulta disponibilidad de hoteles, Airbnb, vuelos y tickets de Machu Picchu.<br>• Aceptamos toda forma de pago: <b>Visa, MasterCard, Diners Club, American Express, Western Union, PayPal, Remitly, Plin y Yape</b>.',
      '💳 <b>Payment methods and booking policy</b><br>• A booking is made with a <b>50% payment</b> of the total cost, to secure items subject to availability (Machu Picchu tickets, tourist train, flights, hotels, etc.). The <b>remaining 50%</b> is paid days before the tours.<br>• Every booking is requested via <b>WhatsApp, e-mail or phone</b>.<br>• Last-minute cancellations: <b>100% NO SHOW</b> charge.<br>• Rates in soles do not include IGV (VAT).<br>• Ask about availability of hotels, Airbnb, flights and Machu Picchu tickets.<br>• We accept all forms of payment: <b>Visa, MasterCard, Diners Club, American Express, Western Union, PayPal, Remitly, Plin and Yape</b>.'),
      waBtn(l, L(l, 'Hola Luna Llena Tours, tengo una consulta sobre formas de pago.', 'Hello Luna Llena Tours, I have a question about payment methods.'))],
      chips: [{ l: L(l, '📅 Reservar', '📅 Book'), c: 'reservar' }, { l: L(l, '📞 Contacto', '📞 Contact'), c: 'human' }] };
  };
  H.human = function (st) {
    var l = st.lang;
    return { parts: [L(l,
      '📞 <b>Contáctanos</b><br>WhatsApp: <a href="' + wa('Hola Luna Llena Tours') + '" target="_blank" rel="noopener">930 299 443</a> | <a href="' + wa('Hola Luna Llena Tours', WA2) + '" target="_blank" rel="noopener">982 360 927</a><br>Email: fullmoontravelagency@gmail.com · lunallenatours@gmail.com<br>Web: www.lunallenatravel.com<br>Facebook: <a href="https://www.facebook.com/AgenciadeviajesLunaLlena/" target="_blank" rel="noopener">Agencia de viajes Luna Llena</a>',
      '📞 <b>Contact us</b><br>WhatsApp: <a href="' + wa('Hello Luna Llena Tours') + '" target="_blank" rel="noopener">930 299 443</a> | <a href="' + wa('Hello Luna Llena Tours', WA2) + '" target="_blank" rel="noopener">982 360 927</a><br>Email: fullmoontravelagency@gmail.com · lunallenatours@gmail.com<br>Web: www.lunallenatravel.com<br>Facebook: <a href="https://www.facebook.com/AgenciadeviajesLunaLlena/" target="_blank" rel="noopener">Agencia de viajes Luna Llena</a>'),
      waBtn(l, L(l, 'Hola Luna Llena Tours, quisiera hablar con un asesor.', 'Hello Luna Llena Tours, I would like to speak with an advisor.'), L(l, 'Hablar con un asesor', 'Talk to an advisor'))],
      chips: [{ l: L(l, '📍 Dirección', '📍 Address'), c: 'ubicacion' }, { l: L(l, '📅 Reservar', '📅 Book'), c: 'reservar' }] };
  };
  H.ubicacion = function (st) {
    var l = st.lang;
    return { parts: [L(l, '📍 <b>Oficina Cusco</b>: Calle Chihuampata 543, San Blas.<br>📍 <b>Oficina Lima</b>: Av. San Borja Sur 659-B.',
      '📍 <b>Cusco office</b>: Calle Chihuampata 543, San Blas.<br>📍 <b>Lima office</b>: Av. San Borja Sur 659-B.'),
      '<a class="llb-btn llb-btn-ghost llb-block" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Calle Chihuampata 543 San Blas Cusco') + '">🗺️ ' + L(l, 'Abrir en Google Maps', 'Open in Google Maps') + '</a>'],
      chips: [{ l: L(l, '📞 Contacto', '📞 Contact'), c: 'human' }, { l: L(l, '📅 Reservar', '📅 Book'), c: 'reservar' }] };
  };
  H.guias = function (st) {
    var l = st.lang;
    var list = GUIDES.map(function (g) { return '• <b>' + esc(g[0]) + '</b><br><small>' + esc(g[1]) + '</small>'; }).join('<br>');
    return { parts: [L(l, '🧑‍🏫 <b>Nuestro equipo de guías</b> (profesionales certificados):', '🧑‍🏫 <b>Our guide team</b> (certified professionals):'), list,
      '<button class="llb-btn llb-btn-ghost llb-block" data-go="equipo">' + L(l, 'Ver fotos en la web', 'See photos on site') + '</button>'],
      chips: menuChips(l).slice(0, 4) };
  };
  H.empresa = function (st) {
    var l = st.lang;
    return { parts: [L(l,
      '🌙 <b>Luna Llena Tours</b> — operadores directos en Cusco desde 2018.<br>Razón social: Full Moon Travel Agency E.I.R.L.<br>RUC: 20603319428 · Código Municipal: 006784-2018<br>Respaldados por Dircetur Cusco, Mincetur y Ministerio de Cultura. Reconocimientos y listados: TripAdvisor, Lonely Planet e ISO 9001, según indica nuestra web.<br>Ofrecemos tours a Machu Picchu, Cusco, aventura, turismo místico y cobertura en 16 regiones del Perú.',
      '🌙 <b>Luna Llena Tours</b> — direct operators in Cusco since 2018.<br>Legal name: Full Moon Travel Agency E.I.R.L.<br>RUC: 20603319428 · Municipal code: 006784-2018<br>Backed by Dircetur Cusco, Mincetur and the Ministry of Culture. Listings and certifications: TripAdvisor, Lonely Planet and ISO 9001, as shown on our site.<br>We offer Machu Picchu, Cusco, adventure and mystic tours, with coverage in 16 regions of Peru.'),
      '<a class="llb-btn llb-btn-ghost llb-block" target="_blank" rel="noopener" href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d28259074-Reviews-Luna_Llena_Travel-Cusco_Cusco_Region.html">⭐ ' + L(l, 'Ver opiniones en TripAdvisor', 'See reviews on TripAdvisor') + '</a>'],
      chips: [{ l: L(l, '🧑‍🏫 Guías', '🧑‍🏫 Guides'), c: 'guias' }, { l: L(l, '📞 Contacto', '📞 Contact'), c: 'human' }] };
  };
  H.gratis = function (st) {
    var l = st.lang;
    return { parts: [L(l, '🎁 Tenemos actividades gratuitas: el <b>Free Walking Tour</b> (2–3 horas) y la <b>Free Salsa Lesson</b>. Consulta fechas y punto de encuentro por WhatsApp.',
      '🎁 We have free activities: the <b>Free Walking Tour</b> (2–3 hours) and the <b>Free Salsa Lesson</b>. Ask for dates and meeting point on WhatsApp.'),
      listHtml(ITEMS.filter(function (i) { return /Free Walking/.test(i.n); }), l),
      waBtn(l, L(l, 'Hola Luna Llena Tours, quiero información del Free Walking Tour / Free Salsa Lesson.', 'Hello Luna Llena Tours, I would like information about the Free Walking Tour / Free Salsa Lesson.'))],
      chips: menuChips(l).slice(0, 4) };
  };
  H.recomendar = function (st) {
    var l = st.lang;
    return { parts: [L(l, '🧭 Te ayudo a elegir. <b>¿De cuánto tiempo dispones?</b> También puedes escribirme tu presupuesto (ej. “menos de 150 soles”).',
      '🧭 Let me help you choose. <b>How much time do you have?</b> You can also type your budget (e.g. “under 150 soles”).')],
      chips: [{ l: L(l, 'Medio día', 'Half day'), c: 'filtro', t: 'medio dia' }, { l: L(l, '1 día', '1 day'), c: 'filtro', t: '1 dia' },
        { l: L(l, '2 días', '2 days'), c: 'filtro', t: '2 dias' }, { l: L(l, '3 días', '3 days'), c: 'filtro', t: '3 dias' },
        { l: L(l, '4 días o más', '4+ days'), c: 'filtro', t: '4 dias o mas' }, { l: L(l, 'Económicos', 'Budget'), c: 'filtro', t: 'baratos' },
        { l: L(l, 'Fáciles', 'Easy'), c: 'filtro', t: 'faciles' }, { l: L(l, 'Con desafío', 'Challenging'), c: 'filtro', t: 'desafio' }] };
  };
  H.filtro = function (st, text) {
    var l = st.lang, f = filterQuery(text);
    if (!f) return null;
    var res = applyFilter(f);
    if (!res.length) {
      return { parts: [L(l, 'No encontré tours con ese criterio en el catálogo publicado. Un asesor puede armarte algo a medida:', 'I found no tours with that criterion in the published catalog. An advisor can build something custom for you:'),
        waBtn(l, L(l, 'Hola Luna Llena Tours, busco un tour así: ' + text, 'Hello Luna Llena Tours, I\'m looking for a tour like this: ' + text))], chips: menuChips(l).slice(0, 5) };
    }
    var shown = res.slice(0, 10);
    return { parts: [L(l, 'Estas opciones encajan con lo que buscas (' + res.length + '):', 'These options match what you are looking for (' + res.length + '):'), listHtml(shown, l),
      res.length > shown.length ? '<small>' + L(l, 'Mostrando ' + shown.length + ' de ' + res.length + '. Afina tu búsqueda para ver menos.', 'Showing ' + shown.length + ' of ' + res.length + '. Narrow your search to see fewer.') + '</small>' : '', NOTE_PRICES(l)],
      chips: [{ l: L(l, '🧭 Otra búsqueda', '🧭 New search'), c: 'recomendar' }, { l: L(l, '📅 Reservar', '📅 Book'), c: 'reservar' }] };
  };
  H.gracias = function (st) {
    var l = st.lang;
    return { parts: [L(l, '¡Con gusto! 🌙 Si necesitas algo más, aquí estoy. Cuando quieras reservar, un asesor te atiende por WhatsApp.', 'My pleasure! 🌙 If you need anything else, I\'m here. When you\'re ready to book, an advisor will assist you on WhatsApp.'),
      waBtn(l, L(l, 'Hola Luna Llena Tours, quiero hacer una reserva.', 'Hello Luna Llena Tours, I would like to make a booking.'))], chips: menuChips(l).slice(0, 5) };
  };
  H.fallback = function (st, text) {
    var l = st.lang;
    return { parts: [L(l, 'No estoy seguro de haber entendido 🤔. Puedo ayudarte con tours, precios, entradas, pagos y reservas. Elige una opción o escribe, por ejemplo: <i>“precio del tour a Humantay”</i>.',
      'I\'m not sure I understood 🤔. I can help with tours, prices, tickets, payments and bookings. Pick an option or type, for example: <i>“price of the Humantay tour”</i>.'),
      waBtn(l, L(l, 'Hola Luna Llena Tours, tengo esta consulta: ' + (text || ''), 'Hello Luna Llena Tours, I have this question: ' + (text || '')), L(l, 'Consultar con un asesor', 'Ask an advisor'))], chips: menuChips(l) };
  };

  /* ---------- Flujo de reserva ---------- */
  function startBooking(st, it) {
    var l = st.lang;
    st.book = { step: it ? 'name' : 'tour', d: { tour: it ? it.n : '' } };
    if (it) return { parts: [L(l, 'Perfecto, reservemos <b>' + esc(it.n) + '</b> 📅. Te tomo unos datos y luego abrimos WhatsApp con todo listo.<br><b>¿Cuál es tu nombre completo?</b>', 'Great, let\'s book <b>' + esc(it.n) + '</b> 📅. I\'ll take a few details and then open WhatsApp with everything ready.<br><b>What is your full name?</b>')], chips: [{ l: L(l, '✖ Cancelar', '✖ Cancel'), c: 'cancelar' }] };
    var pop = ['MAPI Full Day Tren Turístico Expeditions', 'Montaña de Colores (Vinicunca)', 'Laguna Humantay', 'Valle Sagrado VIP + Maras Moray', 'MAPI 5D/4N Salkantay to Machu Picchu'];
    return { parts: [L(l, '📅 <b>Reserva rápida.</b> Te haré 4 preguntas y abriré WhatsApp con tu solicitud lista (la reserva se confirma con un asesor).<br><b>¿Qué tour te interesa?</b> Escribe el nombre o elige uno.', '📅 <b>Quick booking.</b> I\'ll ask 4 questions and open WhatsApp with your request ready (an advisor confirms the booking).<br><b>Which tour are you interested in?</b> Type its name or pick one.')],
      chips: pop.map(function (n) { return { l: n.replace(/ to Machu Picchu/, '').replace('Tren Turístico ', ''), c: 'booktour', t: n }; }).concat([{ l: L(l, '✖ Cancelar', '✖ Cancel'), c: 'cancelar' }]) };
  }
  function bookingStep(st, text) {
    var l = st.lang, b = st.book, t = String(text || '').trim();
    if (/^(cancelar|cancel|salir|exit|no quiero)$/i.test(norm(t))) { st.book = null; return { parts: [L(l, 'Listo, cancelé la reserva. ¿En qué más te ayudo?', 'Done, booking cancelled. What else can I help with?')], chips: menuChips(l) }; }
    var cx = [{ l: L(l, '✖ Cancelar', '✖ Cancel'), c: 'cancelar' }];
    if (b.step === 'tour') {
      var m = searchTours(t);
      b.d.tour = m.length ? m[0].n : t;
      b.step = 'name';
      return { parts: [L(l, 'Anotado: <b>' + esc(b.d.tour) + '</b>.<br><b>¿Cuál es tu nombre completo?</b>', 'Noted: <b>' + esc(b.d.tour) + '</b>.<br><b>What is your full name?</b>')], chips: cx };
    }
    if (b.step === 'name') {
      if (t.length < 2) return { parts: [L(l, 'Necesito tu nombre para continuar 🙂', 'I need your name to continue 🙂')], chips: cx };
      b.d.name = t.slice(0, 80); b.step = 'date';
      return { parts: [L(l, 'Gracias, <b>' + esc(b.d.name) + '</b>. <b>¿Para qué fecha aproximada?</b> (ej. 15 de enero, o “aún no sé”)', 'Thanks, <b>' + esc(b.d.name) + '</b>. <b>For what approximate date?</b> (e.g. January 15, or “not sure yet”)')], chips: [{ l: L(l, 'Aún no sé', 'Not sure yet'), c: 'bookdate', t: 'Por definir' }].concat(cx) };
    }
    if (b.step === 'date') {
      b.d.date = t.slice(0, 60); b.step = 'pax';
      return { parts: [L(l, '<b>¿Cuántas personas viajan?</b>', '<b>How many people are traveling?</b>')], chips: [1, 2, 3, 4, 5, 6].map(function (n) { return { l: String(n), c: 'bookpax', t: String(n) }; }).concat(cx) };
    }
    if (b.step === 'pax') {
      var n = parseInt(t.replace(/\D/g, ''), 10);
      if (!n || n < 1 || n > 99) return { parts: [L(l, 'Dime un número de personas (1 a 99) 🙂', 'Give me a number of people (1 to 99) 🙂')], chips: cx };
      b.d.pax = n; b.step = 'done';
      var d = b.d;
      var msg = L(l,
        '¡Hola Luna Llena Tours!\n\n*Nombre:* ' + d.name + '\n*Tour:* ' + d.tour + '\n*Fecha:* ' + d.date + '\n*Personas:* ' + d.pax + '\n*Mensaje:* Solicitud enviada desde el asistente virtual de la web.',
        'Hello Luna Llena Tours!\n\n*Name:* ' + d.name + '\n*Tour:* ' + d.tour + '\n*Date:* ' + d.date + '\n*People:* ' + d.pax + '\n*Message:* Request sent from the website virtual assistant.');
      st.book = null;
      return { parts: [L(l, '✅ <b>Resumen de tu solicitud</b><br>• Tour: ' + esc(d.tour) + '<br>• Nombre: ' + esc(d.name) + '<br>• Fecha: ' + esc(d.date) + '<br>• Personas: ' + d.pax + '<br><br>Toca el botón para enviarla por WhatsApp. Recuerda: la reserva se asegura con el <b>pago del 50%</b>.',
        '✅ <b>Your request summary</b><br>• Tour: ' + esc(d.tour) + '<br>• Name: ' + esc(d.name) + '<br>• Date: ' + esc(d.date) + '<br>• People: ' + d.pax + '<br><br>Tap the button to send it on WhatsApp. Remember: the booking is secured with a <b>50% payment</b>.'),
        waBtn(l, msg, L(l, 'Enviar por WhatsApp', 'Send on WhatsApp'))], chips: [{ l: L(l, '💳 Formas de pago', '💳 Payment methods'), c: 'pagos' }, { l: L(l, '🏠 Menú', '🏠 Menu'), c: 'saludo' }] };
    }
    return null;
  }

  /* ---------- Motor principal ---------- */
  function respond(input, st) {
    st = st || {};
    var cmd = null, text = '', res = null;
    if (input && typeof input === 'object') { cmd = input.cmd; text = input.text || ''; }
    else text = String(input || '');
    if (!cmd || cmd === 'filtro' || cmd === 'booktour') st.lang = detectLang(text, st.lang); else st.lang = st.lang || 'es';

    if (cmd === 'cancelar') { st.book = null; return { parts: [L(st.lang, 'Listo, cancelé la reserva. ¿En qué más te ayudo?', 'Done, booking cancelled. What else can I help with?')], chips: menuChips(st.lang) }; }
    if (cmd === 'book') { return startBooking(st, ITEMS[input.idx]); }
    if (cmd === 'tour') { var it = ITEMS[input.idx]; return { parts: [card(it, st.lang), NOTE_PRICES(st.lang)], chips: [{ l: L(st.lang, '🔎 Ver más tours', '🔎 More tours'), c: it.sec === 'aventura' ? 'aventura' : (it.sec === 'mistico' ? 'mistico' : it.sec) }, { l: L(st.lang, '🏠 Menú', '🏠 Menu'), c: 'saludo' }] }; }
    if (st.book) {
      var bt = (cmd === 'booktour' || cmd === 'bookdate' || cmd === 'bookpax') ? text : text;
      res = bookingStep(st, bt);
      if (res) return res;
    }
    if (cmd === 'booktour' || cmd === 'bookdate' || cmd === 'bookpax') { return startBooking(st, null); }
    if (cmd === 'reservar') return startBooking(st, null);
    if (cmd === 'circuitos') return H.entradas(st, 'circuitos');
    if (cmd === 'filtro') { return H.filtro(st, text) || H.fallback(st, text); }
    if (cmd && H[cmd]) return H[cmd](st, text);

    /* Texto libre */
    var intent = detectIntent(text);
    var strongIntents = { human: 1, pagos: 1, entradas: 1, reservar: 1, gracias: 1, saludo: 1, ubicacion: 1, guias: 1, empresa: 1, gratis: 1, recomendar: 1 };

    if (intent === 'reservar') {
      var pre = searchTours(text);
      return startBooking(st, pre.length && pre.length <= 2 ? pre[0] : null);
    }
    if (intent && strongIntents[intent] && intent !== 'saludo') {
      if (intent === 'entradas' && /circuito|circuit/.test(norm(text))) return H.entradas(st, text);
      return H[intent](st, text);
    }
    var f = filterQuery(text);
    var found = searchTours(text);
    if (found.length && (!intent || intent === 'precio' || intent === 'mapi' || intent === 'cusco' || intent === 'aventura' || intent === 'mistico' || intent === 'peru')) {
      if (intent === 'peru' && regionMatch(text).length) return H.peru(st, text);
      if (found.length === 1) return { parts: [card(found[0], st.lang), NOTE_PRICES(st.lang)], chips: [{ l: L(st.lang, '🏠 Menú', '🏠 Menu'), c: 'saludo' }, { l: L(st.lang, '📅 Reservar', '📅 Book'), c: 'book', idx: found[0].i }] };
      return { parts: [L(st.lang, 'Encontré estas opciones relacionadas. Toca una para ver detalles y precio:', 'I found these related options. Tap one for details and price:'), listHtml(found, st.lang), NOTE_PRICES(st.lang)], chips: [{ l: L(st.lang, '🧭 Recomiéndame', '🧭 Recommend'), c: 'recomendar' }, { l: L(st.lang, '📅 Reservar', '📅 Book'), c: 'reservar' }] };
    }
    if (f) { res = H.filtro(st, text); if (res) return res; }
    if (intent === 'peru') return H.peru(st, text);
    if (intent && H[intent]) return H[intent](st, text);
    if (intent === 'precio') return { parts: [L(st.lang, '¿De qué tour quieres saber el precio? Escribe su nombre (ej. “Humantay”, “Salkantay”, “Valle Sagrado”) o elige una categoría.', 'Which tour do you want the price of? Type its name (e.g. “Humantay”, “Salkantay”, “Sacred Valley”) or pick a category.')], chips: menuChips(st.lang).slice(0, 5) };
    return H.fallback(st, text);
  }

  /* ---------- API pública (también para pruebas) ---------- */
  var API = { respond: respond, items: ITEMS, searchTours: searchTours, filterQuery: filterQuery, norm: norm };
  root.LunaBot = API;
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  if (typeof document === 'undefined') return;

  /* ==========================================================
     INTERFAZ
     ========================================================== */
  var CSS = '' +
    '#llb-root,#llb-root *{box-sizing:border-box;font-family:"Montserrat",system-ui,sans-serif}' +
    '#llb-fab{position:fixed;right:100px;bottom:22px;z-index:1100;width:140px;height:156px;border:0;background:transparent;cursor:pointer;padding:0;transition:transform .2s;-webkit-tap-highlight-color:transparent;opacity:0}' +
    '#llb-fab.ready{opacity:1}#llb-fab:hover{transform:scale(1.05)}' +
    '.llb-mwrap{position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;filter:drop-shadow(0 6px 8px rgba(0,0,0,.45));transform-origin:50% 100%}' +
    '.llb-media{width:100%;height:100%;object-fit:cover;object-position:50% 100%;display:block;background:transparent;filter:url(#llb-key)}' +
    '#llb-fab.wake .llb-mwrap{animation:llbwake 1.1s ease}' +
    '@keyframes llbwake{0%{transform:scale(1) rotate(0)}20%{transform:scale(1.18) rotate(-6deg)}45%{transform:scale(1.1) rotate(5deg)}70%{transform:scale(1.14) rotate(-3deg)}100%{transform:scale(1) rotate(0)}}' +
    '.llb-logo{position:absolute;left:21px;top:34px;width:62px;height:62px;border-radius:50%;border:2px solid #c9a961;background:#000;object-fit:cover;box-shadow:0 8px 24px rgba(0,0,0,.35)}' +
    '#llb-dot{position:absolute;top:10px;right:8px;width:16px;height:16px;border-radius:50%;background:#e63946;border:2px solid #fff;animation:llbp 1.6s infinite}' +
    '@keyframes llbp{0%{box-shadow:0 0 0 0 rgba(230,57,70,.6)}100%{box-shadow:0 0 0 12px rgba(230,57,70,0)}}' +
    '#llb-tip{position:fixed;right:248px;bottom:96px;z-index:1100;background:#fff;color:#1a1a1a;padding:10px 14px;border-radius:14px 14px 4px 14px;font-size:13px;font-weight:600;box-shadow:0 6px 20px rgba(0,0,0,.25);max-width:230px;cursor:pointer;display:none}' +
    '#llb-panel{padding:0;margin:0;position:fixed;right:20px;bottom:190px;z-index:1100;width:392px;max-width:calc(100vw - 24px);height:600px;max-height:calc(100vh - 210px);background:#fff;border-radius:18px;box-shadow:0 18px 50px rgba(0,0,0,.4);display:none;flex-direction:column;overflow:hidden;border:1px solid rgba(0,0,0,.08)}' +
    '#llb-panel.open{display:flex;animation:llbin .25s ease}@keyframes llbin{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}' +
    '#llb-head{background:linear-gradient(135deg,#2d5016,#1a1a1a);color:#fff;padding:14px 16px;display:flex;align-items:center;gap:12px}' +
    '#llb-hmedia{width:64px;height:68px;flex:0 0 auto;position:relative;margin:-8px 0 -8px -4px}#llb-hmedia .llb-mwrap{filter:none}' +
    '.llb-hlogo{width:42px;height:42px;border-radius:50%;object-fit:cover;border:2px solid #c9a961;background:#000}' +
    '#llb-head .llb-t{flex:1;line-height:1.25}#llb-head .llb-t b{font-size:15px;display:block}#llb-head .llb-t span{font-size:11.5px;color:#d4a574}' +
    '#llb-head button{background:transparent;border:0;color:#fff;font-size:20px;cursor:pointer;padding:4px 8px;border-radius:8px}#llb-head button:hover{background:rgba(255,255,255,.15)}' +
    '#llb-msgs{flex:1;overflow-y:auto;padding:14px;background:#f6f4ef;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth}' +
    '.llb-m{max-width:92%;padding:10px 13px;border-radius:14px;font-size:13.5px;line-height:1.5;word-wrap:break-word;color:#1a1a1a}' +
    '.llb-m.b{background:#fff;border:1px solid #e7e2d6;border-bottom-left-radius:4px;align-self:flex-start;box-shadow:0 1px 2px rgba(0,0,0,.04)}' +
    '.llb-m.u{background:#2d5016;color:#fff;border-bottom-right-radius:4px;align-self:flex-end}' +
    '.llb-m a{color:#2d5016;font-weight:600}.llb-m small{color:#666;display:block;margin-top:6px;line-height:1.4}' +
    '.llb-m ul{margin:4px 0 4px 18px}.llb-m li{margin:1px 0}.llb-m .llb-more{list-style:none;color:#888;margin-left:-4px}' +
    '.llb-typing{display:inline-flex;gap:4px;padding:12px 14px}.llb-typing i{width:7px;height:7px;border-radius:50%;background:#bbb;animation:llbt 1s infinite}.llb-typing i:nth-child(2){animation-delay:.15s}.llb-typing i:nth-child(3){animation-delay:.3s}' +
    '@keyframes llbt{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-4px);opacity:1}}' +
    '.llb-card{background:#faf8f3;border:1px solid #e7e2d6;border-left:4px solid #c9a961;border-radius:10px;padding:10px 11px;margin-top:6px}' +
    '.llb-card-h{font-weight:700;font-size:13.5px;display:flex;gap:6px;align-items:flex-start;justify-content:space-between}' +
    '.llb-tag{background:#2d5016;color:#fff;font-size:10px;padding:2px 7px;border-radius:20px;white-space:nowrap;font-weight:600}' +
    '.llb-meta{font-size:12px;color:#555;margin-top:3px}.llb-desc{font-size:12.5px;color:#333;margin-top:5px}.llb-inc{font-size:12px;font-weight:700;margin-top:6px;color:#2d5016}' +
    '.llb-price{margin-top:7px;font-weight:700;font-size:13px;color:#1a1a1a;background:#f1ead9;padding:6px 8px;border-radius:8px}' +
    '.llb-btns{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}' +
    '.llb-btn{display:inline-block;border:0;background:#2d5016;color:#fff!important;padding:7px 11px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;text-decoration:none;text-align:center}' +
    '.llb-btn:hover{filter:brightness(1.12)}.llb-btn-wa{background:#25a244}.llb-btn-ghost{background:transparent;color:#2d5016!important;border:1.5px solid #2d5016}' +
    '.llb-block{display:block;margin-top:8px;width:100%;padding:9px}' +
    '.llb-list{display:flex;flex-direction:column;gap:5px;margin-top:8px}' +
    '.llb-li{display:flex;flex-direction:column;align-items:flex-start;text-align:left;background:#faf8f3;border:1px solid #e0d9c6;border-radius:9px;padding:7px 10px;cursor:pointer;font-size:12.5px;color:#1a1a1a}' +
    '.llb-li:hover{border-color:#2d5016;background:#f1f6ec}.llb-li b{font-size:12.5px}.llb-li span{font-size:11.5px;color:#555;margin-top:1px}' +
    '.llb-regs{display:flex;flex-direction:column;gap:5px;margin-top:6px}.llb-reg{background:#faf8f3;border:1px solid #e7e2d6;border-radius:8px;padding:6px 9px;font-size:12.5px}.llb-reg span{font-size:11.5px;color:#555}' +
    '#llb-chips{padding:8px 12px 4px;background:#f6f4ef;display:flex;gap:6px;overflow-x:auto;flex-wrap:nowrap;scrollbar-width:thin;min-height:0}' +
    '#llb-chips:empty{display:none}' +
    '.llb-chip{flex:0 0 auto;background:#fff;border:1.5px solid #c9a961;color:#1a1a1a;padding:6px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap}' +
    '.llb-chip:hover{background:#c9a961;color:#fff}' +
    '#llb-form{display:flex;gap:8px;padding:10px 12px;background:#f6f4ef;border-top:1px solid #e7e2d6}' +
    '#llb-input{flex:1;border:1.5px solid #d8d1bd;border-radius:22px;padding:10px 14px;font-size:14px;outline:none;background:#fff;color:#1a1a1a;min-width:0}' +
    '#llb-input:focus{border-color:#2d5016}' +
    '#llb-send{width:42px;height:42px;border-radius:50%;border:0;background:#2d5016;color:#fff;font-size:16px;cursor:pointer;flex:0 0 auto}' +
    '#llb-send:hover{filter:brightness(1.15)}' +
    '#llb-foot{font-size:10.5px;color:#888;text-align:center;padding:0 10px 8px;background:#f6f4ef}' +
    '@media(max-width:520px){#llb-panel{right:0;bottom:0;width:100vw;max-width:100vw;height:100dvh;max-height:100dvh;border-radius:0}#llb-fab{right:76px;bottom:8px}#llb-tip{right:16px;bottom:172px}}';

  var st = { lang: 'es', book: null };
  var hist = [];
  var els = {};

  function el(tag, attrs, html) { var e = document.createElement(tag); if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]); if (html) e.innerHTML = html; return e; }
  function scrollDown() { els.msgs.scrollTop = els.msgs.scrollHeight; }
  function addMsg(role, html, silent) {
    var m = el('div', { 'class': 'llb-m ' + role });
    if (role === 'u') m.textContent = html; else m.innerHTML = html;
    els.msgs.appendChild(m);
    scrollDown();
    if (!silent) { hist.push({ r: role, h: html }); saveHist(); }
    return m;
  }
  function saveHist() { try { sessionStorage.setItem('llbh', JSON.stringify(hist.slice(-40))); } catch (e) { } }
  function loadHist() { try { var h = JSON.parse(sessionStorage.getItem('llbh') || '[]'); return Array.isArray(h) ? h : []; } catch (e) { return []; } }
  function setChips(chips) {
    els.chips.innerHTML = '';
    (chips || []).forEach(function (c) {
      var b = el('button', { 'class': 'llb-chip', type: 'button' });
      b.textContent = c.l;
      b.addEventListener('click', function () { send({ cmd: c.c, text: c.t || '', idx: c.idx }, c.l); });
      els.chips.appendChild(b);
    });
    els.chips.scrollLeft = 0;
  }
  function typing() { var m = el('div', { 'class': 'llb-m b llb-typing' }, '<i></i><i></i><i></i>'); els.msgs.appendChild(m); scrollDown(); return m; }

  var busy = false;
  function send(input, label) {
    if (busy) return;
    var shown = label || (typeof input === 'string' ? input : input.text);
    if (shown) addMsg('u', shown);
    busy = true; setChips([]);
    var t = typing();
    var out;
    try { out = respond(input, st); } catch (e) { out = H.fallback(st, shown); }
    setTimeout(function () {
      t.remove();
      out.parts.filter(Boolean).forEach(function (p) { addMsg('b', p); });
      setChips(out.chips);
      busy = false;
    }, 380 + Math.min(500, (out.parts.join('').length / 8)));
  }

  function goTo(id) {
    var s = document.getElementById(id);
    if (!s) return;
    if (window.innerWidth <= 520) toggle(false);
    s.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function toggle(open) {
    var isOpen = els.panel.classList.contains('open');
    if (open === undefined) open = !isOpen;
    els.panel.classList.toggle('open', open);
    els.fab.setAttribute('aria-expanded', String(open));
    els.dot.style.display = 'none'; els.tip.style.display = 'none';
    try { sessionStorage.setItem('llbtip', '1'); } catch (e) { }
    if (open) {
      if (!els.msgs.children.length) {
        var h = loadHist();
        if (h.length) { h.forEach(function (m) { addMsg(m.r, m.h, true); hist.push(m); }); setChips(menuChips(st.lang)); }
        else { var g = H.saludo(st); busy = true; setTimeout(function () { g.parts.forEach(function (p) { addMsg('b', p); }); setChips(g.chips); busy = false; }, 250); }
      }
      setTimeout(function () { els.input.focus(); }, 80);
    }
  }


  /* ==========================================================
     MASCOTA: el Tumi (video o imagen con pantalla verde)
     Carpeta: assets/chat.bot/  ->  tumi.mp4 | tumi.webm | tumi.png | tumi.gif ...
     Voz (opcional): assets/chat.bot/tumi.mp3 | .wav | .ogg | .m4a
     Si el video trae su propio audio, se usa ese audio.
     ========================================================== */
  var MASCOT = {
    dir: 'assets/chat.bot/', name: 'tumi',
    video: ['mp4', 'webm', 'mov', 'm4v', 'MP4', 'WEBM', 'MOV'],
    image: ['png', 'webp', 'gif', 'jpg', 'jpeg', 'PNG', 'WEBP', 'GIF', 'JPG', 'JPEG'],
    audio: ['mp3', 'wav', 'ogg', 'm4a', 'aac', 'MP3', 'WAV', 'OGG', 'M4A'],
    greeting: '¡Hola! Soy el Tumi, tu guía virtual de Luna Llena Tours. ¿Te ayudo a planear tu viaje?',
    radius: 170,       /* px de cercanía del mouse que despierta al Tumi */
    cooldown: 9000     /* ms mínimos entre una aparición y otra */
  };
  /* "Ultra Key": quita el verde. lo = rojo-verde donde el pixel es 100% transparente,
     hi = donde pasa a 100% visible. Si queda borde verde, sube 'hi' (ej. -0.02);
     si el Tumi se ve transparente, bájalo (ej. -0.12). */
  var KEY = { lo: -0.32, hi: -0.06 };

  function keyMatrix() {
    var s = 1 / (KEY.hi - KEY.lo), c = -KEY.lo * s;
    /* alfa = s*(R-G) + c ; se conserva el alfa original de la imagen (A=0 sigue transparente) */
    return '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 ' + s.toFixed(3) + ' ' + (-s).toFixed(3) + ' 0 10 ' + (c - 10).toFixed(3);
  }

  var M = { ok: false, kind: null, url: null, audio: null, vid: null, img: null };
  var muted = false, lastWake = 0, near = false, tipTimer = 0, rafId = 0;

  function probe(kind, exts, cb) {
    var i = 0, limit = root.LLB_PROBE_TIMEOUT || 4000;
    (function next() {
      if (i >= exts.length) return cb(null);
      var url = MASCOT.dir + MASCOT.name + '.' + exts[i++], done = false, el, timer;
      function ok() { if (done) return; done = true; clearTimeout(timer); cb(url); }
      function no() { if (done) return; done = true; clearTimeout(timer); next(); }
      timer = setTimeout(no, limit);
      if (kind === 'video') { el = document.createElement('video'); el.preload = 'metadata'; el.muted = true; el.onloadedmetadata = ok; el.onerror = no; el.src = url; }
      else if (kind === 'image') { el = new Image(); el.onload = ok; el.onerror = no; el.src = url; }
      else { el = new Audio(); el.preload = 'metadata'; el.onloadedmetadata = ok; el.onerror = no; el.src = url; }
    })();
  }

  function buildMedia() {
    var m;
    if (M.kind === 'video') {
      m = document.createElement('video');
      m.src = M.url; m.preload = 'auto'; m.muted = true; m.playsInline = true;
      m.setAttribute('playsinline', ''); m.setAttribute('aria-hidden', 'true');
      m.addEventListener('loadeddata', function () { try { m.currentTime = 0.05; } catch (e) { } });
      m.addEventListener('ended', function () { try { m.currentTime = 0.05; } catch (e) { } });
    } else {
      m = new Image(); m.src = M.url; m.alt = ''; m.decoding = 'async';
    }
    m.className = 'llb-media';
    return m;
  }

  function fallbackLogo(box, cls) {
    var i = new Image(); i.src = 'assets/logo.png'; i.alt = ''; i.className = cls;
    i.onerror = function () { i.remove(); box.textContent = '🌙'; };
    box.appendChild(i);
  }

  function speak() {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(MASCOT.greeting);
      u.lang = 'es-PE'; u.pitch = 0.65; u.rate = 0.95;
      var vs = window.speechSynthesis.getVoices().filter(function (v) { return /^es/i.test(v.lang); });
      if (vs.length) u.voice = vs[0];
      window.speechSynthesis.speak(u);
    } catch (e) { }
  }

  function playMascot() {
    var v = M.vid;
    if (v) {
      try { v.currentTime = 0; } catch (e) { }
      var withSep = !!M.audio;
      v.muted = muted || withSep;
      var p = v.play();
      if (p && p.catch) p.catch(function () { v.muted = true; var q = v.play(); if (q && q.catch) q.catch(function () { }); });
    }
    if (muted) return;
    if (M.audio) { try { M.audio.currentTime = 0; var a = M.audio.play(); if (a && a.catch) a.catch(function () { }); } catch (e) { } }
    else if (!v) speak();
  }

  function wake(force) {
    if (!M.ok) return;
    var now = Date.now();
    if (!force) {
      if (els.panel.classList.contains('open')) return;
      if (now - lastWake < MASCOT.cooldown) return;
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    }
    lastWake = now;
    els.fab.classList.remove('wake'); void els.fab.offsetWidth; els.fab.classList.add('wake');
    if (!force) {
      els.tip.textContent = (st.lang === 'en') ? 'Hi! I\'m Tumi, your virtual guide 🌙' : '¡Hola! Soy el Tumi, tu guía virtual 🌙';
      els.tip.style.display = 'block'; els.dot.style.display = 'none';
      clearTimeout(tipTimer); tipTimer = setTimeout(function () { els.tip.style.display = 'none'; }, 5500);
    }
    playMascot();
  }

  function setupMascot() {
    try { muted = sessionStorage.getItem('llbm') === '1'; } catch (e) { }
    var mute = document.getElementById('llb-mute');
    function paintMute() { mute.textContent = muted ? '🔇' : '🔊'; mute.setAttribute('aria-label', muted ? 'Activar voz' : 'Silenciar voz'); }
    paintMute();
    mute.addEventListener('click', function () {
      muted = !muted; paintMute();
      try { sessionStorage.setItem('llbm', muted ? '1' : '0'); } catch (e) { }
      if (muted) { if (M.vid) M.vid.muted = true; if (M.audio) M.audio.pause(); try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) { } }
    });
    var fm = document.getElementById('llb-fabmedia'), hm = document.getElementById('llb-hmedia');
    function finish() {
      if (!M.ok) { fallbackLogo(fm, 'llb-logo'); fallbackLogo(hm, 'llb-hlogo'); els.fab.classList.add('ready'); return; }
      M.vid = M.kind === 'video' ? buildMedia() : null;
      var big = M.vid || buildMedia();
      fm.appendChild(big);
      var hw = document.createElement('span'); hw.className = 'llb-mwrap'; hw.appendChild(buildMedia()); hm.appendChild(hw);
      els.fab.classList.add('ready');
      document.addEventListener('pointermove', function (e) {
        if (e.pointerType === 'touch' || rafId) return;
        rafId = requestAnimationFrame(function () {
          rafId = 0;
          var r = els.fab.getBoundingClientRect();
          var d = Math.sqrt(Math.pow(e.clientX - (r.left + r.width / 2), 2) + Math.pow(e.clientY - (r.top + r.height / 2), 2));
          if (d < MASCOT.radius) { if (!near) { near = true; wake(); } } else if (d > MASCOT.radius + 60) near = false;
        });
      }, { passive: true });
      hm.addEventListener('click', function () { wake(true); });
      /* primera aparición en pantallas táctiles / sin mouse: saludo tras unos segundos */
      setTimeout(function () { if (!lastWake && window.matchMedia && window.matchMedia('(hover: none)').matches) wake(); }, 3500);
    }
    probe('video', MASCOT.video, function (vurl) {
      function afterMedia() {
        probe('audio', MASCOT.audio, function (aurl) {
          if (aurl) { M.audio = new Audio(aurl); M.audio.preload = 'auto'; }
          finish();
        });
      }
      if (vurl) { M.ok = true; M.kind = 'video'; M.url = vurl; return afterMedia(); }
      probe('image', MASCOT.image, function (iurl) {
        if (iurl) { M.ok = true; M.kind = 'image'; M.url = iurl; }
        afterMedia();
      });
    });
  }

  function init() {
    if (document.getElementById('llb-root')) return;
    var style = el('style'); style.textContent = CSS; document.head.appendChild(style);
    var rootEl = el('div', { id: 'llb-root' });
    rootEl.innerHTML =
      '<div id="llb-tip">¿Te ayudo a planear tu viaje a Machu Picchu? 🏔️</div>' +
      '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><filter id="llb-key" color-interpolation-filters="sRGB" x="0" y="0" width="100%" height="100%"><feColorMatrix type="matrix" values="' + keyMatrix() + '"/></filter></svg>' +
      '<button id="llb-fab" type="button" aria-label="Abrir asistente virtual" aria-expanded="false"><span class="llb-mwrap" id="llb-fabmedia"></span><span id="llb-dot"></span></button>' +
      '<div id="llb-panel" role="dialog" aria-label="Asistente virtual Luna Llena Tours">' +
      '<div id="llb-head"><span id="llb-hmedia"></span><div class="llb-t"><b>Luna Llena Tours</b><span>Asistente virtual · ES / EN</span></div><button id="llb-mute" type="button" aria-label="Silenciar voz" title="Voz del Tumi">🔊</button><button id="llb-close" type="button" aria-label="Cerrar">✕</button></div>' +
      '<div id="llb-msgs" role="log" aria-live="polite"></div><div id="llb-chips"></div>' +
      '<form id="llb-form" autocomplete="off"><input id="llb-input" type="text" maxlength="300" placeholder="Escribe tu pregunta… / Type your question…" aria-label="Mensaje"><button id="llb-send" type="submit" aria-label="Enviar">➤</button></form>' +
      '<div id="llb-foot">Información de la web · Reservas confirmadas por un asesor</div></div>';
    document.body.appendChild(rootEl);
    els = { fab: document.getElementById('llb-fab'), panel: document.getElementById('llb-panel'), msgs: document.getElementById('llb-msgs'), chips: document.getElementById('llb-chips'), input: document.getElementById('llb-input'), tip: document.getElementById('llb-tip'), dot: document.getElementById('llb-dot') };
    setupMascot();
    els.fab.addEventListener('click', function () { wake(true); toggle(); });
    document.getElementById('llb-close').addEventListener('click', function () { toggle(false); els.fab.focus(); });
    els.tip.addEventListener('click', function () { wake(true); toggle(true); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && els.panel.classList.contains('open')) toggle(false); });
    document.getElementById('llb-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var v = els.input.value.trim();
      if (!v) return;
      els.input.value = '';
      send(v);
    });
    els.msgs.addEventListener('click', function (e) {
      var t = e.target.closest('[data-tour],[data-book],[data-go]');
      if (!t) return;
      if (t.hasAttribute('data-go')) { goTo(t.getAttribute('data-go')); return; }
      if (t.hasAttribute('data-tour')) { var i = +t.getAttribute('data-tour'); send({ cmd: 'tour', idx: i }, ITEMS[i].n); return; }
      if (t.hasAttribute('data-book')) { var j = +t.getAttribute('data-book'); send({ cmd: 'book', idx: j }, (st.lang === 'en' ? 'Book: ' : 'Reservar: ') + ITEMS[j].n); }
    });
    var seen = false; try { seen = sessionStorage.getItem('llbtip') === '1'; } catch (e) { }
    if (!seen) setTimeout(function () { if (!els.panel.classList.contains('open')) els.tip.style.display = 'block'; }, 6000);
    else els.dot.style.display = 'none';
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})(typeof window !== 'undefined' ? window : globalThis);
