
//DOM elements
const businessnameInput = document.getElementById("businessname");
const demoButton = document.getElementById("demoBtn");
const demoMessage = document.getElementById("demoMessage");

// default message
const defaultMessage = "Please enter your Business Name to continue.";
demoMessage.textContent = defaultMessage;
demoButton.disabled = true;


// enable button only when input is not empty
businessnameInput.addEventListener("input", function () {
  if (businessnameInput.value === "") {
    demoButton.disabled = true;
    demoMessage.textContent = defaultMessage;
    demoMessage.classList.remove('active-message');
  } else {
    demoButton.disabled = false;
  }
});

// button click changes text
demoButton.addEventListener("click", function () {
    demoMessage.textContent = "Welcome, " + businessnameInput.value + "! let's get started with your sales flow demo.";
    demoMessage.classList.add("active-message");
});

// DOM element
const titleElement = document.getElementById("typingTitle");

// get full text
const fullText = titleElement.getAttribute("data-text");

// split text into words
const words = fullText.split(" ");

let wordIndex = 0;
const speed = 300; // speed between words 

function typeWords() {
  if (wordIndex < words.length) {
    titleElement.textContent += words[wordIndex] + " ";
    wordIndex++;
    setTimeout(typeWords, speed);
  }
   else {
    // hide cursor after typing is done
    titleElement.classList.add("cursor-hidden");
  }
}



// start typing after page loads
document.addEventListener("DOMContentLoaded", typeWords);

// deals data
const deals = [
    { id: 1, client: "step Company", amount: 5000, status: "Open" },
    { id: 2, client: "Flow Company", amount: 7500, status: "Closed" },
    { id: 3, client: "Sales Company", amount: 12000, status: "Open" }
];

deals.forEach(deal => {
    console.log(`Deal ID: ${deal.id}, Client: ${deal.client}, Amount: $${deal.amount}, Status: ${deal.status}`);
});

// show deals
const dealsContainer = document.getElementById("deals-container");
dealsContainer.innerHTML = deals.map(deal => '<div class = "deal-card"><h3>' + deal.client + '</h3><p>Amount: $' 
  + deal.amount + '<p>Status: ' + deal.status + '</p></div>').join('');
  