var SSSlidingNavigationController = {

    displayEnglish: function () {

        $('#mySidenav').load('./layouts/sliding-navigation/sliding-navigation.english.html', () => {
            //this.setUpClickEvents();
            if (urlCode === URL_CODE.SAKET_BOTH_DAYS || urlCode === URL_CODE.SAKET_ONE_DAY || urlCode === URL_CODE.SANJANA_BOTH_DAYS || urlCode === URL_CODE.SANJANA_ONE_DAY) {
                // $("#u1").append('<li id="navigation-button-prologue"><img src="./imgs/Toggle+Nav_lines-02.png" class="s1"> Story of S+S</li>');
                // $("#u1").append('<li id="navigation-button-evite"><img src="./imgs/Toggle+Nav_lines-02.png" class="s3 sec"> Invite</li>');
                // $("#u1").append('<li id="navigation-button-itinerary"><img src="./imgs/Toggle+Nav_lines-02.png" class="s3"> Events</li>');
                // $("#u1").append('<li id="navigation-button-rsvp"><img src="./imgs/Toggle+Nav_lines-02.png" class="s2"> R.S.V.P.</li>');

                $("#u1").append('<li id="navigation-button-prologue"><img src="./imgs/Toggle+Nav_lines-02.png" class="s3 sec"> Story of S+S</li>');
                $("#u1").append('<li id="navigation-button-evite"><img src="./imgs/Toggle+Nav_lines-02.png" class="s3 sec"> Invite</li>');
                $("#u1").append('<li id="navigation-button-itinerary"><img src="./imgs/Toggle+Nav_lines-02.png" class="s3 sec"> Events</li>');
                $("#u1").append('<li id="navigation-button-rsvp"><img src="./imgs/Toggle+Nav_lines-02.png" class="s3 sec"> R.S.V.P.</li>');
            }
            else {
                // $("#u1").append('<li id="navigation-button-prologue"><img src="./imgs/Toggle+Nav_lines-02.png" class="s1"> Story of S+S</li>');
                $("#u1").append('<li id="navigation-button-prologue"><img src="./imgs/Toggle+Nav_lines-02.png" class="s3 sec"> Story of S+S</li>');
                $("#download-invitation").css('display', 'none');
            }

            this.setUpClickEvents();


        });

    },

    displayHindi: function () {

        $('#mySidenav').load('./layouts/sliding-navigation/sliding-navigation.hindi.html', () => {
            //this.setUpClickEvents();
            if (urlCode === URL_CODE.SAKET_BOTH_DAYS || urlCode === URL_CODE.SAKET_ONE_DAY || urlCode === URL_CODE.SANJANA_BOTH_DAYS || urlCode === URL_CODE.SANJANA_ONE_DAY) {
                $("#u1").append('<li id="navigation-button-prologue"><img src="./imgs/Toggle+Nav_lines-02.png" class="s1"> आरंभ</li>');
                $("#u1").append('<li id="navigation-button-evite"><img src="./imgs/Toggle+Nav_lines-02.png" class="s3 sec"> निमंत्रण</li>');
                $("#u1").append('<li id="navigation-button-itinerary"><img src="./imgs/Toggle+Nav_lines-02.png" class="s3"> कार्यक्रम</li>');
                $("#u1").append('<li id="navigation-button-rsvp"><img src="./imgs/Toggle+Nav_lines-02.png" class="s2"> उत्तराकांक्षी</li>');
            }
            else {
                $("#u1").append('<li id="navigation-button-prologue"><img src="./imgs/Toggle+Nav_lines-02.png" class="s1"> आरंभ</li>');
                $("#download-invitation").css('display', 'none');
            }

            this.setUpClickEvents();

        });

    },

    setUpClickEvents: function () {
        $('#navigation-button-prologue').click(() => {
            $.fn.fullpage.moveTo(1);
            $('#open-nav').click();
        });

        $('#navigation-button-evite').click(() => {
            $.fn.fullpage.moveTo(5, 0);
            $('#open-nav').click();
        });

        $('#navigation-button-itinerary').click(() => {
            $.fn.fullpage.moveTo(5);

            SSEviteController.viewEvents();

            $('#open-nav').click();
        });

        $('#navigation-button-rsvp').click(() => {
            $.fn.fullpage.moveTo(8);
            $('#open-nav').click();
        });

        url = "../pdfs/" + urlCode + '_' + languageToDisplay + ".pdf";
        fileName = "Invitation" + languageToDisplay;
        //console.log($('#download-invitation').attr('href'));
        console.log(url);
        console.log(fileName);
        $('#download-invitation').attr('href', url);
        $('#download-invitation').attr('download', fileName);
    }

};