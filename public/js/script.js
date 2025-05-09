document.addEventListener("DOMContentLoaded", function () {
    let currentBackgroundIndex = 0;
    const backgrounds = [
        '/assets/fotos_fons/1.jpg',
        '/assets/fotos_fons/2.jpg',
        '/assets/fotos_fons/3.jpg',
        '/assets/fotos_fons/4.jpg'
    ];

    function changeBackground() {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        document.querySelector('.body-principal').style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
    }

    setInterval(changeBackground, 5000);
    changeBackground();
});
