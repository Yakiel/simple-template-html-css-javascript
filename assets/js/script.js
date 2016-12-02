$(window).on('scroll',()=>{
	
	let s = $(window).scrollTop(),
		 header = $('.nav');
	
	if(s >= 70){
		header.css({'background':'rgba(240,240,240,.6)',
		            'height':'60px',
		            'box-shadow' : '0 5px 20px rgba(0,0,0,.2)'
	    });
	}
	else{
		header.css({'background' : 'transparent',
		            'height':'80px',
		            'box-shadow' : 'none'
	    });
    }
});


$('.fab').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
$(window).scroll(function(){
	if( $(this).scrollTop() > 200 ){
		$('.fab').slideDown(300);
	} 
	else {
		$('.fab').slideUp(300);
	}
});