const contenedor = document.getElementById("contenedor-productos");
const modal = document.getElementById("modal-product");

function renderizarProductos() {
    if (!contenedor) return;

    contenedor.innerHTML = listaProductos.map(prod => `
        <div class="product-card">
            <img src="${prod.img[0]}" alt="${prod.titulo}" class="product-card-img">
            <h3>${prod.titulo}</h3>
            <p>${prod.marca}<br><span class="product-price">$ ${prod.precio}</span></p>
            <a href="#" class="btn-card" onclick="abrirModal(${prod.id})">Ver</a>
        </div>
    `).join('');
}

window.abrirModal = function(id) {
    const producto = listaProductos.find(p => p.id === id);
    if (!producto) return;

    // 1. Imagen principal del modal
    const mainImg = document.getElementById("main-img");
    mainImg.src = producto.img[0];

    // 2. Generar miniaturas (Thumbnails)
    const contenedorThumbnails = document.querySelector(".thumbnails");
    contenedorThumbnails.innerHTML = producto.img.map(url => `
        <img src="${url}" onclick="cambiarImagenPrincipal('${url}')" alt="Vista miniatura">
    `).join('');

    // 3. Textos del modal
    document.getElementById("modal-titulo").innerText = producto.titulo;
    document.querySelector(".modal-price").innerText = `$ ${producto.precio}`;
    document.querySelector(".modal-full-description").innerText = producto.desc;
    
    modal.style.display = "block";
}

// Función para que al hacer clic en una miniatura, cambie la grande
window.cambiarImagenPrincipal = function(url) {
    document.getElementById("main-img").src = url;
}

// Cerrar modal
document.querySelector(".close-modal").onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

renderizarProductos();