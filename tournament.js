const contactModal = document.querySelector("#contact-modal");
const contactForm = document.querySelector("#tournament-contact-form");
const openContactButton = document.querySelector("[data-open-contact]");
const closeContactButtons = document.querySelectorAll("[data-close-contact]");

openContactButton?.addEventListener("click", () => contactModal.showModal());

closeContactButtons.forEach((button) => {
  button.addEventListener("click", () => contactModal.close());
});

contactModal?.addEventListener("click", (event) => {
  if (event.target === contactModal) contactModal.close();
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const topic = data.get("topic");
  const subject = `Golf Tournament Inquiry: ${topic}`;
  const body = [
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Organization: ${data.get("organization") || "Not provided"}`,
    `Phone: ${data.get("phone") || "Not provided"}`,
    `Topic: ${topic}`,
    "",
    "Message:",
    data.get("message"),
  ].join("\n");

  window.location.href = `mailto:stevenmc@levelup4cure.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  contactModal.close();
});
