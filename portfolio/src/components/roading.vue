<template>
  <div id="root">
    <div class="page" v-show="loading">
      <div class="page_center">
        <strong>LOADING</strong>
        <p>로딩바</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  el: '#root',
  data() {
    return {
      loading: true
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false
    }, 2000);
  }
}
</script>

<style>
/* 로딩 화면 */
    .page {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(0, 0, 0);
      z-index: 2000;
    }

    .page > .page_center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 35%;
      text-align: center;
    }

    .page>.page_center>strong {
      font-size: 24px;
      color: rgb(255, 255, 255);
    }

    .page>.page_center>p {
      width: 0;
      height: 3px;
      margin-top: 20px;
      color: transparent;
      background-color: rgb(255, 255, 255);
      animation: loading 2s ease infinite;
    }

    @keyframes loading {
      from {
        width: 0%;
      }

      to {
        width: 100%;
      }
    }
</style>