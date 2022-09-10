 
//  $(document).ready(function(){
//     $('.progress-title > span').each(function(){
//         $(this).prop('Counter',0).animate({
//             Counter: $(this).text()
//         },{
//             duration: 2500,
//             easing: 'swing',
//             step: function (now){
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
// });

//  nav bar 
let navIcon = document.getElementById("nav-icon");
let navItem = document.getElementById("navItem");

  navItem.style.right=="-999px";

navIcon.addEventListener("click", ()=>{
    if( navItem.style.right=="-999px"){
        navItem.style.right = "0px"
    }else{
        navItem.style.right= "-999px";
    }
})

// project iamage 

let projectImage = document.getElementById("full-image");
let proImageFull = document.querySelector(".project-image-full");
let porImageAll = document.querySelectorAll(".project-image");
let closeImage = document.getElementById("close-image")

for(let i =0; i<porImageAll.length; i++){
    porImageAll[i].addEventListener("click", function(){
        let extarctImg = this.src ;
        projectImage.src = extarctImg
        proImageFull.style.display = "flex"
   })
  
}

closeImage.addEventListener("click", function(){
    proImageFull.style.display = "none"
})



