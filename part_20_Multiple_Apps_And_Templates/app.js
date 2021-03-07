var app1 = Vue.createApp({
  data() {
    return {
      input: "",
    };
  },

  computed: {},

  methods: {
    clear() {
      this.input = "";
    },
  },

  watch: {},

  template: `
      <br />
      <input type="text" v-model="input" />
      <button @click="clear()">clear</button>
      <p>name : {{input}}</p>
  `,
});

app1.mount("#app1");

var app2 = Vue.createApp({
  data() {
    return {
      msg: "welcome",
    };
  },

  template: "<h2>{{msg}}</h2>",

  computed: {},

  methods: {},

  watch: {},
});

app2.mount("#app2");


//test_line