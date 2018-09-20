import Vue from 'vue'
import {
  Swipe,
  SwipeItem,
  InfiniteScroll,
  Spinner,
} from 'mint-ui';

Vue.use(InfiniteScroll)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Spinner.name, Spinner);