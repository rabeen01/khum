$(document).ready(function() {
    //getting Chart title
    var url = window.location.href + 'chart_title';

    $.get(url, function(result) {
        for (var i = 0; i < result.length; i++) {
            var url1 = window.location.href + 'chart/' + result[i].id;
            var slug = result[i].slug;
            $.get(url1, function(result1) {
                if (result1.length > 0) {
                    var dates = document.getElementById('updated-date-' + result1[0].chart_title_id);
                    var updated_date = new Date(result1[0].updated_at);
                    var labels = [],
                        data = [];
                    for (var j = 0; j < result1.length; j++) {
                        if (updated_date < result1[j].updated_at) {
                            updated_date = new Date(result1[j].updated_at)
                        }
                        labels.push(result1[j].label.name);
                        data.push(result1[j].value);
                    }
                    dates.innerHTML = updated_date.toDateString();
                    var canvas = document.getElementById(result1[0].chart_title.slug);
                    var chart = new Chart(canvas, {
                        type: 'horizontalBar',
                        data: {
                            labels: labels,
                            datasets: [{
                                fill: false,
                                label: result1[0].chart_title.name,
                                data: data,
                                backgroundColor: [
                                    'rgba(244,101,109,1)',
                                    'rgba(0, 142, 179, 1)',
                                    'rgba(167, 229, 224, 1)',
                                    'rgba(228, 219, 190, 1)',
                                    'rgba(187, 143, 91, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderColor: [
                                    'rgba(244,101,109,1)',
                                    'rgba(0, 142, 179, 1)',
                                    'rgba(167, 229, 224, 1)',
                                    'rgba(228, 219, 190, 1)',
                                    'rgba(187, 143, 91, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1,
                            }]
                        },
                        options: {
                            legend: {
                                display: false,
                            },
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,

                                    },
                                    barPercentage: 0.65,
                                    categoryPercentage: 1
                                }],
                                xAxes: [{

                                }]
                            }
                        }
                    });
                }
            });

        }
    });

    $.ajax({
        type: "POST",
        url: "http://ctevt.org.np/trainingportal/public/api/getLatestTrainingDetails",
        success: function(data) {
            var training = ''; //name
            var provider = ''; //des
            var start = ''; //from
            var end_date = ''; //end
            var link = '';
            for (var i = 0; i < 3; i++) {
                training = document.getElementById('name' + i);
                provider = document.getElementById('des' + i);
                start = document.getElementById('from' + i);
                end_date = document.getElementById('to' + i);
                link = 'http://ctevt.org.np/trainingportal/public/program/' + data.data[i].id + '/' + data.data[i].program_code;

                training.innerHTML = "<a href='" + link + "' target='_blank'>" + data.data[i].training_name + "</a>";
                provider.innerHTML = data.data[i].training_provider;
                start.innerHTML = data.data[i].start_date;
                end_date.innerHTML = data.data[i].end_date;
                // console.log(data.data);
            }
        }
    });
});