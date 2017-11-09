import { request, config } from 'utils'

const { api } = config
const { resource } = api

export async function query (params) {
  return request({
    url: resource,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: resource.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: resource,
    method: 'delete',
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
