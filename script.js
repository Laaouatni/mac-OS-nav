let nav = document.querySelector("nav");

let bigIcon = 'scale(1.4) translateY(-1.5vw)';
let middleIcon = 'scale(1.2) translateY(-1vw)';
let smallIcon = 'scale(1.1) translateY(-0.5vw)';
let normalIcon = 'scale(1) translateY(0)';

let icons = document.querySelectorAll('.icon');


icons.forEach((item, index) => {
    /*     // hover icon
        icons[index].addEventListener('mouseover', function(ePC) {

            // medium
            let next1 = index + 1;
            let prima1 = index - 1;

            // small
            let next2 = index + 2;
            let prima2 = index - 2;

            if (ePC.target == icons[0]) {
                // normal
                this.style.transform = bigIcon;

                // medium
                icons[next1].style.transform = middleIcon;

                // small
                icons[next2].style.transform = smallIcon;
            } else if (ePC.target == icons[icons.length - 1]) {
                // normal
                this.style.transform = bigIcon;

                // medium
                icons[prima1].style.transform = middleIcon;

                // small
                icons[prima2].style.transform = smallIcon;
            } else {
                // normal
                this.style.transform = bigIcon;

                // medium
                icons[prima1].style.transform = middleIcon;
                icons[next1].style.transform = middleIcon;

                // small
                icons[prima2].style.transform = smallIcon;
                icons[next2].style.transform = smallIcon;
            }
        });


        // not hover icon
        icons[index].addEventListener('mouseout', function() {
            icons.forEach((item1, hideIndex) => {
                icons[hideIndex].style.transform = normalIcon;
            });
        });
     */
    /*****************************************************************/

    // hover icon
    icons[index].addEventListener('touchmove', function(eMobile) {

        eMobile.preventDefault();
        // medium
        let next1 = index + 1;
        let prima1 = index - 1;

        // small
        let next2 = index + 2;
        let prima2 = index - 2;

        if (eMobile.target == icons[0]) {
            // normal
            this.style.transform = bigIcon;

            // medium
            icons[next1].style.transform = middleIcon;

            // small
            icons[next2].style.transform = smallIcon;
        } else if (eMobile.target == icons[icons.length - 1]) {
            // normal
            this.style.transform = bigIcon;

            // medium
            icons[prima1].style.transform = middleIcon;

            // small
            icons[prima2].style.transform = smallIcon;
        } else {
            // normal
            this.style.transform = bigIcon;

            // medium
            icons[prima1].style.transform = middleIcon;
            icons[next1].style.transform = middleIcon;

            // small
            icons[prima2].style.transform = smallIcon;
            icons[next2].style.transform = smallIcon;
        }

        eMobile.preventDefault();
    });


    // not hover icon
    icons[index].addEventListener('touchend', function() {
        icons.forEach((item1, hideIndex) => {
            icons[hideIndex].style.transform = normalIcon;
        });
    });

});