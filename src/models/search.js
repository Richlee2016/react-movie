import { routerRedux } from "dva/router";
import * as service from '../services/search'
import { parse } from 'qs'
export default {
  namespace: "search",
  state: {
    search: []
  },
  reducers: {
    setSearch(state, { payload: search }) {
      return {
        ...state,
        search
      };
    }
  },
  effects: {
    *getSearch({payload:{s,p}}, { put, call }) {
      console.log(s,p,'search is working');
      // console.log(payload);
      // let search = yield call(service.list,payload);
      // // 获取 search 查询数据
      // yield put({
      //   type: "setSearch",
      //   payload: search
      // });
      // // 跳转 search 页
      // const {s,p} = p
      // yield put(
      //   routerRedux.push({
      //     pathname: "/search",
      //     query:payload
      //   })
      // );
    }
  },
  subscriptions: {
    init({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === "/search") {
          dispatch({
            type: "getSearch",
            payload:parse(location.search.substr(1))
          });
        }
      });
    }
  }
};
