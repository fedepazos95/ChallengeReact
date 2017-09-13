// Dependencies
import queryString from 'query-string'

// Config
import config from '../../config'

export function apiFetch(endpoint, options = {}, query = false) {
  let qs
  if (query) {
    qs = queryString.stringify(query)
  }

  const getPromise = async () => {
    try {
      const fetchOptions = apiOptions(options)
      const fetchEndpoint = apiEndpoint(endpoint, qs)
      const response = await fetch(fetchEndpoint, fetchOptions)
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject(new Error(response.statusText))
      }
    } catch (e) {
      throw e
    }
  }
  return getPromise()
}

export function apiEndpoint(endpoint, qs) {
  let query = ''

  if (qs) {
    query = `?${qs}`
  }
  return `${config.api.url}${endpoint}${query}`
}

export function apiOptions(options = {}) {
  const {
    method = 'GET',
    headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authentication': localStorage.getItem('id_token')
    },
    body = false
  } = options

  const newOptions = {
    method,
    headers
  }

  if (body) {
    newOptions.body = body
  }
  return newOptions
}
