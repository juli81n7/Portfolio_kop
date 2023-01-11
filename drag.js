




 //Indsæt 'parent' class i selectoren
 const slider = document.querySelector('.gallery');
 //vigtigt at have en 'boolean' der holder styr på om der bliver 'dragget'.
 let mouseDown = false; 
 //Et par variabler der skal bruges af flere af nedenstående funktioner
 let startX, scrollLeft; 
 //Starter drag, sætter en startposition for scrolling og trækker offset (nuværende postion) fra
 let startDragging = function (e) { 
     mouseDown = true;
     //sætter startpostionen for scroll til musens postionen - eventuelle forhenværende scrollposition
     startX = e.pageX - slider.offsetLeft; 
     //'scrollLeft' er den endelige variabel vi skal bruge til at definere positionen når vi er færdige med at 'dragge',her bliver den sat til vores globale variabel
     scrollLeft = slider.scrollLeft; 
   };
 
   //funktion til at stoppe drag
 let stopDragging = function (event) { 
     mouseDown = false;
 };
 //faktiske scroll funktion
 slider.addEventListener('mousemove', (e) => { 
     e.preventDefault();
     //checker at musen er nede og stopper hvis ikke 
     if(!mouseDown) { 
         return;
     }
     //opdatere x position baseret på musen
     const x = e.pageX - slider.offsetLeft; 
     //definere evenetuelle start x
     const scroll = x - startX; 
      //opdatere vores scroll position baseret på drag
     slider.scrollLeft = scrollLeft - scroll;
 });
 
 //lytter efter alle de fornødne muse-events
 slider.addEventListener('mousedown', startDragging, false); 
 slider.addEventListener('mouseup', stopDragging, false);
 slider.addEventListener('mouseleave', stopDragging, false);
 
 
 
 
 
   