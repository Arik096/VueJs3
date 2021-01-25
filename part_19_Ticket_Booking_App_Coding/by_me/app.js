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
      SelectedSeat: 0,
    };
  },

  methods: {
    checkAndSelect(event){
        if(this.SeatList[event.target.id] == "booked"){
            alert("Ticket Booked");
        }
        else if (this.SeatList[event.target.id] == "sold") {
            alert("Ticket Sold");
        }
        else if (this.SeatList[event.target.id] == "" && this.SelectedSeat < 3) {
          this.SeatList[event.target.id] = "selected";
          this.seatBGColor[event.target.id] = "#08F630";
          this.SelectedSeat++;
        }
        else if(this.SelectedSeat = 3){
            alert("Maximum 3 seat can be selected")
        }
    }
  },

  computed: {},

  watch: {},

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
