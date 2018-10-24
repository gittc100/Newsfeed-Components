let count = 2;

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  
  if(count%2 === 0){
    count++;
    TweenLite.to(".menu", 3, { 
      ease: Elastic.easeOut.config(1, 0.3), 
      left:0
    });
  }else if(count%2 !== 0){
    count++;
    TweenLite.to(".menu", 3, { 
      ease: Elastic.easeOut.config(1, 0.3), 
      left:-350
    });
  }
  // menu.classList.toggle('menu--open');
  console.log(count);
}

const toggleWithBody = () => {
  if(count%2 !== 0){
    count++;
  }
    TweenLite.to(".menu", 3, { 
      ease: Elastic.easeOut.config(1, 0.3), 
      left:-350
    });
    console.log(count);
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
const articleButton = document.querySelector('.articles');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
articleButton.addEventListener('click', toggleWithBody);

