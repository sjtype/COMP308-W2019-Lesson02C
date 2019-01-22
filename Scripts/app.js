"use strict";
// self-executing anonymous function
// IIFE -- Immediately Invoked Function Expression (a special type of closure)
(function(){ 

    function Start() {
        console.log(`%cApp Started...`,
            "font-size: 20px; color: blue; font-weight: bold;");
    }

    //Start(); This would also work, but this is a loose function declaration
    // prefer callback functions like the one below
    window.addEventListener("load", Start);
})();