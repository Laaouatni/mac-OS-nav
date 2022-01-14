let icons = document.querySelectorAll('.icon');
let i = -1;

icons.forEach(function() {
    i++;

    // hover icon
    icons[i].addEventListener('mouseover', function(e) {
        this.style.transform = 'scale(1.5) translateY(-1vw)';
        console.log(this);
    });
    // not hover icon
    icons[i].addEventListener('mouseout', function(e) {
        this.style.transform = 'scale(1)';
    });
});