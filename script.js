// Konfigurasi toko — ganti placeholder di bawah sebelum website dipublikasikan.
const STORE = {
  whatsapp: "6281234567890", // format internasional tanpa tanda +, contoh 628...
  instagram: "https://instagram.com/username",
  maps: "https://maps.google.com/?q=alamat+toko"
};

const ageGate = document.getElementById("ageGate");
if (sessionStorage.getItem("kabutAgeConfirmed") === "yes") ageGate.classList.add("hidden");
document.getElementById("confirmAge").addEventListener("click", () => {
  sessionStorage.setItem("kabutAgeConfirmed", "yes");
  ageGate.classList.add("hidden");
});
document.getElementById("leaveAge").addEventListener("click", () => {
  document.querySelector(".age-card").innerHTML = "<h2>Akses dibatasi</h2><p>Halaman ini hanya dapat diakses oleh pengunjung berusia 18 tahun ke atas.</p>";
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("whatsappLink").href = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent("Halo, saya ingin bertanya mengenai informasi toko.")}`;
document.getElementById("instagramLink").href = STORE.instagram;
document.getElementById("mapLink").href = STORE.maps;
document.getElementById("mapLink").target = "_blank";
document.getElementById("mapLink").rel = "noreferrer";

const search = document.getElementById("productSearch");
const cards = [...document.querySelectorAll(".product-card")];
const filters = [...document.querySelectorAll(".filter-btn")];
let activeFilter = "all";
function filterCards() {
  const term = search.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const match = (activeFilter === "all" || card.dataset.category === activeFilter) &&
      card.dataset.name.includes(term);
    card.hidden = !match;
    if (match) visible++;
  });
  document.getElementById("emptyState").hidden = visible > 0;
}
search.addEventListener("input", filterCards);
filters.forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filters.forEach(item => item.classList.toggle("selected", item === button));
  filterCards();
}));

const modal = document.getElementById("detailModal");
document.querySelectorAll(".detail-btn").forEach(button => button.addEventListener("click", () => {
  document.getElementById("modalTitle").textContent = button.dataset.title;
  document.getElementById("modalDescription").textContent = button.dataset.description;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}));
function closeModal() { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); }
modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });

const menuToggle = document.getElementById("menuToggle");
const desktopNav = document.querySelector(".desktop-nav");
menuToggle.addEventListener("click", () => {
  const open = desktopNav.classList.toggle("mobile-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
desktopNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  desktopNav.classList.remove("mobile-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link, .mobile-link")];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
  }), {rootMargin:"-35% 0px -55% 0px"});
  sections.forEach(section => observer.observe(section));
}
