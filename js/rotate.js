$(window).load(function() {	//start after HTML, images have loaded

	var InfiniteRotatorLeft = 
	{
		init: function()
		{
			//initial fade-in time (in milliseconds)
			var initialFadeIn = 1000;
			
			//interval between items (in milliseconds)
			var itemInterval = 4000;
			
			//cross-fade time (in milliseconds)
			var fadeTime = 0;
			
			//count number of items
			var numberOfItems = $('.rotating-item-left').length;

			//set current item
			var currentItem = 0;

			//show first item
			$('.rotating-item-left').eq(currentItem).fadeIn(initialFadeIn);

			//loop through the items		
			var infiniteLoop = setInterval(function(){
				$('.rotating-item-left').eq(currentItem).fadeOut(fadeTime);

				if(currentItem == numberOfItems -1){
					currentItem = 0;
				}else{
					currentItem++;
				}
				$('.rotating-item-left').eq(currentItem).fadeIn(fadeTime);

			}, itemInterval);	
		}	
	};

	InfiniteRotatorLeft.init();
	
});

$(window).load(function() {	//start after HTML, images have loaded

	var InfiniteRotatorRight = 
	{
		init: function()
		{
			//initial fade-in time (in milliseconds)
			var initialFadeIn = 1000;
			
			//interval between items (in milliseconds)
			var itemInterval = 4000;
			
			//cross-fade time (in milliseconds)
			var fadeTime = 0;
			
			//count number of items
			var numberOfItems = $('.rotating-item-right').length;

			//set current item
			var currentItem = 0;

			//show first item
			$('.rotating-item-right').eq(currentItem).fadeIn(initialFadeIn);

			//loop through the items		
			var infiniteLoop = setInterval(function(){
				$('.rotating-item-right').eq(currentItem).fadeOut(fadeTime);

				if(currentItem == numberOfItems -1){
					currentItem = 0;
				}else{
					currentItem++;
				}
				$('.rotating-item-right').eq(currentItem).fadeIn(fadeTime);

			}, itemInterval);	
		}	
	};

	InfiniteRotatorRight.init();
	
});