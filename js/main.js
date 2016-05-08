var articles = document.querySelectorAll(".featured-articles article");

for (let i=0; i< articles.length; i++) {
    
    articles[i].addEventListener('mouseover', function(){
         this.classList.add('show-info'); 
    });
    
    articles[i].addEventListener('mouseout', function(){
        this.classList.remove('show-info'); 
    });
    
  
}



var moreButton = document.querySelector('.more');

moreButton.addEventListener('click', function(){
    EPPZScrollTo.scrollVerticalToElementById('company-describe', 0);
})


var hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
    document.querySelector('.page-header').classList.toggle('menu-opened');
})


  if(window.screen.availWidth < 500)
    console.log("ge");	


