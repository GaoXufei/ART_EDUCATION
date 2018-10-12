/**
 * 接口管理
 * 接口 host 在 nuxt.config.js 里设置
 */

// 导航接口 GET
const api_navigation = () => '/api/index.php?m=api&c=index&a=navigation';
// banner POST
// 参数 type { string }
// 1 移动端
const api_banner = () => '/api/index.php?m=api&c=index&a=banner';
// nav四大天王 POST
// 参数 id { string }
// '2,3,4,5'
const api_nav = () => '/api/index.php?m=api&c=index&a=hotclass';
// 热门课程 POST
// 参数 h t { string }
// h=1 t=1
const api_index_hot = () => '/api/index.php?m=api&c=index&a=hottj';
// 校区环境 POST
// 参数 type { string }
// 1 移动端
const api_index_environment = () => '/api/index.php?m=api&c=index&a=ad';
// 栏目列表 POST 
// 参数 id { string } -> 栏目id 
// 2 sing 4 dance
const api_course_id_list = () => '/api/index.php?m=api&c=index&a=fourclass';
// 新闻列表 GET
// 参数 page
// page 页码
const api_news_list = () => '/api/index.php?m=api&c=index&a=newlist&id=8';
// 新闻内容 GET
// 参数 id
const api_new_id = () => '/api/index.php?m=api&c=index&a=contens';
// 滚动新闻 GET
const api_new_top = () => '/api/index.php?m=api&c=index&a=newsTop';

module.exports = {
  api_navigation,
  api_banner,
  api_nav,
  api_index_hot,
  api_index_environment,
  api_course_id_list,
  api_news_list,
  api_new_id,
  api_new_top
}