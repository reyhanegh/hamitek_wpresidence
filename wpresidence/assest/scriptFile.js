/* js for sticky-top*/
$(function () {
    $(document).scroll(function () {
        var $nav = $(".sticky-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

/* js for fixed-top*/

$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});




/* js for range field to show its value */
var slider = document.getElementById("customRange1");
var output = document.getElementById("end_range");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}


/* js for fron footer*/
gsap.set('section.footer-container', { yPercent: -75 })

const uncover = gsap.timeline({ paused: true })

uncover
    .to('section.footer-container', { yPercent: 0, ease: 'none' })
    ;

ScrollTrigger.create({
    trigger: 'section.conclusion',
    start: 'bottom bottom',
    end: '+=75%',
    animation: uncover,
    scrub: true,
})



