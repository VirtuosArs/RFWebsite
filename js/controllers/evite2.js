var SSEvite2Controller = {
    
        loadViews: function () {
    
            var contentFilePath = '';
    
            // if (urlCode === URL_CODE.SAKET_BOTH_DAYS || urlCode === URL_CODE.SAKET_ONE_DAY) {
            //     $('#invite-welcome').html(`<span><strong>Dhulia Family </strong></span>requests the honour of your
            //     <br> company for the wedding celebration of`);
    
            //     $('#bridal-couple-top').html('Rushit');
            //     $('#bridal-couple-bottom').html('Foram');
    
            // } else if (urlCode === URL_CODE.SANJANA_BOTH_DAYS || urlCode === URL_CODE.SANJANA_ONE_DAY) {
            //     $('#invite-welcome').html(`<span>Jain Family</span><br>
            //     requests the honor of your presence<br>
            //     at the wedding of`);
    
            //     $('#bridal-couple-top').html('Sanjana');
            //     $('#bridal-couple-bottom').html('Saket');
            // }
            
            // if (urlCode === URL_CODE.SANJANA_BOTH_DAYS || urlCode === URL_CODE.SAKET_BOTH_DAYS) {
            //     $('.etext2').html('on Sunday, 25th February 2018 <br> 8:00 Pm onwards <br>');    
            // }
    
        },
    
        viewEvents: function () {
            $.fn.fullpage.moveSlideRight();
        },
    
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
            console.log("Second evite==>"+slideIndex + ' ' + nextSlideIndex + ' ' + direction)
            if (direction === 'right') {
    
                switch (nextSlideIndex) {
    
                    case 1:
                        $('.scroll-up-evite').css('opacity', '0');
                        $('.familyslide2').css('opacity', '0');
                        $('.backlights').css('opacity', '0');
                        break;
    
                    case 2:
    
                        break;
    
    
                }
            } else {
    
                switch (nextSlideIndex) {
    
                    case 0:
                        $('.scroll-up-evite').css('opacity', '1');
                        $('.familyslide2').css('opacity', '1');
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