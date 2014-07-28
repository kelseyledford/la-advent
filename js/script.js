// $(document).ready(function() {

// 	// Initialize Masonry
// 	$('#content').masonry({
// 		columnWidth: 300,
// 		itemSelector: '.item',
// 		isFitWidth: true,
// 		isAnimated: !Modernizr.csstransitions
// 	}).imagesLoaded(function() {
// 		$(this).masonry('reload');
// 	});

// });

var container = document.querySelector('#container');
var msnry = new Masonry( container, {
  // options
  // columnWidth: 200,
  itemSelector: '.item'
});