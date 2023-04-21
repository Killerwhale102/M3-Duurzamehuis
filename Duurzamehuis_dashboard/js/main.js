
//kwh per apparaat

const labels = [
    "tv",
    "wasmachine",
    "koelkast",
    "pc",
];

const data = {
    labels: labels,
    datasets:[{
        label: "Stroom verbruik (kwh)",
        data: [0.25, 0.35, 0.68, 1.15],
        backgroundColor: ["#4563C5 ", "#00B6FF", "#5098D5","#22577A"],
    }]
}

const config = {
    type:"doughnut",
    data: data,
}


//kwh per kamer

const labels2 = [
    "Woonkamer",
    "Kantoor",
    "Slaapkamer",
    "Badkamer",
    "Keuken",
];

const data2 = {
    labels: labels2,
    datasets:[{
        label: "Stroom verbruik (kwh)",
        data: [2.3, 1.9, 0.3, 1.1, 1.2],
        backgroundColor: ["#22577A", "#5098D5", "#22577A", "#5098D5", "#22577A"]
    }]
}

const config2 = {
    type:"bar",
    data: data2,
}


//Gas Verbruik

const labels3 = [
    "Maandag",
    "Dinsdag",
    "Woensdag",
    "Donderdag",
    "Vrijdag",
    "Zaterdag",
    "Zondag",
];

const data3 = {
    labels: labels3,
    datasets:[{
        label: "Gas Verbruik (m3)",
        data: [3.4,  2.8,  1.0, 4.0, 5.0, 4.1, 3.5],
        backgroundColor: "#5098D5",
        borderColor: "#22577A"
    }]
}

const config3 = {
    type:"line",
    data: data3,
}

const chart1 = new Chart(document.getElementById("js--chart--1"), config);
const chart2 = new Chart(document.getElementById("js--chart--2"), config2);
const chart3 = new Chart(document.getElementById("js--chart--3"), config3);

//clock

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }



// Datum
let curday = function(sp){
    today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();


    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (dd+sp+mm+sp+yyyy);
    };

    document.getElementById("js--day").innerHTML = curday('-')

    let dt = new Date();


    //pie

    const labels4= [
        "washmachine",
        "keuken",
        "badkamer",
        "teunslang",
    ];
    
    const data4 = {
        labels: labels4,
        datasets:[{
            label: "water verbruik per L",
            data: [10, 30, 40, 5],
            backgroundColor: ["#4563C5 ", "#00B6FF", "#5098D5","#22577A"],
        }]
    }
    
    const config4 = {
        type:"pie",
        data: data4,
    }

    const chart4 = new Chart(document.getElementById("js--chart--4"), config4);

