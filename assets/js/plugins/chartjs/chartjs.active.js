(function ($) {
    "use strict";
    
    if( $('#chartjs-revenue-statistics-chart').length ) {
        var RSC = document.getElementById('chartjs-revenue-statistics-chart').getContext('2d');
        var RSCconfig = {
            type: 'line',
            data: {
                labels: ['1', '2', '3','4', '5','6', '7','8', '9','10', '11','12'],
                datasets: [
                    {
                    label: 'Total Sale',
                    data: [85,20,95,50,60,55,65,90,2,85,90,50],
                    backgroundColor: '#fb7da4',
                    borderColor: '#fb7da4',
                    borderWidth: 3,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#fb7da4',
                    pointBorderWidth: 3,
                    pointRadius: 6,
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverBorderWidth: 3,
                    pointHoverRadius: 6,
                    fill: false,
                    lineTension: 0
                },
                {
                    label: 'Total View',
                    data: [20,15,8,60,68,35,60,80,65,60,85,1],
                    backgroundColor: '#428bfa',
                    borderColor: '#428bfa',
                    borderWidth: 3,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#428bfa',
                    pointBorderWidth: 3,
                    pointRadius: 6,
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverBorderWidth: 3,
                    pointHoverRadius: 6,
                    fill: false,
                    lineTension: 0
                },
                {
                    label: 'Total Support',
                    data: [5,7,18,45,55,45,40,45,60,75, 100],
                    backgroundColor: '#ff9666',
                    borderColor: '#ff9666',
                    borderWidth: 3,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#ff9666',
                    pointBorderWidth: 3,
                    pointRadius: 6,
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverBorderWidth: 3,
                    pointHoverRadius: 6,
                    fill: false,
                    lineTension: 0
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    labels: {
                        fontColor: '#aaaaaa',
                    }
                },
                tooltips: {
                    mode: 'point',
                    intersect: false,
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10,
                    cornerRadius: 4,
                    titleFontSize: 0,
                    titleMarginBottom: 2,
                    displayColors: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontColor: '#aaaaaa',
                        },
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: 'rgba(136,136,136,0.1)',
                            lineWidth: 3,
                            drawBorder: false,
                            zeroLineWidth: 3,
                            zeroLineColor: 'rgba(136,136,136,0.1)',
                        },
                        ticks: {
                            padding: 15,
                            stepSize: 10,
                            fontColor: '#aaaaaa',
                        },
                    }]
                }
            }
        };
        var RSCchartjs = new Chart(RSC, RSCconfig);
    }
    

    if( $('#chartjs-market-trends-chart').length ) {
        var MTC = document.getElementById('chartjs-market-trends-chart').getContext('2d');
        var MTCconfig = {
            type: 'doughnut',
            data: {
                labels: ['Crypto', 'Forex', 'Staking', 'Liquidity providers'],
                datasets: [{
                    data: [300, 200, 200, 400],
                    backgroundColor: [
                        '#fb7da4',
                        '#7dfb9b',
                        '#ff9666',
                        '#428bfa',
                    ],
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    labels: {
                        boxWidth: 30,
                        padding: 20,
                        fontColor: '#aaaaaa',
                    }
                },
                tooltips: {
                    mode: 'point',
                    intersect: false,
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10,
                    cornerRadius: 4,
                    titleFontSize: 0,
                    titleMarginBottom: 2,
                },
				animation: {
					animateScale: true,
					animateRotate: true
				},
            }
        };
        var MTCchartjs = new Chart(MTC, MTCconfig);
    }
    
   

})(jQuery);