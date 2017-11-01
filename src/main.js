import 'bootstrap.native';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './main.css';
import 'jquery-smooth-scroll';

import Chart from 'chart.js';

$(document).ready(() => {
    $('a').smoothScroll();
    $('.progress').each((index, element) => {
        let value = $(element.children).attr('aria-valuenow');
        let remainingValue = $(element.children).attr('aria-valuemax') - value;

        $(element).replaceWith('<canvas id="bar-chart-' + index + '" width="100" height="100"></canvas>');
        let ctx = $('#bar-chart-' + index + '');
        // eslint-disable-next-line
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        backgroundColor: ['#F5484A', '#EEEEF2'],
                        data: [value, remainingValue]
                    }
                ]
            }
        });
    });
});
