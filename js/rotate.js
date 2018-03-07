$(window).load(function() {	//start after HTML, images have loaded

	var InfiniteRotatorOne = 
	{
		init: function()
		{
			//initial fade-in time (in milliseconds)
			var initialFadeIn = 0;
			
			//interval between items (in milliseconds)
			var itemInterval = 4000;
			
			//cross-fade time (in milliseconds)
			var fadeTime = 0;
			
			//count number of items
			var numberOfItems = $('.rotating-item-one').length;

			//set current item
			var currentItem = 0;

			//show first item
			$('.rotating-item-one').eq(currentItem).fadeIn(initialFadeIn);

			//loop through the items		
			var infiniteLoop = setInterval(function(){
				$('.rotating-item-one').eq(currentItem).fadeOut(fadeTime);

				if(currentItem == numberOfItems -1){
					currentItem = 0;
				}else{
					currentItem++;
				}
				$('.rotating-item-one').eq(currentItem).fadeIn(fadeTime);

			}, itemInterval);	
		}	
	};

	InfiniteRotatorOne.init();
	
});

$(window).load(function() {	//start after HTML, images have loaded

	var InfiniteRotatorTwo = 
	{
		init: function()
		{
			//initial fade-in time (in milliseconds)
			var initialFadeIn = 0;
			
			//interval between items (in milliseconds)
			var itemInterval = 4000;
			
			//cross-fade time (in milliseconds)
			var fadeTime = 0;
			
			//count number of items
			var numberOfItems = $('.rotating-item-two').length;

			//set current item
			var currentItem = 0;

			//show first item
			$('.rotating-item-two').eq(currentItem).fadeIn(initialFadeIn);

			//loop through the items		
			var infiniteLoop = setInterval(function(){
				$('.rotating-item-two').eq(currentItem).fadeOut(fadeTime);

				if(currentItem == numberOfItems -1){
					currentItem = 0;
				}else{
					currentItem++;
				}
				$('.rotating-item-two').eq(currentItem).fadeIn(fadeTime);

			}, itemInterval);	
		}	
	};

	InfiniteRotatorTwo.init();
	
});