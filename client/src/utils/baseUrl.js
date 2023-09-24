const baseUrl = () => {
  let result = ''
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    result += 'http://localhost:3001/'
  }
  return result + 'api/articles/'
}

export default baseUrl()
