<template>
  <section class="mail">
    <div class="mail_content">
      <h2>Mail</h2>

      <form action="" autocomplete="off">
        <dl
          class="form_content"
          v-for="Mail_list_all in form_list"
          :key="Mail_list_all.id"
        >
          <dt class="form_title">{{ Mail_list_all.title }}</dt>
          <dd>
            <div class="form_text">
              <input
                :type="Mail_list_all.type"
                :name="Mail_list_all.name"
                :placeholder="Mail_list_all.placeholder"
                :id="Mail_list_all.id"
              />
            </div>
            <div class="invalid_text">{{ Mail_list_all.invalid_text }}</div>
          </dd>
        </dl>

        <dl class="form_content form_message">
          <dt class="form_title">Message</dt>
          <dd>
            <div class="form_text">
              <textarea
                name="textarea"
                rows="3"
                placeholder="메시지를 남겨주세요"
              >
              </textarea>
            </div>
            <div class="invalid_text">필수 입력 항목 입니다.</div>
          </dd>
        </dl>

        <button class="submit">SEND IT</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      type: {
        text: "text",
      },
    };
  },
  computed: {
    form_list() {
      return this.$store.state.MailModule.mail_form_list;
    },
  },
  methods: {
    click() {
      console.log(this.form_list.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.mail {
  position: relative;
  height: 100vh;
  background-color: $ColorBlack;

  .mail_content {
    @include setPosition(absolute, 50%, auto, auto, 50%, 1000);
    transform: translate(-50%, -50%);
    width: 500px;
    padding: 40px 20px;
    border-radius: 10px;
    background-color: $ColorWhite;

    h2 {
      padding: 5px 0;
      font-size: $font-lg;
      font-weight: 900;
      color: $Colorgray;
      border-bottom: 1px solid $ColorWhite3;
    }

    // form
    > form {
      // dl 요소의 css
      .form_content {
        @include setFlex(flex, center, center);
        margin-top: 20px;

        dt {
          width: 120px;
          height: 45px;
          padding: 5px 0;
          box-sizing: border-box;
          font-size: $font_md;
          font-weight: 900;
          color: $Colorgray;
        }

        dd {
          flex: 1;
          height: 45px;

          .form_text {
            padding: 5px 0;
            font-size: $font-sm;
            border-bottom: 1px solid $Colorgray;

            > input {
              width: 100%;
              outline: none;
              &:focus {
              }
            }
          }

          .invalid_text {
            margin-top: 3px;
            font-size: $font_sm;
            font-weight: bold;
            color: $ColorRed;
          }
        }
      }
      // dl 요소의 end

      // 마지막 textarea 요소
      .form_message {
        dt {
          height: 80px;
        }
        dd {
          height: 80px;

          textarea {
            width: 100%;
            resize: none;
          }
        }
      }
      // 마지막 textarea 요소 end
    }
    // form end

    .submit {
      margin: 10px 0;
      font-weight: 900;
      color: $Colorgray;

      &::after {
        content: " ";
        display: block;
        width: 100%;
        height: 2px;
        background-color: $Colorgray;
      }

      &:hover {
        &::after {
          width: 0;
          transition: 1s;
        }
      }
    }
  }
}
</style>