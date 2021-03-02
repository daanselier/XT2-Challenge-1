Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontFamily = 'Roboto, sans-serif';
Chart.defaults.global.defaultFontSize = 10;

var ctx = document.getElementById('fuelChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['0 miles', '20 million miles', '40 million miles', '60 million miles', '80 million miles', '100 million miles', '120 million miles'],
        datasets: [{
            label: 'Fuel left in %',
            data: [100, 80, 76, 72, 69, 63, 58, 55],
            backgroundColor: [
                'rgba(189, 196, 255, 0.6)',
            ],
            borderColor: [
                'rgba(160, 196, 255, 1)',
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

var ctx = document.getElementById('drinkChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Water', 'Coffee', 'Tea', 'Rum'],
        datasets: [{
            label: 'Amount left in %',
            data: [80, 20, 75, 32],
            backgroundColor: [
                'rgba(155, 246, 255, 1)',
                'rgba(160, 196, 255, 1)',
                'rgba(189, 178, 255, 1)',
                'rgba(255, 198, 255, 1)'
            ],
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

var ctx = document.getElementById('foodChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Cookies', 'Hamburgers', 'Pizzas', 'Pastas'],
        datasets: [{
            label: 'Amount left in %',
            data: [35, 80, 23, 69],
            backgroundColor: [
                'rgba(255, 173, 173, 1)',
                'rgba(255, 214, 165, 1)',
                'rgba(253, 255, 182, 1)',
                'rgba(202, 255, 191, 1)'
            ],
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

var ctx = document.getElementById('hamsterChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Day 1', 'Day 30', 'Day 60', 'Day 90', 'Day 120', 'Day 150', 'Day 180', 'Day 210'],
        datasets: [{
            label: 'Amount of hamsters on the spaceship',
            data: [2, 5, 12, 34, 86, 32, 70, 180],
            backgroundColor: [
                'rgba(189, 196, 255, 0.6)',
            ],
            borderColor: [
                'rgba(160, 196, 255, 1)',
                'rgba(189, 178, 255, 1)',
                'rgba(255, 198, 255, 1)',
                'rgba(255, 173, 173, 1)',
                'rgba(255, 214, 165, 1)',
                'rgba(253, 255, 182, 1)',
                'rgba(202, 255, 191, 1)',
                'rgba(155, 246, 255, 1)'
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