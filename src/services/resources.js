import { request, config } from 'utils'

const { api } = config
const { resources } = api

export async function query (params) {
  return request({
    url: resources,
    method: 'get',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: resources,
    method: 'delete',
    data: params,
  })
}
