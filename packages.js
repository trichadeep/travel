const packages = [
    {
        'image': 'China_image.jpg',
        'place': 'China Tourism',
        'attractions': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'price': 500,
        'rating': 3,
    },
    {
        'image': 'germany_image.jpg',
        'place': 'Germany Tourism',
        'attractions': 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'price': 750,
        'rating': 4,
    },
    {
        'image': 'italy_image.jpg',
        'place': 'Italy Tourism',
        'attractions': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        'price': 600,
        'rating': 5,
    },
    {
        'image': 'italy_image.jpg',
        'place': 'Italy Tourism',
        'attractions': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        'price': 600,
        'rating': 5,
    },
    {
        'image': 'japan_image.jpg',
        'place': 'Japan Tourism',
        'attractions': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        'price': 900,
        'rating': 5,
    },
    {
        'image': 'pak_image.jpg',
        'place': 'Pakistan Tourism',
        'attractions': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        'price': 100,
        'rating': 2,
    },
    {
        'image': 'uk_image.jpg',
        'place': 'London Tourism',
        'attractions': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        'price': 500,
        'rating': 3.5,
    },
    {
        'image': 'usa_image.jpg',
        'place': 'US Tourism',
        'attractions': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        'price': 800,
        'rating': 4,
    },
    {
        'image': 'france_image.jpg',
        'place': 'France Tourism',
        'attractions': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        'price': 300,
        'rating': 4,
    }
];


function getStarRating(rating) {
        var output = '';
        for (var i = 1; i <= 5; i++) {
            output += (i <= rating) ? '&#9733;' : '<span class="grey-star">&#9733;</span>';
        }
        return output;
}
	
// Loop through the packages and append package cards
packages.forEach(function(package) {
    var packageCard = '<div class="package-card">' +
        '<img src="' + package.image + '" alt="' + package.place + '">' +
        '<h2>' + package.place + '</h2>' +
        '<p>' + package.attractions + '</p>' +
        '<p><strong>Price:</strong> $' + package.price + ' USD</p>' +
        '<p><strong>Rating:</strong> ' + getStarRating(package.rating) + '</p>' +
        '<button>Book Now</button>' +
        '</div>';

    document.getElementById('packageContainer').innerHTML += packageCard;
});

