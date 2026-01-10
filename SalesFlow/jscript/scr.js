
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

// بيانات الديلز  
const deals = [
    { id: 1, client: "Step Company", amount: 5000, status: "Open" },
    { id: 2, client: "Flow Company", amount: 7500, status: "Closed" },
    { id: 3, client: "Sales Company", amount: 12000, status: "Open" },
    { id: 4, client: "Vision Tech", amount: 9500, status: "Open" },
    { id: 5, client: "Smart Solutions", amount: 3000, status: "Open" },
    { id: 6, client: "Blue Market", amount: 15000, status: "Open" },
    { id: 7, client: "Nova Systems", amount: 8200, status: "Closed" }
];

// dom elements 
const searchInput = document.getElementById("searchDeals");
const dealsContainer = document.getElementById("deals-container");
const hintMessage = document.getElementById("hintMessage");
const resetBtn = document.getElementById("resetBtn");
const noResults = document.getElementById("noResults");


// تصفية الديلز المفتوحة 
const openDeals = deals.filter(deal => deal.status === "Open");

// أعلى Deal مفتوحة 
const topOpenDeal = openDeals.reduce((max, deal) => deal.amount > max.amount ? deal : max);

// show deals 

function renderDeals(filteredDeals) {
    dealsContainer.innerHTML = "";

    filteredDeals.forEach(deal => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");

        let highlightClass = "";
        if (deal.id === topOpenDeal.id) {
            highlightClass = "top-deal"; // هذا لون مختلف للـ Top Deal
        }

        col.innerHTML = `
            <div class="deal-card p-3 border rounded ${highlightClass}">
                <p><strong>Deal ID:</strong> ${deal.id}</p>
                <p><strong>Client:</strong> ${deal.client}</p>
                <p><strong>Amount:</strong> $${deal.amount}</p>
                <p><strong>Status:</strong> ${deal.status}</p>
            </div>
        `;
        dealsContainer.appendChild(col);
    });
}

searchInput.addEventListener("input", function(e) {
    const term = e.target.value.toLowerCase().trim();

    // لو الحقل فارغ
    if (term === "") {
        dealsContainer.innerHTML = "";
        hintMessage.style.display = "block"; // رسالة البداية
        suggestionsList.style.display = "none";
        noResults.style.display = "none";
        return;
    }

    const filtered = openDeals.filter(deal =>
        deal.client.toLowerCase().includes(term)
    );

    // إخفاء رسالة البداية
    hintMessage.style.display = "none";

    // render الصفقات
    renderDeals(filtered);
    // ===== No results =====
    if (filtered.length === 0) {
        noResults.style.display = "block";  // تظهر رسالة لا توجد نتائج
    } else {
        noResults.style.display = "none";   // تختفي إذا في نتائج
    }

    // ===== اقتراحات =====
    const suggestions = filtered.map(deal => deal.client);
    suggestionsList.innerHTML = suggestions.map(name => `<li class="list-group-item">${name}</li>`).join('');
    suggestionsList.style.display = suggestions.length ? "block" : "none";

    // اختيار أي اقتراح
    suggestionsList.querySelectorAll("li").forEach(li => {
        li.addEventListener("click", () => {
            searchInput.value = li.textContent;
            renderDeals(openDeals.filter(d => d.client === li.textContent));
            suggestionsList.style.display = "none";
            noResults.style.display = "none"; // تختفي عند الاختيار
        });
    });
});


resetBtn.addEventListener("click", function () {
    searchInput.value = "";
    dealsContainer.innerHTML = "";
    hintMessage.style.display = "block"; // ترجع الرسالة
});
