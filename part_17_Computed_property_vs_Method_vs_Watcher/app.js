var app = Vue.createApp({
  data() {
    return {
      firstName: "",
      lastName: "",
      fullName: "",
    };
  },

  computed: {
    // fullname() {
    //   return this.firstName + " " + this.lastName;
    // },
  },

  methods: {
    // fullname() {
    //   return this.firstName + " " + this.lastName;
    // },
  },

  watch: {
    firstName(newValue){
      this.fullName = newValue + " " + this.lastName;
    },
    lastName(newValue){
      this.fullName = this.firstName + " " + newValue;
    }
  },
});

app.mount("#app");
