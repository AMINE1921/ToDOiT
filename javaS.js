$(function () {
    var $list, $li, $newItemForm, $div;
    $list = $('ul.items');
    $newItemForm = $('#newItemForm');
    $li = $('ul#items li');
    function cacher() {
        $('.close').click(function () {
            $(this).parent().remove();
        })};

    cacher();

    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        var text = $('input:text').val();
        var spann = $('<span class="close">\u00D7</span>');
        if(text !== ''){
            $list.append('<li>' + text + ' <span class="close">\u00D7</span> </li>');
            $('input:text').val('');
            cacher();
        }});

    $list.on('click', 'li', function () {
        $(this).toggleClass("checked");
    });
});