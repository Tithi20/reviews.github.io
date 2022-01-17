var image = document.querySelector("img");
var author = document.querySelector("#name");
var profession = document.querySelector("#profession");
var review = document.querySelector("#review");

var reviews = [
  {
    id: 1,
    img: "image1.jpg",
    name: "Tithi Das",
    profession: "Web developer",
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.",
  },
  {
    id: 2,
    img: "zz.jpg",
    name: "Diya Debnath",
    profession: "Web reviewer",
    review:
      "discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. ",
  },
  {
    id: 3,
    img: "image2.jpg",
    name: "Rupam Roy",
    profession: "Writer",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 4,
    img: "image4.jpg",
    name: "Agniva Das",
    profession: "Data Analyst",
    review:
      " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 5,
    img: "image3.jpg",
    name: "Parnava Debnath",
    profession: "Machine Designer",
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
  },
];

//set starting item
var currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

//show person based on item
function showPerson(person) {
  var item = reviews[person];
  image.src = item.img;
  author.textContent = item.name;
  profession.textContent = item.profession;
  review.textContent = item.review;
}

function showNext() {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
}
function showPrevious() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
}

function showRandom() {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson(currentItem);
}
