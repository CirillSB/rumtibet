import {
  PLACEHOLDER_LOCATION,
  PLACEHOLDER_DATE,
  PLACEHOLDER_PARTICIPANTS
} from './variables.js';
import {
  creatCustomAppearanceFields
} from './custom-appearance-fields';

export const initFormFields = () => {
  const canvas = document.querySelector('body');
  const usedElements = document.querySelectorAll('[data-placeholder]');
  const formFields = document.querySelectorAll('[data-form-field]');
  const location = document.querySelector('#location-select');
  const date = document.querySelector('#date-input');
  const participants = document.querySelector('#participants-select');
  const usedElementStyles = window.getComputedStyle(formFields[0]);
  let placeholder;

  const creatPlaceholders = () => {

    for (let i = 0; i < formFields.length; i++) {

      let placeholderText;
      placeholder = document.createElement('div');
      placeholder.classList.add('placeholder');
      placeholder.style.width = usedElementStyles.width;
      placeholder.style.height = usedElementStyles.height;
      placeholder.style.backgroundColor = usedElementStyles.backgroundColor;
      placeholder.style.paddingLeft = usedElementStyles.paddingLeft;
      placeholder.style.border = usedElementStyles.border;
      placeholder.style.borderRadius = usedElementStyles.borderRadius;
      placeholder.style.font = usedElementStyles.font;
      placeholder.style.color = usedElementStyles.color;
      placeholder.style.color = usedElementStyles.color;

      switch (formFields[i]) {
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
      usedElements[i].prepend(placeholder);
      formFields[i].style.opacity = '0';
    }
  };

  creatPlaceholders();

  const placeholders = document.querySelectorAll('.placeholder');

  const hidePlaceholder = () => {

    for (let i = 0; i < formFields.length; i++) {
      if (event.target === formFields[i]) {
        formFields[i].style.opacity = '1';
        placeholders[i].remove();
      }
    }
  };
  canvas.addEventListener('pointerdown', hidePlaceholder);
  creatCustomAppearanceFields();
  console.log('obj');
};
