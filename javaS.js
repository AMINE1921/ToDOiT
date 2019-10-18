$(function () {
    var $list, $li, $newItemForm, $div;
    $list = $('ul#items');
    $newItemForm = $('#newItemForm');
    $li = $('ul#items li');

    $li.append('<span class="close">\u00D7</span>');

    $('span').click(function () {
        $(this).parent().hide();
    });

    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        var text = $('input:text').val();
        var spann = $('<span class="close">\u00D7</span>');
        $list.append('<li>' + text + ' <span class="close">\u00D7</span> </li>');
        $('input:text').val('');
        $('span').click(function () {
            $(this).parent().hide();
        });
    });

    $list.on('click', 'li', function () {
        $(this).toggleClass("checked");
    });
});