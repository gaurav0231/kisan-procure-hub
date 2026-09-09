// ==========================================
// 1. DATA STATE MANAGEMENT (SYNC ACROSS FILES)
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
  currentStep: 2, // 1: Booked, 2: Gate In, 3: QC Approved, 4: Weighed, 5: DBT Paid
  moisture: "11.2%",
  grossWeight: 4850,
  tareWeight: 1350
};

function getActiveToken() {
  const stored = localStorage.getItem("kisanActiveToken");
  if (!stored) {
    localStorage.setItem("kisanActiveToken", JSON.stringify(DEFAULT_TOKEN));
    return DEFAULT_TOKEN;
  }
  return JSON.parse(stored);
}

function saveActiveToken(tokenData) {
  localStorage.setItem("kisanActiveToken", JSON.stringify(tokenData));
}

function getCurrentUser() {
  const user = localStorage.getItem("kisanUserSession");
  return user ? JSON.parse(user) : null;
}

function setCurrentUser(userObj) {
  localStorage.setItem("kisanUserSession", JSON.stringify(userObj));
  syncNavbar();
}

function logoutUser() {
  localStorage.removeItem("kisanUserSession");
  alert("Signed out successfully.");
  window.location.href = "login.html";
}

// ==========================================
// 2. DYNAMIC NAVBAR BUILDER
// ==========================================

function syncNavbar() {
  const navLinks = document.getElementById("navLinks");
  if (!navLinks) return;

  const user = getCurrentUser();
  const path = window.location.pathname;

  const isActive = (file) => (path.includes(file) ? "active" : "");

  let linksHtml = `
    <li><a href="index.html" class="${isActive("index.html")}">Home</a></li>
    <li><a href="rates-msp.html" class="${isActive("rates-msp.html")}">MSP Rates</a></li>
    <li><a href="book-slot.html" class="${isActive("book-slot.html")}">Book Slot</a></li>
    <li><a href="track-status.html" class="${isActive("track-status.html")}">Track Token</a></li>
    <li><a href="payments.html" class="${isActive("payments.html")}">Payments (DBT)</a></li>
    <li><a href="mandi-operator.html" class="${isActive("mandi-operator.html")}">Operator Hub</a></li>
    <li><a href="grievance.html" class="${isActive("grievance.html")}">Helpdesk</a></li>
  `;

  if (user) {
    linksHtml += `
      <li style="display: flex; align-items: center; gap: 8px; margin-left: 6px;">
        <span class="user-badge">👤 ${user.name}</span>
        <button class="btn-logout" onclick="logoutUser()">Logout</button>
      </li>
    `;
  } else {
    linksHtml += `<li><a href="login.html" class="${isActive("login.html")}">Sign In</a></li>`;
  }

  navLinks.innerHTML = linksHtml;
}

