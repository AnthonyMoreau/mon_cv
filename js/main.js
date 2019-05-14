/* 
    on CREER un evenement click
    on AJOUTE la classe active sur cet élément
    on SUPPRIMME la classe active sur les autres éléments
    
*/

let link = document.querySelectorAll('.nav-link')


for (let i = 0; i < link.length; i++) {

    link[i].addEventListener('click', function(e){

        let active = document.querySelector('.active')
        active.classList.remove('active')

        if(!link[i].classList.contains('.active')) {

            this.classList.add('active')
        }
    })
}