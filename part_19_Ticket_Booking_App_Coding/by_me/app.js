var app = Vue.createApp({
    data(){
        return {
            SeatList: {
                A1: "booked", A2: "", A3: "", A4: "",
                B1: "", B2: "", B3: "", B4: "",
                C1: "", C2: "", C3: "", C4: "",
                D1: "", D2: "", D3: "", D4: "",
                E1: "", E2: "", E3: "", E4: "",
                E1: "", E2: "", E3: "", E4: ""
                
            },
            seatBGColor: "",
        };
    },

    methods: {},

    computed: {},

    watch: {},

    mounted(){
        for(key in this.SeatList){
            if(this.SeatList[key] == "booked"){
                this.seatBGColor = "#868383";
            }
            else{
                this.seatBGColor = "#FFFFFF";
            }
        }
    }

});

app.mount("#main-section");