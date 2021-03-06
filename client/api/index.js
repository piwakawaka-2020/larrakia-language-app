import request from 'superagent'

const baseUrl = '/api/v1/words'

export function getWords() {
  return request.get(baseUrl)
    .then(res => {
      return res.body
    })
}

export function getWordById(id) {
  return request.get(`${baseUrl}/id/${id}`)
    .then(res => {
      return res.body
    })
}

export function getWordsByCategory(category) {
  return request.get(`${baseUrl}/${category}`)
    .then(res => {
      return res.body
    })
}
