// script.js - Funcionalidad de traducción y menú hamburguesa

// Objeto de traducciones COMPLETO
const translations = {
    es: {
        // Navegación
        'nav-inicio': 'Inicio',
        'nav-cultura': 'Cultura',
        'nav-destinos': 'Destinos',
        'nav-sobrenosotros': 'Sobre Nosotros',
        'nav-referencias': 'Referencias',
        'footer-copyright': '© 2026 web-china · Todos los derechos reservados',
        
        // Botones
        'btn-cultura': 'EXPLORA LA CULTURA',
        'btn-destinos': 'EXPLORA DESTINOS DESTACADOS',
        
        // Títulos principales
        'title-index': 'ESTO ES CHINA',
        'title-cultura': 'Filosofía',
        'title-destinos': 'LUGARES QUE PODRÍAS VISITAR',
        'title-sobrenosotros': '¿QUIENES SOMOS?',
        'title-referencias': 'REFERENCIAS Y FUENTES',
        
        // Subtítulos
        'sub-destinos': 'Destinos',
        'sub-porqueir': '¿POR QUÉ IR?',
        'sub-lugares': 'LUGARES MÁS VISITADOS',
        'sub-simbolos': 'SÍMBOLOS Y SIGNIFICADOS',
        'sub-festivales': 'FESTIVALES TRADICIONALES',
        'sub-valores': 'VALORES CULTURALES',
        'sub-gastronomia': 'GASTRONOMIA Y VESTUARIO',
        'sub-empacaste': '¿YA EMPACASTE TUS COSAS?',
        
        // Tarjetas index
        'card-historia': 'Historia Milenaria',
        'card-patrimonio': 'Patrimonio Monumental',
        'card-sabiduria': 'Sabiduría Filosófica',
        'card-festivales': 'Festivales Únicos',
        'card-naturaleza': 'Naturaleza y Paisajes',
        'card-panda': 'El Panda Gigante',
        
        // Textos largos - Index
        'texto-index-intro': 'La República Popular China, ubicada en Asia oriental a orillas del Pacífico, es el tercer país más extenso del mundo y una de las civilizaciones continuas más antiguas, con más de cinco milenios de historia. Su territorio diverso —desde la meseta del Tíbet y el Himalaya hasta vastas llanuras, ríos emblemáticos como el Changjiang River y extensas costas— refleja una riqueza geográfica y climática excepcional. Cuna de innovaciones trascendentales como el papel, la imprenta, la brújula y la pólvora, China ha ejercido una influencia decisiva en el desarrollo cultural y científico mundial. Hoy combina tradición y modernidad: una nación multicultural compuesta por 56 grupos étnicos, con el mandarín como lengua oficial y una herencia artística que abarca literatura clásica, ópera tradicional, caligrafía, pintura y gastronomía reconocida globalmente. Potencia económica contemporánea y referente tecnológico, China ofrece al visitante una experiencia integral donde patrimonio histórico, dinamismo urbano, paisajes naturales y hospitalidad se integran en un destino de relevancia global.',
        'texto-index-destinos': 'La República Popular China ofrece una organización territorial diversa que refleja su complejidad cultural e histórica. El país se compone de 34 divisiones administrativas de primer nivel: 22 provincias, 4 municipios directamente administrados por el gobierno central —Beijing, Shanghai, Chongqing y Tianjin—, 5 regiones autónomas con mayores facultades legislativas vinculadas a grupos étnicos minoritarios, y 2 Regiones Administrativas Especiales. Con más de 660 ciudades de distintos tamaños y dinámicas económicas, cada destino ofrece una identidad propia en cultura, patrimonio, gastronomía y experiencias, consolidando a China como un país de contrastes y oportunidades para el viajero.',
        'texto-card-historia': 'Más de 5.000 años de civilización reflejados en templos, palacios y tradiciones ancestrales.',
        'texto-card-patrimonio': 'Desde la Gran Muralla hasta la Ciudad Prohibida, monumentos reconocidos mundialmente.',
        'texto-card-sabiduria': 'Cuna del confucianismo y el taoísmo, donde la armonía y el equilibrio son valores centrales.',
        'texto-card-festivales': 'Celebraciones como el Año Nuevo Chino llenan ciudades de color, simbolismo y tradición.',
        'texto-card-naturaleza': 'Montañas, parques nacionales y escenarios naturales como el Zhangjiajie National Forest Park ofrecen vistas impresionantes.',
        'texto-card-panda': 'El Giant Panda, símbolo nacional de paz y conservación, representa la conexión entre naturaleza y cultura.',
        'texto-muralla': 'La icónica muralla histórica y una de las Siete Maravillas del Mundo.',
        'texto-templo': 'Complejo ceremonial donde los emperadores realizaban rituales sagrados.',
        'texto-guerreros': 'Impresionante ejército de esculturas funerarias en Xi\'an.',
        
        // Cultura - textos largos
        'texto-cultura-filosofia': 'El confucianismo, el taoísmo y el budismo constituyen los tres pilares intelectuales y espirituales de la civilización china. El Confucianism, inspirado por Confucius, estableció una ética centrada en la responsabilidad social, la jerarquía y la armonía familiar, influyendo profundamente en la organización política desde la dinastía Han Dynasty. El Taoism propuso la búsqueda de equilibrio con el "Tao" o el orden natural, aportando una visión espiritual que influyó en la medicina, la ciencia y las artes. Por su parte, el Buddhism, introducido desde India en el siglo I, promovió la iluminación personal y enriqueció la arquitectura, la literatura y el pensamiento filosófico. Más que competir, estas corrientes dialogaron y se integraron, configurando una identidad cultural compleja cuya influencia perdura en la China contemporánea.',
        'texto-cultura-confucianismo': 'Sistema ético y filosófico basado en las enseñanzas de Confucius que promueve la armonía social mediante el cumplimiento de deberes, el respeto a la jerarquía, la educación y la virtud moral.',
        'texto-cultura-taoismo': 'Tradición filosófico-religiosa centrada en el "Tao" (el Camino), que propone vivir en equilibrio con el orden natural del universo, practicando la sencillez, la espontaneidad y el principio de wu-wei (acción sin forzar).',
        'texto-cultura-budismo': 'Doctrina espiritual originada en India por Gautama Buddha que busca la iluminación mediante la meditación, la sabiduría y la superación del sufrimiento para alcanzar el nirvana.',
        'texto-cultura-simbolos': 'En la cultura china, los símbolos auspiciosos constituyen un lenguaje visual que comunica valores, creencias y aspiraciones colectivas. Lejos de ser meramente decorativos, estos elementos expresan una cosmovisión en la que el ser humano, la naturaleza y el universo se encuentran interconectados. El dragón, considerado una criatura benevolente y poderosa, simboliza la energía vital (Qi), la autoridad y la protección, y ha estado históricamente vinculado al emperador y al orden celestial. El fénix, por su parte, representa la armonía, la virtud y la renovación, y su unión simbólica con el dragón refleja el equilibrio entre fuerzas complementarias. Otros animales también poseen significados profundos: la grulla encarna longevidad y sabiduría; la carpa representa perseverancia y superación; y la tortuga simboliza estabilidad, resistencia y continuidad. Estos símbolos suelen aparecer en arquitectura, textiles, cerámicas y celebraciones tradicionales, reforzando valores como la prosperidad, la familia y la buena fortuna. El color es igualmente fundamental en la simbología china. El rojo está asociado con la felicidad, la celebración y la protección contra energías negativas; el dorado y el amarillo evocan poder, prosperidad y autoridad imperial; mientras que el verde sugiere armonía, crecimiento y conexión con la naturaleza. En conjunto, esta simbología no solo embellece espacios y objetos, sino que estructura una identidad cultural basada en el equilibrio, la continuidad histórica y el respeto por el orden natural.',
        'texto-cultura-festivales': 'Los festivales tradicionales chinos constituyen una expresión viva de la identidad cultural y la continuidad histórica del país. Celebraciones como el Año Nuevo Chino, el Festival del Medio Otoño y el Festival del Bote del Dragón integran rituales ancestrales, simbolismo y valores familiares que fortalecen el sentido de comunidad y pertenencia. A través de elementos como linternas rojas, danzas tradicionales y ofrendas simbólicas, estas festividades transmiten mensajes de prosperidad, gratitud y renovación, reflejando una cultura donde tradición y modernidad conviven en armonía.',
        'texto-cultura-anioviejo': 'El Año Nuevo Chino, también conocido como Festival de Primavera, es la celebración más importante del calendario tradicional y simboliza renovación, prosperidad y continuidad familiar. Basado en el ciclo lunar, marca el inicio de un nuevo periodo cargado de esperanza y proyección colectiva. Durante estas fechas se produce la mayor migración anual del mundo, ya que millones de personas regresan a sus hogares para reunirse con sus familias, reafirmando la centralidad del núcleo familiar en la cultura china. Las tradiciones incluyen la entrega de sobres rojos (hongbao), la decoración con faroles y símbolos auspiciosos, y las danzas del dragón y el león para atraer buena fortuna. Más que una festividad, representa un acto cultural de unidad, gratitud y renovación espiritual.',
        'texto-cultura-qingming': 'El Festival Qingming, conocido como Día de Barrido de Tumbas, es una tradición ancestral dedicada a honrar la memoria y el legado de los antepasados. Celebrado a inicios de abril, combina reflexión, respeto y renovación en un mismo acto cultural. Durante esta jornada, las familias visitan los cementerios para limpiar las tumbas, ofrecer flores, alimentos e incienso, y expresar gratitud hacia generaciones pasadas. Este ritual reafirma el principio confuciano de la piedad filial, fundamento ético de la sociedad china. Asimismo, fortalece la continuidad generacional al transmitir valores, historia y sentido de pertenencia. Qingming no solo preserva la memoria familiar, sino que consolida la identidad colectiva como un puente entre pasado y presente.',
        'texto-cultura-zodiaco': 'El Año Nuevo Chino se rige por el calendario lunisolar tradicional, cuyo inicio varía entre el 21 de enero y el 20 de febrero, según la primera luna nueva del año. Cada año está asociado a uno de los doce animales del zodiaco chino (Rata, Buey, Tigre, Conejo, Dragón, Serpiente, Caballo, Cabra, Mono, Gallo, Perro y Cerdo), formando un ciclo que se repite cada doce años. Además del animal, cada año se combina con uno de los cinco elementos —madera, fuego, tierra, metal y agua— creando un ciclo completo de 60 años. Este sistema no solo organiza el tiempo, sino que también influye en interpretaciones culturales sobre personalidad, fortuna y dinámicas sociales. Más que una práctica astrológica, el zodiaco chino constituye una expresión simbólica del equilibrio entre naturaleza, tiempo y sociedad dentro de la cosmovisión tradicional china.',
        'texto-cultura-festivales-texto': 'Los festivales tradicionales de China constituyen una manifestación viva de su identidad histórica, espiritual y social. Cada celebración —desde el Año Nuevo hasta Qingming— refleja valores como la unidad familiar, el respeto por los ancestros, la gratitud y la esperanza colectiva. Participar en estos eventos permite comprender no solo sus rituales y símbolos, sino también la profunda conexión entre tradición y vida contemporánea. Asistir a un festival en China es experimentar de primera mano la armonía entre cultura, comunidad y celebración. Es una invitación a descubrir una civilización milenaria que mantiene sus raíces vivas a través de cada encuentro, cada danza y cada ritual compartido.',
        'texto-cultura-bote': 'El Festival del Bote del Dragón se celebra el quinto día del quinto mes lunar y conmemora al poeta y estadista Qu Yuan, símbolo de lealtad y patriotismo. Las emblemáticas carreras de botes en forma de dragón evocan el intento histórico de rescatarlo del río, mientras que el consumo de zongzi —arroz glutinoso envuelto en hojas de bambú— preserva la memoria de su sacrificio. Esta festividad integra tradición, deporte y simbolismo, fortaleciendo la identidad cultural a través de la memoria colectiva. En su dimensión contemporánea, continúa promoviendo valores como el honor, la fidelidad y el compromiso con el bien común.',
        'texto-cultura-mediootoño': 'Celebrado el día quince del octavo mes lunar, el Festival del Medio Otoño honra la luna como símbolo de plenitud, equilibrio y armonía. Vinculado históricamente a la cosecha, expresa gratitud por la abundancia y el bienestar alcanzado durante el año. Las familias se reúnen para compartir pasteles de luna (mooncakes) y contemplar la luna llena, cuya forma circular representa unidad y completitud. Desde una perspectiva cultural, esta festividad refuerza valores como la cohesión social y la integridad moral, recordando la importancia del encuentro familiar incluso en contextos de distancia. Más allá de su carácter ceremonial, constituye una celebración de equilibrio entre naturaleza, comunidad y tradición.',
        'texto-cultura-valores': 'La cultura china se fundamenta en principios éticos que han moldeado su estructura social durante milenios. La familia es el eje central de la vida social y representa continuidad, identidad y responsabilidad compartida entre generaciones. El concepto de piedad filial (xiao) promueve el cuidado y respeto hacia los padres y ancestros, consolidando la familia como núcleo de estabilidad moral. En este contexto, el respeto no solo se dirige a los mayores, sino también a la jerarquía social, la tradición y el orden colectivo, favoreciendo la armonía y la cohesión dentro de la comunidad. La educación ocupa un lugar privilegiado como herramienta de crecimiento personal y honor familiar, profundamente influenciada por la tradición confuciana que valora el conocimiento, la disciplina y la superación constante. Paralelamente, el sentido de comunidad refuerza la cooperación, la responsabilidad compartida y la búsqueda del bienestar colectivo sobre el individualismo. Estos valores configuran una sociedad donde el equilibrio, la reciprocidad y la continuidad cultural son pilares esenciales de su identidad.',
        'texto-cultura-gastronomia': 'La gastronomía china es una expresión integral de su identidad cultural, basada en el equilibrio de sabores, texturas y colores. Más que una práctica culinaria, representa una filosofía de armonía influenciada por principios tradicionales como el yin y el yang, donde los ingredientes se combinan buscando balance nutricional y energético. La diversidad geográfica del país ha dado origen a múltiples tradiciones regionales, cada una con técnicas, especias y métodos de preparación propios. Compartir los alimentos en mesa redonda simboliza unidad, respeto y cohesión familiar, convirtiendo la comida en un acto social profundamente significativo.',
        'texto-cultura-vestuario': 'El vestuario tradicional chino refleja jerarquía, simbolismo y estética cultural. Prendas como el hanfu y el qipao destacan por su elegancia, líneas fluidas y uso de colores con significado simbólico, especialmente el rojo y el dorado, asociados con prosperidad y buena fortuna. Históricamente, los materiales, bordados y diseños indicaban estatus social y función ceremonial. Más allá de su valor estético, la indumentaria tradicional expresa identidad histórica y continuidad cultural, siendo utilizada actualmente en festividades, celebraciones y representaciones artísticas como una forma de preservar el patrimonio intangible del país.',
        
        // Destinos - textos largos
        'texto-destinos-intro': 'La riqueza territorial de China ofrece una diversidad de destinos que reflejan la profundidad de su historia, la magnitud de su patrimonio arquitectónico y la majestuosidad de sus paisajes naturales. Desde ciudades que conservan huellas milenarias hasta escenarios contemporáneos que evidencian su constante transformación, cada lugar constituye una experiencia cultural única. A continuación, se presenta una selección representativa de espacios emblemáticos que permiten comprender la amplitud geográfica, simbólica y cultural del país. Estos destinos no solo destacan por su valor turístico, sino también por su significado histórico y su aporte a la identidad nacional, invitando al visitante a descubrir una nación donde tradición y modernidad conviven en armonía.',
        'texto-destinos-pekin': 'Capital política y cultural de China, Pekín combina patrimonio imperial y dinamismo contemporáneo. Aquí conviven palacios, templos ancestrales y amplias avenidas modernas que reflejan la evolución del país. Es el punto de partida ideal para comprender la historia dinástica, la filosofía tradicional y la transformación urbana de una de las civilizaciones más antiguas del mundo.',
        'texto-destinos-muralla': 'Icono indiscutible del país, la Gran Muralla es una de las obras de ingeniería más impresionantes de la historia. Construida y reconstruida durante siglos para proteger las fronteras del imperio, serpentea entre montañas y valles ofreciendo panorámicas espectaculares y una profunda lección de historia. Recorrer sus torres de vigilancia y tramos restaurados permite comprender la magnitud del legado arquitectónico chino y su relevancia cultural a nivel mundial.',
        'texto-destinos-guilin': 'Famosas por sus formaciones kársticas y paisajes fluviales, Guilin y Yangshuo ofrecen algunos de los escenarios naturales más representativos de China. Las montañas que emergen entre la niebla y los tranquilos ríos crean una atmósfera casi pictórica, ideal para quienes buscan contacto con la naturaleza y paisajes de extraordinaria belleza.',
        'texto-destinos-pingyao': 'Considerada una de las ciudades amuralladas mejor conservadas del país, Pingyao permite viajar en el tiempo a la China imperial. Sus calles empedradas, patios tradicionales y antiguas instituciones financieras reflejan el papel histórico de la región en el desarrollo económico del imperio.',
        'texto-destinos-longji': 'Con más de siete siglos de historia, estas terrazas esculpidas en las montañas representan la armonía entre el ser humano y el entorno. Su diseño escalonado no solo es funcional para la agricultura, sino también visualmente impactante, cambiando de tonalidad según la estación del año y ofreciendo una experiencia paisajística única.',
        'texto-destinos-xian': 'Xi\'an fue el punto de partida de la Ruta de la Seda y una de las capitales más importantes de la antigua China. Su mayor tesoro es el ejército de Guerreros de Terracota, miles de figuras esculpidas con un nivel de detalle extraordinario, que custodian el mausoleo del primer emperador y constituyen uno de los descubrimientos arqueológicos más relevantes del siglo XX.',
        'texto-destinos-tianmen': 'Conocida por su espectacular arco natural y sus pasarelas suspendidas sobre el vacío, la Montaña Tianmen ofrece una experiencia de aventura y contemplación. El ascenso en teleférico y la famosa "Puerta del Cielo" simbolizan la dimensión espiritual que muchas montañas poseen en la tradición china.',
        'texto-destinos-zhangjiajie': 'Famoso por sus columnas de piedra que se elevan dramáticamente entre la niebla, este parque nacional es uno de los paisajes naturales más impactantes de Asia. Sus formaciones verticales y senderos panorámicos lo convierten en un destino imprescindible para amantes del ecoturismo y la fotografía.',
        'texto-destinos-chengdu': 'Capital de la provincia de Sichuan, Chengdu es reconocida tanto por su patrimonio cultural como por ser el principal centro de conservación del panda gigante. Además, su gastronomía picante y su estilo de vida relajado la convierten en una parada imprescindible para comprender la diversidad regional del país.',
        'texto-destinos-leshan': 'Tallado en un acantilado hace más de mil años, el Gran Buda de Leshan es la escultura de Buda en piedra más grande del mundo. Su monumentalidad y contexto natural reflejan la profunda influencia del budismo en la historia y el arte chino.',
        'texto-destinos-hongkong': 'Región Administrativa Especial, Hong Kong destaca por su carácter internacional y su singular mezcla cultural. Rascacielos, tradición cantonesa y herencia colonial conviven en un entorno dinámico que ofrece una perspectiva distinta dentro del panorama chino, consolidándola como uno de los destinos más vibrantes de Asia.',
        'texto-destinos-final': 'Explorar China es adentrarse en una civilización milenaria donde historia, tradición y modernidad convergen de manera extraordinaria. Cada experiencia —ya sea cultural, gastronómica o natural— revela una sociedad profundamente conectada con sus raíces y en constante evolución. Más que un destino turístico, China representa una oportunidad para comprender valores, símbolos y expresiones que han trascendido generaciones. Te invitamos a vivir de cerca sus festivales, paisajes y patrimonio cultural, y a descubrir una nación que combina grandeza histórica con dinamismo contemporáneo.',
        
        // Sobre Nosotros
        'texto-somos': 'Somos un proyecto académico orientado a la conceptualización y diseño de un sitio web multilingüe enfocado en la difusión de la riqueza cultural de China para una audiencia internacional. "Panda Harmony" nace como una propuesta que integra investigación cultural, diseño visual estratégico e internacionalización de contenidos, con el propósito de construir un espacio digital que promueva el respeto intercultural y la comprensión global. Nuestro enfoque combina tradición y modernidad, articulando elementos históricos, filosóficos, simbólicos y turísticos bajo una estructura clara y accesible. Más que un sitio informativo, buscamos desarrollar una experiencia digital que conecte culturas, facilite el aprendizaje y evidencie cómo el diseño web puede convertirse en una herramienta de comunicación cultural responsable.',
        'texto-mision': 'Nuestra misión es desarrollar una plataforma digital bilingüe (español–inglés) que presente la cultura china de manera rigurosa, visualmente coherente e interculturalmente sensible, integrando elementos históricos, simbólicos y turísticos en un entorno accesible para usuarios de diferentes contextos culturales. Buscamos ofrecer información clara y contextualizada que permita comprender la identidad china más allá de los estereotipos, aplicando principios de internacionalización, diseño inclusivo y organización estructurada del contenido. A través de una propuesta visual equilibrada entre tradición y modernidad, aspiramos a fomentar el aprendizaje, el respeto cultural y el interés por la diversidad global.',
        'texto-vision': 'Nuestra visión es consolidar un modelo de sitio web cultural que sirva como referente académico en la conceptualización de plataformas digitales internacionales, demostrando que el diseño web puede actuar como puente entre culturas. Aspiramos a que Panda Harmony evolucione como un espacio digital que promueva la sensibilidad intercultural, el diálogo global y la apreciación informada de las tradiciones chinas, manteniendo un equilibrio entre autenticidad cultural, claridad comunicativa y experiencia de usuario. En el largo plazo, proyectamos que esta propuesta contribuya al fortalecimiento de competencias en diseño multicultural y comunicación digital responsable.',
        
        // Referencias
        'texto-referencias-intro': 'Las siguientes fuentes han sido consultadas para la elaboración de los contenidos de este sitio web, garantizando la rigurosidad y calidad de la información presentada sobre la cultura, historia y destinos de China.',
        'texto-referencias-final': 'Para la elaboración de los contenidos de este sitio web se han consultado fuentes académicas, institucionales y culturales de reconocida trayectoria en el estudio y difusión de la cultura china. Entre ellas se incluyen publicaciones especializadas en historia del arte asiático, sitios oficiales de turismo de China, documentos de la UNESCO sobre Patrimonio de la Humanidad, así como investigaciones académicas sobre filosofía oriental, antropología cultural y tradiciones festivas chinas. Cada sección ha sido desarrollada con rigor conceptual, respetando la autenticidad de los símbolos, valores y expresiones culturales aquí presentadas. Este proyecto se compromete con la divulgación responsable y el respeto por la diversidad cultural, citando adecuadamente las fuentes utilizadas y promoviendo un entendimiento profundo de la civilización china.'
    },
    en: {
        // Navigation
        'nav-inicio': 'Home',
        'nav-cultura': 'Culture',
        'nav-destinos': 'Destinations',
        'nav-sobrenosotros': 'About Us',
        'nav-referencias': 'References',
        'footer-copyright': '© 2025 web-china · All rights reserved',
        
        // Buttons
        'btn-cultura': 'EXPLORE CULTURE',
        'btn-destinos': 'EXPLORE FEATURED DESTINATIONS',
        
        // Main titles
        'title-index': 'THIS IS CHINA',
        'title-cultura': 'Philosophy',
        'title-destinos': 'PLACES YOU COULD VISIT',
        'title-sobrenosotros': 'ABOUT US',
        'title-referencias': 'REFERENCES AND SOURCES',
        
        // Subtitles
        'sub-destinos': 'Destinations',
        'sub-porqueir': 'WHY GO?',
        'sub-lugares': 'MOST VISITED PLACES',
        'sub-simbolos': 'SYMBOLS AND MEANINGS',
        'sub-festivales': 'TRADITIONAL FESTIVALS',
        'sub-valores': 'CULTURAL VALUES',
        'sub-gastronomia': 'GASTRONOMY AND ATTIRE',
        'sub-empacaste': 'ALREADY PACKED YOUR THINGS?',
        
        // Cards index
        'card-historia': 'Millenary History',
        'card-patrimonio': 'Monumental Heritage',
        'card-sabiduria': 'Philosophical Wisdom',
        'card-festivales': 'Unique Festivals',
        'card-naturaleza': 'Nature and Landscapes',
        'card-panda': 'The Giant Panda',
        
        // Textos largos - Index ENGLISH
        'texto-index-intro': 'The People\'s Republic of China, located in East Asia on the Pacific coast, is the third largest country in the world and one of the oldest continuous civilizations, with over five millennia of history. Its diverse territory —from the Tibetan Plateau and the Himalayas to vast plains, iconic rivers like the Yangtze River, and extensive coastlines— reflects exceptional geographical and climatic richness. The cradle of transcendental innovations such as paper, printing, the compass, and gunpowder, China has exerted a decisive influence on global cultural and scientific development. Today it combines tradition and modernity: a multicultural nation composed of 56 ethnic groups, with Mandarin as the official language and an artistic heritage that includes classical literature, traditional opera, calligraphy, painting, and globally recognized gastronomy. A contemporary economic power and technological reference, China offers visitors a comprehensive experience where historical heritage, urban dynamism, natural landscapes, and hospitality come together in a globally relevant destination.',
        'texto-index-destinos': 'The People\'s Republic of China offers a diverse territorial organization that reflects its cultural and historical complexity. The country consists of 34 first-level administrative divisions: 22 provinces, 4 municipalities directly administered by the central government —Beijing, Shanghai, Chongqing, and Tianjin—, 5 autonomous regions with greater legislative powers linked to minority ethnic groups, and 2 Special Administrative Regions. With more than 660 cities of different sizes and economic dynamics, each destination offers its own identity in culture, heritage, gastronomy, and experiences, consolidating China as a country of contrasts and opportunities for the traveler.',
        'texto-card-historia': 'More than 5,000 years of civilization reflected in temples, palaces, and ancestral traditions.',
        'texto-card-patrimonio': 'From the Great Wall to the Forbidden City, world-renowned monuments.',
        'texto-card-sabiduria': 'Birthplace of Confucianism and Taoism, where harmony and balance are core values.',
        'texto-card-festivales': 'Celebrations like Chinese New Year fill cities with color, symbolism, and tradition.',
        'texto-card-naturaleza': 'Mountains, national parks, and natural landscapes like Zhangjiajie National Forest Park offer stunning views.',
        'texto-card-panda': 'The Giant Panda, a national symbol of peace and conservation, represents the connection between nature and culture.',
        'texto-muralla': 'The iconic historical wall and one of the Seven Wonders of the World.',
        'texto-templo': 'Ceremonial complex where emperors performed sacred rituals.',
        'texto-guerreros': 'Impressive army of funerary sculptures in Xi\'an.',
        
        // Culture ENGLISH
        'texto-cultura-filosofia': 'Confucianism, Taoism, and Buddhism constitute the three intellectual and spiritual pillars of Chinese civilization. Confucianism, inspired by Confucius, established an ethics focused on social responsibility, hierarchy, and family harmony, profoundly influencing political organization since the Han Dynasty. Taoism proposed the search for balance with the "Tao" or natural order, providing a spiritual vision that influenced medicine, science, and the arts. Buddhism, introduced from India in the 1st century, promoted personal enlightenment and enriched architecture, literature, and philosophical thought. Rather than competing, these currents dialogued and integrated, shaping a complex cultural identity whose influence endures in contemporary China.',
        'texto-cultura-confucianismo': 'Ethical and philosophical system based on the teachings of Confucius that promotes social harmony through the fulfillment of duties, respect for hierarchy, education, and moral virtue.',
        'texto-cultura-taoismo': 'Philosophical-religious tradition centered on the "Tao" (the Way), which proposes living in balance with the natural order of the universe, practicing simplicity, spontaneity, and the principle of wu-wei (action without forcing).',
        'texto-cultura-budismo': 'Spiritual doctrine originating in India by Gautama Buddha that seeks enlightenment through meditation, wisdom, and overcoming suffering to achieve nirvana.',
        'texto-cultura-simbolos': 'In Chinese culture, auspicious symbols constitute a visual language that communicates collective values, beliefs, and aspirations. Far from being merely decorative, these elements express a worldview in which human beings, nature, and the universe are interconnected. The dragon, considered a benevolent and powerful creature, symbolizes vital energy (Qi), authority, and protection, and has been historically linked to the emperor and the celestial order. The phoenix, for its part, represents harmony, virtue, and renewal, and its symbolic union with the dragon reflects the balance between complementary forces. Other animals also have deep meanings: the crane embodies longevity and wisdom; the carp represents perseverance and improvement; and the turtle symbolizes stability, resistance, and continuity. These symbols often appear in architecture, textiles, ceramics, and traditional celebrations, reinforcing values such as prosperity, family, and good fortune. Color is equally fundamental in Chinese symbology. Red is associated with happiness, celebration, and protection against negative energies; gold and yellow evoke power, prosperity, and imperial authority; while green suggests harmony, growth, and connection with nature. Together, this symbology not only beautifies spaces and objects but also structures a cultural identity based on balance, historical continuity, and respect for the natural order.',
        'texto-cultura-festivales': 'Traditional Chinese festivals constitute a living expression of the country\'s cultural identity and historical continuity. Celebrations such as Chinese New Year, the Mid-Autumn Festival, and the Dragon Boat Festival integrate ancestral rituals, symbolism, and family values that strengthen the sense of community and belonging. Through elements such as red lanterns, traditional dances, and symbolic offerings, these festivities convey messages of prosperity, gratitude, and renewal, reflecting a culture where tradition and modernity coexist in harmony.',
        'texto-cultura-anioviejo': 'Chinese New Year, also known as the Spring Festival, is the most important celebration of the traditional calendar and symbolizes renewal, prosperity, and family continuity. Based on the lunar cycle, it marks the beginning of a new period full of hope and collective projection. During these dates, the world\'s largest annual migration occurs, as millions of people return to their homes to reunite with their families, reaffirming the centrality of the family nucleus in Chinese culture. Traditions include the giving of red envelopes (hongbao), decoration with lanterns and auspicious symbols, and dragon and lion dances to attract good fortune. More than a festivity, it represents a cultural act of unity, gratitude, and spiritual renewal.',
        'texto-cultura-qingming': 'The Qingming Festival, known as Tomb Sweeping Day, is an ancestral tradition dedicated to honoring the memory and legacy of ancestors. Celebrated in early April, it combines reflection, respect, and renewal in a single cultural act. During this day, families visit cemeteries to clean tombs, offer flowers, food, and incense, and express gratitude to past generations. This ritual reaffirms the Confucian principle of filial piety, the ethical foundation of Chinese society. It also strengthens generational continuity by transmitting values, history, and a sense of belonging. Qingming not only preserves family memory but also consolidates collective identity as a bridge between past and present.',
        'texto-cultura-zodiaco': 'Chinese New Year is governed by the traditional lunisolar calendar, whose start varies between January 21 and February 20, according to the first new moon of the year. Each year is associated with one of the twelve animals of the Chinese zodiac (Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, and Pig), forming a cycle that repeats every twelve years. In addition to the animal, each year is combined with one of the five elements —wood, fire, earth, metal, and water— creating a complete 60-year cycle. This system not only organizes time but also influences cultural interpretations of personality, fortune, and social dynamics. More than an astrological practice, the Chinese zodiac constitutes a symbolic expression of the balance between nature, time, and society within the traditional Chinese worldview.',
        'texto-cultura-festivales-texto': 'Traditional Chinese festivals constitute a living manifestation of the country\'s historical, spiritual, and social identity. Each celebration —from New Year to Qingming— reflects values such as family unity, respect for ancestors, gratitude, and collective hope. Participating in these events allows one to understand not only their rituals and symbols but also the deep connection between tradition and contemporary life. Attending a festival in China is to experience firsthand the harmony between culture, community, and celebration. It is an invitation to discover a millenary civilization that keeps its roots alive through every encounter, every dance, and every shared ritual.',
        'texto-cultura-bote': 'The Dragon Boat Festival is celebrated on the fifth day of the fifth lunar month and commemorates the poet and statesman Qu Yuan, a symbol of loyalty and patriotism. The emblematic dragon boat races evoke the historical attempt to rescue him from the river, while the consumption of zongzi —glutinous rice wrapped in bamboo leaves— preserves the memory of his sacrifice. This festivity integrates tradition, sport, and symbolism, strengthening cultural identity through collective memory. In its contemporary dimension, it continues to promote values such as honor, fidelity, and commitment to the common good.',
        'texto-cultura-mediootoño': 'Celebrated on the fifteenth day of the eighth lunar month, the Mid-Autumn Festival honors the moon as a symbol of fullness, balance, and harmony. Historically linked to the harvest, it expresses gratitude for the abundance and well-being achieved during the year. Families gather to share mooncakes and contemplate the full moon, whose circular shape represents unity and completeness. From a cultural perspective, this festivity reinforces values such as social cohesion and moral integrity, reminding us of the importance of family gatherings even in contexts of distance. Beyond its ceremonial character, it constitutes a celebration of balance between nature, community, and tradition.',
        'texto-cultura-valores': 'Chinese culture is based on ethical principles that have shaped its social structure for millennia. The family is the central axis of social life and represents continuity, identity, and shared responsibility between generations. The concept of filial piety (xiao) promotes care and respect for parents and ancestors, consolidating the family as the nucleus of moral stability. In this context, respect is directed not only to elders but also to social hierarchy, tradition, and collective order, favoring harmony and cohesion within the community. Education occupies a privileged place as a tool for personal growth and family honor, deeply influenced by the Confucian tradition that values knowledge, discipline, and constant improvement. At the same time, the sense of community reinforces cooperation, shared responsibility, and the search for collective well-being over individualism. These values shape a society where balance, reciprocity, and cultural continuity are essential pillars of its identity.',
        'texto-cultura-gastronomia': 'Chinese gastronomy is an integral expression of its cultural identity, based on the balance of flavors, textures, and colors. More than a culinary practice, it represents a philosophy of harmony influenced by traditional principles such as yin and yang, where ingredients are combined seeking nutritional and energetic balance. The country\'s geographic diversity has given rise to multiple regional traditions, each with its own techniques, spices, and preparation methods. Sharing food at a round table symbolizes unity, respect, and family cohesion, making food a deeply significant social act.',
        'texto-cultura-vestuario': 'Traditional Chinese attire reflects hierarchy, symbolism, and cultural aesthetics. Garments such as the hanfu and qipao stand out for their elegance, fluid lines, and use of colors with symbolic meaning, especially red and gold, associated with prosperity and good fortune. Historically, materials, embroidery, and designs indicated social status and ceremonial function. Beyond its aesthetic value, traditional clothing expresses historical identity and cultural continuity, being currently used in festivities, celebrations, and artistic representations as a way to preserve the country\'s intangible heritage.',
        
        // Destinations ENGLISH
        'texto-destinos-intro': 'China\'s territorial richness offers a diversity of destinations that reflect the depth of its history, the magnitude of its architectural heritage, and the majesty of its natural landscapes. From cities that preserve millenary traces to contemporary settings that evidence their constant transformation, each place constitutes a unique cultural experience. Below is a representative selection of emblematic spaces that allow understanding of the country\'s geographic, symbolic, and cultural breadth. These destinations stand out not only for their tourist value but also for their historical significance and contribution to national identity, inviting the visitor to discover a nation where tradition and modernity coexist in harmony.',
        'texto-destinos-pekin': 'Political and cultural capital of China, Beijing combines imperial heritage and contemporary dynamism. Here, palaces, ancestral temples, and wide modern avenues coexist, reflecting the country\'s evolution. It is the ideal starting point to understand dynastic history, traditional philosophy, and the urban transformation of one of the world\'s oldest civilizations.',
        'texto-destinos-muralla': 'An indisputable icon of the country, the Great Wall is one of the most impressive engineering works in history. Built and rebuilt over centuries to protect the empire\'s borders, it winds through mountains and valleys offering spectacular panoramas and a profound history lesson. Touring its watchtowers and restored sections allows one to understand the magnitude of the Chinese architectural legacy and its global cultural relevance.',
        'texto-destinos-guilin': 'Famous for their karst formations and river landscapes, Guilin and Yangshuo offer some of China\'s most representative natural settings. The mountains that emerge from the mist and the tranquil rivers create an almost pictorial atmosphere, ideal for those seeking contact with nature and landscapes of extraordinary beauty.',
        'texto-destinos-pingyao': 'Considered one of the best-preserved walled cities in the country, Pingyao allows you to travel back in time to imperial China. Its cobblestone streets, traditional courtyards, and ancient financial institutions reflect the region\'s historical role in the empire\'s economic development.',
        'texto-destinos-longji': 'With more than seven centuries of history, these terraces sculpted into the mountains represent the harmony between human beings and the environment. Their stepped design is not only functional for agriculture but also visually striking, changing color according to the season and offering a unique landscape experience.',
        'texto-destinos-xian': 'Xi\'an was the starting point of the Silk Road and one of the most important capitals of ancient China. Its greatest treasure is the Terracotta Warriors army, thousands of figures sculpted with an extraordinary level of detail, guarding the mausoleum of the first emperor and constituting one of the most relevant archaeological discoveries of the 20th century.',
        'texto-destinos-tianmen': 'Known for its spectacular natural arch and suspended walkways over the void, Tianmen Mountain offers an experience of adventure and contemplation. The cable car ascent and the famous "Heaven\'s Gate" symbolize the spiritual dimension that many mountains possess in Chinese tradition.',
        'texto-destinos-zhangjiajie': 'Famous for its stone columns that rise dramatically through the mist, this national park is one of Asia\'s most striking natural landscapes. Its vertical formations and panoramic trails make it an essential destination for ecotourism and photography lovers.',
        'texto-destinos-chengdu': 'Capital of Sichuan province, Chengdu is recognized both for its cultural heritage and for being the main giant panda conservation center. In addition, its spicy cuisine and relaxed lifestyle make it an essential stop to understand the country\'s regional diversity.',
        'texto-destinos-leshan': 'Carved into a cliff over a thousand years ago, the Leshan Giant Buddha is the largest stone Buddha sculpture in the world. Its monumentality and natural context reflect the profound influence of Buddhism on Chinese history and art.',
        'texto-destinos-hongkong': 'Special Administrative Region, Hong Kong stands out for its international character and unique cultural mix. Skyscrapers, Cantonese tradition, and colonial heritage coexist in a dynamic environment that offers a different perspective within the Chinese panorama, consolidating it as one of Asia\'s most vibrant destinations.',
        'texto-destinos-final': 'Exploring China is entering a millenary civilization where history, tradition, and modernity converge extraordinarily. Each experience —whether cultural, gastronomic, or natural— reveals a society deeply connected to its roots and constantly evolving. More than a tourist destination, China represents an opportunity to understand values, symbols, and expressions that have transcended generations. We invite you to experience firsthand its festivals, landscapes, and cultural heritage, and to discover a nation that combines historical greatness with contemporary dynamism.',
        
        // About Us ENGLISH
        'texto-somos': 'We are an academic project focused on the conceptualization and design of a multilingual website aimed at disseminating the cultural richness of China to an international audience. "Panda Harmony" was born as a proposal that integrates cultural research, strategic visual design, and content internationalization, with the purpose of building a digital space that promotes intercultural respect and global understanding. Our approach combines tradition and modernity, articulating historical, philosophical, symbolic, and tourist elements under a clear and accessible structure. More than an informational site, we seek to develop a digital experience that connects cultures, facilitates learning, and demonstrates how web design can become a tool for responsible cultural communication.',
        'texto-mision': 'Our mission is to develop a bilingual digital platform (Spanish-English) that presents Chinese culture in a rigorous, visually coherent, and interculturally sensitive manner, integrating historical, symbolic, and tourist elements in an accessible environment for users from different cultural contexts. We seek to offer clear and contextualized information that allows understanding of Chinese identity beyond stereotypes, applying principles of internationalization, inclusive design, and structured content organization. Through a visual proposal balanced between tradition and modernity, we aspire to foster learning, cultural respect, and interest in global diversity.',
        'texto-vision': 'Our vision is to consolidate a cultural website model that serves as an academic reference in the conceptualization of international digital platforms, demonstrating that web design can act as a bridge between cultures. We aspire for Panda Harmony to evolve as a digital space that promotes intercultural sensitivity, global dialogue, and informed appreciation of Chinese traditions, maintaining a balance between cultural authenticity, communicative clarity, and user experience. In the long term, we project that this proposal will contribute to strengthening competencies in multicultural design and responsible digital communication.',
        
        // References ENGLISH
        'texto-referencias-intro': 'The following sources have been consulted for the development of the content of this website, ensuring the rigor and quality of the information presented about the culture, history, and destinations of China.',
        'texto-referencias-final': 'For the development of the content of this website, academic, institutional, and cultural sources of recognized trajectory in the study and dissemination of Chinese culture have been consulted. These include specialized publications on Asian art history, official China tourism websites, UNESCO World Heritage documents, as well as academic research on Eastern philosophy, cultural anthropology, and Chinese festive traditions. Each section has been developed with conceptual rigor, respecting the authenticity of the symbols, values, and cultural expressions presented here. This project is committed to responsible dissemination and respect for cultural diversity, properly citing the sources used and promoting a deep understanding of Chinese civilization.'
    }
};

