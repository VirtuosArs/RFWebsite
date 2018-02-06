var SSItineraryController = {

    loadViews: function () {

        this.setupOnNext();

        var contentFilePathOne = '';
        var contentFilePathTwo = '';
        if (urlCode === URL_CODE.SAKET_ONE_DAY) {
            contentFilePathOne = './layouts/itinerary/saket/itinerary.25th.english.html';
        }else if (urlCode === URL_CODE.SANJANA_ONE_DAY) {
            contentFilePathOne = './layouts/itinerary/sanjana/itinerary.25th.english.html';
        }else if (urlCode === URL_CODE.SAKET_BOTH_DAYS) {
            contentFilePathOne = './layouts/itinerary/saket/itinerary.24th.english.html';
            // contentFilePathTwo = './layouts/itinerary/saket/itinerary.25th.english.html';
        } else if (urlCode === URL_CODE.SANJANA_BOTH_DAYS) {
            contentFilePathOne = './layouts/itinerary/sanjana/itinerary.24th.english.html';
            contentFilePathTwo = './layouts/itinerary/sanjana/itinerary.25th.english.html';
        }

        $('#itinerary-day-one').load(contentFilePathOne);

        if(contentFilePathTwo === '') {
            $('#itinerary-day-two').hide();
            $('#next').hide();
            $('#prev').hide();
        }else {
            $('#itinerary-day-two').load(contentFilePathTwo);
        }



        $('#cancel').click(() => {
            $('#prev').attr('src', './imgs/itinerary/prev-inactive.png');
            $('#next').attr('src', './imgs/itinerary/next-active.png');
            $('#prev').unbind('click');
            this.setupOnNext();
            $.fn.fullpage.silentMoveTo(5, 0);
        });

    },

    onScroll: function (from, to, direction) {
        if (direction === 'down') {

            switch (to) {

                case 6:
                    $('#prev').attr('src', './imgs/itinerary/prev-inactive.png');
                    $('#next').attr('src', './imgs/itinerary/next-active.png');
                    $('#prev').unbind('click');
                    this.setupOnNext();
                    // $.fn.fullpage.silentMoveTo(5, 0);
                    break;


            }
        } else {

            switch (to) {

                case 4:
                    $('#prev').attr('src', './imgs/itinerary/prev-inactive.png');
                    $('#next').attr('src', './imgs/itinerary/next-active.png');
                    $('#prev').unbind('click');
                    this.setupOnNext();
                    $.fn.fullpage.silentMoveTo(5, 0);
                    break;


            }

        }

    },

    onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
        if (direction === 'right') {

            switch (nextSlideIndex) {

                case 1:
                    $('#navigator').css('opacity', '1');
                    $('#background-itinerary').css('opacity', '0');
                    break;

            }

        } else {

            switch (nextSlideIndex) {

                case 0:
                    $('#navigator').css('opacity', '0');
                    $('#background-itinerary').css('opacity', '0');
                    break;


            }

        }



    },

    setupOnNext: function () {
        $('#next').click(() => {
            $.fn.fullpage.moveSlideRight();
            $('#prev').attr('src', './imgs/itinerary/prev-active.png');
            $('#next').attr('src', './imgs/itinerary/next-inactive.png');
            $('#next').unbind('click');
            this.setupOnPrevious();
        });
    },

    setupOnPrevious: function () {
        $('#prev').click(() => {
            $.fn.fullpage.moveSlideLeft();
            $('#prev').attr('src', './imgs/itinerary/prev-inactive.png');
            $('#next').attr('src', './imgs/itinerary/next-active.png');
            $('#prev').unbind('click');
            this.setupOnNext();
        });
    }

};