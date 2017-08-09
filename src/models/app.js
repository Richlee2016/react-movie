import { routerRedux } from "dva/router";
export default {
  namespace: "app",
  state: {
    // 菜单栏 nav
    menus: [
      { name: "首页", href: "home" },
      { name: "电影", href: "movies" },
      { name: "电视剧", href: "teleplays" },
      { name: "动画片", href: "cartoons" },
      { name: "资讯", href: "news" }
    ],
    //菜单栏 登录
    logins: [
      { name: "weixin", handle: 1 },
      { name: "QQ", handle: 2 },
      { name: "liuyan", handle: 3 }
    ],
    // 赛选菜单栏
    navs: [
      { name: "动作片", type: 1 },
      { name: "喜剧片", type: 1 },
      { name: "爱情片", type: 1 },
      { name: "科幻片", type: 1 },
      { name: "恐怖片", type: 1 },
      { name: "剧情片", type: 1 },
      { name: "战争片", type: 1 },
      { name: "国产剧", type: 2 },
      { name: "TVB剧", type: 2 },
      { name: "欧美剧", type: 2 },
      { name: "日本剧", type: 2 },
      { name: "韩国剧", type: 2 }
    ]
  },
  reducers: {},
  effects: {},
  subscriptions: {
    init({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === "/") {
          dispatch(
            routerRedux.push({
              pathname: "/home"
            })
          );
        }
      });
    }
  }
};
