/* 
    on CREER un evenement click
    on SUPPRIMME la classe active sur les élément actifs
    on AJOUTE la classe active sur cet élément
    
*/

let link = document.querySelectorAll('.nav-link')

for (let i = 0; i < link.length; i++) {

    link[i].addEventListener('click', function(){

        let active = document.querySelector('.active')
        active.classList.remove('active')

        if(!link[i].classList.contains('.active')) {

            this.classList.add('active')
        }
    })
}

