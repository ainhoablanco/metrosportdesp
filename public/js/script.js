document.addEventListener("DOMContentLoaded", function () {
    let currentBackgroundIndex = 0;
    const backgrounds = [
        '/public/assets/fotos_fons/1.jpg',
        '/public/assets/fotos_fons/2.jpg',
        '/public/assets/fotos_fons/3.jpg',
        '/public/assets/fotos_fons/4.jpg'
    ];

    function changeBackground() {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        document.querySelector('.body-principal').style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
    }

    setInterval(changeBackground, 5000);
    changeBackground();
});
