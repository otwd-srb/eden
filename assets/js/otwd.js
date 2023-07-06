
// find the element with the id "nav-tab"
const navTab = document.getElementById("nav-tab");

// check the screen resolution using the window.innerWidth property
const screenWidth = window.innerWidth;

// add or remove the class based on the screen resolution
if (screenWidth < 576) {  
  navTab.classList.add("justify-content-between");
} else {  
  navTab.classList.remove("justify-content-between");
}

