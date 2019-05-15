// taille écran
let screenWidth = window.innerWidth


// recuperation position element
let about_mePosition = $('#about_me').offset().top
let competencePosition = ($('#competence').offset().top) - 100
let objectifPosition = ($('#objectif').offset().top) -150
let portfolioPosition = ($('#portfolio').offset().top) -100
let formationPosition = ($('#formation').offset().top) -100
let experiencePosition = ($('#experience').offset().top) -100
let contactPosition = ($('#contact').offset().top) -100

// recuperation scroll du document
let documentScrollPosition = $(document).scrollTop()


// active scrool_position
$(document).ready(function(){
    
    $(window).scroll(function(){
        
        let tmpScrollTop = $(window).scrollTop();

        if((tmpScrollTop >= 0) && (tmpScrollTop <= competencePosition)){

            $('#about').addClass('active')

        } else {

            $('#about').removeClass('active')
        }

        if((tmpScrollTop >= competencePosition) && (tmpScrollTop <= objectifPosition)){

            $('#comp').addClass('active')

        } else {

            $('#comp').removeClass('active')
        }

        if((tmpScrollTop >= objectifPosition) && (tmpScrollTop <= portfolioPosition)){

            $('#obj').addClass('active')

        } else {

            $('#obj').removeClass('active')
        }

        if((tmpScrollTop >= portfolioPosition) && (tmpScrollTop <= formationPosition)){

            $('#folio').addClass('active')

        } else {

            $('#folio').removeClass('active')
        }

        if((tmpScrollTop >= formationPosition) && (tmpScrollTop <= experiencePosition)){

            $('#form').addClass('active')

        } else {

            $('#form').removeClass('active')
        }

        if((tmpScrollTop >= experiencePosition) && (tmpScrollTop <= contactPosition)){

            $('#exp').addClass('active')

        } else {

            $('#exp').removeClass('active')
        }

        if(tmpScrollTop >= contactPosition){

            $('#cont').addClass('active')

        } else {

            $('#cont').removeClass('active')
        }

    })
})

