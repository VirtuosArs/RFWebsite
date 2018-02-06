var SSEviteController = {

    loadViews: function () {

        var contentFilePath = '';

        if (urlCode === URL_CODE.SAKET_BOTH_DAYS || urlCode === URL_CODE.SAKET_ONE_DAY || urlCode === URL_CODE.RF_BOTH_DAYS_WITHOUT_ITINERARY
        || urlCode === URL_CODE.RF_24_WITHOUT_ITINERARY || urlCode === URL_CODE.RF_25_WITHOUT_ITINERARY) {
            $('#invite-welcome').html(`<span>The <strong>Chinoy Family</strong> is delighted to invite </span>
            <br>you for a fun filled evening of 
            <br>Music, Dance &amp; Dinner as`);

            $('#bridal-couple-top').html('Foram');
            $('#bridal-couple-bottom').html('Rushit');

        } else if (urlCode === URL_CODE.SANJANA_BOTH_DAYS || urlCode === URL_CODE.SANJANA_ONE_DAY) {
            $('#invite-welcome').html(`<span>Jain Family</span><br>
            requests the honor of your presence<br>
            at the wedding of`);

            $('#bridal-couple-top').html('Sanjana');
            $('#bridal-couple-bottom').html('Saket');
        }
        // else if (urlCode === URL_CODE.RF_BOTH_DAYS_WITHOUT_ITINERARY) {
        //     $('#evite-section-content').load('./layouts/evite/evite.englishwi.html');
        //     $('#evite2-section-content').load('./layouts/evite/evite2.englishwi.html');
        // }
        if (urlCode === URL_CODE.SANJANA_BOTH_DAYS || urlCode === URL_CODE.SAKET_BOTH_DAYS) {
            $('#baarat').html('On Saturday, 24th February 2018 <br> 8:00 Pm onwards <br>');    
        }

    },

    viewEvents: function () {
        $.fn.fullpage.moveSlideRight();
    },

    // onScroll: function (from, to, direction) {
    //     if (direction === 'down') {
            
    //                     switch (to) {
            
    //                         case 6:
    //                             $.fn.fullpage.moveTo(8);
    //                             console.log("Moved to 7th");
    //                             break;
            
            
    //                     }
    //                 }
    // },

    onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
        console.log(slideIndex + ' ' + nextSlideIndex + ' ' + direction)
        if (direction === 'right') {

            switch (nextSlideIndex) {

                case 1:
                    $('.scroll-up-evite').css('opacity', '0');
                    $('#familynameevite').css('opacity', '0');
                    $('.backlights').css('opacity', '0');
                    break;

                case 2:

                    break;


            }
        } else {

            switch (nextSlideIndex) {

                case 0:
                    $('.scroll-up-evite').css('opacity', '1');
                    $('#familynameevite').css('opacity', '1');
                    $('.backlights').css('opacity', '1');
                    break;

                case 1:
                    break;

                case 2:

                    break;


            }

        }



    }

};