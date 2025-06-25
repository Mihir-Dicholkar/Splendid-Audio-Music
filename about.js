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
    fadeInOnScrollById(['bio-image','special-image', 'frame', 'team-image']);
});


document.addEventListener('DOMContentLoaded', function(){
    const essentialImgs = document.querySelectorAll('.essential-img');
        essentialImgs.forEach(img => {
            img.addEventListener('click',function(){
                essentialImgs.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            } )
        })
})

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

document.addEventListener('DOMContentLoaded', function(){
    const essentialImgs = Array.from( document.querySelectorAll('.essential-img'));
    let order = [ ...Array(essentialImgs.length).keys()];
    function updateEssentialsStack(){
        const centerIdx = Math.floor(order.length / 2);
        order.forEach((imgIdx, stackIdx) => {
            const img = essentialImgs[imgIdx];
            img.classList.remove('active');
            img.style.zIndex = stackIdx === centerIdx ? 10 : (10 - Math.abs(stackIdx - centerIdx));
            img.style.opacity = stackIdx === centerIdx ? 1 : 0.7;
            img.style.pointerEvents = 'auto';

            const offset  = stackIdx - centerIdx;
            img.style.transition = 'transform 0.7s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s, z-index 0.4s, opacity 0.4s';
            img.style.transform = `translate(-50%, -50%) translateX(${offset * 155}px) scale(${stackIdx === centerIdx ? 1.08 : 0.88})`;
            if(stackIdx === centerIdx) img.classList.add('active');
        });
    }

    updateEssentialsStack();
    essentialImgs.forEach((img, idx) =>{
        img.addEventListener('click', function(){
            const currentPos = order.indexOf(idx);
            const centerPos = Math.floor(order.length / 2);
            if (currentPos === centerPos) return;

            order.splice(currentPos, 1);
            setTimeout(() => {
                          order.splice(centerPos, 0, idx);
            updateEssentialsStack();
            }, 300)
  
        })
    })
        });
    
 
    
