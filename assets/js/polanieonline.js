var btn = $('#btn');

let main = $('.main');
let page = $('.page');
let tales = $('.tales');

btn.on('click', function(e) {
    main.addClass('scaleDown');
    e.stopPropagation();

    setTimeout(function() {
        page.addClass('animate__animated animate__fadeOutRight');
        
        tales.removeClass('d-none');
        tales.addClass('animate__animated animate__backInUp');

        setTimeout(function() {
            page.addClass('d-none');
            page.removeClass('animate__animated animate__fadeOutRight');
            //tales.removeClass('animate__animated animate__backInUp');
            main.removeClass('scaleDown');
        }, 800);
    }, 1000);
});