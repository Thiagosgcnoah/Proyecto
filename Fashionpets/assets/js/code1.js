document.getElementById("optNavContacto").addEventListener("click", (e) => {
    setTimeout(() => {
        let elementoHTML = e.target
        elementoHTML.classList.add("active", "text-dark", "text-decoration-underline")
        elementoHTML.classList.remove("text-white")
    }, 1000);
})

document.addEventListener("scroll", () => {
    let pepe = document.getElementById("optNavContacto")
    pepe.classList.remove("active", "text-dark", "text-decoration-underline")
    pepe.classList.add("text-white")
})

$('.carruselInicio').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover:false
});
$('.carruselInicio2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover:false
});

