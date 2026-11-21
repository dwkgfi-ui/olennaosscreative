// Add the business email address in the CONTACT_EMAIL setting before launch.
const CONTACT_EMAIL = "";

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const note = document.getElementById("form-note");
  if (!CONTACT_EMAIL) {
    note.textContent = "Before launch, add your business email address to CONTACT_EMAIL in script.js. The form is ready to use once configured.";
    return;
  }
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Website inquiry from " + data.get("name"));
  const body = encodeURIComponent(
    "Name: " + data.get("name") + "\nEmail: " + data.get("email") +
    "\n\n" + data.get("message")
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  note.textContent = "Your email app should open with your message prepared.";
});