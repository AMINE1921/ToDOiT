// // Create a "close" button and append it to each list item
// var myNodelist = document.querySelectorAll("ul#items li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }


$(function () {
    var $list, $li, $newItemForm;
    $list = $('ul#items');
    $newItemForm = $('#newItemForm');
    $li = $('ul#items li');

    $li.append('<span class="close">\u00D7</span>');

    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        var text = $('input:text').val();
        $list.append('<li>' + text + '</li>');
        $('input:text').val('');
    });

    $list.on('click', 'li', function () {
        var $this = $(this);
        $this.toggleClass("checked");
    });

    // $list.on('dblclick', 'li', function() {
    //   var $this = $(this);
    //   $this.remove();
    // });

});