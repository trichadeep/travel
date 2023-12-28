 var services = [
        { 'title': 'Affordable Hotel', 'description': 'Enjoy comfortable and budget-friendly accommodations during your travels.' },
        { 'title': 'Food & Drinks', 'description': 'Explore a variety of delicious cuisines and refreshing beverages at our recommended establishments.' },
        { 'title': 'Safety Guide', 'description': 'Stay informed and ensure your safety with our comprehensive travel safety guides.' },
        { 'title': 'Transportation', 'description': 'Efficient and comfortable transportation for seamless travel experiences.' },
        { 'title': 'Guided Tours', 'description': 'Discover the beauty of each destination with our knowledgeable tour guides.' },
        { 'title': 'Travel Packages', 'description': 'Tailored travel packages to suit your preferences and interests.' },
    ];

    // Loop through the services and append service cards
    services.forEach(function(service) {
        var serviceCard = '<div class="service-card">' +
            '<h3>' + service.title + '</h3>' +
            '<p>' + service.description + '</p>' +
            '</div>';

        document.getElementById('servicesContainer').innerHTML += serviceCard;
    });