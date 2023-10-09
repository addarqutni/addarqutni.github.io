let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');

}

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header navbar a');

window.onscroll=() =>{

    sections.forEach(sec => {

        let top=window.scrollY;
        let offset=sec.offsetTop;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height ){

            navLinks.forEach(links => {

                links.classList.remove('active');
                document.querySelector('header navbar a [href*='+ id +']').classList.add('active');
            });

        };
    });

};
