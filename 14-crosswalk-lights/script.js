// Download the following pictures of crosswalk lights.Create a webpage where the stoplight is on and the walk light is off.Imagine a pedestrian trying to cross the street.There should be a button they can push which switches the green light on and the red on - off.After five seconds, the walk light will automatically return back to off and the stoplight turns on again.Use setTimeout to implement this behavior.

const button = document.querySelector('.the-button')
const stopLight = document.querySelector('.stop-light')
const walkLight = document.querySelector('.walk-light')

button.addEventListener("click", () => {
  // flip lights to crossing ...
  stopLight.classList.toggle("stop-light_off")
  walkLight.classList.toggle("walk-light_on")

  setTimeout(() => {
    //  flip stoplight back to on
    stopLight.classList.toggle("stop-light_off")

    //  flip walklight back to off
    walkLight.classList.toggle("walk-light_on")
  }, 5000);  //  wait 5 seconds
  // stop the interval
  clearTimeout();
})