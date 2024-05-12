import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/utils.css";

let bar = document.querySelector(".bar");
let container = document.querySelector(".container");
let x = document.querySelector(".X");
let body = document.querySelector( "body" );



bar.addEventListener("click", openBar);

// function to Open the Bar
function openBar() {
    let index = +window.getComputedStyle(bar).transform.slice(10,-2) || 0;
    // If the Bar is already closed, Reopen it. Else, Close It.
  if (index === 0) {
    container.style.transform = `translateY(0)`;
    setTimeout(()=>{
      container.style.opacity=1;
      container.style.transition="none"
    }, 100);
    
    setTimeout(()=>{
      container.style.display = "flex";
      container.style.transform = "";
      container.style.opacity = "1";
      container.style.transition = "all .3s ease-out-in";
    }, 300);
  } else {
    container.style.transform = `translateY(56px)`;
    setTimeout(()=>{
      container.style.opacity = "1";
    }, 100);
  }
}

x.addEventListener("click", closeBar);

// Function to Close the Bar
function closeBar() {
  let index = +window.getComputedStyle(bar).transform.slice(7,-8) || 0;
  
  // If the Bar is already closed, Reopen it. Else, Close It.
  if (index === 0) {
    container.style.transform = `translateY(-56px)`;
    setTimeout(()=>{
      container.style.opacity=0;
      container.style.transition="none"
    }, 100);
    
    setTimeout(()=>{
      container.style.display = "none";
      container.style.transform = "";
      container.style.opacity = "1";
      container.style.transition = "all .3s ease-in-out";
    }, 300);
  } else {
    container.style.transform = `translateY(0)`;
    setTimeout(()=>{
      container.style.opacity = "0";
    }, 100);
  }
}