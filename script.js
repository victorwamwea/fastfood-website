function filterItems(category) {
    var items = document.getElementsByClassName('item');
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
        if (items[i].classList.contains(category) || category === 'all') {
            items[i].style.display = 'block';
        }
    }
}

// Initially display all items
filterItems('all');
