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

// var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }


$(function () {
    var $list, $li, $newItemForm, $div;
    $list = $('ul#items');
    $newItemForm = $('#newItemForm');
    $li = $('ul#items li');

    $li.append('<span class="close">\u00D7</span>');
    // $li.append('<span class="close"><img src="ToDOiT/Mockup/delete-2.png" alt="Supp"></span>');

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