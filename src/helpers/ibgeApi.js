const axios = require('axios').default

export const state = axios({
  method: 'get',
  url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
  responseType: 'json'
}).then(response =>{
  return response.data
})