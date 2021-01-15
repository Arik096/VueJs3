var app = Vue.createApp({
    data(){
        return{
            msg : "welcome Arik",
            info: {
                name: "Arik Md Isthiaque",
                age: "25",
                job: "software engineer",
                link: "https://vuejs.org/",
                html: "<h1>Haha</h1>"
            }
        };
    }
});

app.mount("#app");