export default {
  state: {
    mail_form_list: [
      {
        title: "Your name",
        type: "text",
        name: "name",
        placeholder: "성함 또는 회사명을 남겨주세요",
        id: "form_01",
        invalid_text: "필수 입력 항목 입니다."
      },
      {
        title: "Email address",
        type: "email",
        name: "email",
        placeholder: "이메일 주소를 남겨주세요",
        id: "form_02",
        invalid_text: "필수 입력 항목 입니다."
      },
      {
        title: "Phone number",
        type: "number",
        name: "phone",
        placeholder: "전화번호를 남겨주세요",
        id: "form_03",
        invalid_text: "필수 입력 항목 입니다."
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