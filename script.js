// ==========================================
// 1. MULTI-LANGUAGE TRANSLATIONS
// ==========================================

const TRANSLATIONS = {
  en: {
    nav_home: "Home",
    nav_rates: "MSP Rates",
    nav_book: "Book Slot",
    nav_track: "Track Token",
    nav_payments: "Payments (DBT)",
    nav_operator: "Operator Hub",
    nav_helpdesk: "Helpdesk",
    nav_signin: "Sign In",
    nav_logout: "Logout",
    hero_title: "Zero-Queue Mandi Procurement",
    hero_desc: "Eliminate multi-day waits at procurement yards with guaranteed arrival windows and transparent DBT bank clearances.",
    card_book_title: "Book Arrival Slot",
    card_book_desc: "Reserve a 1-hour entry window to bypass multi-day truck queues at procurement gates.",
    card_book_btn: "Book Gate Pass ➔",
    card_track_title: "Track Token Status",
    card_track_desc: "Check vehicle check-in, moisture grading, net weighment, and payment sanctioning.",
    card_track_btn: "Live Tracking ➔",
    card_rates_title: "Live MSP Rates",
    card_rates_desc: "Check official MSP prices, FAQ moisture rules, and compute your total payout estimation.",
    card_rates_btn: "View MSP & Calc ➔"
  },
  hi: {
    nav_home: "मुख्य पृष्ठ",
    nav_rates: "एमएसपी दरें",
    nav_book: "स्लॉट बुक करें",
    nav_track: "टोकन ट्रैक करें",
    nav_payments: "भुगतान (DBT)",
    nav_operator: "मंडी ऑपरेटर",
    nav_helpdesk: "सहायता केंद्र",
    nav_signin: "लॉग इन",
    nav_logout: "लॉग आउट",
    hero_title: "कतार-मुक्त मंडी उपार्जन प्रणाली",
    hero_desc: "मंडी में कई दिनों के इंतजार से मुक्ति पाएं। निश्चित समय स्लॉट टोकन और सीधे बैंक खाते में भुगतान।",
    card_book_title: "आगमन स्लॉट बुक करें",
    card_book_desc: "मंडी प्रवेश द्वार पर वाहनों की भीड़ से बचने के लिए 1 घंटे का प्रवेश पास आरक्षित करें।",
    card_book_btn: "गेट पास बुक करें ➔",
    card_track_title: "टोकन स्थिति ट्रैक करें",
    card_track_desc: "वाहन प्रवेश, नमी जांच, धर्मकांटा तौल और बैंक भुगतान की लाइव स्थिति देखें।",
    card_track_btn: "लाइव ट्रैकिंग देखें ➔",
    card_rates_title: "न्यूनतम समर्थन मूल्य (MSP)",
    card_rates_desc: "आधिकारिक सरकारी एमएसपी दरें, नमी मानक और अपनी उपज भुगतान राशि का आकलन करें।",
    card_rates_btn: "दरें और गणना देखें ➔"
  },
  pa: {
    nav_home: "ਮੁੱਖ ਪੰਨਾ",
    nav_rates: "MSP ਰੇਟ",
    nav_book: "ਸਲਾਟ ਬੁੱਕ ਕਰੋ",
    nav_track: "ਟੋਕਨ ਟਰੈਕ ਕਰੋ",
    nav_payments: "ਭੁਗਤਾਨ (DBT)",
    nav_operator: "ਮੰਡੀ ਆਪਰੇਟਰ",
    nav_helpdesk: "ਮਦਦ ਕੇਂਦਰ",
    nav_signin: "ਲਾਗਇਨ",
    nav_logout: "ਲਾਗਆਉਟ",
    hero_title: "ਲਾਈਨ-ਮੁਕਤ ਮੰਡੀ ਖਰੀਦ ਪ੍ਰਣਾਲੀ",
    hero_desc: "ਮੰਡੀ ਵਿੱਚ ਲੰਬੀਆਂ ਲਾਈਨਾਂ ਤੋਂ ਛੁਟਕਾਰਾ ਪਾਓ। ਪੱਕਾ ਸਮਾਂ ਸਲਾਟ ਅਤੇ ਸਿੱਧੇ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ ਭੁਗਤਾਨ।",
    card_book_title: "ਐਂਟਰੀ ਸਲਾਟ ਬੁੱਕ ਕਰੋ",
    card_book_desc: "ਭੀੜ ਤੋਂ ਬਚਣ ਲਈ ਆਪਣੀ ਗੱਡੀ ਦਾ 1 ਘੰਟੇ ਦਾ ਗੇਟ ਪਾਸ ਪਹਿਲਾਂ ਹੀ ਬੁੱਕ ਕਰੋ।",
    card_book_btn: "ਗੇਟ ਪਾਸ ਬੁੱਕ ਕਰੋ ➔",
    card_track_title: "ਟੋਕਨ ਦੀ ਸਥਿਤੀ ਦੇਖੋ",
    card_track_desc: "ਵਾਹਨ ਐਂਟਰੀ, ਨਮੀ ਟੈਸਟ, ਕੰਡੇ ਦਾ ਤੋਲ ਅਤੇ ਬੈਂਕ ਭੁਗਤਾਨ ਦੀ ਸਥਿਤੀ ਜਾਂਚੋ।",
    card_track_btn: "ਲਾਈਵ ਟਰੈਕਿੰਗ ➔",
    card_rates_title: "ਸਰਕਾਰੀ MSP ਰੇਟ",
    card_rates_desc: "ਸਰਕਾਰੀ ਰੇਟ ਅਤੇ ਆਪਣੀ ਫਸਲ ਦੀ ਕੁੱਲ ਰਕਮ ਦਾ ਅੰਦਾਜ਼ਾ ਲਗਾਓ।",
    card_rates_btn: "ਰੇਟ ਅਤੇ ਕੈਲਕੁਲੇਟਰ ➔"
  }
};

