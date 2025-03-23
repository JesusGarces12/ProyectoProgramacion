function mostrarPopup(mensaje) {
    // Crear fondo oscuro
    let fondo = document.createElement("div");
    fondo.style.position = "fixed";
    fondo.style.top = "0";
    fondo.style.left = "0";
    fondo.style.width = "100%";
    fondo.style.height = "100%";
    fondo.style.backgroundColor = "rgba(0,0,0,0.5)";
    fondo.style.display = "flex";
    fondo.style.justifyContent = "center";
    fondo.style.alignItems = "center";
    fondo.style.zIndex = "9999";

    // Crear cuadro del pop-up
    let cuadro = document.createElement("div");
    cuadro.style.color = "#faebd7";
    cuadro.style.padding = "20px";
    cuadro.style.borderRadius = "10px";
    cuadro.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    cuadro.style.backgroundColor = "#808000";
    cuadro.innerHTML = `
<p style="text-align: center; margin: 0 auto;">${mensaje}</p>
<button id="cerrarPopup" style="display: block; margin: 10px auto; border-radius:1em; color:#faebd7; background-color:#808000">Cerrar</button>`;


    // Agregar cuadro al fondo y fondo al body
    fondo.appendChild(cuadro);
    document.body.appendChild(fondo);

    // Botón para cerrar
    document.getElementById("cerrarPopup").addEventListener("click", () => {
        document.body.removeChild(fondo);
    });
}

function inicioSesion(){
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;

    if (usuario === "admin" && password === "admin"){
        sessionStorage.setItem("usuario", usuario);
        window.location.href = "../index.html";
    } else {
        // Puedes mostrar un mensaje de error
        mostrarPopup("Usuario o contraseña incorrectos.");
    }
}


