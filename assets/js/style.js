document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggleButton");
  const elementsToToggle = document.querySelectorAll(".elementToToggle");

  toggleButtons.forEach(function (toggleButton, index) {
    toggleButton.addEventListener("click", function () {
      elementsToToggle[index].classList.toggle("visible");
    });
  });

  document.addEventListener("click", function (event) {
    elementsToToggle.forEach(function (elementToToggle) {
      if (!event.target.closest(".elementToToggle") && !event.target.closest(".toggleButton")) {
        elementToToggle.classList.remove("visible");
      }
    });
  });
});


// Get all the navigation items with submenus
const navItems = document.querySelectorAll('.nav_list');

// Add click event listeners to each navigation item
navItems.forEach(navItem => {
  const navLink = navItem.querySelector('.nav_link');
  const submenu = navItem.querySelector('.submenu');

  navLink.addEventListener('click', (event) => {
    event.preventDefault();

    navItems.forEach(item => {
      if (item !== navItem) {
        item.classList.remove('active');
        const otherSubmenu = item.querySelector('.submenu');
        if (otherSubmenu) {
          otherSubmenu.classList.remove('expanded');
        }
      }
    });

    navItem.classList.toggle('active');

    submenu.classList.toggle('expanded');
  });
});


window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});