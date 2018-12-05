import api from '../api'
import http from '../fetch'

export function sendCode(key, params) {
  return http.post(api.sendCode + `?token=${key}`, params)
}

export function token(params) {
  return http.post(api.token, params)
}

export function sign(key, params) {
  return http.post(api.user + `?token=${key}`, params)
}

export function info() {
  return http.get(api.info)
}


export function list() {
  return http.get(api.list)
}

export function setInfo(params) {
  return http.post(api.setInfo, params)
}