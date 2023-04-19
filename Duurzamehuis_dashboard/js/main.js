//kwh per kamer

const labels = [
    "Woonkamer",
    "Kantoor",
    "Slaapkamer",
    "Badkamer",
    "Keuken",
];

const data = {
    labels: labels,
    datasets:[{
        label: "Stroom verbruik (kwh)",
        data: [2.3, 1.9, 0.3, 1.1, 1.2],
        backgroundColor: ["#EA9215", "#22577A", "#FF6969", "#F9D276", "#975A5E"]
    }]
}

const config = {
    type:"bar",
    data: data,
}


//Gas Verbruik

const labels2 = [
    "Maandag",
    "Dinsdag",
    "Woensdag",
    "Donderdag",
    "Vrijdag",
    "Zaterdag",
    "Zondag",
];

const data2 = {
    labels: labels2,
    datasets:[{
        label: "Gas Verbruik (m3)",
        data: [3.4,  2.8,  1.0, 4.0, 5.0, 4.1, 3.5],
        backgroundColor: "#22577A",
        borderColor: "#22577A"
    }]
}

const config2 = {
    type:"line",
    data: data2,
}

const chart1 = new Chart(document.getElementById("js--chart--2"), config);
const chart2 = new Chart(document.getElementById("js--chart--3"), config2);

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
