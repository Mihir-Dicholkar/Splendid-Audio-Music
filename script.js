const headingElements = document.getElementById("changing-headings")
const heading = ["Music", "BEATS", "AUDIO", "REMIX"];
let index = 0;
setInterval(() => {
    headingElements.classList.add("fade-out");
    setTimeout(() => {
        index = (index + 1) % heading.length;
        headingElements.innerText = heading[index];
        headingElements.classList.remove("fade-out");
    },500);
}, 2000);

const sectionBackgrounds  = {
      "hero-section": "url('/Source/bg-image.jpg')",
  "about-section": "url('/Source/about-background.jpg')",
  "services-section": "url('/Source/source/3.jpg')",
  "record-create-section": "url('/Source/source/2.jpg')",
}

function setBodyBg(image){
    document.body.style.backgroundImage = image;
}

function onScrollBgTransition(){
    const sections = Object.keys(sectionBackgrounds)
    let found = false;
    for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setBodyBg(sectionBackgrounds[sections[i]]);
            found = true;
            break;
        }
    }

if (!found) setBodyBg(sectionBackgrounds["hero-section"]);

}
window.addEventListener("scroll", onScrollBgTransition);
window.addEventListener('DOMContentLoaded', onScrollBgTransition)

function handlefadeSectionImage (){
    const images = document.querySelectorAll('.fade-section-image');
    const windowHeight = window.innerHeight;
    images.forEach(image => {
        const rect = image.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
            image.classList.add('visible');
        } else {
            image.classList.remove('visible');


        }
    });
}
window.addEventListener('scroll', handlefadeSectionImage);
window.addEventListener('DOMContentLoaded', handlefadeSectionImage);

function handleFadeDescriptiveHeadings(){
    const headings = document.querySelectorAll('.fade-descriptive-heading');

    const windowHeight = window.innerHeight;
    headings.forEach(heading => {
        const rect = heading.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
            heading.classList.add('visible');
        } else {
            heading.classList.remove('visible');
        }
    });
}
window.addEventListener('scroll', handleFadeDescriptiveHeadings);
window.addEventListener('DOMContentLoaded', handleFadeDescriptiveHeadings);

function playSpecialWorksVideoOnScroll(){
    const section = document.getElementById('special-works');
    const video = document.getElementById('special-works-video');
    if (!section || !video) return;
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3   ) {
        if(video.paused) {
            video.play();
        }   
} else {
        if(!video.paused) {
            video.pause();
        }
    }
}
window.addEventListener('scroll', playSpecialWorksVideoOnScroll);
window.addEventListener('DOMContentLoaded', playSpecialWorksVideoOnScroll);

function isSectionInView(sectionId){
    const section = document.getElementById(sectionId);
    if (!section) return false;
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;
}
let carouselInterval = null;
let currentIndex = 0;

function showCarouselText(index){
    const texts = document.querySelectorAll('.special-works-carousel .carousel-text');
    texts.forEach((el, i) => {
        el.classList.toggle('active', i === index);
    });

}
function startCarousel() {
    const texts = document.querySelectorAll('.special-works-carousel .carousel-text');
    if (carouselInterval || texts.length === 0) return;
    carouselInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        showCarouselText(currentIndex);
    }, 2200);


}
function stopCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}
function handleSpecialWorksCarousel() {
  if (isSectionInView('special-works')) {
    startCarousel();
  } else {
    stopCarousel();
  }
}

window.addEventListener('scroll', handleSpecialWorksCarousel);
window.addEventListener('DOMContentLoaded', () => {
  showCarouselText(0);
  handleSpecialWorksCarousel();
});

document.addEventListener('DOMContentLoaded', function(){
    let missionCurrent = 0;
    const missionSlides = document.querySelectorAll('.mission-slide');
    const totalSlides = missionSlides.length;

    function updateMissionSlider(){
        missionSlides.forEach((slide, idx) => {
            slide.classList.toggle('active', idx === missionCurrent);
        });
    }

    setInterval(() => {
        missionCurrent = ( missionCurrent + 1) % totalSlides;
        updateMissionSlider();
    }, 2500);
    updateMissionSlider();
})

function updateMissionSlider() {
  missionSlides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === missionCurrent);
  });
}
    
document.addEventListener('DOMContentLoaded', function(){
    const contactBtn = document.querySelector('.contact button');
    if(contactBtn){
        contactBtn.addEventListener('click', function(){
            window.location.href = 'contact.html';
        });
    }
});
document.addEventListener('DOMContentLoaded', function(){
    const contactBtn = document.querySelector('.login-sign-up button');
    if(contactBtn){
        contactBtn.addEventListener('click', function(){
            window.location.href = 'https://forms.splendidaudiomusic.com';
        });
    }
});