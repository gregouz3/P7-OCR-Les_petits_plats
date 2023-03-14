const error = (e) => {
  if (document.querySelector(".recipes").innerHTML === "") {
    document.querySelector(".messBlock").innerHTML = `
    <p class="messBlock messError mr-4" onclick="closeMess">Aucune recette ne correspond à votre critère… 
    vous pouvez chercher « tarte aux pommes », « poisson », etc...
    </p>
    `;
    e.target.value = "";
  }
};

const changeDisplayAccordion = () => {
  const accordionButtons = document.querySelectorAll(
    "#accordionSection button"
  );
  const accordionItemIngr = document.querySelector(".accordion-item--ingr");
  const accordionItemApp = document.querySelector(".accordion-item--app");
  const accordionItemUst = document.querySelector(".accordion-item--ust");

  const disableAccordionItem = (index, isExpanded) => {
    switch (index) {
      case 0:
        if (window.innerWidth < 1387) {
          accordionButtons[0].innerHTML = !isExpanded ? "Ingrédients" : "";
          accordionItemApp.style.display = !isExpanded ? "block" : "none";
          accordionItemUst.style.display = !isExpanded ? "block" : "none";
        }
        break;
      case 1:
        if (window.innerWidth < 988) {
          accordionButtons[1].innerHTML = !isExpanded ? "Appareils" : "";
          accordionItemIngr.style.display = !isExpanded ? "block" : "none";
          accordionItemUst.style.display = !isExpanded ? "block" : "none";
        }
        break;
      case 2:
        if (window.innerWidth < 1082) {
          accordionButtons[2].innerHTML = !isExpanded ? "Ustensiles" : "";

          accordionItemIngr.style.display = !isExpanded ? "block" : "none";
          accordionItemApp.style.display = !isExpanded ? "block" : "none";
        }
        break;
      default:
        break;
    }
  };
  accordionButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      disableAccordionItem(index, isExpanded);
    });
  });
};

changeDisplayAccordion();
