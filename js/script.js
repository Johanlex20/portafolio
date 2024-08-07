const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const navLinks = document.querySelectorAll(".nav-list a");

// Abrir el menú y deshabilitar el scroll
abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
    document.body.classList.add("no-scroll");
});

// Cerrar el menú y habilitar el scroll
cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
    document.body.classList.remove("no-scroll");
});


// Redireccionar clic cada uno de los enlaces del menú
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("visible");
        document.body.classList.remove("no-scroll");
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Detectar clic fuera del nav para cerrar el menú
document.addEventListener("click", (event) => {
    if (nav.classList.contains("visible") && !nav.contains(event.target) && !abrir.contains(event.target)) {
        nav.classList.remove("visible");
        document.body.classList.remove("no-scroll");
    }
});

//Modo Oscuro
let toggle=document.getElementById('toggle');
let label_toogle=document.getElementById('label_toggle');
toggle.addEventListener('change', (event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle('dark');
    if(checked == true){
        label_toogle.innerHTML="<i class='bx bxs-sun' ></i>";
        label_toogle.style.color="var(--ColorAzulOscuro)";
    }else{
        label_toogle.innerHTML="<i class='bx bxs-moon'></i>"; 
        label_toogle.style.color="var(--ColorBlanco)";
    }
});


// ABRIR VIDEO DEMO en modal
const demoButtons = document.querySelectorAll('.demo-btn');
const modal = document.getElementById('videoModal');
const span = document.getElementsByClassName('close1')[0];
const demoVideo = document.getElementById('demoVideo');

demoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const videoUrl = button.getAttribute('data-video-url');
        modal.style.display = "block";
        demoVideo.src = videoUrl;
        document.body.classList.add("no-scroll"); // Deshabilitar scroll
    });
});

span.addEventListener('click', () => {
    modal.style.display = "none";
    demoVideo.src = "";
    document.body.classList.remove("no-scroll"); // Habilitar scroll
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        demoVideo.src = "";
        document.body.classList.remove("no-scroll"); // Habilitar scroll
    }
});

//MODAL DIPLOMAS IMG
document.querySelectorAll('.image-container .image img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.modal-image').style.display = 'block';
        document.querySelector('.modal-image img').src=image.getAttribute('src');
        document.body.classList.add("no-scroll"); // Deshabilitar scroll
    }
});

// CERRAR EL MODAL HACIENDO CLICK ENCERRRAR
document.querySelector('.modal-image .close').onclick = () => {
    document.querySelector('.modal-image').style.display = 'none';
    document.body.classList.remove("no-scroll"); // Habilitar scroll
};

// CERRAR EL MODAL HACIENDO CLICK FUERA DE LA IMAGEN
document.querySelector('.modal-image').addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-image')) {
        document.querySelector('.modal-image').style.display = 'none';
        document.body.classList.remove("no-scroll"); // Habilitar scroll
    }
});

// ABRIR RESUMEN MODAL

const resumenBtn = document.querySelector('.btn-resumen');
const resumenModal = document.querySelector('.modal-resumen');
const resumenClose = resumenModal.querySelector('.close');

resumenBtn.addEventListener('click', () => {
    resumenModal.style.display = 'block';
    document.body.classList.add("no-scroll"); // Deshabilitar scroll
});

resumenClose.addEventListener('click', () => {
    resumenModal.style.display = 'none';
    document.body.classList.remove("no-scroll"); // Habilitar scroll
});

resumenModal.addEventListener('click', (event) => {
    if (event.target === resumenModal) {
        resumenModal.style.display = 'none';
        document.body.classList.remove("no-scroll"); // Habilitar scroll
    }
});
