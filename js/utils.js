const error = (e) => {
  if (document.querySelector('.recipes').innerHTML === '') {
    document.querySelector('.messBlock').innerHTML = `
    <p class="messBlock messError mr-4" onclick="closeMess">Aucune recette ne correspond à votre critère… 
    vous pouvez chercher « tarte aux pommes », « poisson », etc...
    </p>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-x-circle Xmess"
    onclick="closeMessError()"
    viewBox="0 0 16 16"
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    ` 
    closeMessError = () => {
      document.querySelector('.messBlock').innerHTML = '';
      e.target.value ='';
      main();
    }
    //crash when error apres premier filtre; 
  }
 
};

const selectRecipe = () => {
  var recips = document.querySelectorAll('.recipe');
  var tags = document.querySelectorAll('.tags.tag.txt');

  recips.forEach((recipe) => {
    recipe.addEventListener('click', function () {
      document.querySelector('.messBlock').innerHTML = 
      `<p class="messBlock messSelect mb-0">
        Vous avez sélectionnez la recette suivante :&nbsp;<span class=" messBlock messSelect recipeSelect "> ${this.querySelector('h3').textContent}&nbsp;</span>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-circle Xmess"
        onclick="closeMessSelect()"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </p>`
      if (tags.length > 0) {
        document.querySelector('#recipes').style.top='23rem';
      } else {
        document.querySelector('#recipes').style.top='20rem';
      }
    });
  });
};

const closeMessSelect = () => {
  var tags = document.querySelectorAll('.tags.tag.txt');

  document.querySelector('.messBlock').innerHTML = '';
  if (tags.length > 0) {
    document.querySelector('#recipes').style.top='22rem';
  } else {
    document.querySelector('#recipes').style.top='19rem';
  }

}


const changePlaceHolder = () => {
  const searchInputs = document.querySelectorAll('.inputSearch');
  const accordionButtons = document.querySelectorAll('#accordionSection button');

  const setPlaceholderText = (index, isExpanded) => {
    let placeholderText = '';
    if (isExpanded) {
     placeholderText = `Rechercher un ${searchInputs[index].placeholder.replace(/s$/, '').toLowerCase()}`;
    } else {
      switch (index) {
        case 0:
          placeholderText = 'Ingrédients';
          break;
        case 1:
          placeholderText = 'Appareils';
          break;
        case 2:
          placeholderText = 'Ustensiles';
          break;
        default:
          placeholderText = searchInputs[index].placeholder;
          break;
      }
    }
    searchInputs[index].placeholder = placeholderText;
  };
  accordionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      setPlaceholderText(index, isExpanded);
    });
  });
};



changePlaceHolder();


