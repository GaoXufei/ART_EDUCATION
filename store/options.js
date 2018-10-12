// 数据
export const state = () => ({
  headers: [],
  summarys: [],
  indexNavs: [],
  indexBanners: [],
  indexHotList: [],
  indexEnvironment: [],
  newList: [],
  sings: [],
  dances: []
});

export const mutations = {
  // 头部导航
  SUCCESS_DATA_HEADER_LIST(state, action) {
    state.headers = action.data
  },
  // 滚动新闻
  SUCCESS_DATA_SUMMARY_NEWS(state, action) {
    state.summarys = action.data
  },
  // 获取顶部四巨头
  SUCCESS_DATA_INDEX_NAV(state, action) {
    state.indexNavs = action.data
  },
  // 首页banner
  SUCCESS_DATA_INDEX_BANNER(state, action) {
    state.indexBanners = action.data
  },
  // 首页热门课程
  SUCCESS_DATA_INDEX_HOT_LIST(state, action) {
    state.indexHotList = action.data
  },
  // 首页校区环境
  SUCCESS_DATA_INDEX_ENVIRONMENT(state, action) {
    state.indexEnvironment = action.data
  },
  // 新闻列表
  SUCCESS_DATA_NEWS(state, action) {
    state.newList = action.data;
  },
  // 声乐
  SUCCESS_DATA_SING(state, action) {
    state.sings = action.data
  },
  // 舞蹈
  SUCCESS_DATA_DANCE(state, action) {
    state.dances = action.data
  }

};
