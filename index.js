AOS.init();

var video = document.querySelector('#vid1')
video.currentTime = 10

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            loop: false,
        },
        1024: {
            loop: true,
        }
    },
    // if(activSlideIndex){},
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
                video.muted = true
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

        slideChangeTransitionEnd: function () {
            var activeIndex = this.activeIndex;
            var activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
            var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
            activeSlideVideo.play();
            // activeSlideVideo.muted();
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


// const work = async () => {
//     let response = await fetch('/article/fetch/logo-fetch.svg');

//     let blob = await response.blob(); // ?????????????????? ?????? Blob-????????????

//     // ?????????????? <img>
//     let img = document.createElement('img');
//     img.style = 'position:fixed;top:10px;left:10px;width:100px';
//     document.body.append(img);
//     img.src = './assets/img/movies/1.svg'

//     // ?????????????? ???? ??????????
//     img.src = URL.createObjectURL(blob);

//     setTimeout(() => {
//         img.remove();
//         URL.revokeObjectURL(img.src);
//     }, 3000);
// }

// work()