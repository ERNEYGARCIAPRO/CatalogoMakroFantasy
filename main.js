let productoSeleccionado = {};
function mostrarProductos(productos) {
    const contenedor = document.getElementById("contenedor-principal");
    contenedor.innerHTML = ""; // Limpiamos para que esté siempre ordenado

    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("product-card");

    const miniaturasHTML = producto.img.map((src, index) => `
         <img src="${src}" 
         class="thumb ${index === 0 ? 'active' : ''}" 
         onclick="cambiarImagen(this)" 
         alt="miniatura">
`).join('');

        card.innerHTML = `
            <div class="card-img">
                <img src="${producto.img[0]}" alt="${producto.titulo}">
            </div>
            <div class="thumbnail-container">
                ${miniaturasHTML}
            </div>
            <div class="card-info">
                <h2>${producto.titulo}</h2>
                 <span class="precio">$${producto.precio}</span>
                <p class="codigo">${producto.codigo}</p>
                <p class="descripcion">${producto.desc}</p>
                <div class="card-footer">
                    <button onclick="abrirModal('${producto.id}', '${producto.titulo}', '${producto.img[0]}')" class="btn-pedido">
                       Pedir
                    </button>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}
const linksMenu = document.querySelectorAll('.nav-menu a');
const tituloCategoria = document.getElementById("titulo-categoria"); // Referencia al título

linksMenu.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        // Obtenemos el nombre de la categoría del texto del menú
        const nombreCategoria = e.target.textContent; 
        const categoriaBusqueda = nombreCategoria.toLowerCase();

        // 1. Actualizamos el título en la pantalla
        if (categoriaBusqueda === "inicio") {
            tituloCategoria.textContent = "Nuestro Catálogo";
            mostrarProductos(productos);
        } else {
            // Ponemos el nombre de la categoría (ej: "Belleza")
            tituloCategoria.textContent = nombreCategoria; 
            
            // 2. Filtramos y mostramos
            const productosFiltrados = productos.filter(p => 
                p.categoria.toLowerCase() === categoriaBusqueda
            );
            mostrarProductos(productosFiltrados);
        }
    });
});

function cambiarImagen(elemento) {
    // 1. Buscamos la tarjeta (el contenedor padre más cercano)
    const tarjeta = elemento.closest('.product-card');
    
    // 2. Buscamos la imagen grande DENTRO de esa tarjeta
    const imagenGrande = tarjeta.querySelector('.card-img img');
    if (imagenGrande) {
        // Cambiamos la fuente de la imagen grande por la de la miniatura
        imagenGrande.src = elemento.src;

        // 3. Gestión de la clase 'active' para el borde
        const todasLasThumbs = tarjeta.querySelectorAll('.thumb');
        todasLasThumbs.forEach(t => t.classList.remove('active'));
        elemento.classList.add('active');
    }
}
function abrirModal(id, titulo, imagen) {
    productoSeleccionado = { id, titulo, imagen };
    document.getElementById('modalTitulo').innerText = titulo;
    document.getElementById('modalImg').src = imagen;
    document.getElementById('modalCantidad').value = 1;
    document.getElementById('modalPedido').style.display = "block";
}
function cerrarModal() {
    document.getElementById('modalPedido').style.display = "none";
}
function enviarWhatsApp() {
    // 1. Obtenemos la cantidad actual del input del modal
    const cantidad = document.getElementById('modalCantidad').value;
    const numeroWA = "573171652209";
    
    // 2. Validamos que haya una cantidad válida
    if (cantidad < 1) {
        alert("Por favor, ingresa una cantidad válida.");
        return;
    }

    // 3. Construimos el mensaje
    const mensaje = `¡Hola MakroFantasy! 👋
Me gustaría hacer un pedido:
📦 *Producto:* ${productoSeleccionado.titulo}
🔢 *Cantidad:* ${cantidad}
🖼️ *Foto:* ${window.location.origin}/${productoSeleccionado.imagen}`;

    // 4. Abrimos WhatsApp
    const url = `https://wa.me/${numeroWA}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    
    // 5. Cerramos el modal
    cerrarModal();
}
window.onclick = function(event) {
    const modal = document.getElementById('modalPedido');
    if (event.target == modal) { 
        cerrarModal(); 
    }
}
// Al cargar la página por primera vez, mostramos todo
window.onload = () => mostrarProductos(productos);