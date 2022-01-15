let icons = document.querySelectorAll('.icon');
let i = -1;

let nav = document.querySelector("nav");

icons.forEach(function() {
    i++;

    // hover icon
    icons[i].addEventListener('mouseover', function(e) {
        this.style.transform = 'scale(1.5) translateY(-1vw)';
    });
    // not hover icon
    icons[i].addEventListener('mouseout', function(e) {
        this.style.transform = 'scale(1)';
    });
});

nav.addEventListener("mouseover", function(e) {
    if (e.target && e.target.matches(".icon")) {
        const hoveredIcon = e.target;
        console.log(hoveredIcon);
        // style the other imgs element to be smaller
        icons.forEach(function(icon) {
            if (icon !== hoveredIcon) {
                icon.style.transform = 'scale(0.5)';
            }
        });

    }
})