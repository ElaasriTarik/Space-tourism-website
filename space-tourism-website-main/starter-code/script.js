
const hamburger = document.querySelector('.menuLogo')
const nav_elements = document.querySelector('.nav_elements');
/// Menu toggle function ...
hamburger.addEventListener('click', () => {
  const visibility = nav_elements.getAttribute('data-visible');
  console.log(visibility);
  if (visibility === 'false') {
    nav_elements.setAttribute("data-visible", true);
    hamburger.setAttribute("aria-expanded", true);
  }
  if (visibility === 'true') {
    nav_elements.setAttribute("data-visible", false);
    hamburger.setAttribute("aria-expanded", false);
  }
});
