// DARK MODE LOAD
if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("dark");
}

// JOIN
function join() {
  window.open("https://chat.whatsapp.com/DpHWmAOsvi16FNxbmwIP7u?mode=gi_t");
}

// DARK MODE TOGGLE
function toggleMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark", document.body.classList.contains("dark"));
}

// MENU
function toggleMenu() {
  const m = document.getElementById("menuDropdown");
  m.style.display = m.style.display === "block" ? "none" : "block";
}

// TAB
function openTab(tab) {
  document.querySelectorAll(".tab").forEach(t => {
    t.classList.remove("active", "slide-in");
  });

  const el = document.getElementById(tab + "Tab");
  el.classList.add("active", "slide-in");

  document.getElementById("menuDropdown").style.display = "none";
}

// HOWTO MULTI STEP
let currentStep = 0;
const steps = document.querySelectorAll(".step");

function showStep(i) {
  steps.forEach(s => s.classList.remove("active"));
  steps[i].classList.add("active");
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

// LOAD DATA
async function load() {
  const res = await fetch("/api/status");
  const data = await res.json();

  document.getElementById("players").innerText = data.players;
}

setInterval(load, 3000);
load();

// INIT STEP
showStep(currentStep);
