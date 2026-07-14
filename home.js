const housingModal = document.querySelector("#housing-modal");
const housingForm = document.querySelector("#housing-contact-form");
const openHousingButton = document.querySelector("[data-open-housing]");
const closeHousingButtons = document.querySelectorAll("[data-close-housing]");

openHousingButton?.addEventListener("click", () => housingModal.showModal());

closeHousingButtons.forEach((button) => {
  button.addEventListener("click", () => housingModal.close());
});

housingModal?.addEventListener("click", (event) => {
  if (event.target === housingModal) housingModal.close();
});

housingForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(housingForm);
  const subject = "Housing Nights Property Offer";
  const body = [
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Phone: ${data.get("phone")}`,
    `Property type: ${data.get("propertyType")}`,
    `Property address: ${data.get("address")}`,
    "Houston / Texas Medical Center proximity confirmed: Yes",
    `Number of nights offered: ${data.get("nights")}`,
    `Available dates: ${data.get("availability")}`,
    "",
    "Property details or questions:",
    data.get("message") || "None provided",
  ].join("\n");

  window.location.href = `mailto:stevenmc@levelup4cure.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  housingModal.close();
});
