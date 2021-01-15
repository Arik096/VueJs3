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
        plus(n){
            this.count = this.count + n;
        },
        minus(n){
            if(this.count > 0){
                this.count--;
                if(this.count < 0){
                    this.count = 0;
                }
            }
        },
        test(ev){
            console.log("test");
            console.log(ev);
        }
    }
});

app.mount("#app");