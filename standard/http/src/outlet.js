function outlet (promise) {
  return promise
    .then(data => ({ data, error: null }))
    .catch(error => ({ data: null, error }))
}

export default outlet
