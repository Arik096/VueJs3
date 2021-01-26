var app = Vue.createApp({
    data() {
        return {
            SeatList: {
                A1: "",
                A2: "booked",
                A3: "booked",
                A4: "",
                B1: "",
                B2: "",
                B3: "",
                B4: "",
                C1: "",
                C2: "",
                C3: "",
                C4: "",
                D1: "sold",
                D2: "sold",
                D3: "sold",
                D4: "",
                E1: "",
                E2: "",
                E3: "",
                E4: "",
                E1: "",
                E2: "",
                E3: "booked",
                E4: "sold",
                F1: "",
                F2: "",
                F3: "",
                F4: "sold",
            },
            seatBGColor: {
                A1: "",
                A2: "",
                A3: "",
                A4: "",
                B1: "",
                B2: "",
                B3: "",
                B4: "",
                C1: "",
                C2: "",
                C3: "",
                C4: "",
                D1: "",
                D2: "",
                D3: "",
                D4: "",
                E1: "",
                E2: "",
                E3: "",
                E4: "",
                E1: "",
                E2: "",
                E3: "",
                E4: "",
                F1: "",
                F2: "",
                F3: "",
                F4: "",
            },
            SeatCost: {
                A1: 500,
                A2: 500,
                A3: 500,
                A4: 500,
                B1: 500,
                B2: 500,
                B3: 500,
                B4: 500,
                C1: 500,
                C2: 500,
                C3: 500,
                C4: 500,
                D1: 500,
                D2: 500,
                D3: 500,
                D4: 500,
                E1: 450,
                E2: 450,
                E3: 450,
                E4: 450,
                E1: 450,
                E2: 450,
                E3: 450,
                E4: 450,
                F1: 450,
                F2: 450,
                F3: 450,
                F4: 450,
            },
            SelectedSeat: 0,
            SelectedSeatCost: [],
            totalCost: 0,
            voucharCode: "",
            vouchars: [
                {
                    name: "100TAKAOFF",
                    value: 100
                },
                {
                    name: "200TAKAOFF",
                    value: 200
                },
                {
                    name: "300TAKAOFF",
                    value: 300
                },
                {
                    name: "400TAKAOFF",
                    value: 400
                },
            ]
        };
    },

    methods: {
        checkAndSelect(event) {
            if (this.SeatList[event.target.id] == "booked") {
                alert("Ticket Booked");
            } else if (this.SeatList[event.target.id] == "sold") {
                alert("Ticket Sold");
            } else if (
                this.SeatList[event.target.id] == "" &&
                this.SelectedSeat < 3
            ) {
                this.SeatList[event.target.id] = "selected";
                this.seatBGColor[event.target.id] = "#08F630";
                this.SelectedSeat++;
                let temp = {};
                temp.seat = event.target.id;
                temp.cost = this.SeatCost[event.target.id];
                this.totalCost = this.totalCost + this.SeatCost[event.target.id];
                this.SelectedSeatCost.push(temp);
            } else if ((this.SelectedSeat = 3)) {
                alert("Maximum 3 seat can be selected");
            }
        },
    },

    computed: {},

    watch: {
        voucharCode(newValue, oldValue){
            if(newValue.length == 10){
                for(code in vouchars){
                    if(newValue == code.name){
                        console.log("ok");
                    }
                }
            }
            else if(newValue.length>10){
                alert("Invalid Code");

                this.voucharCode = oldValue;
            }
        }
    },

    mounted() {
        for (key in this.SeatList) {
            if (this.SeatList[key] === "booked") {
                this.seatBGColor[key] = "#868383";
            } else if (this.SeatList[key] === "selected") {
                this.seatBGColor[key] = "#08F630";
            } else if (this.SeatList[key] === "sold") {
                this.seatBGColor[key] = "#FF0000";
            } else {
                this.seatBGColor[key] = "#FFFFFF";
            }
        }
    },
});

app.mount("#main-section");
