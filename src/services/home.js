import request from '../utils/rxios';

let reqApi = '/api/v0/movieIndex'

//获取列表
export async function home() {
  return request('GET',reqApi);
}