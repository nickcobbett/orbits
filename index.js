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
  var prevSliderVals = [0, 0, 0, 0, 0];

  var adjustOrbitSpeed = (e) => {
    var sliderVal = adjustSliderVal(e.target.value);
    var orbits = document.querySelectorAll('.orbit');
    orbits.forEach((orbit, i) => {
      console.log(orbit)
      var style = window.getComputedStyle(orbit);
      var origSpeed = parseFloat(style.animationDuration);
      console.log('origSpeed', origSpeed);
      // console.log('adjustSliderVal', sliderVal);
      // console.log(sliderVal - prevSliderVal)
      var newSpeed = origSpeed + (origSpeed * ((sliderVal - prevSliderVals[i]) / 10));
      // console.log(newSpeed);

      orbit.style.animationDuration = newSpeed.toString() + 's';
      // console.log(orbit.style.animationDuration)
      prevSliderVals[i] = sliderVal;
    });
  }


  slider.addEventListener('input', adjustOrbitSpeed);

})
