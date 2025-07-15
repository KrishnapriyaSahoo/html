const menus=document.querySelector('nav ul');
const header=document.querySelector('header');
const menuBtn=document.querySelector('.menu-btn');
const closeBtn=document.querySelector('.close-btn');

menuBtn.addEventListener('click',()=>{
    menus.classList.add('display');
});
closeBtn.addEventListener('click',()=>{
    menus.classList.remove('display');
});

window.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop>20){
        header.classList.add('sticky');
    }
    else{
        header.classList.remove('sticky');
    }
});
const countersEl=document.querySelectorAll(".numbers");
countersEl.forEach((counters)=>{
    counters.textContent=0;
    incrementCounters();
   function incrementCounters(){
    let currentNumbers=+counters.textContent;
    const dataCell=counters.getAttribute("data-cell");
    const increment=dataCell/100;
    currentNumbers=Math.ceil(currentNumbers+increment);
    if(currentNumbers<dataCell){
        counters.textContent=currentNumbers;
        setTimeout(incrementCounters,100);
    }
    else{
        counters.textContent=dataCell;
    }
   }
});
const swiper=new Swiper(".swiper",{
    slidePerview:3,
    spaceBetween:35,
    slidesPerGroup:1,
    loop:true,
    fade:true,
    centerSlide:true,
    grabCursor:true,
    loopFillGroupWithBlank:true,
    autoplay:{
        delay:5000,
    },
    speed:400,
    spaceBetween:100,
});
const swiper2=new Swiper(".swiper2",{
    slidesPerview:3,
    spaceBetween:35,
    slidesPerGroup:1,
    loop:true,
    fade:true,
    centerSlide:true,
    grabCursor:true,
    loopFillGroupWithBlank:true,
    autoplay:{
        delay:5000,
    },
    speed:400,
    
     breakpoints:{
     320:{
         slidesPerview:2,
     },
         768:{
             slidePerview:3,
         },
         968:{
             slidesPerview:4,
         },
     },
});
const swiper3=new Swiper(".swiper3",{
    slidesPerview:2,
    spaceBetween:35,
    slidesPerGroup:1,
    loop:true,
    fade:true,
    centerSlide:true,
    grabCursor:true,
    loopFillGroupWithBlank:true,
    autoplay:{
        delay:5000,
    },
    speed:400,
    
     breakpoints:{
     320:{
         slidesPerview:1,
     },
         768:{
             slidePerview:2,
         },
         968:{
             slidesPerview:2,
         },
     },
});
const swiper4=new Swiper(".swiper4",{
    slidesPerview:2,
    spaceBetween:95,
    slidesPerGroup:1,
    loop:true,
    fade:true,
    centerSlide:true,
    grabCursor:true,
    loopFillGroupWithBlank:true,
    autoplay:{
        delay:5000,
    },
    speed:400,
    
     breakpoints:{
     320:{
         slidesPerview:1,
     },
         768:{
             slidePerview:2,
         },
         968:{
             slidesPerview:2,
         },
     },
    });
const swiper5=new Swiper(".swiper5",{
    slidesPerview:2,
    spaceBetween:95,
    slidesPerGroup:1,
    loop:true,
    fade:true,
    centerSlide:true,
    grabCursor:true,
    loopFillGroupWithBlank:true,
    autoplay:{
        delay:5000,
    },
    speed:400,
    
     breakpoints:{
     320:{
         slidesPerview:1,
     },
         768:{
             slidePerview:2,
         },
         968:{
             slidesPerview:2,
         },
     },
    });