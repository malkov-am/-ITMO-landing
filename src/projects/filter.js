const radioButtons = document.querySelectorAll(".projects__radio-btn");
const projectCards = document.querySelectorAll(".projects__card");
console.log(projectCards);
radioButtons.forEach((radio) => {
  radio.addEventListener("change", filterHandler);
});
function filterHandler(event) {
  // console.log(event.target);
  console.log(event.target.id);
  const filterId = event.target.id;
  projectCards.forEach((card) => {
    // card.classList.remove(".projects__card_hidden");
    // console.log(card.classList.contains(`${event.target.id}`));
    isToShow =
      filterId == "filter-all" ||
      !(card.classList.contains(`${event.target.id}`));
    if (isToShow) {
      console.log('show');
      card.classList.remove("projects__card_hidden");
    } else {
      console.log('hidden');
      card.classList.add("projects__card_hidden");
    }
  });
}
