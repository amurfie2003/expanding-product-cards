const servicesCards = document.querySelectorAll('.services__card');

servicesCards.forEach( (serviveCard) => {
    serviveCard.addEventListener('mouseover', (event) => {
        removeActiveClasses();
        event.currentTarget.classList.add('active')
    });
});

function removeActiveClasses(){
    servicesCards.forEach( (serviveCard) => {
        serviveCard.classList.remove('active');
    });
}