function filterItems(category) {
    var items = document.getElementsByClassName('item');
    var displayedCategories = new Set();

    for (var i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }

    if (category === 'all') {
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'block';
        }
    } else {
        for (var i = 0; i < items.length; i++) {
            if (items[i].classList.contains(category)) {
                items[i].style.display = 'block';
            }
        }
    }
}

// Function to display one item from each category by default
function displayOneFromEachCategory() {
    var items = document.getElementsByClassName('item');
    var displayedCategories = new Set();

    for (var i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }

    for (var i = 0; i < items.length; i++) {
        var itemCategories = items[i].classList;
        for (var j = 0; j < itemCategories.length; j++) {
            if (!displayedCategories.has(itemCategories[j]) && itemCategories[j] !== 'item') {
                items[i].style.display = 'block';
                displayedCategories.add(itemCategories[j]);
                break;
            }
        }
    }
}

// Initially display one item from each category
displayOneFromEachCategory();

document.getElementById('menuButton').addEventListener('click', function() {
    var menuContent = document.getElementById('menuDropdown').innerHTML;
    console.log(menuContent);
});