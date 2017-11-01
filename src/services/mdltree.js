import { request, config } from 'utils'

const { api } = config
const { mdl } = api

export async function query (params) {
  return request({
    url: mdl,
    method: 'get',
    data: params,
  })
}
