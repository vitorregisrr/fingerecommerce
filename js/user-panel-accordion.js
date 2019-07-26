(function () {
   'use strict';

   // Curso accordion
   const updateAccordion = function () {
      $('.curso__navAccordion__content').each(function (index, elem) {
         const targetSelector = elem.getAttribute('data-cursoContent');
         const targetContent = document.querySelector(targetSelector);

         if (targetContent) {
            let newContent = document.createElement('div');
            newContent.setAttribute('class', targetContent.getAttribute('class'));
            newContent.innerHTML = targetContent.innerHTML;
            elem.append(newContent);
         }

         elem.innerTML = '';
         $('.curso__navAccordion').find('.wow').removeClass('wow');
      });
   }

   if (window.innerWidth < 992) {
      updateAccordion();
   }

   window.onresize(function () {
      if (window.innerWidth < 992) {
         updateAccordion();
      }
   })
})();