// La variable 'listaProductos' debe ser global para que main.js la vea
const listaProductos = [
    { 
        id: 1,
        titulo:"Banana Dorada", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:"1400 c/u", 
        img: [
            "imagenes/Banana-Dorada-195-196-197_1.jpg",
            "imagenes/Banana-Dorada-195-196-197_2.jpg",
            "imagenes/Banana-Dorada-195-196-197_3.jpg",
            "imagenes/Banana-Dorada-195-196-197_4.jpg",
        ],
        desc: "Gancho dorado estilo banana, diseños y colores surtidos, paquete x 12 uni"
    },
    { 
        id: 2, 
        titulo: "Gancho De Ropa", 
        marca: "Rio",
        categoria: "Cacharreria",
        precio:"3500 paq", 
        img: [
            "imagenes/Gancho-De-Ropa-Rio-932_1.jpg",
            "imagenes/Gancho-De-Ropa-Rio-932_2.jpg",
        ],
        desc: "Gancho de ropa plastico colores surtidos, paquete paquete x 20 uni"
    },
    { 
        id: 3,
        titulo: "Caiman Flor Doble", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 2600 c/u", 
        img: [
            "imagenes/Caiman-Flor-Doble-372_1.jpg",
            "imagenes/Caiman-Flor-Doble-372_2.jpg",
            "imagenes/Caiman-Flor-Doble-372_3.jpg",
        ],
        desc: "Caiman motivo flor doble  colores tropicales surtidos paquete paquete x 12 uni"
    },
     { 
        id: 4,
        titulo: "Caiman Cudrado Flor", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1850 c/u", 
        img: [
            "imagenes/caiman-cuadrado-flor-379_2.jpg",
            "imagenes/caiman-cuadrado-flor-379_1.jpg",
        ],
        desc: "Caiman cuadrado flor colores hawaianos surtidos paquete paquete x 12 uni"
    },
    { 
        id: 5,
        titulo: "Caiman Cudrado", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 2100 c/u", 
        img: [
            "imagenes/caiman-cuadrado-377_1.jpg",
            "imagenes/caiman-cuadrado-377_2.jpg",
        ],
        desc: "Caiman cuadrado grande manchas color mate surtido paquete x 12 uni"
    },
     { 
        id: 6,
        titulo: "Caiman Cudrado Transparente", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 2550 c/u", 
        img: [
            "imagenes/caiman-cuadrado-transparente_560_1.jpg",
            "imagenes/caiman-cuadrado-transparente_560_2.jpg",
        ],
        desc: "Caiman cuadrado transparente grande paquete paquete x 12 uni"
    },
         { 
        id: 7,
        titulo: "Caiman Cudrado Dorado Colores", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1700c/u", 
        img: [
            "imagenes/caiman-cuadrado-dorado-colores-391_1.jpg",
            "imagenes/caiman-cuadrado-dorado-colores-391_2.jpg",
        ],
        desc: "Caiman cuadrado dorado mediano paquetepaquete x 12 uni"
    },
    { 
        id: 8,
        titulo: "Caiman Flor Girasol Pequeño", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 950 c/u", 
        img: [
            "imagenes/caiman-flor-girasol-pequeño-153_1.jpg",
            "imagenes/caiman-flor-girasol-pequeño-153_2.jpg",
            "imagenes/caiman-flor-girasol-pequeño-153_3.jpg",
            "imagenes/caiman-flor-girasol-pequeño-153_4.jpg"
        ],
        desc: "Caiman pequeño motivo girasol colores tropicales surtidos, paquete x 12 uni"
    },
    { 
        id: 9,
        titulo: "Caiman Flor Transparente Mini", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 900 c/u", 
        img: [
            "imagenes/caiman-flor-transparente-mini_157_1.jpg",
            "imagenes/caiman-flor-transparente-mini_157_2.jpg",
        ],
        desc: "Caiman flor, pequeño, transparente, colores surtidos, paquete x 12 uni."
    },
    { 
        id: 10,
        titulo: "Caiman Flor Mediano Trasnlucido", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1850 c/u", 
        img: [
            "imagenes/caiman-flor-mediano-371_1.jpg",
            "imagenes/caiman-flor-mediano-371_2.jpg",
        ],
        desc: "Caiman flor mediano, translucido con pequeñas pintas, colores surtudos paquete x 12 uni."
    },
    { 
        id: 11,
        titulo: "Caiman Metalico Mini Corona", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1850 c/u", 
        img: [
            "imagenes/caiman-mini-metalico-corona-160_1.jpg",
            "imagenes/caiman-mini-metalico-corona-160_2.jpg",
        ],
        desc: "Caiman pequeño metalizado dorado con perlas blancas paquete x 12 uni."
    },
    { 
        id: 12,
        titulo: "Caiman Tira Pasteles", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1300 c/u", 
        img: [
            "imagenes/caiman-tira-colores-162_1.jpg",
            "imagenes/caiman-tira-colores-162_2.jpg",
        ],
        desc: "Caiman pequeño, colores Pasteles surtido paquete x 12 uni"
    },
    { 
        id: 13,
        titulo: "Caiman Elegant", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 2000 c/u", 
        img: [
            "imagenes/caiman-elegant-383_1.jpg",
            "imagenes/caiman-elegant-383_2.jpg",
        ],
        desc: "Caiman elegant, tonos frios y calidos"
    },
    { 
        id: 14,
        titulo: "Caiman Mariposa Trasnlucido pequeño", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1000 c/u", 
        img: [
            "imagenes/caiman-mariposa-translucido-154_1.jpg",
            "imagenes/caiman-mariposa-translucido-154_2.jpg",
        ],
        desc: "Caiman mariposa translucido pequeño colores surtidos paquete x 12 uni"
    },
    { 
        id: 15,
        titulo: "Caiman Corazon grande", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1700 c/u", 
        img: [
            "imagenes/caiman-corazon-369_1.jpg",
            "imagenes/caiman-corazon-369_2.jpg",
        ],
        desc: "Caiman forma de corazon tamaño grande colores mate surtidos paquete x 12 uni."
    },
    { 
        id: 16,
        titulo: "Caiman Cuadrado Transparente decorado", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 2550 c/u", 
        img: [
            "imagenes/caiman-cuadrado-colores translucido-556_1.jpg",
            "imagenes/caiman-cuadrado-colores translucido-556_2.jpg",
        ],
        desc: "Caiman grande transparente, decorado con piedras y colores surtidos, paquete x 12 uni."
    },
    { 
        id: 17,
        titulo: "Caiman Mariposa Borde Negro", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 4200 c/u", 
        img: [
            "imagenes/caiman-mariposa-borde-negro-375_1.jpg",
            "imagenes/caiman-mariposa-borde-negro-375_2.jpg",
        ],
        desc: "Caiman grande, colores surtido, bordeado negro motivo de mariposa paquete x 12 uni."
    },
    { 
        id: 18,
        titulo: "Caiman Flor Borde Negro", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 4200 c/u", 
        img: [
            "imagenes/caiman-flor-borde-negro_368_1.jpg",
            "imagenes/caiman-flor-borde-negro_368_2.jpg",
        ],
        desc: "Caiman grande, colores surtido, bordeado negro motivo de flor paquete x 12 uni."
    },
    { 
        id: 19,
        titulo: "Caiman Mariposa Pequeño pastel", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1000 c/u", 
        img: [
            "imagenes/caiman-mariposa-pequeña-pastel-155_1.jpg",
            "imagenes/caiman-mariposa-pequeña-pastel-155_2.jpg",
            "imagenes/caiman-mariposa-pequeña-pastel-155_3.jpg",
            "imagenes/caiman-mariposa-pequeña-pastel-155_4.jpg",

        ],
        desc: "Caiman pequeño en colores pasteles, surtido con motivo de mariposa, paquete x12 uni."
    },
    { 
        id: 20,
        titulo: "Caiman Cuadrado Marron", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 2100 c/u", 
        img: [
            "imagenes/caiman-cuadrado-marron-392-293-394_1.jpg",
            "imagenes/caiman-cuadrado-marron-392-293-394_2.jpg",
        ],
        desc: "Caiman cuadrado decorado, color base marron paquete x12 uni."
    },
    { 
        id: 21,
        titulo: "Caiman tira decorado", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1400 c/u", 
        img: [
            "imagenes/caiman-tira-decorado-395_1.jpg",
            "imagenes/caiman-tira-decorado-395_2.jpg",
        ],
        desc: "Caiman tamaño mediano, decorado, colores surtidos paquete x12 uni."
    },
 { 
        id: 22,
        titulo: "Caiman tira metalizado", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1400 c/u", 
        img: [
            "imagenes/caiman-tira-metalizado-163_1.jpg",
            "imagenes/caiman-tira-metalizado-163_2.jpg",
        ],
        desc: "Caiman tamaño mediano, metalizado, colores surtidos paquete x12 uni."
    },
     { 
        id: 23,
        titulo: "Moña De Pana Con Piedras", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 3100 c/u", 
        img: [
            "imagenes/moña-pna-piedras-706.jpeg",
        ],
        desc: "Moña de pana, decorado con piedras, colores (blanco, rojo,negro, cafe, vino,azul), Paquete x 12 uni."
    },
     { 
        id: 24,
        titulo: "Flor Hawaii Mediana", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1700 c/u", 
        img: [
            "imagenes/flor-hawaii-mediana-168.jpg",
        ],
        desc: "Gancho de flor, motivo hawaiana, color blanco-amarillo paquete x 6 uni."
    },
     { 
        id: 25,
        titulo: "Moña Dona", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 850 c/u", 
        img: [
            "imagenes/moña-dona-351-352-353_1.jpeg",
            "imagenes/moña-dona-351-352-353_2.jpeg",
            "imagenes/moña-dona-351-352-353_3.jpeg",

        ],
        desc: "Moña tipo dona, colores pasteles, primarios, blanco y negro, paquete x 12 uni."
    },
     { 
        id: 26,
        titulo: "Moña Tercipelo", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1850 c/u", 
        img: [
         "imagenes/moña-terciopelo-193.jpeg",
        ],
        desc: "Moña tercipelo, colores (cafe, vino, rosa, negro), paquete x 12 uni."
    },
     { 
        id: 27,
        titulo: "Caiman Corazones Con Pintas", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1850 c/u", 
        img: [
            "imagenes/caiman-corazones-pintas-381_1.jpg",
            "imagenes/caiman-corazones-pintas-381_2.jpg",
        ],
        desc: "Caiman transparente con motivos de corazon y pintas de colores, paquete x12 uni."
    },
     { 
        id: 28,
        titulo: "Caiman flor Pastel Pequeño", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 850 c/u", 
        img: [
            "imagenes/caiman-flor-pastel-pequeño-156_1.jpg",
            "imagenes/caiman-flor-pastel-pequeño-156_2.jpg",
            "imagenes/caiman-flor-pastel-pequeño-156_3.jpg",
            "imagenes/caiman-flor-pastel-pequeño-156_4.jpg"
        ],
        desc: "Caiman motivo flor ovalada y estrella, colores surtidos en tonos pastel, paquete x12 uni."
    },
         { 
        id: 29,
        titulo: "Ligas de Bolsa Pequeñas", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 650 c/u", 
        img: [
            "imagenes/liguita-bolsa-pequeña-387-388-389-390_1.jpeg",
            "imagenes/liguita-bolsa-pequeña-387-388-389-390__2.jpeg",
            "imagenes/liguita-bolsa-pequeña-387-388-389-390__3.jpeg",
            "imagenes/liguita-bolsa-pequeña-387-388-389-390__4.jpeg"

        ],
        desc: "Paquete de liguitas x50 uni. motivos y colores surtidos, paquete x12 uni."
    },
         { 
        id: 30,
        titulo: "Caiman Rosa Araña", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1700 c/u", 
        img: [
            "imagenes/caiman-rosa-araña-180_1.jpg",
            "imagenes/caiman-rosa-araña-180_2.jpg",
        ],
        desc: "Caiman con motivo de rosa, colores tropicales surtidos, paquete x12 uni."
    },
         { 
        id: 31,
        titulo: "Moña Labubu", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1650 c/u", 
        img: [
            "imagenes/moña-labubu-210_1.jpeg",
            "imagenes/moña-labubu-210_2.jpeg",
        ],
        desc: "Moña con motivo de LABUBU x 3 unidades, colores surtidos, paquete x12 uni."
    },
         { 
        id: 32,
        titulo: "Caiman Frutas tropicales", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 2800 c/u", 
        img: [
            "imagenes/caiman-frutas-tropocales-373_1.jpg",
            "imagenes/caiman-frutas-tropocales-373_2.jpg",
            "imagenes/caiman-frutas-tropocales-373_3.jpg",
        ],
        desc: "Caiman con motivo de frutas tropocasles, paquete x12 uni."
    },
         { 
        id: 33,
        titulo: "Lapiz 2IN1 Maquillaje Engol", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1400 c/u", 
        img: [
            "imagenes/lapiz-2en1 engol-colores-2IN1_1.jpeg",
            "imagenes/lapiz-2en1 engol-colores-2IN1_2.jpeg",
            "imagenes/lapiz-2en1 engol-colores-2IN1_3.jpeg",
            "imagenes/lapiz-2en1 engol-colores-2IN1_4.jpeg",

        ],
        desc: "Lapiz para maquillaje 2 en 1 engolo, colores (blanco, marron claro, marron oscuro y negro), paquete x12 uni."
    },
    { 
        id: 34,
        titulo: "Caiman GDE Flor", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1850 c/u", 
        img: [
            "imagenes/caiman-gde-flor-178_1.jpg",
            "imagenes/caiman-gde-flor-178_2.jpg",
        ],
        desc: "Caiman Flor estilo acrilico colores (blanco, rosa, rojo, azul,morado,naranja), paquete x12 uni."
    },
       { 
        id: 35,
        titulo: "Anillos Caja Corazon", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 700 c/u", 
        img: [
            "imagenes/anillos-caja-corazon-485_1.jpeg",
            "imagenes/anillos-caja-corazon-485_2.jpeg",
        ],
        desc: "Caja de anillos en forma de corazon, anillos surtidos varios motivos, colores pasteles, paquete x12 uni."
    },
       { 
        id: 36,
        titulo: "Caiman Mariposa Borde Color", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 4200 c/u", 
        img: [
            "imagenes/caiman-mariposa-borde-color-376_1.jpg",
            "imagenes/caiman-mariposa-borde-color-376_2.jpg",
        ],
        desc: "Caiman forma de mariposa colores surtidos y borde de color diferente, paquete x12 uni."
    },
       { 
        id: 37,
        titulo: "Caiman Flor Mate", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 3100 c/u", 
        img: [
            "imagenes/caiman-flor-mate-374-1.jpg",
            "imagenes/caiman-flor-mate-374-2.jpg",
            "imagenes/caiman-flor-mate-374-3.jpg",
        ],
        desc: "Caiman Flor color mate surtido, paquete x12 uni."
    },
       { 
        id: 38,
        titulo: "Caiman Flor Pintas", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 1850 c/u", 
        img: [
            "imagenes/caiman-flor-pintas-380_1.jpg",
            "imagenes/caiman-flor-pintas-380_2.jpg",
        ],
        desc: "Caiman transparente con motivo de flor colores surtidos y pintas, paquete x12 uni."
    },
       { 
        id: 39,
        titulo: "Caiman Flor estampado", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 2550 c/u", 
        img: [
            "imagenes/caiman-flor-estampado-551_1.jpg",
            "imagenes/caiman-flor-estampado-551_2.jpg",
        ],
        desc: "Caiman Flor estampado colores y motivos surtidos, paquete x12 uni."
    },
       { 
        id: 40,
        titulo: "Moña 6 Rayas", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 700 c/u", 
        img: [
            "imagenes/moña-6 rallas-024-025-026_1.jpeg",
            "imagenes/moña-6 rallas-024-025-026_2.jpeg",
        ],
        desc: "Moña de colores surtidos fosforecente y lineas de colores , paquete x12 uni."
    },
     { 
        id: 41,
        titulo: "Ligas Girls Surtidas", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 800 c/u", 
        img: [
            "imagenes/ligas-girls-surtidasa-384-385_1.jpeg",
            "imagenes/ligas-girls-surtidasa-384-385_2.jpeg"
        ],
        desc: "ligas surtidas x 70 unidades, colores y motivos surtidos, paquete x12 uni."
    },
     { 
        id: 42,
        titulo: "Set Piojitos + Moñas", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 3100 c/u", 
        img: [
            "imagenes/set-piojita + moña-329-330_1.jpeg",
            "imagenes/set-piojita + moña-329-330_2.jpeg",
            "imagenes/set-piojita + moña-329-330_3.jpeg",
        ],
        desc: "Set, combina 6 piojitps 2 moñas con figuras variadas y 12 pares de moñas colores surtidos , paquete x12 uni."
    },
     { 
        id: 43,
        titulo: "Set Flor Hawaiana + Moñas", 
        marca: "Generico",
        categoria: "Fantasia",
        precio:" 3100 c/u", 
        img: [
            "imagenes/set-moña + flor-hawaiana-326_1.jpeg",
            "imagenes/set-moña + flor-hawaiana-326_2.jpeg",

        ],
        desc: "Set, convina 2 ganchos de flor hawaiana colores surtidos y 12 pares de moñas colores surtidos, paquete x12 uni."
    },
     { 
        id: 44,
        titulo: "Pomo Exfoliante", 
        marca: "Generico",
        categoria: "Belleza",
        precio:" 2100 c/u", 
        img: [
            "imagenes/pomo-exfoliante-137_1.jpeg",
            "imagenes/pomo-exfoliante-137_2.jpeg.jpeg",
        ],
        desc: "Pomo exfoliante x 2 uni. Colores surtidos, paquete x12 uni."
    },
     { 
        id: 45,
        titulo: "Mascarilla Velo Surtida", 
        marca: "Generico",
        categoria: "Belleza",
        precio:"1150 c/u", 
        img: [
            "imagenes/mascarilla-velo-surtida-LV1145_1.jpeg",
            "imagenes/mascarilla-velo-surtida-LV1145_2.jpeg",
            "imagenes/mascarilla-velo-surtida-LV1145_3.jpeg",
            "imagenes/mascarilla-velo-surtida-LV1145_4.jpeg",
            "imagenes/mascarilla-velo-surtida-LV1145_5.jpeg"
        ],
        desc: "Mascarilla en velo surtida (aloe, hacerola, pomegranate, snail,pearl) , paquete x 3 uni."
    },
     { 
        id: 46,
        titulo: "Gorro Satin", 
        marca: "Belleza",
        categoria: "Fantasia",
        precio:" 3800 c/u", 
        img: [
            "imagenes/gorro-satin-rio-668.jpeg",
        ],
        desc: "Gorro satin, paquete x 3 uni."
    },
    // Para agregar más, pon una coma después de la llave y copia el bloque
];

