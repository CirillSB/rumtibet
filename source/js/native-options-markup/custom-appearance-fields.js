import {
  width,
  height,
} from './variables';

export const creatCustomAppearanceFields = () => {

  const customFields = document.querySelectorAll('[data-custom-fields]');

  let customIcon;
  customFields.forEach((e) => {
    e.classList.add('custom-appearance');
    customIcon = document.createElement('span');
    // customIcon.classList.add('custom-appearance__icon');
    // customIcon.style.backgroundImage = `url("../img/background-desktop@1x.jpg")`;
    e.prepend(customIcon);
  });

  const svgSize = {
    width: `width: '${width}'`,
    height: height,
  }
  const iconAddress = '../img/sprite.svg';
  const svgIcons = {
  	arrowDown: 'arrow-down',
  	star: 'star',
  }
  const useAddress = 'xlink:href=' + `"${iconAddress}#${svgIcons.arrowDown}"`;
  const template = document.querySelector('#custom-icon');
  const customIconImage = template.content.cloneNode(true);
  const svg = customIconImage.querySelector('svg');
  const use = customIconImage.querySelector('use');
  svg.classList.add('custom-appearance__icon')
  // svg.prepend(svgSize.width);
  use.append(useAddress);

  customIcon.append(customIconImage);
  // console.log(use);
};


