import { api_navigation, api_new_top, api_nav, api_banner, api_index_hot, api_index_environment, api_news_list, api_course_id_list } from '../ApiManage/index';
import qs from 'qs'
// 兼容 Axios 在不同协议的不同表现
const getResData = response => response.status ? response.data : response

// 异步
export const actions = {
  nuxtServerInit(store, { params, route, req }) {
    const AppDataList = [
      store.dispatch('LoadHeaders'),
      store.dispatch('LoadScrollNews'),
      store.dispatch('LoadIndexNav'),
      store.dispatch('LoadIndexBanner'),
      store.dispatch('LoadIndexHotList'),
      store.dispatch('LoadIndexEnvironment'),
      store.dispatch('LoadNews'),
      store.dispatch('LoadSing'),
      store.dispatch('LoadDance'),

    ];
    return Promise.all(AppDataList);
  },
  // 获取头部导航数据
  LoadHeaders({ commit }) {
    return this.$axios.get(api_navigation()).then(response => {
      commit('options/SUCCESS_DATA_HEADER_LIST', getResData(response))
    }, err => {
      // pass...
    })
  },
  // 获取滚动新闻
  LoadScrollNews({ commit }) {
    return this.$axios.get(`${api_new_top()}&num=3`).then(response => {
      commit('options/SUCCESS_DATA_SUMMARY_NEWS', getResData(response))
    })
  },
  // 获取首页四巨头
  // 2 3 4 5
  LoadIndexNav({ commit }) {
    return this.$axios.post(api_nav(), qs.stringify({ str: '2,3,4,5' })).then(response => {
      commit('options/SUCCESS_DATA_INDEX_NAV', getResData(response))
    })
  },
  // 首页banner
  LoadIndexBanner({ commit }) {
    return this.$axios.post(api_banner(), qs.stringify({ type: '1' })).then(response => {
      commit('options/SUCCESS_DATA_INDEX_BANNER', getResData(response))
    })
  },
  // 首页热门课程
  LoadIndexHotList({ commit }) {
    return this.$axios.post(api_index_hot(), qs.stringify({ h: 1, t: 1 })).then(response => {
      commit('options/SUCCESS_DATA_INDEX_HOT_LIST', getResData(response))
    })
  },
  // 首页校区环境
  LoadIndexEnvironment({ commit }) {
    return this.$axios.post(api_index_environment(), qs.stringify({ type: '1' })).then(response => {
      commit('options/SUCCESS_DATA_INDEX_ENVIRONMENT', getResData(response))
    })
  },
  // 
  LoadNews({ commit }, page) {
    return this.$axios.get(`${api_news_list()}`).then(response => {
      commit('options/SUCCESS_DATA_NEWS', getResData(response))
    })
  },
  // 声乐培训
  LoadSing({ commit }) {
    return this.$axios.post(api_course_id_list(), qs.stringify({ id: 2 })).then(response => {
      commit('options/SUCCESS_DATA_SING', getResData(response))
    })
  },
  // 舞蹈培训
  LoadDance({ commit }) {
    return this.$axios.post(api_course_id_list(), qs.stringify({ id: 4 })).then(response => {
      commit('options/SUCCESS_DATA_DANCE', getResData(response))
    })
  }


}
