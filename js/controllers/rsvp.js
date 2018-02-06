var SSRsvpNewController = {
    viewModal: function () {
        console.log("Here in modal...");
        
        var username = document.getElementById("input-fullname").value;
        if (username.length <= 0) {
            alert("Please enter your name to submit the details.");
            return false;
        }
        else {
            // if (urlCode == "xeb50" || urlCode == "eee8") {
            //     rsvpUrl = 'https://script.google.com/macros/s/AKfycbyRM4KoBUEh0brDSmQucdSlF2hB1Y1XZriPYt9lH2-xQTMiVFE/exec';
            // }
            // else if (urlCode == "xf06e" || urlCode == "f226") {
            //     rsvpUrl = 'https://script.google.com/macros/s/AKfycby__1QvQlZcsgJpthrqyahLzvDiOhgkQx8tcq_3h1mHnSBrcdQ/exec';
            // }
            rsvpUrl = 'https://script.google.com/macros/s/AKfycbwVvoJB5ElwpJx0DBXmzUkYyJ0o0JK2QugOqeTsuQg8yJsC2bm2/exec';
            console.log("Creating url...");
            if (rsvpUrl.length > 1) {
                var modal = document.getElementById('myModal');
                modal.style.display = "block";
                var fname = $('#input-fullname').val();
                var numberperson = $('#number-of-persons').val();
                var mobile = $('#mobile-number').val();
                console.log(fname);
                var adate = $('#adate option:selected').val();
                var amode = $('#means-of-transport option:selected').val();
                var atime = $('#atime').val();
                var ddate = $('#ddate option:selected').val();
                var dmode = $('#means-of-transportd option:selected').val();
                var dtime = $('#dtime').val();
                sdata = "?name=" + fname + "&no_of_persons="+numberperson+ "&mobile_number="+mobile+"&arrival_date=" + adate + "&arrival_mode=" + amode + "&arrival_time=" + atime + "&dep_date=" + ddate + "&dep_mode=" + dmode + "&dep_time=" + dtime;
                console.log(rsvpUrl + sdata);
                rsvpUrl = rsvpUrl + sdata;
                var jqxhr = $.ajax({
                    url: rsvpUrl,
                    method: "GET",
                    //dataType: "json",
                    //data: $form.serializeObject(),
                    success: function () {
                        console.log("Data successfully submitted...");
                        

                
                        // var modal = document.getElementById('myModal');
                        // modal.style.display = "block";
                        // Get the button that opens the modal
                        var btn = document.getElementById("count-me-in");

                        var span1 = document.getElementsByClassName("closeimg")[0];
                        $('#rsvp-section-content').css('opacity', '0.1');
                        $('.modal-content').css('opacity', '1');
                        $('#input-fullname').val('');
                        $('#number-of-persons').val('');
                        $('#mobile-number').val('');
                        $('#atime').val('00:00');
                        $('#dtime').val('00:00');
                        $('#adate').val('24th');
                        $('#ddate').val('25th');
                        $('#means-of-transport').val('Flight');                                
                        $('#means-of-transportd').val('Flight');                                
                        

                        span1.onclick = function () {
                            modal.style.display = "none";
                            $('#rsvp-section-content').css('opacity', '1');
                            $('#input-fullname').val('');
                            $('#number-of-persons').val('');
                            $('#mobile-number').val('');
                            $('#atime').val('00:00');
                            $('#dtime').val('00:00');
                            $('#adate').val('24th');
                            $('#ddate').val('25th');
                            $('#means-of-transport').val('Flight');                                
                            $('#means-of-transportd').val('Flight');
                        }
                        
                        // When the user clicks anywhere outside of the modal, close it
                        window.onclick = function (event) {
                            if (event.target == modal) {
                                modal.style.display = "none";
                                $('#rsvp-section-content').css('opacity', '1');
                                $('#input-fullname').val('');
                                $('#number-of-persons').val('');
                                $('#mobile-number').val('');
                                $('#atime').val('00:00');
                                $('#dtime').val('00:00');
                                $('#adate').val('24th');
                                $('#ddate').val('25th');
                                $('#means-of-transport').val('Flight');                                
                                $('#means-of-transportd').val('Flight');
                            }
                        }

                    }
                })
            }
        }
    },
}