// ==========================================
// 3. PAGE INITIALIZERS & EVENT DISPATCHERS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  syncNavbar();

  // --- LOGIN CONTROLS (login.html) ---
  const authForm = document.getElementById("authForm");
  if (authForm) {
    let selectedRole = "FARMER";
    const roleFarmerBtn = document.getElementById("roleFarmerBtn");
    const roleOperatorBtn = document.getElementById("roleOperatorBtn");
    const loginHeaderTitle = document.getElementById("loginHeaderTitle");
    const loginHeaderSubtitle = document.getElementById("loginHeaderSubtitle");
    const identifierLabel = document.getElementById("identifierLabel");
    const authIdentifier = document.getElementById("authIdentifier");
    const operatorFieldGroup = document.getElementById("operatorFieldGroup");

    roleFarmerBtn.addEventListener("click", () => {
      selectedRole = "FARMER";
      roleFarmerBtn.classList.add("active");
      roleOperatorBtn.classList.remove("active");
      loginHeaderTitle.textContent = "Farmer Portal Sign In";
      loginHeaderSubtitle.textContent = "Access slot booking and track your gate tokens.";
      identifierLabel.textContent = "Mobile Number *";
      authIdentifier.placeholder = "10-digit mobile number";
      operatorFieldGroup.style.display = "none";
    });

    roleOperatorBtn.addEventListener("click", () => {
      selectedRole = "OPERATOR";
      roleOperatorBtn.classList.add("active");
      roleFarmerBtn.classList.remove("active");
      loginHeaderTitle.textContent = "Mandi Operator Login";
      loginHeaderSubtitle.textContent = "Manage yard entries, moisture tests, and scale logs.";
      identifierLabel.textContent = "Operator ID / Official Email *";
      authIdentifier.placeholder = "operator@mandi.gov.in";
      operatorFieldGroup.style.display = "block";
    });

    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const identifier = authIdentifier.value.trim();

      if (selectedRole === "FARMER") {
        setCurrentUser({
          name: identifier === "9876543210" ? "Gaurav Singh" : "Farmer (" + identifier.slice(-4) + ")",
          phone: identifier,
          role: "Farmer"
        });
        alert("Welcome! Redirecting to Slot Booking...");
        window.location.href = "book-slot.html";
      } else {
        const station = document.getElementById("authMandiStation").value.trim() || "CENTRAL-01";
        setCurrentUser({
          name: "Operator #" + station,
          stationId: station,
          role: "Operator"
        });
        alert("Operator Terminal Authorized. Redirecting to Operator Console...");
        window.location.href = "mandi-operator.html";
      }
    });
  }

  // --- BOOK SLOT FORM (book-slot.html) ---
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    const user = getCurrentUser();
    if (user && user.role === "Farmer") {
      const nameField = document.getElementById("farmerName");
      const phoneField = document.getElementById("farmerPhone");
      if (nameField && !nameField.value) nameField.value = user.name;
      if (phoneField && !phoneField.value) phoneField.value = user.phone || "";
    }

    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("farmerName").value.trim();
      const phone = document.getElementById("farmerPhone").value.trim();
      const center = document.getElementById("centerSelect").value;
      const crop = document.getElementById("cropType").value;
      const quantity = document.getElementById("cropQty").value;
      const vehicle = document.getElementById("vehicleNo").value.trim() || "UP-17-AT-4011";
      const slotRadio = document.querySelector('input[name="arrivalSlot"]:checked');
      const slot = slotRadio ? slotRadio.value : "09:00 AM - 10:00 AM";

      const newTokenId = "TKN-" + Math.floor(1000 + Math.random() * 9000);

      const newTokenRecord = {
        token: newTokenId,
        name,
        phone,
        center,
        crop,
        quantity,
        vehicle,
        slot,
        currentStep: 1, // Reset to step 1
        moisture: "Pending",
        grossWeight: 0,
        tareWeight: 0
      };

      saveActiveToken(newTokenRecord);
      alert(`Token Generated Successfully!\nYour Token ID is: ${newTokenId}`);
      window.location.href = "track-status.html";
    });
  }

  // --- TRACK STATUS SCREEN (track-status.html) ---
  const trackerContainer = document.getElementById("trackerContainer");
  if (trackerContainer) {
    renderTrackerView();

    const lookupBtn = document.getElementById("lookupBtn");
    if (lookupBtn) {
      lookupBtn.addEventListener("click", () => {
        const searchVal = document.getElementById("tokenSearchInput").value.trim().toUpperCase();
        const current = getActiveToken();
        if (searchVal === current.token || searchVal === current.phone) {
          renderTrackerView();
        } else {
          alert(`No other record found for "${searchVal}". Loaded active token: ${current.token}`);
        }
      });
    }
  }

  // --- OPERATOR CONSOLE (mandi-operator.html) ---
  const operatorConsole = document.getElementById("operatorConsole");
  if (operatorConsole) {
    renderOperatorConsole();

    const btnCheckin = document.getElementById("btnCheckin");
    const btnQC = document.getElementById("btnQC");
    const btnWeighment = document.getElementById("btnWeighment");
    const btnPayment = document.getElementById("btnPayment");

    if (btnCheckin) {
      btnCheckin.addEventListener("click", () => updateProcurementStep(2, "Gate Entry Confirmed."));
    }
    if (btnQC) {
      btnQC.addEventListener("click", () => {
        const token = getActiveToken();
        token.moisture = document.getElementById("qcMoistureInput").value + "%";
        saveActiveToken(token);
        updateProcurementStep(3, "Moisture & Grain Quality Approved.");
      });
    }
    if (btnWeighment) {
      btnWeighment.addEventListener("click", () => {
        const token = getActiveToken();
        token.grossWeight = parseInt(document.getElementById("grossWeightInput").value, 10);
        token.tareWeight = parseInt(document.getElementById("tareWeightInput").value, 10);
        saveActiveToken(token);
        updateProcurementStep(4, "Weighbridge Net Weight Recorded.");
      });
    }
    if (btnPayment) {
      btnPayment.addEventListener("click", () => updateProcurementStep(5, "PFMS DBT Payment Cleared."));
    }
  }

  // --- GRIEVANCE FORM (grievance.html) ---
  const grievanceForm = document.getElementById("grievanceForm");
  if (grievanceForm) {
    grievanceForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const ticketId = "GRV-" + Math.floor(1000 + Math.random() * 9000);
      document.getElementById("gTicketId").textContent = ticketId;
      document.getElementById("ticketResult").style.display = "block";
      alert("Grievance Ticket " + ticketId + " has been registered successfully!");
    });
  }
});

// Helper Renderers
function renderTrackerView() {
  const data = getActiveToken();
  const slipToken = document.getElementById("slipTokenId");
  if (slipToken) slipToken.textContent = data.token;

  const slipFarmer = document.getElementById("slipFarmer");
  if (slipFarmer) slipFarmer.textContent = data.name;

  const slipCenter = document.getElementById("slipCenter");
  if (slipCenter) slipCenter.textContent = data.center;

  const slipCrop = document.getElementById("slipCrop");
  if (slipCrop) slipCrop.textContent = `${data.crop} (${data.quantity} Qtl)`;

  const slipSlot = document.getElementById("slipSlot");
  if (slipSlot) slipSlot.textContent = data.slot;

  const slipVehicle = document.getElementById("slipVehicle");
  if (slipVehicle) slipVehicle.textContent = data.vehicle;

  const steps = document.querySelectorAll(".timeline-step");
  steps.forEach((elem) => {
    const stepNum = parseInt(elem.getAttribute("data-step"), 10);
    const node = elem.querySelector(".step-node");

    elem.classList.remove("step-completed", "step-active");
    if (stepNum < data.currentStep) {
      elem.classList.add("step-completed");
      node.textContent = "✓";
    } else if (stepNum === data.currentStep) {
      elem.classList.add("step-active");
      node.textContent = "⏳";
    } else {
      node.textContent = "•";
    }
  });
}

function updateProcurementStep(newStep, message) {
  const token = getActiveToken();
  token.currentStep = newStep;
  saveActiveToken(token);
  alert(`Station Action Applied: ${message}`);
  renderOperatorConsole();
}

function renderOperatorConsole() {
  const token = getActiveToken();
  const opToken = document.getElementById("opTokenId");
  if (opToken) opToken.textContent = token.token;

  const opFarmer = document.getElementById("opFarmer");
  if (opFarmer) opFarmer.textContent = token.name;

  const opStage = document.getElementById("opCurrentStage");
  if (opStage) opStage.textContent = `Step ${token.currentStep} of 5`;
}