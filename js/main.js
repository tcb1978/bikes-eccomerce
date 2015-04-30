$(function() {
	//1) gather the data you will need from your exisiting html
	//2) create an array of objects from that data
	var bikes = [		
		{
			name : 'Sport Bicycle 988',
			designer : 'Enrique Salmo',
			price : 139.99,
			image : '/images/bikes-thumbnail1.png',
			rating : 1
		},
		{
			name : 'Classic Bicycle',
			designer : 'Anko Frique',
			price : 1219.99,
			image : '/images/bikes-thumbnail1.png',
			rating : 2
		},
		{
			name : 'Retro Bicycle #2',
			designer : 'Enrique Salmo',
			price : 899.99,
			image : '/images/bikes-thumbnail1.png',
			rating : 1
		},
		{
			name : 'Classic Bicycle',
			designer : 'Marco Spielmann',
			price : 1220.00,
			image : '/images/bikes-thumbnail1.png',
			rating : 2
		},
		{
			name : 'Sport Bicycle 988',
			designer : 'Enrique Salmo',
			price : 139.99,
			image : '/images/bikes-thumbnail1.png',
			rating : 5
		},
		{
			name : 'Classic Bicycle',
			designer : 'Anko Frique',
			price : 1219.99,
			image : '/images/bikes-thumbnail1.png',
			rating : 3
		},
		{
			name : 'Retro Bicycle #2',
			designer : 'Enrique Salmo',
			price : 899.99,
			image : '/images/bikes-thumbnail1.png',
			rating : 4
		},
		{
			name : 'Classic Bicycle',
			designer : 'Marco Spielmann',
			price : 1220.00,
			image : '/images/bikes-thumbnail1.png',
			rating : 3
		},
		{
			name : 'Retro Bicycle #2',
			designer : 'Enrique Salmo',
			price : 899.99,
			image : '/images/bikes-thumbnail1.png',
			rating : 2
		},
		{
			name : 'Classic Bicycle',
			designer : 'Marco Spielmann',
			price : 1220.00,
			image : '/images/bikes-thumbnail1.png',
			rating : 1
		}
	];

	var $container = $('#product_description_thumbnails_inner');
	$container.html('');
//3) create  a loop of those of objects via $.each
$.each(bikes, function(index, bike) {
		//4) populate an html snippet with your data inside that loop
		var html = '<div class="product-thumbnails" data-index="' + index + '">'
            html += '<img src="'  + bike.image +  '" alt="">'
            html += '<div class="product-thumbnail-description">'
            html += '<p class="product-thumbnail-bike-style">' + bike.name + '</p>'
            html += '<p class="product-thumbnail-designer-name">by ' + bike.designer + '</p>'
            html += '</div>'
            html += '<p class="product-thumbnail-price-tag">' + bike.price + '$</p>'
            html += '<button class="product-detail-text-button" type="button">ADD TO SHOPPING BAG</button>'
            html += '<div class="rating">Rating: <span id="star-rating"></span>'
        	
        	//returns a string of html that gets stored inside the html variable
        	html += buildStarRating(bike.rating);
            
            html += '</div>'
            html += '</div>'
		//5) populate your web page	
		$container.append(html);
	});

	$('.product-thumbnails').click(function(e){
		e.preventDefault();
		var self = $(this);
		var index = self.attr('data-index');
		var bike = bikes[index];
		populateViewer(bike);
	});

	function populateViewer(bike){
		$('#bestseller_bicycle').attr('src', bike.image);
		$('#product-detail-header').html(bike.name);
		$('#product-seller-name').html(bike.designer);
		$('#product-price-tag').html(bike.price + '$');
		
		//returns a string of html that gets stored inside the stars variable		
		var stars = buildStarRating(bike.rating);		
		stars = 'Rating: <span id="star-rating"></span>' + stars;
		$('#product_detail .rating').html(stars);
	}

	function buildStarRating(rating){
		//returns a string.
		var html = '';
		//star rating
    	for (var i = 0; i < rating; i++) {
    		html += '<img src="/images/solid_star_rating.png" />';
    	};        	
        
        for (var i = 0; i < (5 - rating); i++) {
        	html += '<img src="/images/open_star_rating.png" />';
        };
        return html;
	}

})












