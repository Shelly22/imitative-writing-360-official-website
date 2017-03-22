$(function(){
    $('#dowebok').fullpage({
    	sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#000'],
    	afterLoad:function(link,index){
    		// console.log(index)
    		$('.section').removeClass('current');
    		setTimeout(function(){
    			$('.section').eq(index-1).addClass('current');
    		},100);
    		// console.log(1);
    	}


    });
});