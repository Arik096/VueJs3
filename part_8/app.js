var app = Vue.createApp({
    data(){
        return{
            number: "",
            result: "",
            msg: ""
        };
    },
    methods: {
        getDouble(){
            this.result = this.number * 2;
        },
        getSquare(){
            this.result = this.number ** 2;
        },
        add10(){
            this.result = this.number + 10;
        },
        getReset(){
            this.result = "";
            this.number = "";
        }
    }
});

app.mount("#app");