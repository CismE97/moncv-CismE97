import 'bootstrap.native';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './main.css';

import 'jquery-smooth-scroll';
import ScrollReveal from 'scrollreveal';
import Chart from 'chart.js';

$(document).ready(() => {
    $('a').smoothScroll();

    // Création des progress bar.
    $('.progress').each((index, element) => {
        let value = $(element.children).attr('aria-valuenow');
        let remainingValue = $(element.children).attr('aria-valuemax') - value;

        const canevas = $('<canvas id="bar-chart-' + index + '" width="100" height="100"></canvas>');
        $(element).replaceWith(canevas);
        // eslint-disable-next-line
        new Chart(canevas, {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        backgroundColor: ['#F5484A', '#EEEEF2'],
                        data: [value, remainingValue]
                    }
                ]
            },
            options: {
                tooltips: {
                    enabled: false
                }
            }
        });
    });

    // eslint-disable-next-line
    let element = new ScrollReveal();
    element.reveal('h2');
    element.reveal('.skill');
    element.reveal('.media');
});
