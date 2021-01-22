var app = Vue.createApp({
  data() {
    return {
      show: false,
      skills: [
        { name: "js", exp: 12 },
        { name: "css", exp: 22 },
        { name: "html", exp: 32 },
        { name: "sass", exp: 42 },
        { name: "c", exp: 25 },
        { name: "c++", exp: 23 },
        { name: "java", exp: 22 },
        { name: "py", exp: 23 },
        { name: "hk", exp: 22 },
        { name: "tf", exp: 21 },
      ],
    };
  },
  methods: {
    toggle(){
      this.show = !this.show;
    }
  },
});

app.mount("#app");
