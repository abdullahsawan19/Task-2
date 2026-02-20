// Task 1
function sayWelcome() {
  alert("Welcome To My First Site");
}

// setTimeout(sayWelcome, 2000);

// Task 2
function exchangeEgyPound(num, dollarVal = 47.55) {
  const convertToDollar = (num / dollarVal).toFixed(2);
  console.log(`Converted from ${num} EGP to ${convertToDollar} USD`);
}

exchangeEgyPound(340, 47.55);

// Task 3
function ShowEvenNumber() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log("iam even number");
    } else {
      console.log(i);
    }
  }
}

// Task 4
const form = document.getElementById("userForm");
const theResult = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("userName").value.trim();
  const mobile = document.getElementById("mobileNumber").value.trim();
  const birthday = document.getElementById("birthday").value;
  const color = document.getElementById("color").value;

  if (!/^[A-Za-z]{3,}$/.test(name)) {
    console.log("The Name Should be at least 3 characters");
  }
  if (mobile.length !== 11) {
    console.log("The Mobile Number Should be 11 digits");
  }
  if (birthday < 1900) {
    console.log("The age Should be greater than 1900");
  } else {
    const year = birthday.slice(0, 4);
    var age = new Date().getFullYear() - year;
  }

  theResult.innerHTML = `
  name : ${name} <br>
  mobile : ${mobile} <br>
  your age : ${age} <br>
  color : ${color} <br>
  `;

  theResult.style.color = color;
});

//Bonuc
// Task 5

function equalFunc(a, b, c) {
  let equalFunc = 0;
  if (a === c && c === b) {
    return (equalFunc += 3);
  } else if (a === b) {
    return (equalFunc += 2);
  } else if (b === c) {
    return (equalFunc += 2);
  } else if (a === c) {
    return (equalFunc += 2);
  } else return equalFunc;
}
console.log(equalFunc(0, 1, 1));

// Task 6

// Task 7

const input = document.getElementById("text");
const display = document.getElementById("display");
const button = document.getElementById("displayBtn");

function displayText() {
  display.innerHTML = `<h1>${input.value}</h1>
  <h2>${input.value}</h2>
  <h3>${input.value}</h3>
  <h4>${input.value}</h4>
  <h5>${input.value}</h5>
  <h6>${input.value}</h6>`;
}

button.addEventListener("click", displayText);
