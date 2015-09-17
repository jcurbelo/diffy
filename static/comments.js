$(function(){
    // Comments utils
    var postComment = function (data) {
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: window.location.origin + '/comments/new',                      
            success: function(data) {
                console.log('success');
                console.log(JSON.stringify(data));
            }
        });        
    }
});