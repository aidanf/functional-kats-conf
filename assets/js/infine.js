$(document).ready(function() {
    scrollNavigation();
    var nowDate = new Date();

    $('.countdown').final_countdown({
        'start':    1436365447,
        'end':      1442048400,
        'now':      nowDate.getTime() / 1000,
        seconds: {
            borderColor: '#8ef58e',
            borderWidth: '4'
        },
        minutes: {
            borderColor: '#ff8d72',
            borderWidth: '4'
        },
        hours: {
            borderColor: '#69ccff',
            borderWidth: '4'
        },
        days: {
            borderColor: '#ffd35c',
            borderWidth: '4'
        }
    });

    if ($.fn.cssOriginal!=undefined) {
        $.fn.css = $.fn.cssOriginal;
    }

    $('.fullwidthbanner').revolution({    
        delay: 9000,                                                
        startheight: 800,                            
        startwidth: 1170,
        
        hideThumbs:200,
        
        thumbWidth:100,                            
        thumbHeight:50,
        thumbAmount:5,
        
       navigationType:"bullet",               
       navigationArrows:"nexttobullets",      
       navigationStyle:"round",               
                                    
       navigationHAlign:"center",             
       navigationVAlign:"bottom",                 
       navigationHOffset: 0,
       navigationVOffset: 50,
        
       soloArrowLeftHalign:"left",
       soloArrowLeftValign:"center",
       soloArrowLeftHOffset:20,
       soloArrowLeftVOffset:0,
        
       soloArrowRightHalign:"right",
       soloArrowRightValign:"center",
       soloArrowRightHOffset:20,
       soloArrowRightVOffset:0,
        touchenabled:"on",                      
        onHoverStop:"on",                        
        
        navOffsetHorizontal:0,
        navOffsetVertical:20,
        
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        hideSliderAtLimit:0,
        
        stopAtSlide:-1,
        stopAfterLoops:-1,    
        shadow: 0,
        fullWidth: 'off'    
    });

    
    $('.parallax-first').parallax("50%", 0.05);
    $('.parallax-second').parallax("50%", 0.05);
    $('.parallax-third').parallax("50%", 0.05);

	$('a[data-toggle="tab"]').on('shown', function (e) {});

	$('input, textarea').placeholder();
	
	$('.cycle-slideshow-main').cycle({
		fx: 'scrollHorz',
		timeout: 40000,
		slides: '.slide'
	});

    $('.cycle-slideshow-main').on('cycle-before', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
        var class_name = $(incomingSlideEl).attr('id');
        var old_class_name = $(outgoingSlideEl).attr('id');
        $('.cycle-slideshow-main .cycle-overlay').removeClass(old_class_name).addClass(class_name);
    });

	$('.cycle-slideshow-fade').cycle({
		fx: 'fade',
		timeout: 4000,
		slides: '.slide'
	});
	
	$('.cycle-slideshow-vertical').cycle({
		fx: 'scrollVert',
		timeout: 8000,
		slides: '.slide',
        pager: '.cycle-vertical-pager'
	});


    $("a[href$='jpg']").fancybox();
    $("a[href$='png']").fancybox();
    $("a[href$='gif']").fancybox();

    $('.fancybox-media').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            media: {}
        }
    });

    var styles = [
        {
            "stylers": [
                { "invert_lightness": true },
                { "saturation": -75 },
                { "hue": "#005eff" }
            ]
        }

    ];
    var options = {
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: ['Styled']
        },
        center: new google.maps.LatLng(53.339371, -6.257495),
        zoom: 16,
        disableDefaultUI: true,
        mapTypeId: 'Styled'
    };
    var div = document.getElementById('map');
    var map = new google.maps.Map(div, options);

    new google.maps.Marker({
        position: new google.maps.LatLng(53.339371, -6.257495),
        map: map
    });

    var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
    map.mapTypes.set('Styled', styledMapType);


    $('input[name=subscribe]').closest('form').submit(function(e) {
        e.preventDefault();

        var form = $(this);

        $.ajax({
            type: 'POST',
            data: form.serialize(),
            url: form.attr('action'),
            success: function(data) {
                var json = $.parseJSON(data);

                if (json.error) {
                    alert(json.message);
                } else {
                    $('.subscribe form, .subscrive h4').closest('form').hide();
                    $('.success').show();
                }
            }
        });
    });

    $('form.contact-form').submit(function(e) {
        e.preventDefault();

        var form = $(this);

        $.ajax({
            type: 'POST',
            data: form.serialize(),
            url: form.attr('action'),
            success: function(data) {
                alert('Thank you for your message.');
                form[0].reset();
            }
        });
    });

    function scrollNavigation() {

        $('.navigation .nav a[href^="#"], a[href^="#"].roll').on('click',function (e) {
            e.preventDefault();

            var target = this.hash,
                $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 1000, 'swing', function () {
                window.location.hash = target;
            });
        });
    }
});






