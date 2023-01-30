
 /*javaScript pour l'animation de la section accueil */
const tl = gsap.timeline({duration: 1});

tl.from(".barreNavigation", {y:-50, stagger: .4, opacity: 0, duration: .5, ease: "back.out(1)"})
.from(".amar", {x:-150, stagger: .4, opacity: 0, duration: .5, ease: "back.out(1)"})
.from(".titreAccueil", {x:-200, stagger: .4, opacity: 0, duration: .25, ease: "back.out(1)"})
.from(".sousTitreAccueil", {x:200, stagger: .4, opacity: 0, duration: .5, delay : -.25, ease: "back.out(1)"})
.from(".boutonAccueil", {y:50, stagger: .4, opacity: 0, duration: .5, delay : -.3, ease: "back.out(1)"})
.from(".fill", {x:1000, stagger: .4, opacity: 0, duration: .5, delay : -.25, ease: "back.out(1)"})



























/*javaScript pour le bon fonctionnement du formulaire*/ 

let contactForm = document.getElementById('frmContact');


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let fields = document.querySelectorAll('input[required], textarea[required]');
    fields.forEach((field) => {resetField(field)});
    let valide = true;

    fields.forEach((field) => {
        if(! validateField(field)){
            valide = false;
        }
    });
    if(valide){
        e.target.submit();
    }
    
   
}, false);


function validateField(field){
    if(field.checkValidity()){
        return true;
    } else {
        field.classList.add('invalide');
        field.previousElementSibling.insertAdjacentHTML('beforeend', `<span class="msg">${field.validationMessage}</span>`);
        return false;
    }
}

function resetField(field){
    let fieldLabel = field.previousElementSibling;
    field.classList.remove('invalide');
    while(fieldLabel.firstElementChild){
        fieldLabel.removeChild(fieldLabel.firstElementChild);
    }
    field.valide = true;
}










