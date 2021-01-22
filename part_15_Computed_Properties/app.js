var app = Vue.createApp({
  data() {
    return {
      skills: [
        { name: "Html", Exp: 2 },
        { name: "css", Exp: 3 },
        { name: "sass", Exp: 1 },
        { name: "js", Exp: 15 },
        { name: "node", Exp: 12 },
        { name: "vue", Exp: 3 },
        { name: "python", Exp: 15 },
        { name: "java", Exp: 3 },
      ],
      review: ""
    };
  },
  computed: {
    totalCount1() {
      return this.skills.length;
    },
    expSkills(){
      let es = this.skills.filter(item=> {
        return item.Exp >=10;
      })
      return es;
    }
  },
  methods: {
    removeFromList(i) {
      this.skills.splice(i, 1);
    },
    totalCount() {
      return this.skills.length;
    },
  },
  watch: {
    review(newValue, oldValue){
      console.log(newValue, oldValue);
    }
  }
});

app.mount("#app");
