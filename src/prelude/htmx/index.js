function htmx (e) {
  e.target.matches('[action]') && (
    fetch(e.target.getAttribute('action'))
      .then(response => response.text())
      .then(text => (e.target.innerHTML = text))
  )
}

window.addEventListener('click', htmx)
