Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontFamily = 'Roboto, sans-serif';

var ctx = document.getElementById('fuelChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['0 miles', '20 million miles', '40 million miles', '60 million miles', '80 million miles', '100 million miles', '120 million miles'],
        datasets: [{
            label: 'Fuel left in %',
            data: [100, 80, 76, 72, 69, 63, 58, 55],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 173, 173, 1)',
                'rgba(255, 214, 165, 1)',
                'rgba(253, 255, 182, 1)',
                'rgba(202, 255, 191, 1)',
                'rgba(155, 246, 255, 1)',
                'rgba(160, 196, 255, 1)',
                'rgba(189, 178, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('distanceChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Distance to go (million miles)', 'Distance travelled (million miles)'],
        datasets: [{
            label: 'Fuel left in %',
            data: [20, 120],
            backgroundColor: [
                'rgba(160, 196, 255, 1)',
                'rgba(189, 178, 255, 1)'
            ],
            borderColor: [
                'rgba(160, 196, 255, 1)',
                'rgba(189, 178, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
    }
});