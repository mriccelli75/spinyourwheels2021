const navSlide = ()=> {
    const menuToggler = document.querySelector(".menu-toggle");
    const nav = document.querySelector('.navbar ul');
    const navItems = document.querySelectorAll('.navbar ul li')
    //Toggle Nav
    menuToggler.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');

        navItems.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ''
     
            } else {
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
         });

         //Animate the menu toggler
         menuToggler.classList.toggle('toggle');

    });
      
}

navSlide();