function getActiveLanguage() {
  return localStorage.getItem("kisanAppLang") || "en";
}

function setLanguage(langCode) {
  localStorage.setItem("kisanAppLang", langCode);
  applyTranslations();
  syncNavbar();
}

function applyTranslations() {
  const lang = getActiveLanguage();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const heroTitle = document.querySelector(".hero-banner h1");
  if (heroTitle) heroTitle.textContent = t.hero_title;

  const heroDesc = document.querySelector(".hero-banner p");
  if (heroDesc) heroDesc.textContent = t.hero_desc;

  const actionCards = document.querySelectorAll(".action-card");
  if (actionCards.length >= 3) {
    actionCards[0].querySelector(".card-title").textContent = t.card_book_title;
    actionCards[0].querySelector(".card-desc").textContent = t.card_book_desc;
    actionCards[0].querySelector(".btn").textContent = t.card_book_btn;

    actionCards[1].querySelector(".card-title").textContent = t.card_track_title;
    actionCards[1].querySelector(".card-desc").textContent = t.card_track_desc;
    actionCards[1].querySelector(".btn").textContent = t.card_track_btn;

    actionCards[2].querySelector(".card-title").textContent = t.card_rates_title;
    actionCards[2].querySelector(".card-desc").textContent = t.card_rates_desc;
    actionCards[2].querySelector(".btn").textContent = t.card_rates_btn;
  }
}
// Global Role State
let selectedRole = "FARMER";

function switchRole(role) {
  selectedRole = role;
  const farmerBtn = document.getElementById("roleFarmerBtn");
  const operatorBtn = document.getElementById("roleOperatorBtn");
  const title = document.getElementById("loginHeaderTitle");
  const subtitle = document.getElementById("loginHeaderSubtitle");
  const label = document.getElementById("identifierLabel");
  const input = document.getElementById("authIdentifier");
  const operatorGroup = document.getElementById("operatorFieldGroup");

  if (role === "FARMER") {
    farmerBtn?.classList.add("active");
    operatorBtn?.classList.remove("active");
    if (title) title.textContent = "Farmer Portal Sign In";
    if (subtitle) subtitle.textContent = "Access slot reservation, token slips, and live payment DBT tracking.";
    if (label) label.textContent = "Mobile Number *";
    if (input) input.placeholder = "10-digit registered number";
    if (operatorGroup) operatorGroup.style.display = "none";
  } else {
    operatorBtn?.classList.add("active");
    farmerBtn?.classList.remove("active");
    if (title) title.textContent = "Mandi Operator Login";
    if (subtitle) subtitle.textContent = "Manage yard entries, moisture tests, and scale logs.";
    if (label) label.textContent = "Operator ID / Official Email *";
    if (input) input.placeholder = "operator@mandi.gov.in";
    if (operatorGroup) operatorGroup.style.display = "block";
  }
}

// ==========================================
// 2. NIGHT / LIGHT MODE CONTROLLER
// ==========================================

