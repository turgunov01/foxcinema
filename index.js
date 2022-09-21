AOS.init();

var video = document.querySelector('#vid1')
video.currentTime = 10

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    on: {
        transitionStart: function () {
            var videos = document.querySelectorAll('video');
            var video = document.querySelector('#vid1')
            var video2 = document.querySelector('#vid2')
            var video3 = document.querySelector('#vid3')
            video.currentTime = 10
            video2.currentTime = 1
            video3.currentTime = 5

            Array.prototype.forEach.call(videos, function (video) {
                video.pause()
            });
        },

        transitionEnd: function () {
            var activeIndex = this.activeIndex;
            var activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
            var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
            activeSlideVideo.play();
        },

    },
})

var swiper2 = new Swiper(".mySwiper2", {
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 5000,
        transition: 1000,
        duration: 1000,
    },
    spaceBetween: 50,
    initialSlide: 1,
    loop: true,
});

let lang = document.querySelector('.lang-item')
lang.addEventListener('click', () => {
    lang.classList.toggle('active')
})