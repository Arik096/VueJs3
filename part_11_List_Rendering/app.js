var app = Vue.createApp({
  data() {
    return {
      skills: [
        { name: "html", exp: 3 },
        { name: "css", exp: 3 },
        { name: "js", exp: 1 }
      ],
      newSkill: {}
    };
  },
  methods: {
    addSkill() {
      this.skills.push({name: this.newSkill, exp: 0});
      this.newSkill = {};
    },
    revomeListItem(i) {
      this.skills.splice(i, 1);
    },
  },
});

app.mount("#app");
