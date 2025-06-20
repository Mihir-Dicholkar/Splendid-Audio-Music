document.addEventListener('DOMContentLoaded', function(){
    const header = document.querySelector('header');
    const heroSection = document.getElementById('hero-section');

    function handleHeaderFade(){
        if(!header || !heroSection)return;
        // const rect = heroSection.getBoundingClientRect();
        const heroHeight = heroSection.offsetHeight;
        if(window.scrollY >= heroHeight - header.offsetHeight){
            header.classList.add('transparent');
        }else{
            header.classList.remove('transparent');
        }
    }
    window.addEventListener('scroll', handleHeaderFade);
    handleHeaderFade();
});