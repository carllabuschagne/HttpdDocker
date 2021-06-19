$('#btnUp').click(function () {
    $('#MoveMe').animate({
        'marginTop': "-=30px"
    });
});


$('#btnLeft').click(function () {
    $('#MoveMe').animate({
        'marginLeft': "-=30px"
    });
});


$('#btnRight').click(function () {
    $('#MoveMe').animate({
        'marginLeft': "+=30px"
    });
});


$('#btnDown').click(function () {
    $('#MoveMe').animate({
        'marginTop': "+=30px"
    });
});