var SSItineraryController2 = {
    
        loadViews: function () {
    
            this.setupOnNext();
    
            var contentFilePathOne = '';
            var contentFilePathTwo = '';
            if (urlCode === URL_CODE.SAKET_ONE_DAY) {
                contentFilePathOne = './layouts/itinerary/saket/itinerary.25th.english.html';
            }else if (urlCode === URL_CODE.SANJANA_ONE_DAY) {
                contentFilePathOne = './layouts/itinerary/sanjana/itinerary.25th.english.html';
            }else if (urlCode === URL_CODE.SAKET_BOTH_DAYS) {
                contentFilePathOne = './layouts/itinerary/saket/itinerary.25th.english.html';
                // contentFilePathTwo = './layouts/itinerary/saket/itinerary.25th.english.html';
            } else if (urlCode === URL_CODE.SANJANA_BOTH_DAYS) {
                contentFilePathOne = './layouts/itinerary/sanjana/itinerary.24th.english.html';
                contentFilePathTwo = './layouts/itinerary/sanjana/itinerary.25th.english.html';
            }
    
            $('#itinerary-day-one2').load(contentFilePathOne);
    
            if(contentFilePathTwo === '') {
                $('#itinerary-day-two2').hide();
                $('#next2').hide();
                $('#prev2').hide();
            }else {
                $('#itinerary-day-two2').load(contentFilePathTwo);
            }
    
    
    
            $('#cancel2').click(() => {
                $('#prev2').attr('src', './imgs/itinerary/prev-inactive.png');
                $('#next2').attr('src', './imgs/itinerary/next-active.png');
                $('#prev2').unbind('click');
                this.setupOnNext();
                $.fn.fullpage.silentMoveTo(6, 0);
            });
    
        },
    
        onScroll: function (from, to, direction) {
            if (direction === 'down') {
    
                switch (to) {
    
                    case 6:
                        $('#prev2').attr('src', './imgs/itinerary/prev-inactive.png');
                        $('#next2').attr('src', './imgs/itinerary/next-active.png');
                        $('#prev2').unbind('click');
                        this.setupOnNext();
                        $.fn.fullpage.silentMoveTo(6, 0);
                        break;
    
    
                }
            } else {
    
                switch (to) {
    
                    case 4:
                        $('#prev2').attr('src', './imgs/itinerary/prev-inactive.png');
                        $('#next2').attr('src', './imgs/itinerary/next-active.png');
                        $('#prev2').unbind('click');
                        this.setupOnNext();
                        $.fn.fullpage.silentMoveTo(6, 0);
                        break;
    
    
                }
    
            }
    
        },
    
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
            if (direction === 'right') {
    
                switch (nextSlideIndex) {
    
                    case 1:
                        $('#navigator2').css('opacity', '1');
                        $('#background-itinerary').css('opacity', '1');
                        break;
    
                }
    
            } else {
    
                switch (nextSlideIndex) {
    
                    case 0:
                        $('#navigator2').css('opacity', '0');
                        $('#background-itinerary').css('opacity', '0');
                        break;
    
    
                }
    
            }
    
    
    
        },
    
        setupOnNext: function () {
            $('#next2').click(() => {
                $.fn.fullpage.moveSlideRight();
                $('#prev2').attr('src', './imgs/itinerary/prev-active.png');
                $('#next2').attr('src', './imgs/itinerary/next-inactive.png');
                $('#next2').unbind('click');
                this.setupOnPrevious();
            });
        },
    
        setupOnPrevious: function () {
            $('#prev2').click(() => {
                $.fn.fullpage.moveSlideLeft();
                $('#prev2').attr('src', './imgs/itinerary/prev-inactive.png');
                $('#next2').attr('src', './imgs/itinerary/next-active.png');
                $('#prev2').unbind('click');
                this.setupOnNext();
            });
        }
    
    };