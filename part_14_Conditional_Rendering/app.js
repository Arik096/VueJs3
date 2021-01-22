var app = Vue.createApp({
  data() {
    return {
      aboutMe: {
        name: "arik",
        job: "coder",
        skill: "php"
      },
      skills: [
        { name: "html", exp: 5 },
        { name: "css", exp: 7 },
        { name: "sass", exp: 8 }
      ]
    };
  },
  methods: {}
});

app.mount("#app");
