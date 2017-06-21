var toggleAnimation = () => {
  var orbits = document.querySelectorAll('.orbit');
  orbits.forEach(orbit => orbit.classList.toggle('animate'));
};

var toggleOrbitShape = () => {
  var orbits = document.querySelectorAll('.orbit');
  orbits.forEach(orbit => orbit.classList.toggle('orbit-radius'));
};

// document.addEventListener("DOMContentLoaded", toggleOrbitShape);
