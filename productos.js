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
    }
  
    // Para agregar más, pon una coma después de la llave y copia el bloque
];
