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
    const cards = Array.from(document.querySelectorAll('.article-card'));
    let activeCard = null;
    let placeholder = null;
    let originalParent = null;

    function fadeInArticlesOnScroll(){
        const triggerBottom = window.innerHeight * 0.92;
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < triggerBottom){
                card.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', fadeInArticlesOnScroll);
    fadeInArticlesOnScroll();

    cards.forEach(card => {
        card.addEventListener('click', function(e){
            e.stopPropagation();
            if(activeCard === card) return; // Already active

            // Restore previous active card
            if(activeCard && placeholder && originalParent) {
                activeCard.classList.remove('active-article');
                activeCard.querySelector('.article-content').style.overflowY = 'hidden';
                originalParent.insertBefore(activeCard, placeholder);
                placeholder.remove();
                placeholder = null;
                activeCard = null;
            }

            // Save original parent
            originalParent = card.parentNode;

            // Insert placeholder after the card
            placeholder = document.createElement('div');
            placeholder.className = 'article-card-placeholder';
            originalParent.insertBefore(placeholder, card.nextSibling);

            // Move card to body for fixed positioning
            document.body.appendChild(card);
            card.classList.add('active-article');
            card.querySelector('.article-content').style.overflowY = 'auto';
            activeCard = card;
        });
    });

    // Click outside to close active card
    document.addEventListener('click', function(e){
        if(activeCard && placeholder && originalParent){
            activeCard.classList.remove('active-article');
            activeCard.querySelector('.article-content').style.overflowY = 'hidden';
            originalParent.insertBefore(activeCard, placeholder);
            placeholder.remove();
            placeholder = null;
            activeCard = null;
        }
    });
});