var app = Vue.createApp({
    data(){
        return{
            info: {
                name: "Arik Md Isthiaque",
                git: "https://github.com/",
                fb: "arikmdisthiaque",
                html: '<p>get connected to <a target="_blank" href="info.git">GitHub</a></p>',
            }
        };
    }
});

app.mount("#app");