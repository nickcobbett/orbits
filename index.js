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
  var slider = document.getElementById('speed');

  var orbits = document.querySelectorAll('.orbit');
  var prevSliderVal = 0;
  var prevSpeeds = [];
  orbits.forEach(orbit => prevSpeeds.push(parseFloat(window.getComputedStyle(orbit).animationDuration)));

  var adjustOrbitSpeed = (e) => {
    var sliderVal = adjustSliderVal(e.target.value);
    var orbits = document.querySelectorAll('.orbit');
    orbits.forEach((orbit, i) => {
      var prevSpeed = prevSpeeds[i];
      var newSpeed = prevSpeed + (prevSpeed * sliderVal / 50);
      orbit.style.animationDuration = newSpeed.toString() + 's';
    });
  }


  slider.addEventListener('input', adjustOrbitSpeed);

})
