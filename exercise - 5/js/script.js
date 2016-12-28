 // OBJECT FOR KEY EVENTS
 var keys = {};

 // FUNCTION THAT WILL RUN ON BODY ON LOAD =============================
         function keyDown(event) {
         
             this.document.onkeydown = keydown;
             //THIS WOULD RUN WHEN WE PRESS A KEY

             this.document.onkeyup = keyup;
             // THIS WOULD RUN WHEN YOU RELEASE a KEY
         
         }
         
//  START OF FUNCTION WHEN YOU PRESS A KEY ------------------------------
         function keydown(event) {

// IF KEYS GETS A KEYCODE 
             keys[event.keyCode] = true;
           
//TO SET THE CSS AND THE SOUND WHEN BUTTON IS PRESSED
             if (keys[event.keyCode]) {

                // var x = document.getElementById("you");
                 //style.className += ' shadow';  
                 
                 // VAR THAT STORES THE KEY CODE
                 var code = event.keyCode;

                 // VAR THAT FINDS THE DIV/DATA-KEY MATCHING TO THE KEYCODE
                 var style = document.querySelector('.button_global[data-key="' + code + '"]');

                 // ADDING CLASS TO THE DIV-WITH NAME,AND SOUND 
                 style.className += ' shadow';   
                  console.log(style);
               //  console.log(event.keyCode);

               // VAR THAT FINDS THE AUDIO/DATA-KEY MATCHING TO THE KEYCODE
                 var audio = document.querySelector('audio[data-key="' + code + '"]');

              // IF THERE IS NO AUDIO THIS WOULD RUN
                 if (!audio) return;
              // TO STOP
                 audio.currentTime = 0;

              // PLAY THE AUDIO
                 audio.play();
               //console.log(audio);
                 
                 // x.classList.toggle("shadow");
         
         
             } else {
                 console.log(event.keyCode);
             }
         }
//  END OF FUNCTION WHEN YOU PRESS A KEY
         

//  START OF FUNCTION WHEN YOU RELEASE A KEY ----------------------------------
         function keyup() {
             if (keys[event.keyCode]) {
                 var code =event.keyCode;
                var style = document.querySelector('.button_global[data-key="' + code + '"]');

                // THIS IS TO REMOVE THE CLASS 
                 style.classList.remove("shadow");
         
             } else {
                 console.log(event.keyCode);
             }
         }
//  END OF FUNCTION WHEN YOU RELEASE A KEY