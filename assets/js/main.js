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