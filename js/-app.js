const LANGUAGES_TO_DISPLAY = {
    ENGLISH: 'ENG',
    HINDI: 'हिन्दी'
};

const URL_CODE = {
    SAKET_BOTH_DAYS: 'eb50',
    SAKET_ONE_DAY: 'eee8',
    SANJANA_BOTH_DAYS: 'f06e',
    SANJANA_ONE_DAY: 'f226'
};

var urlCode = '';
var languageToDisplay = LANGUAGES_TO_DISPLAY.ENGLISH;

var fullpageJSConfig = {
    scrollingSpeed: 2000,
    onLeave: function (index, nextIndex, direction) {

        SSPrologueController.onPrologueScrolled(index, nextIndex, direction);
        SSEviteController.handleEvite(index, nextIndex, direction);
        SSItineraryController.handleItinerary(index, nextIndex, direction);
        SSRsvpController.handleRSVP(index, nextIndex, direction);

        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        console.log(iOS);

        if (direction === 'up') {
            $('.prologue-text').css('margin-top', '55vh');
            $('#evite-section-content').css('padding-top', '20vh');
        }
        else if (direction === 'down') {
            $('.prologue-text').css('margin-top', '45vh');
            $('#evite-section-content').css('padding-top', '10vh');
        }


    },
}

$(window).load(() => {
});


document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('contents').style.visibility = "hidden";
    } else if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('load').style.visibility = "hidden";
            document.getElementById('contents').style.visibility = "visible";
        }, 1000);
    }
}

// $(window).load = function() {
//     console.log("Ready to Rock!!!");
//     document.getElementById('loading-mask').style.display = 'none';
// }

// $(window).load(() => {
//     // Animate loader off screen
//     $(".se-pre-con").fadeOut("slow");;
// });



var app = $.sammy("#main", function () {

    this.get('#/:id', function (context) {

        switch (context.params["id"]) {
            case 'eb50':
            case 'eee8':
            case 'f06e':
            case 'f226':
                urlCode = context.params["id"];
                break;
        }

    });

    this.notFound = function () {
        // do something
        loadPrologueContent();
    };

});

$(function (context) {
    app.run();
});




$(document).ready(function () {

    $('#fullpage').hide();
    $('#backgrounds').hide();
    $('#open-nav').hide();
    $('#toggle-language').hide();



    if (urlCode === '')
        loadPrologueContent();
    else
        loadCommonContent();


    $('#fullpage').fullpage(fullpageJSConfig);
});

$('#toggle-language').click(function () {

    if (languageToDisplay === LANGUAGES_TO_DISPLAY.ENGLISH) {
        // change button text from Hindi to English
        $('#toggle-language').html(LANGUAGES_TO_DISPLAY.ENGLISH);

        // change text from english to hindi;
        languageToDisplay = LANGUAGES_TO_DISPLAY.HINDI;
        SSLanguageController.displayHindi();

    } else if (languageToDisplay === LANGUAGES_TO_DISPLAY.HINDI) {
        // change button text from English to Hindi
        $('#toggle-language').html(LANGUAGES_TO_DISPLAY.HINDI);

        // change text from hindi to english;
        languageToDisplay = LANGUAGES_TO_DISPLAY.ENGLISH;
        SSLanguageController.displayEnglish();

    }

});

$('#open-nav').click(function () {

    if ($('#mySidenav').css('width') === '0px' && $(window).width() < 768) {
        $('#mySidenav').css('width', '80vw');
        $('#fullpage').css('opacity', '0.15');
        $('#open-nav').css('left', '80vw');
        $('#toggle-language').css('opacity', 0);
    }
    else if ($('#mySidenav').css('width') === '0px' && $(window).width() > 768) {
        $('#mySidenav').css('width', '30vw');
        $('#fullpage').css('opacity', '0.15');
        $('#open-nav').css('left', '30vw');
        $('#toggle-language').css('opacity', 0);
    }
    else {
        $('#mySidenav').css('width', '0px');
        $('#fullpage').css('opacity', '1');
        $('#open-nav').css('left', '0px');
        $('#toggle-language').css('opacity', 1);
    }

});

