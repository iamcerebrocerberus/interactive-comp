"use strict";document.addEventListener("DOMContentLoaded",function(){function e(){var e,n;e=i.min,n=i.max,n=100*(i.value-e)/(n-e),i.style.background="linear-gradient(to right, ".concat("hsl(174, 77%, 80%)"," ").concat(n,"%, ").concat("hsl(224, 65%, 95%)"," ").concat(n,"%)"),a.innerText=c[i.value],u.innerText=t[i.value],!0===o.checked&&(a.innerText=r[i.value])}var t=["10K","50K","100K","500K","1M"],c=[8,12,16,24,36],r=c.map(function(e){return.75*e}),i=document.querySelector(".js-slider"),o=document.querySelector(".js-toggle"),n=document.querySelector(".js-negative"),a=document.querySelector(".js-price"),u=document.querySelector(".js-views");o.checked=!1,i.value=2;e(),i.addEventListener("input",e),i.addEventListener("input",void 0),o.addEventListener("click",function(){!0===o.checked?(n.classList.add("none"),a.innerText=r[i.value]):(n.classList.remove("none"),a.innerText=c[i.value])})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzbGlkZXJVcGRhdGUiLCJsb3dlckZpbGwiLCJ1cHBlckZpbGwiLCJtaW4iLCJtYXgiLCJ2YWwiLCJzbGlkZXIiLCJ2YWx1ZSIsInZpZXdzIiwiaW5uZXJUZXh0Iiwic2xpZGVyQmdVcGRhdGUiLCJwcmljZXMiLCJwYWdlUHJpY2VVcGRhdGUiLCJwYWdlVmlld3MiLCJ0b2dnbGVVcGRhdGUiLCJjaGVja2VkIiwidG9nZ2xlIiwiZGlzY291bnRQcmljZXMiLCJtYXAiLCJwcmljZSIsInF1ZXJ5U2VsZWN0b3IiLCJuZWdhdGl2ZVNpZ24iLCJwcmljZVZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiYUFBQUEsU0FBU0MsaUJBQWlCLG1CQUFvQixXQThDL0IsU0FBWkMsSUFyQmUsSUFFUkMsRUFDQUMsRUFEQUQsRUFBQUEsRUFBWUUsSUFDWkQsRUFBQUEsRUFBWUUsSUFQbEJDLEVBQUEsS0FBQUMsRUFBQUMsTUFBQUosSUFBQUMsRUFBQUQsR0FhR0ssRUFBTUMsTUFBQUEsV0FBTkQsNkJBQUFBLE9BRmlCLHFCQUVqQkEsS0FBQUEsT0FBQUgsRUFBQUcsT0FBQUEsT0FEV0MscUJBQ1hELEtBQUFBLE9BQUFILEVBQUFHLE1BS0FFLEVBQWNELFVBQUFFLEVBQUFMLEVBQUFDLE9BQ2RLLEVBQUFBLFVBQWVDLEVBQUFQLEVBQUFDLFFBVWJPLElBQUFBLEVBQVlDLFVBQ1ZDLEVBQUFQLFVBQXlCUSxFQUFBWCxFQUFBQyxRQW5EcENULElBQVNDLEVBQUFBLENBQUFBLE1BQWlCLE1BQUEsT0FBMUIsT0FBOEMsTUFFcENjLEVBQWEsQ0FBQSxFQUFBLEdBQU8sR0FBUixHQUFlLElBQzNCRixFQUFxQkEsRUFBM0JPLElBQUEsU0FBQUMsR0FBQSxNQUFBLElBQUFBLElBQ0FiLEVBQUFSLFNBQUFzQixjQUFBLGNBR01kLEVBQVNSLFNBQVNzQixjQUFjLGNBQ2hDSixFQUFrQkksU0FBQUEsY0FBYyxnQkFDaENDLEVBQWV2QixTQUFTc0IsY0FBYyxhQUN0Q0UsRUFBVXhCLFNBQVdzQixjQUFSLGFBS25CSixFQUFPRCxTQUFVLEVBTWpCVCxFQUFNSSxNQUFBQSxFQWlDRlYsSUFDR3FCLEVBQUFBLGlCQUFhRSxRQUFpQnZCLEdBQzlCc0IsRUFBQUEsaUJBQUEsYUFOUlIsR0FXQUUsRUFBT2pCLGlCQUFpQixRQVh4QixZQUMyQixJQUFuQmlCLEVBQU9ELFNBVVJoQixFQUFBQSxVQUFQeUIsSUFBaUNWLFFBN0RwQ1EsRUFBQWIsVUFBQVEsRUFBQVgsRUFBQUMsU0F1RFdjLEVBQWFFLFVBQVVFLE9BQU8sUUFDOUJILEVBQVdiLFVBQVlFLEVBQU9MLEVBQU9DIiwiZmlsZSI6InNjcmlwdC9hcHAubWluaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cbiAgICBjb25zdCBwYWdlVmlld3MgPSBbJzEwSycsICc1MEsnLCAnMTAwSycsICc1MDBLJywgJzFNJ107XG4gICAgY29uc3QgcHJpY2VzID0gWzgsIDEyLCAxNiwgMjQsIDM2XTtcbiAgICBjb25zdCBkaXNjb3VudFByaWNlcyA9IHByaWNlcy5tYXAoIHByaWNlID0+IDAuNzUgKiBwcmljZSk7XG4gICAgXG5cbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXNsaWRlclwiKTtcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXRvZ2dsZVwiKTtcbiAgICBjb25zdCBuZWdhdGl2ZVNpZ24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW5lZ2F0aXZlXCIpO1xuICAgIGNvbnN0IHByaWNlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXByaWNlXCIpO1xuICAgIGNvbnN0IHZpZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy12aWV3c1wiKTtcblxuXG4gICAgLy8gc2V0IHRvZ2dsZSBjaGVjayB0byBmYWxzZSBvbiBwYWdlIGxvYWRcbiAgICB0b2dnbGUuY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgLy8gc2V0IHJhbmdlIHZhbHVlIHRvIGRlZmF1bHQgMTAwa1xuICAgIHNsaWRlci52YWx1ZSA9IDI7XG5cblxuICAgIGNvbnN0IHNsaWRlckJnVXBkYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1pbiA9IHNsaWRlci5taW47XG4gICAgY29uc3QgbWF4ID0gc2xpZGVyLm1heDtcblxuICAgIGNvbnN0IHZhbCA9ICgoc2xpZGVyLnZhbHVlIC0gbWluKSAqIDEwMCkgLyAobWF4IC0gbWluKTtcblxuICAgIGNvbnN0IGxvd2VyRmlsbCA9ICdoc2woMTc0LCA3NyUsIDgwJSknO1xuICAgIGNvbnN0IHVwcGVyRmlsbCA9ICdoc2woMjI0LCA2NSUsIDk1JSknO1xuICAgIHNsaWRlci5zdHlsZS5iYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtsb3dlckZpbGx9ICR7dmFsfSUsICR7dXBwZXJGaWxsfSAke3ZhbH0lKWA7XG4gICB9O1xuXG4gICBjb25zdCBwYWdlUHJpY2VVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgcHJpY2VWYWx1ZS5pbm5lclRleHQgPSBwcmljZXNbc2xpZGVyLnZhbHVlXTtcbiAgICAgICB2aWV3cy5pbm5lclRleHQgPSBwYWdlVmlld3Nbc2xpZGVyLnZhbHVlXTtcbiAgIH07XG5cblxuICAgY29uc3Qgc2xpZGVyVXBkYXRlID0gKCkgPT4ge1xuICAgICAgIHNsaWRlckJnVXBkYXRlKCk7XG4gICAgICAgcGFnZVByaWNlVXBkYXRlKCk7XG5cbiAgICAgICBpZiAodG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIFxuICAgICAgICAgICAgcHJpY2VWYWx1ZS5pbm5lclRleHQgPSBkaXNjb3VudFByaWNlc1tzbGlkZXIudmFsdWVdO1xuICAgfTtcblxuICAgc2xpZGVyVXBkYXRlKCk7XG4gICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzbGlkZXJVcGRhdGUpO1xuICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdG9nZ2xlVXBkYXRlKTtcblxuICAgY29uc3QgdG9nZ2xlVXBkYXRlID0gKCkgPT4ge1xuICAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICBuZWdhdGl2ZVNpZ24uY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xuICAgICAgICAgICBwcmljZVZhbHVlLmlubmVyVGV4dCA9IGRpc2NvdW50UHJpY2VzW3NsaWRlci52YWx1ZV07XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgbmVnYXRpdmVTaWduLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgICAgICAgICAgcHJpY2VWYWx1ZS5pbm5lclRleHQgPSBwcmljZXNbc2xpZGVyLnZhbHVlXTtcbiAgICAgICB9XG4gICB9O1xuXG4gIFxuICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVXBkYXRlKTtcblxufSk7Il19