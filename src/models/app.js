import { routerRedux } from "dva/router";
export default {
  namespace: "app",
  state: {
    // 菜单栏 nav
    navs: [
      { name: "首页", href: 'home' },
      { name: "电影", href: 'movies' },
      { name: "电视剧", href: 'teleplays' },
      { name: "动画片", href: 'cartoons' },
      { name: "资讯", href: 'news' }
    ],
    //菜单栏 登录
    logins: [
      { name: "weixin", handle: 1 },
      { name: "QQ", handle: 2 },
      { name: "liuyan", handle: 3 }
    ]
  },
  reducers: {},
  effects: {},
  subscriptions: {
    init({ dispatch,history }) {
      return history.listen( ( { pathname, query } ) => {
           if(pathname === '/'){
              dispatch(routerRedux.push({
                pathname:'/home'
              }));
            };
        });
    }
  }
};