// Función para cambiar idioma
function setLanguage(lang) {
    localStorage.setItem('preferred-language', lang);
    
    // Actualizar botones activos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.textContent === lang.toUpperCase() || btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Traducir todos los elementos con atributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'P' || element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'SPAN' || element.tagName === 'DIV' || element.tagName === 'BUTTON') {
                element.innerHTML = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Traducir títulos de página
    const pageTitleMap = {
        'index.html': { es: 'Esto es China · herencia y destino', en: 'This is China · heritage and destiny' },
        'cultura.html': { es: 'Cultura · China milenaria', en: 'Culture · Millenary China' },
        'destinos.html': { es: 'Destinos · China monumental', en: 'Destinations · Monumental China' },
        'sobrenosotros.html': { es: 'Sobre Nosotros · Panda Harmony', en: 'About Us · Panda Harmony' },
        'referencias.html': { es: 'Referencias · Panda Harmony', en: 'References · Panda Harmony' }
    };
    const currentPage = window.location.pathname.split('/').pop();
    if (pageTitleMap[currentPage] && pageTitleMap[currentPage][lang]) {
        document.title = pageTitleMap[currentPage][lang];
    }
}

// Función para toggle del menú móvil
function initMobileMenu() {
    const headerFlex = document.querySelector('.header-flex');
    if (!headerFlex) return;
    
    // Verificar si el botón ya existe para no duplicar
    if (document.querySelector('.hamburger-menu')) return;
    
    // Crear botón hamburguesa
    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.className = 'hamburger-menu';
    hamburgerBtn.innerHTML = '<span></span><span></span><span></span>';
    hamburgerBtn.setAttribute('aria-label', 'Menú');
    
    // Mover navegación y language wrapper a un contenedor móvil
    const nav = document.querySelector('.nav-links');
    const langWrapper = document.querySelector('.lang-wrapper');
    
    if (nav && langWrapper) {
        // Verificar si el contenedor móvil ya existe
        let mobileMenuContainer = document.querySelector('.mobile-menu-container');
        
        if (!mobileMenuContainer) {
            mobileMenuContainer = document.createElement('div');
            mobileMenuContainer.className = 'mobile-menu-container';
            
            // Clonar elementos
            const navClone = nav.cloneNode(true);
            const langClone = langWrapper.cloneNode(true);
            
            mobileMenuContainer.appendChild(navClone);
            mobileMenuContainer.appendChild(langClone);
            
            // Insertar después del header-flex
            headerFlex.parentNode.insertBefore(mobileMenuContainer, headerFlex.nextSibling);
        }
        
        // Insertar botón hamburguesa si no existe
        if (!headerFlex.querySelector('.hamburger-menu')) {
            headerFlex.appendChild(hamburgerBtn);
        }
        
        const menuContainer = document.querySelector('.mobile-menu-container');
        const menuBtn = document.querySelector('.hamburger-menu');
        
        if (menuBtn && menuContainer) {
            // Evento click para toggle
            menuBtn.addEventListener('click', () => {
                menuContainer.classList.toggle('active');
                menuBtn.classList.toggle('active');
            });
            
            // Cerrar menú al hacer click en un enlace
            menuContainer.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    menuContainer.classList.remove('active');
                    menuBtn.classList.remove('active');
                });
            });
        }
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar menú móvil
    initMobileMenu();
    
    // Configurar botones de idioma
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.textContent.toLowerCase();
            setLanguage(lang);
        });
        // Añadir atributo data-lang
        btn.setAttribute('data-lang', btn.textContent.toLowerCase());
    });
    
    // Cargar idioma guardado o español por defecto
    const savedLang = localStorage.getItem('preferred-language') || 'es';
    setLanguage(savedLang);
});