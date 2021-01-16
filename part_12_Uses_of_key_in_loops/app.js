var app = Vue.createApp({
  data() {
    return {
      skills: [
        { name: "html", exp: 3 },
        { name: "css", exp: 3 },
        { name: "js", exp: 1 }
      ],
      newSkill: {name: "", exp: 0}
    };
  },
  methods: {
    addSkill() {
      this.skills.push(this.newSkill);
      this.newSkill = {name: "", exp: 0};
    },
    revomeListItem(i) {
      this.skills.splice(i, 1);
    },
  },
});

app.mount("#app");
