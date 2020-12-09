<template>
  <section class="container">
    <div class="work_cont">
      <div class="swiper"><WorkSwiperList :curren_index="curren_index" /></div>

      <div class="detail">
        <h2>Detail</h2>

        <dl class="detail_content">
          <dt>홈페이지:</dt>
          <dd>{{ WorkSwiper.name }}</dd>
          <dt>폰트:</dt>
          <dd>{{ WorkSwiper.font }}</dd>
          <dt>컬러:</dt>
          <dd>
            <ul>
              <li
                v-for="detailColor_all in datailColor_list"
                :key="detailColor_all.index"
                :style="{ backgroundColor: detailColor_all }"
              >
                <span> {{ detailColor_all }} </span>
              </li>
            </ul>
          </dd>
          <dt>주소:</dt>
          <dd>
            <a :href="WorkHeader.site_link">{{ WorkHeader.site_link }}</a>
          </dd>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
import WorkSwiperList from "./card/work_swiper_list.vue";

export default {
  components: {
    WorkSwiperList,
  },
  props: {
    WorkSwiper: {
      type: Object,
    },
    WorkHeader: {
      type: Object,
    },
    PageId: {
      type: String,
    },
  },
  computed: {
    // router_id 를 가져온다. id: 0
    curren_index() {
      return this.PageId;
    },
    // work_detail_color 연결
    detailColor() {
      return this.$store.state.WorkSwiperModule.work_detail_color;
    },
    // 가져온 router_id값을 이용해 반복적인 컬러 생성
    datailColor_list() {
      return this.detailColor[this.PageId];
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/style.scss";

.container {
  .work_cont {
    // work detail
    .detail {
      padding: 80px 0;

      > h2 {
        font-size: $font-md2;
      }

      .detail_content {
        margin-top: 20px;
        // dt, dd 공용 style
        > dt,
        dd {
          height: 30px;
          font-size: $font-md;
          line-height: 30px;
        }
        // detail text title
        > dt {
          display: inline-block;
          width: 90px;
          font-weight: 900;
        }
        // detail text title end
        // detail text content
        > dd {
          margin-left: 90px;
          margin-top: -30px;
          font-size: $font-sm;
          font-weight: 900;
          color: $Colorgray;

          // detail 색상
          > ul {
            > li {
              position: relative;
              display: inline-block;
              width: 16px;
              height: 16px;
              margin: 7px 10px 0 0;
              border: 1px solid $Colorgray;
              border-radius: 100%;

              span {
                @include setPosition(absolute, 50%, auto, auto, 50%, 1005);
                transform: translate(-50%, 0);
                display: none;
                padding: 0 10px;
                border-radius: 5px;
                text-align: center;
                color: $ColorWhite;
                background-color: $ColorBlack2;
              }

              &:hover {
                > span {
                  display: block;
                }
              }
            }
          }
          // detail 색상 end
        }
        // detail text content end
      }
    }
    // work detail end
  }
}
// 모바일
@media screen and (max-width: 767px) {
  .container {
    .work_cont {
      .detail {
        padding: 20px 0;

        > h2 {
          font-size: $font-md;
        }

        .detail_content {
          margin-top: 10px;
          // dt, dd 공용 style
          > dt,
          dd {
            height: 25px;
            font-size: $font-sm;
            line-height: 25px;
          }
          // detail text title
          > dt {
            width: 60px;
          }
          // detail text title end
          // detail text content
          > dd {
            margin-left: 60px;
            margin-top: -25px;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: $font-sm;

            // detail 색상
            > ul {
              > li {
                width: 12px;
                height: 12px;
              }
            }
            // detail 색상 end
          }
          // detail text content end
        }
      }
      // work detail end
    }
  }
}
</style>