var app = Vue.createApp({
    data(){
        return{
            count: 0
        };
    },
    methods: {
        getCurrentTime(){
            let ct = new Date();
            return ct;
        },
        plus(){
            this.count++;
        },
        minus(){
            if(this.count > 0){
                this.count--;
            }
        }
    }
});

app.mount("#app");