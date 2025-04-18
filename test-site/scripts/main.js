const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/beach.jpg") {
    myImage.setAttribute("src", "images/chairs.jpg");
  } else {
    myImage.setAttribute("src", "images/beach.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Go on! Come on down to the beach, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Go on! Come on down to the beach, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
