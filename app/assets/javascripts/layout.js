$(document).ready(function() {

    if (window.location.pathname == "/") {
        $('#panel').addClass("panel_show", 0);
    } else {
        $('#button2').empty();
        $('#button2').append('<p>ACTIVITIES</p>');
    }

    $('#loginbutt').hide();
    $('#signupbutt').hide();
    $('#user_nav').hide();

    $('#panelactivities, #panelme').click(function() {
        $('#panel').toggleClass("panel_show", 400);
    });

    $('#search').keypress(function(e) {
        if (e.which == 13) {
            $("#search_submit").click();
        }
    });

    $('#button1').click(function() {
        $('.block_out').removeClass('hidden');
        $('.block_out').show();
        $('.new_activity').removeClass('hidden');
        $('.new_activity').show();
        $('#container').hide();
        $('.leaflet-top').hide();
        $('#search').hide();
        $('#panel').hide();
    });

    $('#button2').click(function() {
        $('#panel').css({
            'width': '299px',
            'overflow-y': 'hidden'
        });
        $('#panel').toggle("blind", 600, function() {
            $('#panel').css({
                'width': '293',
                'overflow-y': 'auto'
            });
        });
    });

    $('.login').click(function() {
        $('#modal').hide();
        $('#container').hide();
        $('.log_in').show();
        $('#signupbutt').hide();
        $('#loginbutt').hide();
        $('#container').hide();
        $('.leaflet-top').hide();
        $('#search').hide();
        $('#panel').hide();
    });

    $('#signuph2').click(function() {
        $('#modal').hide();
        $('#container').hide();
        $('.sign_up').show();
        $('#signupbutt').hide();
        $('#loginbutt').hide();
        $('#container').hide();
        $('.leaflet-top').hide();
        $('#search').hide();
        $('#panel').hide();
    });

    $('#loginh2').click(function() {
        $('#modal').hide();
        $('#container').hide();
        $('.sign_up').hide();
        $('#signupbutt').show();
        $('#loginbutt').show();
        $('#container').hide();
        $('.leaflet-top').hide();
        $('#search').hide();
        $('#panel').hide();
    });

    $('#close').click(function() {
        $('#modal').hide();
        $('.sign_up').hide();
        $('.block_out').hide();
        $('.log_in').hide();
        $('#loginbutt').show();
        $('#signupbutt').show();
        $('.new_activity').hide();
        $('#container').show();
        $('.leaflet-top').show();
        $('#search').show();
        $('#panel').show();
    });

    $('#closelogin').click(function() {
        $('.log_in').hide();
        $('.sign_up').hide();
        $('.block_out').hide();
        $('#loginbutt').show();
        $('#signupbutt').show();
        $('#container').show();
        $('.leaflet-top').show();
        $('#search').show();
        $('#panel').show();
    });

    $('#closesignup').click(function() {
        $('.sign_up').hide();
        $('.log_in').hide();
        $('.block_out').hide();
        $('#loginbutt').show();
        $('#signupbutt').show();
        $('#container').show();
        $('.leaflet-top').show();
        $('#search').show();
        $('#panel').show();
    });

    $('.signup').click(function() {
        $('#modal').hide();
        $('#container').hide();
        $('.sign_up').show();
    });

    $('#signupbutt').click(function() {
        $('.block_out').show();
        $('.sign_up').show();
        $('#signupbutt').hide();
        $('#loginbutt').hide();
    });

    $('#loginbutt').click(function() {
        $('.block_out').show();
        $('.log_in').show();
        $('#signupbutt').hide();
        $('#loginbutt').hide();
    });
});