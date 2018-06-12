import 'bootstrap.native';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'quill/dist/quill.snow.css';
import './main.css';

import 'jquery-smooth-scroll';
import Quill from 'quill';
import ScrollReveal from 'scrollreveal';
import Chart from 'chart.js';

// eslint-disable-next-line
var quill = new Quill('#editor', {
    modules: {
        toolbar: [
          ['bold', 'italic'],
          ['link', 'blockquote', 'code-block', 'image'],
          [{ list: 'ordered' }, { list: 'bullet' }]
        ]
    },
    placeholder: 'Votre message ici ...',
    theme: 'snow'
});

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

    $('#send').click(function () {
        let from = $('#email').val();
        let to = 'contact@thibaudchriste.ch';
        let subject = $('#subject').val();
        let body = 'Ce message a été envoyé depuis : www.thibauchriste.ch : <br><br> ' + $('#message').val() + '<br><br>' + $('#name').val();

        // eslint-disable-next-line
        Email.send(from,to,subject,body,
        'mail.infomaniak.com',
        'contact@thibaudchriste.ch',
        'MDP');

        $('#validationMessage').show();
    });
});
