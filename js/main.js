
const responsive = {
    0: {
        items: 1
    },
    450: {
        items: 1
    },
    768: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    // owl-crousel 
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });
});



// menu toggle effect open
const menuBtn = document.querySelector('.menu'),
nav = document.querySelector('nav'),
bars = document.querySelector('.bars'),
closeBtn = document.querySelector('.fa-times');

// ---------- menu botton click function
menuBtn.addEventListener('click', ()=>{
    if (bars.style.display != 'none') {
        bars.style.display = 'none';
        closeBtn.style.display = 'flex';
    } else {
        bars.style.display = 'flex';
        closeBtn.style.display = 'none';
    }
    nav.classList.toggle('open');
})


//  ---------- window Onscroll funtion
window.addEventListener('scroll', ()=>{
    if (nav.classList.contains('open') && scrollY >= '10') {
        nav.classList.remove('open');

        bars.style.display = 'flex';
        closeBtn.style.display = 'none';
    }

    if(scrollY < '50'){
        document.querySelector('.header').style.transform = 'translateY(0)';
        document.querySelector('.header').style.background = 'rgba(0,0,0,0)';
    }

    if (scrollY >= '50' && scrollY <= '500') {
        document.querySelector('.header').style.transform = 'translateY(-10rem)';
    }else if(scrollY > '100'){
        document.querySelector('.header').style.transform = 'translateY(0)';
        document.querySelector('.header').style.background = 'rgba(0,0,0,.8)';
    }
})
// menu toggle effect close


// leatest property section
const ipropSection = document.querySelector('.leatest-property-section'),
property = ipropSection.querySelectorAll('.property');
// filter items
const filterItems = document.querySelectorAll('.filter-item');

filterItems.forEach(item => {
    item.addEventListener('click', ()=>{
        if (!item.classList.contains('active')) {

            // deactivate axisting active item
            filterItems.forEach(active => {
                active.classList.remove('active')
            });

            // activate new item
            item.classList.add('active');

            
            // get data-target value of the item
            const dataTarget = item.getAttribute('data-target');
            property.forEach((property) =>{
                if (dataTarget === property.getAttribute("data-category") || dataTarget === "all"){
                    property.classList.remove("hide");
                    property.classList.add("show");

                }
                else{
                    property.classList.remove("show");
                    property.classList.add("hide");
                }
            })
        }
    })
});
// leatest property section




// popup property

const propertyPopup = document.querySelector('.property-popup'),
propertyImage = document.querySelector('.property-listing').querySelectorAll('.property-image img'),
popupDetails = document.querySelector('.popup-details'),
checkBtn = document.querySelectorAll('.check'),
backBtn = document.querySelector('.back-btn');

propertyImage.forEach(image => {
    image.addEventListener('click', ()=>{
        document.body.classList.toggle('hide-scroll');

        // add "open" to classlist property popup
        propertyPopup.classList.add('open');

        // display each property details into the popup detail innerhtml
        popupDetails.innerHTML = image.parentElement.parentElement.querySelector('.property-popup-details').innerHTML;


        const popupImageGallery = propertyPopup.querySelector('.image-gallery');

        // add an event listener to the gallery img
        popupImageGallery.querySelectorAll('img').forEach(img => {
            img.addEventListener('click', ()=>{
                propertyPopup.querySelector('.image').querySelector('img').src =  img.src;
            })
        });
    })
});



checkBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        document.body.classList.toggle('hide-scroll');

        // add "open" to classlist property popup
        propertyPopup.classList.add('open');

        // display each property details into the popup detail innerhtml
        popupDetails.innerHTML = btn.parentElement.parentElement.querySelector('.property-popup-details').innerHTML;


        const popupImageGallery = propertyPopup.querySelector('.image-gallery');

        // add an event listener to the gallery img
        popupImageGallery.querySelectorAll('img').forEach(img => {
            img.addEventListener('click', ()=>{
                propertyPopup.querySelector('.image').querySelector('img').src =  img.src;
            })
        });
    })
});


// close the popup with the close button
backBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('hide-scroll');

    propertyPopup.classList.remove('open')
})
// popup property


// email function
function sendEmail() {
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "tolulopetimilehin124@gmail.com",
        Password : "tolexco626",
        To : 'tolulopetimilehin124@gmail.com',
        From :  document.querySelector('#email').value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
