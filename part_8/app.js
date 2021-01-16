var app = Vue.createApp({
    data(){
        return{
            name: ""
        };
    },
    methods: {
        handleKeyUp(ev){
            this.name = ev.target.value;
        },
        handleform(formdata){
            console.log(formdata);
        },
        cardClick(){
            console.log("ok");
        },
        viewbutton(e){
            console.log("ok view");
        }
    }
});

app.mount("#app");