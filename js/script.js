$(document).ready(function() {
	$('.menu-item:not(.no-accordion)').accordion({
      collapsible: true,
      active: false,
      heightStyle: "content",
      header: '.accordion'
    });

    if ($(window).width()<=680) {
    	$(".tabs .processes").click(function() {
    		$(".in-processes").show();
    		$(".in-events").hide();

    		$(".tabs span").removeClass("active");
    		$(this).addClass("active");
    	});

    	$(".tabs .events").click(function() {
    		$(".in-events").show();
    		$(".in-processes").hide();

    		$(".tabs span").removeClass("active");
    		$(this).addClass("active");
    	});

    	$(".tabs .processes").click();
    }

    $(".menu-opener").click(function() {
    	$(".main-container .menu").show();
        if ($(window).width()<=680) {
            $(".board").css("position","fixed");
        }
    });

    $(".main-container .menu .mobile-controls .menu-close").click(function() {
    	$(".main-container .menu").hide();
        if ($(window).width()<=680) {
            $(".board").css("position","relative");
        }
    });
});


$( function() {
    $( "#tabs" ).tabs();
} );

$( function() {
    $( "#accordion" ).accordion();
} );


//ajax cat
function catLoad(dir, to) {
    $.post(dir, function(e) {
        $(to).html(e);

        console.log("Страница "+dir+" успешно загружена в блок " + to);
        return false;
    });
}

$(function() {
    $(".auto").each(function() {

        var dir = $(this).data("dir"),
            lto = $(this).data("to");

        catLoad(dir,lto);
        $(this).addClass('active');
    });

    $("[data-cat]").click(function() {

        cat = $(this).data("cat");
        $("[data-cat="+cat+"]").removeClass('active');

        $(this).addClass('active');
    })
});
