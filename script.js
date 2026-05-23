document.addEventListener("DOMContentLoaded", function(){

  const experienceItems =
  document.querySelectorAll('.experience-item');

  experienceItems.forEach(item => {

    item.addEventListener('click', () => {

      item.classList.toggle('active');

    });

  });

});
