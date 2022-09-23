AOS.init();

var video = document.querySelector('#vid1')
video.currentTime = 10

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    on: {
        transitionStart: function () {
            var videos = document.querySelectorAll('video');
            // var video = document.querySelector('#vid1')
            // var video2 = document.querySelector('#vid2')
            // var video3 = document.querySelector('#vid3')
            // video.currentTime = 10
            // video2.currentTime = 1
            // video3.currentTime = 5


            Array.prototype.forEach.call(videos, function (video) {
                if (video.classList.contains('swiper__video-inner')) {
                    video.currentTime = 10
                } else if (video.classList.contains('swiper__video-inner-2')) {
                    video.currentTime = 1
                } else if (video.classList.contains('swiper__video-inner-3')) {
                    video.currentTime = 5
                } else {
                    video.currentTime = 0
                }
                video.pause()
            });
        },

        transitionEnd: function () {
            var activeIndex = this.activeIndex;
            var activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
            var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
            activeSlideVideo.play();
            activeSlideVideo.addEventListener('ended', function () {
                // swiper.slideNext()
                swiper.slideNext()
            })
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





var xhr = new XMLHttpRequest()
xhr.open(
    'GET',
    'https://turgunov01.github.io/foxcinema/',
    true
)
xhr.send()

xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) {
        return
    }

    if (xhr.status === 200) {
        console.log('result', xhr.responseText)
    } else {
        console.log('err', xhr.responseText)
    }
}