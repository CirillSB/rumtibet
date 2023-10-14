import {
  PLACEHOLDER_LOCATION,
  PLACEHOLDER_DATE,
  PLACEHOLDER_PARTICIPANTS
} from './variables';

export const setCustomAppearanceSelectFields = () => {
  const canvas = document.querySelector('body');
  const shellContents = document.querySelectorAll('[data-shell-contents]');
  shellContents.forEach((e) => {
    let shellField;
    e.style.opacity = 0;
    e.classList.add('custom-appearance');
    shellField = document.createElement('div');
    shellField.classList.add('shell-field');
    e.before(shellField);
    shellField.prepend(e);
  });

  const creatPlaceholders = () => {
    const location = document.querySelector('#location-select');
    const date = document.querySelector('#date-input');
    const participants = document.querySelector('#participants-select');
    const originalProperties = shellContents[0];
    let shellField = document.querySelectorAll('.shell-field');
    let placeholder;
    for (let i = 0; i < shellField.length; i++) {

      let placeholderText;
      placeholder = document.createElement('div');
      placeholder.classList.add('placeholder');
      const placeholderStyles = window.getComputedStyle(originalProperties);
      placeholder.style.width = placeholderStyles.width;
      placeholder.style.height = placeholderStyles.height;
      placeholder.style.backgroundColor = placeholderStyles.backgroundColor;
      placeholder.style.paddingLeft = placeholderStyles.paddingLeft;
      placeholder.style.border = placeholderStyles.border;
      placeholder.style.borderRadius = placeholderStyles.borderRadius;
      placeholder.style.font = placeholderStyles.font;
      placeholder.style.color = placeholderStyles.color;

      switch (shellContents[i]) {
        case location:
          placeholderText = PLACEHOLDER_LOCATION;
          break;
        case date:
          placeholderText = PLACEHOLDER_DATE;
          break;
        case participants:
          placeholderText = PLACEHOLDER_PARTICIPANTS;
          break;
      }

      placeholder.textContent = placeholderText;
      shellField[i].prepend(placeholder);
    }
  };
  creatPlaceholders();

  const hidePlaceholder = () => {
    const placeholders = document.querySelectorAll('.placeholder');

    for (let i = 0; i < placeholders.length; i++) {

      if (event.target === shellContents[i]) {
        shellContents[i].style.opacity = 1;
        placeholders[i].style.display = 'none';
        break;
      }
    }
  };
  canvas.addEventListener('pointerdown', hidePlaceholder);
};
