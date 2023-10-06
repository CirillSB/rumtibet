export const initPlaceholders = () => {
  const usedElements = document.querySelectorAll('[data-placeholder]');
  const sourceStyles = document.querySelectorAll('[data-source-element]');
  const location = document.querySelector('#location-select');
  const date = document.querySelector('#date-input');
  const participants = document.querySelector('#participants-select');
  const usedElementStyles = window.getComputedStyle(sourceStyles[0]);
  const PLACEHOLDER_LOCATION = 'Локация для тура';
  const PLACEHOLDER_DATE = 'Дата похода';
  const PLACEHOLDER_PARTICIPANTS = 'Участники';

  for (let i = 0; i < sourceStyles.length; i++) {
    let placeholder;
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
    switch (sourceStyles[i]) {
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
    sourceStyles[i].style.opacity = '0';
  }
};
