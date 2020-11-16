<template>
  <section class="about">
    <h2>About</h2>
    <div class="about_content">
      <div class="about_img">
        <img src="@/assets/images/port_02.jpg" alt="" />
      </div>
      <div class="about_text">
        <h3 class="title">타이틀</h3>

        <p class="text_01">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          doloribus quam. Doloremque eius facilis ad ipsa! Recusandae, labore?
          Facere error adipisci at. Magnam rerum earum accusamus dolore,
          asperiores dignissimos recusandae.
        </p>

        <p class="text_02">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          doloribus quam. Doloremque eius facilis ad ipsa! Recusandae, labore?
          Facere error adipisci at. Magnam rerum earum accusamus dolore,
          asperiores dignissimos recusandae.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.about {
  padding: 80px 40px;
  box-sizing: border-box;
  background-color: $color02;

  .about_content {
    @include setFlex(flex, center, center);
    column-gap: 40px;

    .about_img {
      flex: 1;
    }

    .about_text {
      flex: 1;
      color: $color01;

      .title {
        font-size: 32px;
        font-weight: 900;
      }

      p {
        margin-top: 20px;
        font-size: 14px;
      }
    }
  }
}
</style>