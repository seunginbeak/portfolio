export default {
  state: {
    mail_form_list: [
      {
        title: "Your name",
        type: "text",
        name: "name",
        placeholder: "성함 또는 회사명을 남겨주세요",
        id: "0",
        invalid_text: "이름을 입력해주세요",
        show: true
      },
      {
        title: "Email address",
        type: "email",
        name: "email",
        placeholder: "이메일 주소를 남겨주세요",
        id: "1",
        invalid_text: "이메일 형식이 잘못되었습니다.",
        show: true
      },
      {
        title: "Phone number",
        type: "number",
        name: "phone",
        placeholder: "전화번호를 남겨주세요",
        id: "2",
        invalid_text: "전화번호 형식이 잘못되었습니다.",
        show: true
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}