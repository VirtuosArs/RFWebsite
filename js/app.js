const URL_CODE = {
    SANJANA_BOTH_DAYS: 'xeb50vgdgfg',
    SAKET_ONE_DAY: 'eee8mnvmnjnv',
    SANJANA_ONE_DAY: 'f226hdfjhgghf',

    SAKET_BOTH_DAYS: 'f07e',  //Foram both days
    RF_BOTH_DAYS_WITHOUT_ITINERARY: 'f225',
    RF_24_WITHOUT_ITINERARY: 'fee8',
    RF_25_WITHOUT_ITINERARY: 'fb50',
};

const languageToDisplay = 'ENG';

var urlCode = '';

const fullPageConfig = {
    scrollingSpeed: 1500,
    controlArrows: false,
    // autoScrolling: false,
    onLeave: function (from, to, direction) {
        console.log(from + ' ' + to + ' ' + direction);
        //
        // if (from - to === 1 || to - from === 1) {
        //     $.fn.fullpage.setAllowScrolling(false, 'down, up');
        //     setTimeout(() => {
        //         $.fn.fullpage.setAllowScrolling(true, 'down, up');
        //     }, 1000);
        // }

        SSPrologueController.onScroll(from, to, direction);
        SSItineraryController.onScroll(from, to, direction);
        // if(urlCode === URL_CODE.RF_24_WITHOUT_ITINERARY) {
        //     console.log("Here....");
        // SSEviteController.onScroll(from, to, direction);
        // }
        // SSItineraryController2.onScroll(from, to, direction);        

    },
    onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
        console.log(slideIndex + ' ' + nextSlideIndex + ' ' + direction);

        SSEviteController.onSlideLeave(anchorLink, index, slideIndex, direction, nextSlideIndex);
        SSItineraryController.onSlideLeave(anchorLink, index, slideIndex, direction, nextSlideIndex);
        SSEvite2Controller.onSlideLeave(anchorLink, index, slideIndex, direction, nextSlideIndex);
        SSItineraryController2.onSlideLeave(anchorLink, index, slideIndex, direction, nextSlideIndex);

    },
    afterLoad: function (anchorLink, index) {
        SSPrologueController.afterLoad(anchorLink, index);
    }
};



