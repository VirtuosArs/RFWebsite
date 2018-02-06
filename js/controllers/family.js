var SSFamilyController = {

    loadViews: function () {

        var contentFilePath = '';

        if (urlCode === URL_CODE.SAKET_BOTH_DAYS || urlCode === URL_CODE.SAKET_ONE_DAY || urlCode === URL_CODE.RF_BOTH_DAYS_WITHOUT_ITINERARY
           || urlCode ===  URL_CODE.RF_24_WITHOUT_ITINERARY || URL_CODE.RF_25_WITHOUT_ITINERARY) {
            contentFilePath = './layouts/family/saket/family.english.html';
        } else if (urlCode === URL_CODE.SANJANA_BOTH_DAYS || urlCode === URL_CODE.SANJANA_ONE_DAY) {
            contentFilePath = './layouts/family/sanjana/family.english.html';
        }

        $('#family-section-content').load(contentFilePath);        

    }

};