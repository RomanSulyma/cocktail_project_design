$('.info').waypoint( () => {
       $('nav').toggleClass('stick');
});

// animations

$('.howItWorks').waypoint( () => {
     $('.firstOfTwo').addClass('visible').addClass('animated').addClass('bounceInUp');
}, {
       offset : '50%'
});

$('.tariffBlock').waypoint( () => {
       $('.tariffBlock').addClass('visible').addClass('animated').addClass('zoomIn');
}, {
       offset : '80%'
});

// sticky menu

$('.fa-times').click( () => {
       $('.headerList').slideToggle(500);
       $('.fa-times').css('display','none');
       $('.fa-bars').css('display', 'block');
});

$('.fa-bars').click( () => {
       $('.fa-bars').css('display', 'none');
       $('.headerList').slideToggle(500);
       $('.fa-times').css('display','block');
});