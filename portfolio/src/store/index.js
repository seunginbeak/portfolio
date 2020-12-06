import { createStore } from 'vuex';
import SwiperModule from "./modules/Swiper_text_list";
import PortfolioListModule from "./modules/Portfolio_list";
import SnsModule from "./modules/sns";
import MailModule from "./modules/mail";
import WorkHeaderModule from "./modules/Work_header";
import WorkMainModule from "./modules/Work_main";
import WorkSwiperModule from "./modules/Work_swiper";


export default createStore({
  modules: {
    SwiperModule,
    PortfolioListModule,
    SnsModule,
    MailModule,
    WorkHeaderModule,
    WorkMainModule,
    WorkSwiperModule
  }
})
