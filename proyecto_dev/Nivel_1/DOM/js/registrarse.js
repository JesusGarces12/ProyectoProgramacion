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

function registroContraseña(){
    let contraseña = document.getElementById("contraseña2").value;
    let contraseñaConfirmada = document.getElementById("contraseñaConfirmada").value;
    let guest = "Guest";

    if (contraseña === contraseñaConfirmada) {
        sessionStorage.setItem("usuario", guest);

        mostrarPopup("¡Registro exitoso! Serás ingresado como invitado.", 2000, () => {
            window.location.href = "../index.html";
        });

    } else {
        mostrarPopup("Las contraseñas no coinciden.", 2000);
    }
}
