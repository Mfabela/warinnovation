function createConfig(details, data) {
    return {
        type: 'line',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
            datasets: [{
                label: 'steppedLine: ' + ((typeof(details.steppedLine) === 'boolean') ? details.steppedLine : `'${details.steppedLine}'`),
                steppedLine: details.steppedLine,
                data: data,
                borderColor: details.color,
                fill: false,
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: details.label,
            }
        }
    };
}

window.onload = function() {
    var container = document.querySelector('.container');

    var data = [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
    ];

    var steppedLineSettings = [{
        steppedLine: false,
        label: 'No Step Interpolation',
        color: window.chartColors.red
    }, {
        steppedLine: true,
        label: 'Step Before Interpolation',
        color: window.chartColors.green
    }, {
        steppedLine: 'before',
        label: 'Step Before Interpolation',
        color: window.chartColors.green
    }, {
        steppedLine: 'after',
        label: 'Step After Interpolation',
        color: window.chartColors.purple
    }];

    steppedLineSettings.forEach(function(details) {
        var div = document.createElement('div');
        div.classList.add('chart-container');

        var canvas = document.createElement('canvas');
        div.appendChild(canvas);
        container.appendChild(div);

        var ctx = canvas.getContext('2d');
        var config = createConfig(details, data);
        new Chart(ctx, config);
    });
};