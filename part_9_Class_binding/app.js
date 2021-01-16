var app = Vue.createApp({
  data() {
    return {
        activeClass: "red"
    };
  },
  methods: {
      setClass(color){
          this.activeClass = color;
      }
  },
});

app.mount("#app");
