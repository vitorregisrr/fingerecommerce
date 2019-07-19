(function () {
    'use strict';

    const openChartBtn = $('#openChartBtn');
    const closeChartBtn = $('#closeChartBtn');
    const backdrop = $('#main-backdrop');

    const chart = {
        el: $('#chart'),
        isOpen: true,
        data: {
            items: {},
            total: 0,
            sub_total: 0,
            cep: '',
        },

        open: () => {
            chart.el.addClass('active');
            openChartBtn.attr('aria-expanded', true);
            backdrop.addClass('active');
        },

        close: () => {
            chart.el.removeClass('active');
            openChartBtn.attr('aria-expanded', false);
            backdrop.removeClass('active');
        },

        toggle: () => {
            chart.el.toggleClass('active');
            openChartBtn.attr('aria-expanded', !openChartBtn.attr('aria-expanded'));
            backdrop.toggleClass('active');
        }
    }

    openChartBtn.click(chart.toggle);
    closeChartBtn.click(chart.toggle);
    backdrop.click( chart.close);
})();