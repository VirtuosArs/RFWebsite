var SSPrologueController = {

    afterLoad: function (anchorLink, index) {
        $('.prologue-text').css('opacity', '1');
    },

    onScroll: function (from, to, direction) {

        $('.prologue-text').css('opacity', '0');

        if (direction === 'down') {

            switch (to) {

                case 2:
                    $('#logo1').css('opacity', '1');
                    $('#logo1').attr('src', './imgs/prologue/Logo_Animation_1-01.gif');
                    break;

                case 3:
                    $('#logo2').css('opacity', '1');
                    $('#logo2').attr('src', './imgs/prologue/Logo_Animation_2-01.gif');
                    break;

                case 4:

                    if (urlCode === '') {
                        $('.scroll-up').hide();
                    }

                    $('#logo3').css('opacity', '1');
                    $('#logo3').attr('src', './imgs/prologue/Logo_Animation_3-01.gif');
                    break;


                case 5:
                case 7:
                    $('#logo-div').css('opacity', '0');
                    $('#background-prologue').css('opacity', '0');
                    break;
                case 8:
                    $('#logo-div').css('opacity', '0');
                    $('#background-prologue').css('opacity', '0');
                    break;    
            }

        } else {

            switch (to) {

                case 1:
                    if (urlCode === '') {
                        $('.scroll-up').show();
                    }
                    $('#logo-div').css('opacity', '1');
                    $('#background-prologue').css('opacity', '1');
                    break;

                // case 2:
                //     $('#logo3').css('opacity', '0');
                //     $('#logo2').css('opacity', '1');
                //     $('#logo2').attr('src', './imgs/prologue/monogram2.reverse.gif');
                //     break;


                case 4:
                    $('#logo3').css('opacity', '1');
                    $('#logo3').attr('src', './imgs/prologue/Logo_Animation_3-01.gif');

                    $('#logo-div').css('opacity', '1');
                    $('#background-prologue').css('opacity', '1');
                    break;
            }


        }

    },


};