var app = $.sammy("#main", function () {

    this.get('#/:id', function (context) {

        switch (context.params["id"]) {

            case 'f06e':
                urlCode = "xf06e";
                this.redirect('#/xf06e');
                break;
            case 'eb50':
                urlCode = "xeb50vgdgfg";
                this.redirect('#/xeb50vgdgfg');
                break;

            case 'xeb50vgdgfg':
            case 'xf06e':
            case 'f07e':
            case 'eee8mnvmnjnv':
            case 'f225':
            case 'fee8':
            case 'fb50':
            case 'f226hdfjhgghf':
                console.log(context.params["id"]);
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

    if (urlCode === '')
        loadPrologueContent();
    else if (urlCode === "f225")
        loadCommonContentwi();
    else if (urlCode === "fee8")
        loadCommonContent24wi(); 
    else if (urlCode === "fb50")
        loadCommonContent25wi();    
    else
        loadCommonContent();

    $('#fullpage').fullpage(fullPageConfig);
    $.fn.fullpage.setAllowScrolling(false, 'left, right');


    // $('#toggle-music').click(function () {

    //     var audio = document.getElementById("audio1");
    //     console.log(audio);
    //     console.log($('#play').css('display'));
    //     if ($('#play').css('display') === 'none') {

    //         audio.play();
    //         $("#pause").css("display", "none");
    //         $("#play").css("display", "inline");

    //         console.log("Playing....");
    //     }
    //     else {
    //         audio.pause();
    //         $("#play").css("display", "none");
    //         $('#pause').css('display', 'inline');
    //         console.log("Paused....");
    //     }
    // });

    $('#open-nav').click(function () {
        console.log('x');
        if ($('#mySidenav').css('width') === '0px' && $(window).width() < 768) {
            $('#mySidenav').css('width', '80vw');
            $('#fullpage').css('opacity', '0.15');
            $('#open-nav').css('left', '80vw');
            $('#toggle-language').css('opacity', 0);
        }
        else if ($('#mySidenav').css('width') === '0px' && $(window).width() > 768) {
            $('#mySidenav').css('width', '36vw');
            $('#fullpage').css('opacity', '0.15');
            $('#open-nav').css('left', '36vw');
            $('#toggle-language').css('opacity', 0);
            $('#download-invitation').css('margin-left', '-90px');
        }
        else {
            $('#mySidenav').css('width', '0px');
            $('#fullpage').css('opacity', '1');
            $('#open-nav').css('left', '0px');
            $('#toggle-language').css('opacity', 1);
        }

    });

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


var loadCommonContentwi = function () {
    // SSSlidingNavigationController.displayEnglish();
    
        $('#background-prologue').load('./layouts/prologue/background.html');
        $('#background-evite').load('./layouts/evite/background.html');
        $('#background-evite2').load('./layouts/evite2/background.html');
        $('#background-itinerary').load('./layouts/rsvp/background.html');
        $('#background-family').load('./layouts/family/background.html');
        $('#background-rsvp').load('./layouts/rsvp/background.html');
        $('#evite-section-content').load('./layouts/evite/evite.englishwi.html');
        $('#evite2-section-content').load('./layouts/evite2/evite2.englishwi.html');

        $('#evite-section-content').load('./layouts/evite/evite.englishwi.html', () => {
                    $('#get-directionwi').click(() => {
                        console.log("Clicked get direction in RFwi 1...");
                        window.location.href = "https://www.google.co.in/maps/dir//Emerald+Club,+Rajkot,+Gujarat+360021/@22.2271473,70.6047265,283m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3959d289354331ff:0xf0c5174e60d51411!2m2!1d70.6053685!2d22.22756?hl=en";
                    });
            
                });
        $('#evite2-section-content').load('./layouts/evite2/evite2.englishwi.html', () => {
                            $('.directionwi1').click(() => {
                                console.log("Clicked get direction in RFwi 2...");
                                window.location.href = "https://www.google.co.in/maps/dir//Emerald+Club,+Rajkot,+Gujarat+360021/@22.2271473,70.6047265,283m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3959d289354331ff:0xf0c5174e60d51411!2m2!1d70.6053685!2d22.22756?hl=en";
                            });
                    
                        });

        $('#rsvp').load('./layouts/rsvp/rsvp-english.html', () => {
            $('#count-me-in').on('click', function (e) {
                // console.log("Clicked...");
                e.preventDefault();
                SSRsvpNewController.viewModal();
            });
    
        });
    
        SSFamilyController.loadViews();
}

var loadCommonContent24wi = function () {
    // SSSlidingNavigationController.displayEnglish();
    
        $('#background-prologue').load('./layouts/prologue/background.html');
        $('#background-evite').load('./layouts/evite/background.html');
        $('#background-evite2').load('./layouts/evite2/background.html');
        $('#background-itinerary').load('./layouts/rsvp/background.html');
        $('#background-family').load('./layouts/family/background.html');
        $('#background-rsvp').load('./layouts/rsvp/background.html');
        // $('#evite-section-content').load('./layouts/evite/evite.englishwi.html');
        $('#evite-section-content').load('./layouts/evite/evite.englishwi.html', () => {
                    $('.directionwi1').click(() => {
                        console.log("Clicked get direction in sscontroller...");
                        window.location.href = "https://www.google.co.in/maps/dir//Emerald+Club,+Rajkot,+Gujarat+360021/@22.2271473,70.6047265,283m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3959d289354331ff:0xf0c5174e60d51411!2m2!1d70.6053685!2d22.22756?hl=en";
                    });
            
                });
        var div = document.getElementById('section5');
        if (div) {
            div.parentNode.removeChild(div);
        }
        $('#rsvp').load('./layouts/rsvp/rsvp-english.html', () => {
            $('#count-me-in').on('click', function (e) {
                // console.log("Clicked...");
                e.preventDefault();
                SSRsvpNewController.viewModal();
            });
    
        });
    
        SSFamilyController.loadViews();
}


var loadCommonContent25wi = function () {
    // SSSlidingNavigationController.displayEnglish();
    
        $('#background-prologue').load('./layouts/prologue/background.html');
        $('#background-evite').load('./layouts/evite/background.html');
        $('#background-evite2').load('./layouts/evite2/background.html');
        $('#background-itinerary').load('./layouts/rsvp/background.html');
        $('#background-family').load('./layouts/family/background.html');
        $('#background-rsvp').load('./layouts/rsvp/background.html');
        // $('#evite2-section-content').load('./layouts/evite2/evite2.englishwi.html');
        $('#evite2-section-content').load('./layouts/evite2/evite2.englishwi.html', () => {
            $('.directionwi1').click(() => {
                console.log("Clicked get direction in sscontroller...");
                window.location.href = "https://www.google.co.in/maps/dir//Emerald+Club,+Rajkot,+Gujarat+360021/@22.2271473,70.6047265,283m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3959d289354331ff:0xf0c5174e60d51411!2m2!1d70.6053685!2d22.22756?hl=en";
            });
    
        });
        var div = document.getElementById('section4');
        if (div) {
            div.parentNode.removeChild(div);
        }
        $('#rsvp').load('./layouts/rsvp/rsvp-english.html', () => {
            $('#count-me-in').on('click', function (e) {
                // console.log("Clicked...");
                e.preventDefault();
                SSRsvpNewController.viewModal();
            });
    
        });
    
        SSFamilyController.loadViews();
}


var loadCommonContent = function () {

    // SSSlidingNavigationController.displayEnglish();

    $('#background-prologue').load('./layouts/prologue/background.html');
    $('#background-evite').load('./layouts/evite/background.html');
    $('#background-evite2').load('./layouts/evite2/background.html');
    $('#background-itinerary').load('./layouts/rsvp/background.html');
    $('#background-family').load('./layouts/family/background.html');
    $('#background-rsvp').load('./layouts/rsvp/background.html');
    $('#evite-section-content').load('./layouts/evite/evite.english.html', () => {

        SSEviteController.loadViews();
        $('#view-events').click(() => {
            SSEviteController.viewEvents();
        });
        $('.direction').click(() => {
            console.log("Clicked get direction in sscontroller...");
            window.location.href = "https://www.google.co.in/maps/dir//Emerald+Club,+Rajkot,+Gujarat+360021/@22.2271473,70.6047265,283m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3959d289354331ff:0xf0c5174e60d51411!2m2!1d70.6053685!2d22.22756?hl=en";
        });

    });
    SSItineraryController.loadViews();
    $('#evite2-section-content').load('./layouts/evite2/evite2.english.html', () => {
        
                SSEvite2Controller.loadViews();
                $('.event2').click(() => {
                    SSEvite2Controller.viewEvents();
                });
                $('.direction').click(() => {
                    console.log("Clicked get direction in sscontroller...");
                    window.location.href = "https://www.google.co.in/maps/dir//Emerald+Club,+Rajkot,+Gujarat+360021/@22.2271473,70.6047265,283m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3959d289354331ff:0xf0c5174e60d51411!2m2!1d70.6053685!2d22.22756?hl=en";
                });
        
            });
            SSItineraryController2.loadViews();        


    $('#rsvp').load('./layouts/rsvp/rsvp-english.html', () => {
        $('#count-me-in').on('click', function (e) {
            // console.log("Clicked...");
            e.preventDefault();
            SSRsvpNewController.viewModal();
        });

    });

    SSFamilyController.loadViews();

}


var loadPrologueContent = function () {
    $('#fullpage').html(`
    <div class="section " id="section0">
    <div class="section-content">

        <p class="prologue-text container">They say that some things are bound to be, 
        <br> and the Universe conspires to make them happen.</p>
        <p id="sometext"></p>
        
    </div>
</div>
<div class="section " id="section0">
    <div class="section-content">

        <p class="prologue-text container">Rushit and Foram met years ago - but the stars aligned perfectly, at the perfect moment, <br> and they finally became a single beautiful unit... <br> because they were bound to be.</p>
    </div>

</div>
<div class="section" id="section1">
    <div class="section-content">

        <p class="prologue-text container">Completing and complimenting each other flawlessly, <br> they're each others' emotional compasses, always bringing each other to face upwards, <br> venturing into uncharted bliss. </p>
    </div>
</div>
<div class="section" id="section2">
    <div class="section-content">

        <p class="prologue-text container">An unexplored territory, 
        <br> and a new journey to explore it,
        <br> something that will last a lifetime.
        <br>
        <br>Join us as we celebrate Rushit &amp; Forum embarking 
        <br> on this journey of exquisite togetherness.</p>
    </div>
</div>
    `);

    $('#background-prologue').load('./layouts/prologue/background.html');

    SSSlidingNavigationController.displayEnglish();



}


