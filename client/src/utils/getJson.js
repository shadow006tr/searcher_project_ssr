import axios from 'axios'

const getJson = async (setter, url) => {
  try {
    const response = await axios.get(url)
    setter(response.data)
  } catch (error) {
    console.log(`error: ${error}`)
  }
}

export default getJson
