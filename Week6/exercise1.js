var element = document.getElementById('myChart').getContext('2d');

var chartType = 'line'; 
var chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Nasif s Fisrt DataSet',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
    }]
};


var chartOptions = {
        layout: {
            padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
            }
        }
    }


var chart = new Chart(element, {type:chartType, data: chartData, options: chartOptions});