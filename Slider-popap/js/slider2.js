$(document).ready(function () {

    var timeList = 700;
    var TimeView = 5000;
    var RadioBut = true;
    
    var slideNum = 1;
    var slideTime;
    slideCount = $("#slider2 .slide2").length;
    
    var animSlide = function(arrow){
        clearTimeout(slideTime); 
    
        if(arrow == "next2"){
          if(slideNum == slideCount) { slideNum=1; }
          else{slideNum++}
           translateWidth = -$('#active-slide2').width() * (slideNum - 1);
           $('#slider2').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
           rotator(); 
        }
        else if(arrow == "prew2")
        {	
           if(slideNum == 1) { slideNum=slideCount; }
          else{slideNum-=1}
          translateWidth = -$('#active-slide2').width() * (slideNum - 1); 
           $('#slider2').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
        }else{
           slideNum = arrow;
          translateWidth = -$('#active-slide2').width() * (slideNum -1);
           $('#slider2').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
        }
    
        $(".ctrl-select2.active").removeClass("active");
        $('.ctrl-select2').eq(slideNum - 1).addClass('active');
    }
    
        if(RadioBut){
        var $linkArrow = $('<a id="prewbutton2" href="#">&lt;</a><a id="nextbutton2" href="#">&gt;</a>')
            .prependTo('#active-slide2');
            $('#nextbutton2').click(function(){
               animSlide("next2");
               return false;
               })
            $('#prewbutton2').click(function(){
               animSlide("prew2");
               return false;
               })
        }
            var adderSpan = '';
            $('.slide2').each(function(index) {
                   adderSpan += '<span class = "ctrl-select2">' + index + '</span>';
               });
            $('<div class ="Radio-But2">' + adderSpan +'</div>').appendTo('#slider-wrap2');
            $(".ctrl-select2:first").addClass("active");
            $('.ctrl-select2').click(function(){
            var goToNum = parseFloat($(this).text());
            animSlide(goToNum + 1);
            });
            var pause = false;
            var rotator = function(){
                   if(!pause){slideTime = setTimeout(function(){animSlide('next2')}, TimeView);}
                   }
            $('#slider-wrap2').hover(
               function(){clearTimeout(slideTime); pause = true;},
               function(){pause = false; rotator();
               });
            
        var clicking = false;
        var prevX;
        $('.slide2').mousedown(function(e){
            clicking = true;
            prevX = e.clientX;
        });
    
        $('.slide2').mouseup(function() {
         clicking = false;
        });
    
        $(document).mouseup(function(){
            clicking = false;
        });
    
        $('.slide2').mousemove(function(e){
            if(clicking == true)
             {
                 if(e.clientX < prevX) { animSlide("next2"); clearTimeout(slideTime); }
                 if(e.clientX > prevX) { animSlide("prew2"); clearTimeout(slideTime); }
               clicking = false;
            }
        });
        $('.slide2').hover().css('cursor', 'pointer');
        rotator();  
    
    });