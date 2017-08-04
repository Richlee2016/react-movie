import request from '../utils/rxios';

let reqApi = '/api/v0/movies'

//获取列表
export async function list(payload) {
  return getAxios('GET',reqApi,payload);
}