let likeButton = document.getElementById("likeButton");
let likeQuotes = document.querySelector(".like-quotes");
let likePage = document.querySelector('.center');
let homeQuotes = document.querySelector(".homeQuotes");
let homePages = document.querySelectorAll(".thread");
let likeIcons = document.querySelectorAll(".thread .icons img[src='images/Like.png']");
let likeAppendContainer = document.querySelector('.like-append');
let likeSvg = document.querySelector('img[src="images/likePage.svg"]');
let homeSvg=document.querySelector('img[src="images/home.svg"]')

likeQuotes.addEventListener("click", () => {
    homePages.forEach(homePage => {
        homePage.style.display = "none";
        likeAppendContainer.style.display="block"
        
    });
    // console.log(likeIcon)
        likeSvg.style.filter ="brightness(0) invert(1)";
        homeSvg.style.filter="invert(1)";
    // console.log(homeSvg)
});

homeQuotes.addEventListener("click", () => {
    homePages.forEach(homePage => {
        homePage.style.display = "inline-flex";
        likeAppendContainer.style.display="none"
        likeSvg.style.filter="invert(0)"
        homeSvg.style.filter="invert(0)";

    });
});


// Find the container for appending the liked threads
document.addEventListener("DOMContentLoaded", () => {
    // const likeAppendContainer = document.querySelector('.like-append');
    console.log("likeAppendContainer:", likeAppendContainer);

    likeIcons.forEach((likeIcon, index) => {
        likeIcon.addEventListener("click", () => {
            let thread = homePages[index].cloneNode(true);
            console.log("thread:", thread);

            const newDiv = document.createElement('div');
            newDiv.appendChild(thread);

            console.log("newDiv:", newDiv);

            likeAppendContainer.appendChild(newDiv);
            newDiv.style.visibility = "visible";
        });
    });
});


//Add an event listener for hamburger
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".left").style.left="0"
    homeSvg.style.display="none"
  })

  
//Add event listener to close hamburger
document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".left").style.left="-120%"
  })
  
// Add event listener to show trending
document.querySelector(".right-icon").addEventListener("click",()=>{
    document.querySelector(".right").style.display="block"
    document.querySelector(".right").style.position="absolute"
    document.querySelector(".right").style.right="0"
})

// Add event listener to close trending
document.querySelector(".right-info .close").addEventListener("click",()=>{
    document.querySelector(".right").style.left="31rem"
})

