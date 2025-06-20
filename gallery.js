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

document.addEventListener('DOMContentLoaded', function(){
    const videos = document.querySelectorAll('.gallery-video-column video');
    let activeVideo = null;

    videos.forEach(video => {
        video.addEventListener('click', function(e){
            e.stopPropagation();

            videos.forEach(v =>{
                if (v !== video){
                    v.classList.remove('active');
                    v.pause();
                }
            });
            if(!video.classList.contains('active')){
                video.classList.add('active');
                video.play();
                activeVideo = video;

            }else{
                video.classList.remove('active');
                video.pause();
                activeVideo = null;
            }
        });
    });
    document.addEventListener("click", function(e){
        if(activeVideo){
            activeVideo.classList.remove('active');
            activeVideo.pause();
            activeVideo = null;
        }
    });
});