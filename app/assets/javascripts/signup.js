$(function() {
    var button = $('#signupButton');
    var box = $('#signupBox');
    var form = $('#signupForm');
    button.removeAttr('href');
    button.mouseup(function(signup) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(signup) {
        if(!($(login.target).parent('#signupButton').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});
