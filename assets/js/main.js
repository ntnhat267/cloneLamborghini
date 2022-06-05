//xu ly slider-1

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("btn");
  let texts = document.getElementsByClassName("slider-1-info-main")
  console.log(texts)
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" btn-hover", "");
  }

  for (i = 0; i < texts.length; i++) {
    texts[i].style.display = "none";  
  }



  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " btn-hover";
  texts[slideIndex-1].style.display = "block"; 

}



//Xử lý slider-3

slideIndex = 1;
showSlides3(slideIndex);



function currentSlide3(n) {
  showSlides3(slideIndex = n);
}

function showSlides3(n) {
  let i;
  
  let slides = document.getElementsByClassName("slide3");
  let dots = document.getElementsByClassName("btn3");
  let texts = document.getElementsByClassName("slider-3-info")
  console.log(dots)
  console.log(texts)
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slider-3-nav-hover", "");
  }

  for (i = 0; i < texts.length; i++) {
    texts[i].style.display = "none";  
  }



  slides[slideIndex-1].style.display = " block";  
  dots[slideIndex-1].className += " slider-3-nav-hover";
  texts[slideIndex-1].style.display = " block"; 

}


//xử lý before

// let links = document.getElementsByClassName("header-nav-left-item-link")
// let boders = document.querySelectorAll('a.header-nav-left-item-link::before')

// console.log(boders)

// for(let i =0 ; i< boders.length;i++)
// {
//   if(boders[i])
//   {
//     boders[i].addEventListener("blur",function(e)
//     {
//       console.log(boders[i])
//     })
//   }
// }


// chỉnh messsege


let message =  document.querySelector(".mess")
console.log(message)
let mess = document.querySelector(".mess-ask-me")
console.log(mess)

message.addEventListener("click", function() {
  mess.style.right = "0%";
  // mess.style.animation-name = ""
  // mess.style.animation-name = "startToEnd" ;
  // mess.style.animation-duration = "0.5s";
})


let close = document.querySelector(".close")

close.addEventListener("click", function() {
  mess.style.right = "-30%"
})

// chỉnh search

let search = document.querySelector(".search")
let btnSearch = document.querySelector(".btnSearch")
let searchClose = document.querySelector(".search-close")
console.log(btnSearch)


btnSearch.addEventListener("click", function() {
  search.style.top  ="100%"
})

searchClose.addEventListener("click", function() {
  search.style.top  ="-1500%"
})



// slider -2

const slider2Forward = () => {
  const slides = document.querySelectorAll('.slide2');
  const slideActive = slides[2]
  const copyOfActiveSlide = slides[2].cloneNode(true);
  const slideContainer = document.querySelector('.slides2')
  
  
  slideContainer.insertBefore(slides[2], slideContainer.children[0]);
  slideContainer.appendChild(copyOfActiveSlide)
  slideActive.classList.remove('active')
  
  
  setTimeout(() => {
      slides[1].classList.add('active')
      copyOfActiveSlide.style.width ='0';

      setTimeout(() => {
          copyOfActiveSlide.remove();
          console.log(slides)

      }, 501)
  }, 1)


}

const slider2Back = () => {
  const slides = document.querySelectorAll('.slide2');
  const slideActive = slides[0]
  const slideActiving = slides[2]
  const copyOfActiveSlide = slides[0].cloneNode(true);
  const slideContainer = document.querySelector('.slides2')
  
  copyOfActiveSlide.style.transitionDuration = '0';
  copyOfActiveSlide.style.width = '0';
  slideContainer.appendChild(copyOfActiveSlide);

  setTimeout(() => {
      copyOfActiveSlide.removeAttribute('style');

      setTimeout(() => {
          copyOfActiveSlide.classList.add('active');
          slideActiving.classList.remove('active');

          setTimeout(() => {
              slideActive.remove();
          }, 503);
      }, 1);
  }, 1)
  

}

const sloganCar = () => {
  const carActive = document.querySelector('.slide2.active').getAttribute("data-index")
  const slogan = document.querySelector(`.slide2-text-container .slogan${carActive}`);
  
  slogan.classList.add('active')
   
}

const navCreate = (btnCreate) => {
  if(btnCreate != document.querySelector('.content-create-nav__choose-name.active')) {
      document.querySelector('.content-create-nav__choose-name.active').classList.remove('active');
      btnCreate.classList.add('active');
  }
}

const content = () => {
  autoSlider();
}

  //Slider2
  const navBtns = document.querySelectorAll('.slider2-navigation-btn .btn')
  navBtns.forEach(btn => {
      let check = true;
          btn.onclick = e => {
              e.stopPropagation();
              while(check == true) {
                  check = false;
                  const sloganActive =  document.querySelector(`.slide2-text-container .active`);
                  sloganActive.classList.remove('active')
                  if(btn.classList.contains('btn-left')) {
                      slider2Back();
                  } else {
                      
                      slider2Forward();
                  }
                  setTimeout(() => {
                      check = true
                      sloganCar()

                  }, 650)
              }
          }
      
      
      
  }) 