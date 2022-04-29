let areYouReallySure = false
function areYouSure() {
  if (allowPrompt) {
    if (!areYouReallySure && true) {
      areYouReallySure = true
      var confMessage = 'The robot wizard is certain they would never'
      return confMessage
    }
  } else {
    allowPrompt = true
  }
}

let allowPrompt = true
window.onbeforeunload = areYouSure
