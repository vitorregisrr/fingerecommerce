(function () {
    'use strict';

    // Stars rating readonly
    $('.stars-rating--readonly').barrating({theme: 'fontawesome-stars', readonly: true});

     // Stars rating
     $('.stars-rating').barrating({theme: 'fontawesome-stars'});


     //Input text masks
     $('.mask--cpf').mask('000.000.000-00');
     $('.mask--cep').mask('00000-000');

     //Product color picker scripts
     $('.radio-color').click( function(){
        const label = $(this).find('.mask span').attr('data-label');
        $('#color-name').text(label);
     });
})();