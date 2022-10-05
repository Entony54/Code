$(document).ready(function () {

    var timeList = 700;
    var TimeView = 5000;
    var RadioBut = true;
    
    var slideNum = 1;
    var slideTime;
    slideCount = $("#slider3 .slide3").length;
    
    var animSlide = function(arrow){
        clearTimeout(slideTime); 
    
        if(arrow == "next3"){
          if(slideNum == slideCount) { slideNum=1; }
          else{slideNum++}
           translateWidth = -$('#active-slide3').width() * (slideNum - 1);
           $('#slider3').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
           rotator(); 
        }
        else if(arrow == "prew3")
        {	
           if(slideNum == 1) { slideNum=slideCount; }
          else{slideNum-=1}
          translateWidth = -$('#active-slide3').width() * (slideNum - 1); 
           $('#slider3').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
        }else{
           slideNum = arrow;
          translateWidth = -$('#active-slide3').width() * (slideNum -1);
           $('#slider3').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
        }
    
        $(".ctrl-select3.active").removeClass("active");
        $('.ctrl-select3').eq(slideNum - 1).addClass('active');
    }
    
        if(RadioBut){
        var $linkArrow = $('<a id="prewbutton3" href="#">&lt;</a><a id="nextbutton3" href="#">&gt;</a>')
            .prependTo('#active-slide3');
            $('#nextbutton3').click(function(){
               animSlide("next3");
               return false;
               })
            $('#prewbutton3').click(function(){
               animSlide("prew3");
               return false;
               })
        }
            var adderSpan = '';
            $('.slide3').each(function(index) {
                   adderSpan += '<span class = "ctrl-select3">' + index + '</span>';
               });
            $('<div class ="Radio-But3">' + adderSpan +'</div>').appendTo('#slider-wrap3');
            $(".ctrl-select3:first").addClass("active");
            $('.ctrl-select3').click(function(){
            var goToNum = parseFloat($(this).text());
            animSlide(goToNum + 1);
            });
            var pause = false;
            var rotator = function(){
                   if(!pause){slideTime = setTimeout(function(){animSlide('next3')}, TimeView);}
                   }
            $('#slider-wrap3').hover(
               function(){clearTimeout(slideTime); pause = true;},
               function(){pause = false; rotator();
               });
            
        var clicking = false;
        var prevX;
        $('.slide3').mousedown(function(e){
            clicking = true;
            prevX = e.clientX;
        });
    
        $('.slide3').mouseup(function() {
         clicking = false;
        });
    
        $(document).mouseup(function(){
            clicking = false;
        });
    
        $('.slide3').mousemove(function(e){
            if(clicking == true)
             {
                 if(e.clientX < prevX) { animSlide("next3"); clearTimeout(slideTime); }
                 if(e.clientX > prevX) { animSlide("prew3"); clearTimeout(slideTime); }
               clicking = false;
            }
        });
        $('.slide3').hover().css('cursor', 'pointer');
        rotator();  
    
    });