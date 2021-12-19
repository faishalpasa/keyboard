export const generateId = (length = 5) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export function getItem(key) {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key) || ''
  }
  return null
}

export function setItem(key, data) {
  if (typeof window !== 'undefined') {
    return localStorage.setItem(key, data)
  }
  return null
}

export function removeItem(key) {
  if (typeof window !== 'undefined') {
    return localStorage.removeItem(key)
  }
  return null
}
