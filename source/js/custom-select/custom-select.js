export const getCustomSelect = () => {
  const canvas = document.querySelector('body');
  const selects = document.querySelectorAll('.custom-select');
  const location = document.querySelector('#location-select');
  const participants = document.querySelector('#participants-select');
  const PLACEHOLDER_LOCATION = 'Локация для тура';
  const PLACEHOLDER_PARTICIPANTS = 'Участники'
  let currentSelect;
  let newOption;
  let placeholder;
  // class CustomSelect {
  //   constructor(select, option) {
  //     this.select = select;
  //     this.option = option;
  //   }
  // }
  const creatOptions = () => {
    for (let i = 0; i < selects.length; i++) {
      const creatNewOption = () => {
        newOption = document.createElement('option');
        newOption.textContent = placeholder;
        newOption.classList.add('placeholder');
        selects[i].prepend(newOption);
        newOption.selected = true;
      }
      if (selects[i] === location) {
        placeholder = PLACEHOLDER_LOCATION;
        creatNewOption();
      } else if (selects[i] === participants) {
        placeholder = PLACEHOLDER_PARTICIPANTS;
        creatNewOption();
      }
    }
  };
  creatOptions();

  const removeCurrentOption = () => {
    for (let i = 0; i < selects.length; i++) {
      if (event.target === selects[i]) {
        currentSelect = selects[i];
        if (currentSelect[0].classList.contains('placeholder')) {
          currentSelect[0].remove();
        }
        break;
      }
    }
  }
  canvas.addEventListener('pointerdown', removeCurrentOption);
}
