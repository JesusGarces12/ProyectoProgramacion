function mostrarPopup(mensaje, tiempo = 2000, callback = null) {
    let popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "#ffffff";
    popup.style.padding = "25px";
    popup.style.border = "2px solid #28a745";
    popup.style.boxShadow = "0 0 15px rgba(0,0,0,0.2)";
    popup.style.zIndex = "1000";
    popup.style.borderRadius = "12px";
    popup.style.textAlign = "center";
    popup.innerText = mensaje;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
        if (callback) callback(); // Ejecuta función después del pop-up si se pasó
    }, tiempo);
}

function Guardar(){
    let email = document.getElementById("email").value.trim();
    let numero = document.getElementById("numero").value.trim();

    if (email === "" || numero === ""){
        mostrarPopup("Por favor, rellena todos los campos de contacto antes de continuar.", 2000);
    }
    else{
        mostrarPopup("¡Sus datos para contactos han sido guardados! Sigue disfrutando del resto de la pagina mientras tanto", 2000, () => {
            window.location.href = "../index.html";
        });
    }  
}