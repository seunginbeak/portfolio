import { createStore } from 'vuex';
import SwiperModule from "./mudules/Swiper_text_list";
import PortfolioListModule from "./mudules/Portfolio_list";
import SnsModule from "./mudules/sns";


export default createStore({
  modules: {
    SwiperModule,
    PortfolioListModule,
    SnsModule
  }
})
