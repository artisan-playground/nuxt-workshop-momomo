import axios from 'axios'

let apiInstance = {
  api: null,
  context: null,
}

export const createInstance = (context) => {
  const { store } = context
  apiInstance.context = context
  const instance = axios.create({
    baseURL: apiConfig.ENDPOINT[process.env.ENDPOINT_MODE],
  })
  instance.interceptors.request.use(() => {})
  instance.interceptors.response.use(
    (response) => {
      // do someting when get response and return it
      store.commit('loading/end')
      return response
    },
    (error) => {
      // do someting when error occurs
      store.commit('loading/end')
      return Promise.reject(error.response)
    }
  )
  apiInstance.api = instance
}
export default apiInstance
