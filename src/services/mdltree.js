import { request, config } from 'utils'

const { api } = config
const { mdltree,resources,resource } = api


export async function query (params) {
  return request({
    url: resources,
    method: 'get',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: resource,
    method: 'patch',
    data: params,
  })
}