function initTheme() {
  const savedTheme = localStorage.getItem("kisanAppTheme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    updateThemeIcon(true);
  } else {
    document.body.classList.remove("dark-mode");
    updateThemeIcon(false);
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("kisanAppTheme", isDark ? "dark" : "light");
  updateThemeIcon(isDark);
  renderHomeCharts(); // Redraw charts with dark/light grid lines
}

function updateThemeIcon(isDark) {
  const icon = document.getElementById("themeIcon");
  if (icon) icon.textContent = isDark ? "☀️" : "🌙";
}

// ==========================================
// 3. PERSISTENT STORAGE
// ==========================================

const DEFAULT_TOKEN = {
  token: "TKN-2026-9041",
  name: "Gaurav Singh",
  phone: "9876543210",
  center: "Baraut Central Mandi Yard",
  crop: "Wheat (Sharbati)",
  quantity: 40,
  vehicle: "UP-17-AT-4011",
  slot: "09:00 AM - 10:00 AM",
  currentStep: 2,
  moisture: "11.2%",
  grossWeight: 4850,
  tareWeight: 1350
};

function getActiveToken() {
  const stored = localStorage.getItem("kisanActiveToken");
  return stored ? JSON.parse(stored) : DEFAULT_TOKEN;
}

function getCurrentUser() {
  const user = localStorage.getItem("kisanUserSession");
  return user ? JSON.parse(user) : null;
}

function logoutUser() {
  localStorage.removeItem("kisanUserSession");
  alert("Signed out.");
  window.location.href = "login.html";
}

// ==========================================
// 4. NAVBAR INJECTION
// ==========================================

function syncNavbar() {
  const navLinks = document.getElementById("navLinks");
  if (!navLinks) return;

  const user = getCurrentUser();
  const path = window.location.pathname;
  const isActive = (file) => (path.includes(file) ? "active" : "");
  const isDark = document.body.classList.contains("dark-mode");
  const lang = getActiveLanguage();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  let linksHtml = `
    <li><a href="index.html" class="${isActive("index.html")}">${t.nav_home}</a></li>
    <li><a href="rates-msp.html" class="${isActive("rates-msp.html")}">${t.nav_rates}</a></li>
    <li><a href="book-slot.html" class="${isActive("book-slot.html")}">${t.nav_book}</a></li>
    <li><a href="track-status.html" class="${isActive("track-status.html")}">${t.nav_track}</a></li>
    <li><a href="payments.html" class="${isActive("payments.html")}">${t.nav_payments}</a></li>
    <li><a href="mandi-operator.html" class="${isActive("mandi-operator.html")}">${t.nav_operator}</a></li>
    <li><a href="grievance.html" class="${isActive("grievance.html")}">${t.nav_helpdesk}</a></li>
  `;

  if (user) {
    linksHtml += `
      <li style="display: flex; align-items: center; gap: 8px; margin-left: 6px;">
        <span class="user-badge">👤 ${user.name}</span>
        <button class="btn-logout" onclick="logoutUser()">${t.nav_logout}</button>
      </li>
    `;
  } else {
    linksHtml += `<li><a href="login.html" class="${isActive("login.html")}">${t.nav_signin}</a></li>`;
  }

  linksHtml += `
    <li>
      <button id="themeToggleBtn" class="theme-btn" onclick="toggleTheme()" title="Toggle Light/Night Mode">
        <span id="themeIcon">${isDark ? "☀️" : "🌙"}</span>
      </button>
    </li>
    <li class="lang-dropdown-wrapper">
      <select id="langSelect" class="lang-select" onchange="setLanguage(this.value)" title="Language">
        <option value="en" ${lang === "en" ? "selected" : ""}>🌐 English</option>
        <option value="hi" ${lang === "hi" ? "selected" : ""}>🌐 हिन्दी</option>
        <option value="pa" ${lang === "pa" ? "selected" : ""}>🌐 ਪੰਜਾਬੀ</option>
      </select>
    </li>
  `;

  navLinks.innerHTML = linksHtml;
}

// ==========================================
// 5. CHART.JS TELEMETRY RENDERING
// ==========================================

let inflowChartInstance = null;
let cropChartInstance = null;

function renderHomeCharts() {
  const inflowCanvas = document.getElementById("homeInflowChart");
  const cropCanvas = document.getElementById("homeCropShareChart");
  if (!inflowCanvas || !cropCanvas || typeof Chart === "undefined") return;

  const isDark = document.body.classList.contains("dark-mode");
  const textColor = isDark ? "#94a3b8" : "#475569";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)";

  if (inflowChartInstance) inflowChartInstance.destroy();
  if (cropChartInstance) cropChartInstance.destroy();

  // Hourly Bar & Line Chart
  inflowChartInstance = new Chart(inflowCanvas.getContext("2d"), {
    type: "bar",
    data: {
      labels: ["08 AM", "09 AM", "10 AM", "11 AM", "12 PM", "01 PM", "02 PM"],
      datasets: [
        {
          label: "Vehicles Arrived",
          data: [20, 36, 45, 38, 24, 18, 12],
          backgroundColor: "rgba(34, 197, 94, 0.65)",
          borderRadius: 4
        },
        {
          type: "line",
          label: "Cleared at Scale",
          data: [14, 30, 40, 35, 26, 19, 12],
          borderColor: "#0284c7",
          tension: 0.35,
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: textColor } } },
      scales: {
        x: { ticks: { color: textColor }, grid: { color: gridColor } },
        y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true }
      }
    }
  });

  // Donut Chart
  cropChartInstance = new Chart(cropCanvas.getContext("2d"), {
    type: "doughnut",
    data: {
      labels: ["Wheat", "Mustard", "Gram", "Paddy"],
      datasets: [{
        data: [60, 20, 12, 8],
        backgroundColor: ["#15803d", "#ca8a04", "#0284c7", "#e11d48"],
        borderWidth: 2,
        borderColor: isDark ? "#0f172a" : "#ffffff"
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: "bottom", labels: { color: textColor, font: { size: 10 } } } }
    }
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  syncNavbar();
  applyTranslations();
  renderHomeCharts();
});