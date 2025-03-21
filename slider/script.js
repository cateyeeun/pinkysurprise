document.addEventListener('DOMContentLoaded', () => {

    // slider begin
    const CaroS = document.querySelector('.Carousel-slider');
    const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
    const hammer = new Hammer(CaroS);
    const CaroSTimer = 2000;
    let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);

    // mouseenter event
    CaroS.onmouseenter = function(e) {
        clearInterval(CaroAutoplay);
        console.log(e.type + 'mouse detected');
    }

    // mouseleave event
    CaroS.onmouseleave = function(e) {
        clearInterval(CaroAutoplay);
        CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
        console.log(e.type + 'mouse detected');
    }

    // mouseclick event
    CaroS.onclick = function(e) {
        clearInterval(CaroAutoplay);
        console.log(e.type + 'mouse detected');
    }

    // gesture tap event
    hammer.on('tap', function(e) {
        clearInterval(CaroAutoplay);
        console.log(e.type + 'gesture detected');
    });

    // gesture swipe event
    hammer.on('swipe', function(e) {
        clearInterval(CaroAutoplay);
        CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
        console.log(e.type + 'gesture detected');
    });

    let slideLink = document.querySelectorAll('.slide-item');
    if (slideLink && slideLink !== null && slideLink.length > 0){
        slideLink.forEach( el => el.addEventListener('click', e => {
            e.preventDefault();
            let href = el.dataset.href;
            let target = el.dataset.target;
            if (href !== '#') window.open(href, target);
        }));
    }
});