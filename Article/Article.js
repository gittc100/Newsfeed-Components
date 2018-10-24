// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
let counter = 2;

class Article {
  constructor(domElement, counter) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // Initialize count
    this.counter = counter;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle(event));
    
  }

  expandArticle(event) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // this.domElement.classList.toggle('article-open');
    console.log(event.target);
    console.log(this.domElement);
    // let x = this.counter;
    if(this.counter%2 === 0){
      TweenLite.to(this.domElement, 3, { 
        ease: Elastic.easeOut.config(1, 0.5), 
        height:400
      });
      this.counter++;
      this.expandButton.textContent = "Click to Close";
    }
    else if(this.counter%2 !== 0){
      TweenLite.to(this.domElement, 3, { 
        ease: Elastic.easeOut.config(1, 0.5), 
        height:50
      });
      this.counter++;
      this.expandButton.textContent = "Click to Expand";
    }
    console.log(this.counter);
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(item => {
  return new Article(item, counter);
});

