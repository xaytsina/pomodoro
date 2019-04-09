const form = document.querySelector('form')

form.onsubmit = function logToConsole(e) {
  e.preventDefault()

  const input = e.target.querySelector('input')
  console.log('event: ', input)
}

form.onsubmit = startTimer
