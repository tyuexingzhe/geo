import { request, config } from 'utils'

const { api } = config
const { models } = api

export async function query (params) {
  return request({
    url: models,
    method: 'get',
    data: params,
  })
}
