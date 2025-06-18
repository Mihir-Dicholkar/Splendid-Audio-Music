function fadeInOnScrollById(ids){
    ids.forEach(id => {
        const img = document.getElementById(id);
        if(!img) return;
        const rect = img.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if(rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2){
            img.classList.add('visible');

        }
        else{
            img.classList.remove('visible');
        }
    });
}
window.addEventListener('scroll', () => {
    fadeInOnScrollById(['bio-image','special-image', 'team-image']);
});
window.addEventListener('DOMContentLoaded', () => {
    fadeInOnScrollById (['bio-image','special-image', 'team-image']);
});
document.addEventListener('DOMContentLoaded', function(){
    const contactBtn = document.querySelector('.contact button');
    if(contactBtn){
        contactBtn.addEventListener('click', function(){
            window.location.href = 'contact.html';
        });
    }})

    document.addEventListener('DOMContentLoaded', function(){
    const contactBtn = document.querySelector('.login-sign-up button');
    if(contactBtn){
        contactBtn.addEventListener('click', function(){
            window.location.href = 'https://forms.splendidaudiomusic.com';
        });
    }
});