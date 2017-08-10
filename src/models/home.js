import { routerRedux } from "dva/router";
import * as service from '../services/home'
import {splarr,cutarr} from '../utils'
export default {
  namespace: "home",
  state: {
    homeData:{}
  },
  reducers: {
    setData(state,{payload:homeData}){
      return {
        ...state,
        homeData
      }
    }
  },
  effects: {
    *getData(_,{put,call}){
        let {data} = yield call(service.home)
        let res = splarr(data);
        const result = {
          newest:res(14),
          movie:cutarr(res(90),10,9),
          teleplay:cutarr(res(70),10,7),
          cartoon:cutarr(res(40),10,4)
        }
        yield put({
          type:'setData',
          payload:result
        });
    }
  },
  subscriptions: {
    init({ dispatch}) {
      dispatch({
        type:'getData'
      });
    }
  }
};
