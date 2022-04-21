document.addEventListener('DOMContentLoaded', () => {

    const pageViews = ['10K', '50K', '100K', '500K', '1M'];
    const prices = [8, 12, 16, 24, 36];
    const discountPrices = prices.map( price => 0.75 * price);
    

    const slider = document.querySelector(".js-slider");
    const toggle = document.querySelector(".js-toggle");
    const negativeSign = document.querySelector(".js-negative");
    const priceValue = document.querySelector(".js-price");
    const views = document.querySelector(".js-views");


    // set toggle check to false on page load
    toggle.checked = false;

    // set range value to default 100k
    slider.value = 2;


    const sliderBgUpdate = () => {
    const min = slider.min;
    const max = slider.max;

    const val = ((slider.value - min) * 100) / (max - min);

    const lowerFill = 'hsl(174, 77%, 80%)';
    const upperFill = 'hsl(224, 65%, 95%)';
    slider.style.background = `linear-gradient(to right, ${lowerFill} ${val}%, ${upperFill} ${val}%)`;
   };

   const pagePriceUpdate = () => {
       priceValue.innerText = prices[slider.value];
       views.innerText = pageViews[slider.value];
   };


   const sliderUpdate = () => {
       sliderBgUpdate();
       pagePriceUpdate();

       if (toggle.checked === true) 
            priceValue.innerText = discountPrices[slider.value];
   };

   sliderUpdate();
   slider.addEventListener('input', sliderUpdate);
   slider.addEventListener('input', toggleUpdate);

   const toggleUpdate = () => {
       if (toggle.checked === true) {
           negativeSign.classList.add('none');
           priceValue.innerText = discountPrices[slider.value];
       } else {
           negativeSign.classList.remove('none');
           priceValue.innerText = prices[slider.value];
       }
   };

  
   toggle.addEventListener('click', toggleUpdate);

});