const count = document.querySelector(".count");
const quoteEl = document.querySelector(".quote");
const author = document.querySelector(".name");
const randomBtn = document.querySelector(".random");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
let pages = 1;

function randomQuote() {
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteEl.textContent = result.content;
        author.textContent = result.author;
        count.textContent = "Quote Of The Day";
    });
};

slideRight();
function slideRight(){
    fetch(`https://api.quotable.io/quotes?page=${pages}`).then(res => res.json()).then(result =>{
        let random = Math.floor(Math.random() * 19);
        quoteEl.textContent = result.results[random].content;
        author.textContent = result.results[random].author;
        count.textContent = `${pages}/${result.totalPages}`;
    });
}

function slideLeft(){
    fetch(`https://api.quotable.io/quotes?page=${pages}`).then(res => res.json()).then(result =>{
        let random = Math.floor(Math.random() * 19);
        quoteEl.textContent = result.results[random].content;
        author.textContent = result.results[random].author;
        count.textContent = `${pages}/${result.totalPages}`;
    });
}



randomBtn.addEventListener("click", randomQuote);
rightBtn.addEventListener("click", () =>{
    if(pages <= 107){
        pages++;
    slideRight();
    }
});

leftBtn.addEventListener("click", () => {
    if(pages > 1){
        pages--;
        slideLeft();
    }
});

