
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

// DOM Elements
const searchInput = document.getElementById("searchDeals");
const dealsContainer = document.getElementById("deals-container");
const hintMessage = document.getElementById("hintMessage");
const resetBtn = document.getElementById("resetBtn");
const suggestionsList = document.getElementById("suggestions");
const noResults = document.getElementById("noResults");

// تصفية الديلز المفتوحة
const openDeals = deals.filter(deal => deal.status === "Open");

// أعلى Deal
const topOpenDeal = openDeals.reduce((max, deal) => deal.amount > max.amount ? deal : max);

// عرض الديلز
function renderDeals(filteredDeals) {
    dealsContainer.innerHTML = "";

    filteredDeals.forEach((deal, index) => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");

        col.innerHTML = `
            <div class="deal-card p-3 border rounded">
                <p><strong>Deal ID:</strong> ${deal.id}</p>
                <p><strong>Client:</strong> ${deal.client}</p>
                <p><strong>Amount:</strong> $${deal.amount}</p>
                <p><strong>Status:</strong> ${deal.status}</p>
            </div>
        `;

        //  تمييز أول Deal أو أعلى Deal
        if (deal.id === topOpenDeal.id) {
            const card = col.querySelector(".deal-card");
            card.style.border = "2px solid #ffb703";
            card.style.backgroundColor = "#fff8e1";
            card.style.boxShadow = "0 0 15px rgba(255, 183, 3, 0.4)";
        }

        dealsContainer.appendChild(col);
    });
}

// Event Delegation للاقتراحات
suggestionsList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        searchInput.value = e.target.textContent;
        renderDeals(openDeals.filter(d => d.client === e.target.textContent));
        suggestionsList.style.display = "none";
        noResults.style.display = "none";
    }
});

// البحث عند الكتابة
searchInput.addEventListener("input", function(e) {
    const term = e.target.value.toLowerCase().trim();

    if (term === "") {
        dealsContainer.innerHTML = "";
        hintMessage.style.display = "block";
        suggestionsList.style.display = "none";
        noResults.style.display = "none";
        return;
    }

    const filtered = openDeals.filter(deal =>
        deal.client.toLowerCase().includes(term)
    );

    hintMessage.style.display = "none";
    renderDeals(filtered);

    // رسالة No results
    noResults.style.display = filtered.length === 0 ? "block" : "none";

    // اقتراحات
    const suggestions = filtered.map(d => d.client);
    suggestionsList.innerHTML = suggestions.map(name => `<li class="list-group-item">${name}</li>`).join('');
    suggestionsList.style.display = suggestions.length ? "block" : "none";
});

// زر Reset
resetBtn.addEventListener("click", function () {
    searchInput.value = "";
    dealsContainer.innerHTML = "";
    hintMessage.style.display = "block";
    suggestionsList.style.display = "none";
    noResults.style.display = "none";
});

const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mainNav");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  menu.classList.toggle("active");
});
 
// typing effect for title
const titleText = "Manage Your Sales With a Smarter Flow";
const titleEl = document.getElementById("typingTitle");
const textEl = document.getElementById("hero-text");

let i = 0;//عداد للاحرف

function typeTitle() { //اضافة تاثير الكتابة على العنوان
  if (i < titleText.length) { //اذا ما وصلنا لنهاية النص
    titleEl.textContent += titleText.charAt(i);//اضافة  حرف واحد في كل مرة 
    i++;// زيادة العد
    setTimeout(typeTitle, 50);//استدعاء الدالة مرة اخرى بعد 50 مللي ثانية
  } else {// اذا خلصت الكتابة
    //  هون فقط تظهر الفقرة
    textEl.classList.add("show");//اضافة كلاس لاظهار الفقرة
  }
} 

window.addEventListener("load", typeTitle); // استدعاء الدالة عند تحميل الصفحة



// الفنكشن للتعامل مع الـ DOM وتحميل الصفقات
async function loadDeals() {
    try {
        // محاكاة تحميل البيانات بشكل async
        const dealsData = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true; // غيرها false لتجربة الخطأ
                if (success) resolve(deals);
                else reject("Failed to load deals");
            }, 1000);
        });

        const container = document.getElementById("deals-container");
        container.innerHTML = "";

        dealsData.forEach(deal => {
            const div = document.createElement("div");
            div.className = "col-md-4";

            div.innerHTML = `
                <div class="card p-3 h-100">
                    <h5>${deal.client}</h5>
                    <p>Amount: $${deal.amount}</p>
                    <p>Status: ${deal.status}</p>
                </div>
            `;
            container.appendChild(div);
        });

    } catch (error) {
        console.log("Error:", error);
        alert(error);
    }
}

//=================== البحث الحي

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredDeals = deals.filter(deal => deal.client.toLowerCase().includes(query));

    const container = document.getElementById("deals-container");
    container.innerHTML = "";

    const noResults = document.getElementById("noResults");

    if (filteredDeals.length === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
        filteredDeals.forEach(deal => {
            const div = document.createElement("div");
            div.className = "col-md-4";
            div.innerHTML = `
                <div class="card p-3 h-100">
                    <h5>${deal.client}</h5>
                    <p>Amount: $${deal.amount}</p>
                    <p>Status: ${deal.status}</p>
                </div>
            `;
            container.appendChild(div);
        });
    }
});

//   زر  يمسح النتئج مؤقتا بعدها برجع يعيدها بعد ثانية مع الرسالة التوجيهية Reset 
resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    document.getElementById("noResults").style.display = "none";
    loadDeals();
});

// استدعاء الدالة عند تحميل الصفحة
loadDeals();
