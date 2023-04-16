//Bar grafiek kwh per kamer
const labels = [
    "Woonkamer",
    "Kantoor",
    "Slaapkamer",
    "Badkamer",
    "Keuken",
];

const data = {
    labels: labels,
    datasets:[
        {
            Label: "Stroom verbruik (kwh)", // Waarde werkt niet
            data: [2.3, 1.9, 0.3, 1.1, 1.2],
            backgroundColors: ['#F9E2AF', '009FBD', '#210062', '#77037B', '#454545'],
        }
    ]
};

const config = {
    type: 'doughnut',
    data:data,
};

const chart2 = new Chart(document.getElementById("js--chart--2"), config);

//live klok

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }
