  var toggleAnimation = () => {
    var orbits = document.querySelectorAll('.orbit');
    orbits.forEach(orbit => orbit.classList.toggle('animate'));
  };

  var toggleOrbitShape = () => {
    var orbits = document.querySelectorAll('.orbit');
    orbits.forEach(orbit => orbit.classList.toggle('orbit-radius'));
  };

  var adjustSliderVal = (val) => {
    if (val < 50) {
      return 1 - (50 - val);
    } else {
      return (val - 50);
    }
  };

$(function() {
  toggleAnimation();
  toggleOrbitShape();

  var orbits = document.querySelectorAll('.orbit');
  var origSpeeds = [];
  orbits.forEach(orbit => origSpeeds.push(parseFloat(window.getComputedStyle(orbit).animationDuration)));

  var adjustOrbitSpeed = (e) => {
    var sliderVal = adjustSliderVal(e.target.value);
    var orbits = document.querySelectorAll('.orbit');
    orbits.forEach((orbit, i) => {
      var origSpeed = origSpeeds[i];
      var newSpeed = origSpeed + (origSpeed * sliderVal / 50);
      orbit.style.animationDuration = newSpeed.toString() + 's';
    });
  }

  var slider = document.getElementById('speed');
  slider.addEventListener('input', adjustOrbitSpeed);

});
