//local reviews data

const reviews = [
{
    id: 1,
    name: "Taylor Swift",
    job: "Singer",
    img: "./img/person-4.jpg",
    text: "What a rollercoaster of emotions! The plot twists kept me guessing until the very end. The author's descriptive prose painted such vivid scenes that I felt like I was right there alongside the characters. An absolute must-read for anyone who enjoys a gripping and thought-provoking story.",
},
{
    id: 2,
    name: "Camila Cabello",
    job: "Singer",
    img: "./img/person-5.jpg",
    text: "This book touched my heart in ways I didn't expect. The themes of love, loss, and resilience were beautifully woven together. The characters felt so real, and their journeys stayed with me long after I finished the final chapter. Highly recommended for fans of literary fiction.",
},
{
    id: 3,
    name: "Stephane",
    job: "Desinger",
    img: "./img/person-3.png",
    text: "A masterpiece of storytelling! From the first page, I was drawn into the world the author created. The pacing was perfect, balancing suspense and emotional depth flawlessly. I will definitely be seeking out more from this talented writer.",
},
{
    id: 4,
    name: "Joanna",
    job: "Web Developer",
    img: "./img/person-2.jpg",
    text: "I devoured this book in just a few sittings. The author's ability to create such vivid settings and complex characters is remarkable. Each chapter left me eager for more, and the ending was both surprising and satisfying.",
}]


// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItem);
});

// show person based on item

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev person

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });