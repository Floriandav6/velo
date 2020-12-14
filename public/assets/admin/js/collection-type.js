$(document).ready(function () {

    $($('.add-another-collection-widget').attr('data-list-selector'))
        .find('input').after(createButton());

    $($('.add-another-collection-widget').attr('data-list-selector'))
        .find('.existantPhotos').append(createButton());

    $('.add-another-collection-widget').click(function (e) {
        var list = $($(this).attr('data-list-selector'));
        // Try to find the counter of the list or use the length of the list
        var counter = list.data('widget-counter') || list.children().length;

        // grab the prototype template
        var newWidget = list.attr('data-prototype');
        // replace the "__name__" used in the id and name of the prototype
        // with a number that's unique to your emails
        // end name attribute looks like name="contact[emails][2]"
        newWidget = newWidget.replace(/__name__/g, counter);
        // Increase the counter
        counter++;
        // And store it, the length cannot be used if deleting widgets is allowed
        list.data('widget-counter', counter);

        // create a new list element and add it to the list
        var newElem = $(list.attr('data-widget-tags')).html(newWidget);
        var button = createButton();
        newElem.find('input').after(button);
        newElem.find('.col-sm-2').remove();
        newElem.find('.col-sm-10').removeClass('col-sm-10');
        newElem.appendTo(list);
    });


});

function createButton() {
    var button = $('<button class="btn btn-danger removeElement" type="button">-</button>');
    button.click(function(e) {
        $(this).parents('li').remove();
    });
    return button;
}
