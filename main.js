function mostrarProductos(productos) {
    const contenedor = document.getElementById("contenedor-principal");
    contenedor.innerHTML = ""; // Limpiamos para que esté siempre ordenado

    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <div class="card-img">
                <img src="${producto.img[0]}" alt="${producto.titulo}">
            </div>
            <div class="card-info">
            
                <h3>${producto.titulo}</h3>
                <p class="codigo">${producto.codigo}</p>
                <p class="descripcion">${producto.desc}</p>
                <div class="card-footer">
                    <span class="precio">$${producto.precio}</span>
                    <a href="https://wa.me/573171652209?text=Hola, me interesa el producto: ${producto.titulo}" 
                       target="_blank" class="btn-pedido">
                       <i class="fab fa-whatsapp"></i> Pedir
                    </a>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}
const linksMenu = document.querySelectorAll('.nav-menu a');

linksMenu.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que la página salte
        
        const categoriaSeleccionada = e.target.textContent.toLowerCase();

        if (categoriaSeleccionada === "inicio") {
            mostrarProductos(productos); // Muestra todo
        } else {
            const productosFiltrados = productos.filter(p => p.categoria.toLowerCase() === categoriaSeleccionada);
            mostrarProductos(productosFiltrados);
        }
    });
});

// Al cargar la página por primera vez, mostramos todo
window.onload = () => mostrarProductos(productos);