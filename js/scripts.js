
        $(function() {
            console.log('Something Clicked');
            $('.carousel').carousel( { interval: 2000} );
            $('#carouselPause').click(function(){
                console.log('Pause Button Clicked');
                $('.carousel').carousel('pause');
            });
            $('#carouselPlay').click(function(){
                console.log('Play Button Clicked');
                $('.carousel').carousel('cycle');
            });
        });