function loadCommonContent() {

    $('#background-prologue').load('./layouts/prologue/background.html');
    // $('#background-evite').load('./layouts/evite/background.html');
    $('#background-itinerary').load('./layouts/itinerary/background.html');
    $('#background-rsvp').load('./layouts/rsvp/background.html');
    $('#background-rsvp1').load('./layouts/rsvp1/background.html');

    SSSlidingNavigationController.displayEnglish();

    $('#prologue1').load('./layouts/prologue/1.html');
    $('#prologue2').load('./layouts/prologue/2.html');
    $('#prologue3').load('./layouts/prologue/3.html');
    $('#prologue4').load('./layouts/prologue/4.html');
    $('#fullpage').fadeIn(500, () => { });
    $('#backgrounds').fadeIn(500, () => { });
    $('#open-nav').fadeIn(500, () => { });
    $('#toggle-language').fadeIn(500, () => { });
    // $('#prologue4').load('./layouts/prologue/4.html', () => {
    //     $('#preloader').fadeOut(500, () => {

    //         $('#fullpage').fadeIn(500, () => { });
    //         $('#backgrounds').fadeIn(500, () => { });
    //         $('#open-nav').fadeIn(500, () => { });
    //         $('#toggle-language').fadeIn(500, () => { });

    //     });
    // });
    $('#evite').load('./layouts/evite/evite.html', () => {
        $('.backlights').hide();
        $('.dandelions').hide();
        SSEviteController.loadEviteContent();

    });

    $('#rsvp').load('./layouts/rsvp/rsvp.html', () => {

        SSRsvpController.loadRSVPContent();

    });

};

function loadPrologueContent() {


    $('#fullpage').html(`
    <div class="section" id="prologue1"></div>
    <div class="section" id="prologue2"></div>
    <div class="section" id="prologue3"></div>
    <div class="section" id="prologue4"></div>
    `);

    $('#background-prologue').load('./layouts/prologue/background.html');

    SSSlidingNavigationController.displayEnglish();

    $('#prologue1').load('./layouts/prologue/1.html');
    $('#prologue2').load('./layouts/prologue/2.html');
    $('#prologue3').load('./layouts/prologue/3.html');
    $('#prologue4').load('./layouts/prologue/4.html');
    $('#fullpage').fadeIn(500, () => { });
    $('#backgrounds').fadeIn(500, () => { });
    $('#open-nav').fadeIn(500, () => { });
    $('#toggle-language').fadeIn(500, () => { });


    // $('#prologue4').load('./layouts/prologue/4.html', () => {
    //     $('#preloader').fadeOut(500, () => {

    //         $('#fullpage').fadeIn(500, () => { });
    //         $('#backgrounds').fadeIn(500, () => { });
    //         $('#open-nav').fadeIn(500, () => { });
    //         $('#toggle-language').fadeIn(500, () => { });

    //     });
    // });

}


function urlMapping() {
    var url = window.location.href;
    console.log(url);
    url = url.split("/");
    saketurl = "eb50";
    sanjanaurl = "eee8";
    url3 = url[4];
    console.log(url3);

    if (url3 === "index.html" || url3 === "" || url3 === undefined) {
        $('#background-prologue').load('./layouts/prologue/background.html');
        SSSlidingNavigationController.displayEnglish();
        $('#prologue1').load('./layouts/prologue/1.html');
        $('#prologue2').load('./layouts/prologue/2.html');
        $('#prologue3').load('./layouts/prologue/3.html');
        $('#prologue4').load('./layouts/prologue/4.html', () => {
            $('#preloader').fadeOut(500, () => {

                $('#fullpage').fadeIn(500, () => { });
                $('#backgrounds').fadeIn(500, () => { });
                $('#open-nav').fadeIn(500, () => { });
                $('#toggle-language').fadeIn(500, () => { });

            });
        });
    }
    else if (url3 === saketurl) {

        loadCommonContent();

    }
    url4 = url[5];
    console.log(url);
}

function redirectHandler(condition, url) {
    if (condition) {
        window.location = url;
        $('#target-div').load('http://www.mywebsite.com/portfolio.php #portfolio-sports');
    } else {
        return false;
    }
}

function toggleExtraMotif() {
    var rsvpContent = document.getElementById('rsvp-section-content');

    var extraMotif = document.getElementById('');
}

//   // Wait for window load
// 	$(window).load(function() {
// 		// Animate loader off screen
// 		$(".se-pre-con").fadeOut("slow");;
// 	});

var audio = document.getElementById("audio"); 

function pauseAudio() { 
    audio.pause(); 
}

function playAudio() {
    audio.play();
} 


$('#toggle-music').click(function () {
    
    var audio = document.getElementById("audio1");
    console.log(audio);
    console.log($('#play').css('display')); 
        if ($('#play').css('display') === 'none') {

            // if (event.target.webkitHidden) {
            //     audio.pause();
            //   }
            audio.play();
            $("#pause").css("display", "none");
            $("#play").css("display", "inline");
            
            console.log("Playing....");
        }
        else {
            audio.pause();
            $("#play").css("display", "none");
            $('#pause').css('display', 'inline');
            console.log("Paused....");
        }
    });