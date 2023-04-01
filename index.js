console.log("hello world");

// function du theme
function responsive(){
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');


    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                header.classList.remove('show-nav');
            });
            
        });
}
responsive();

/*  Portfolio */

function tabsFilter (){
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card');

    const resetActiveLinks = () => {
        tabs.forEach(element => {
            element.classList.remove('active');
        })
    }

    const showProjets = (element) => {
        console.log(element)
        projets.forEach(projet => {
            //console.log(projet)
            let filter = projet.getAttribute('data-category');


            if(element === 'all'){
                projet.parentNode.classList.remove('hide');
                return
            } 
            if (filter !== element){
                projet.parentNode.classList.add('hide');
            }else{
                projet.parentNode.classList.remove('hide');
            }
            
            


            //syntaxe plus propre avec operateur tenaire " [...] ? [...] : [...]"

            /*filter !== element ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');*/
        });
    }


    tabs.forEach(element =>{
        element.addEventListener('click', (event) => {
            event.preventDefault();
            let filter = element.getAttribute('data-filter');
            showProjets(filter)
            resetActiveLinks();
            element.classList.add('active');
        });
    })
}
tabsFilter()

function showProjetDetail(){
    const links = document.querySelectorAll('.card__link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal__close')

    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        });
    }

    links.forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(`[id=${element.dataset.id}]`).classList.add('show');
        });
    });

    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            hideModals();
        });
    });
}
showProjetDetail();


//effets

const observerIntersectionAnimation = () =>{
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills, .bars');
    




    sections.forEach((section, index) => {
        if(index === 0 ) return;
        section.style.opacity = "0";
        section.style.transition = "all 1.5s";
    });

    skills.forEach((element, index) => {
        element.style.width = "0";
        element.style.transition = "all 1.5s";
    })



    let sectionObserver = new IntersectionObserver(function(entries, observer){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                let element = entry.target;
                element.style.opacity= 1;
            }
        });
    });
    sections.forEach(section => {
        sectionObserver.observe(section)
    });


    let skillsObserver = new IntersectionObserver(function(entries, observer){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                let element = entry.target;
                element.style.width = element.dataset.width + '%';
            }
        });
    });
    skills.forEach(skill => {
        skillsObserver.observe(skill)
    });
}
observerIntersectionAnimation()