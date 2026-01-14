// تغليف في الدوم عشان تحمل عناصر html بالاول

document.addEventListener("DOMContentLoaded", () => {

  // ==============
  // DOM Elements
  // ===============================
  const loadDealsBtn = document.getElementById("loadDealsBtn");
  const dealsStatus = document.getElementById("dealsStatus");
  const dealsContainer = document.getElementById("deals-container");
  const searchInput = document.getElementById("searchDeals");
  const hintMessage = document.getElementById("hintMessage");
  const resetBtn = document.getElementById("resetBtn");
  const suggestionsList = document.getElementById("suggestions");
  const noResults = document.getElementById("noResults");

  let apiDeals = []; // مكان تخزين الداتا المحملة
  let isDealsLoaded = false;

  // ====================
  // Render Deals
  // ===============================
  function renderDeals(dealsList) {
    dealsContainer.innerHTML = "";

    dealsList.forEach(deal => {
      const col = document.createElement("div");
      col.className = "col-md-4";

      col.innerHTML = `
        <div class="deal-card p-3 border rounded h-100">
          <p><strong>Client:</strong> ${deal.client}</p>
          <p><strong>Amount:</strong> $${deal.amount}</p>
          <p><strong>Status:</strong> ${deal.status}</p>
        </div>
      `;

      // تمييز أعلى Deal
      const topDeal = apiDeals.reduce((max, d) => d.amount > max.amount ? d : max, dealsList[0]);
      if (deal.id === topDeal.id) {
        const card = col.querySelector(".deal-card");
        card.style.border = "2px solid #ffb703";
        card.style.backgroundColor = "#fff8e1";
        card.style.boxShadow = "0 0 12px rgba(255,183,3,.4)";
      }

      dealsContainer.appendChild(col);
    });
  }

  // =====================
  // Async Load Deals
  // ===============================
  async function loadDeals() {
    dealsStatus.textContent = "Loading demo customers...";
    dealsContainer.innerHTML = "";
    hintMessage.style.display = "none";
    loadDealsBtn.disabled = true;

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) throw new Error("Failed to fetch data");
      const users = await response.json();

      // تأخير 2ث
      await new Promise(resolve => setTimeout(resolve, 2000));

      apiDeals = users.slice(0, 6).map((user, index) => ({
        id: index + 1,
        client: user.company.name,
        amount: Math.floor(Math.random() * 15000) + 3000,
        status: "Open"
      }));

      renderDeals(apiDeals);
      dealsStatus.textContent = "Demo customers loaded successfully";
      isDealsLoaded = true;

    } catch (error) {
      dealsStatus.textContent = " Failed to load demo customers";
    } finally {
      loadDealsBtn.disabled = false;
    }
  }

  loadDealsBtn.addEventListener("click", loadDeals);

  // ===============================
  // Search Deals
  // ===============================
  searchInput.addEventListener("input", (e) => {
    if (!isDealsLoaded) {
      noResults.textContent = "Please load demo deals first";
      noResults.style.display = "block";
      return;
    }

    const term = e.target.value.toLowerCase().trim();

    if (term === "") {
      dealsContainer.innerHTML = "";
      hintMessage.style.display = "block";
      suggestionsList.style.display = "none";
      noResults.style.display = "none";
      return;
    }

    const filtered = apiDeals.filter(d => d.client.toLowerCase().includes(term));
    renderDeals(filtered);

    noResults.style.display = filtered.length === 0 ? "block" : "none";

    suggestionsList.innerHTML = filtered
      .map(d => `<li class="list-group-item">${d.client}</li>`)
      .join("");
    suggestionsList.style.display = filtered.length ? "block" : "none";
  });

  suggestionsList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      searchInput.value = e.target.textContent;
      renderDeals(apiDeals.filter(d => d.client === e.target.textContent));
      suggestionsList.style.display = "none";
      noResults.style.display = "none";
    }
  });

  // =================
  // Reset
  // ===============================
  resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    dealsContainer.innerHTML = "";
    hintMessage.style.display = "block";
    suggestionsList.style.display = "none";
    noResults.style.display = "none";
    dealsStatus.textContent = "";
    isDealsLoaded = false;
  });

});
