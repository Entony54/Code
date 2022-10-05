$(document).ready(function () {

    var timeList = 700;
    var TimeView = 5000;
    var RadioBut = true;
    
    var slideNum = 1;
    var slideTime;
    slideCount = $("#slider4 .slide4").length;
    
    var animSlide = function(arrow){
        clearTimeout(slideTime); 
    
        if(arrow == "next4"){
          if(slideNum == slideCount) { slideNum=1; }
          else{slideNum++}
           translateWidth = -$('#active-slide4').width() * (slideNum - 1);
           $('#slider4').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
           rotator(); 
        }
        else if(arrow == "prew4")
        {	
           if(slideNum == 1) { slideNum=slideCount; }
          else{slideNum-=1}
          translateWidth = -$('#active-slide4').width() * (slideNum - 1); 
           $('#slider4').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
        }else{
           slideNum = arrow;
          translateWidth = -$('#active-slide4').width() * (slideNum -1);
           $('#slider4').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
        }
    
        $(".ctrl-select4.active").removeClass("active");
        $('.ctrl-select4').eq(slideNum - 1).addClass('active');
    }
    
        if(RadioBut){
        var $linkArrow = $('<a id="prewbutton4" href="#">&lt;</a><a id="nextbutton4" href="#">&gt;</a>')
            .prependTo('#active-slide4');
            $('#nextbutton4').click(function(){
               animSlide("next4");
               return false;
               })
            $('#prewbutton4').click(function(){
               animSlide("prew4");
               return false;
               })
        }
            var adderSpan = '';
            $('.slide3').each(function(index) {
                   adderSpan += '<span class = "ctrl-select4">' + index + '</span>';
               });
            $('<div class ="Radio-But4">' + adderSpan +'</div>').appendTo('#slider-wrap4');
            $(".ctrl-select4:first").addClass("active");
            $('.ctrl-select4').click(function(){
            var goToNum = parseFloat($(this).text());
            animSlide(goToNum + 1);
            });
            var pause = false;
            var rotator = function(){
                   if(!pause){slideTime = setTimeout(function(){animSlide('next4')}, TimeView);}
                   }
            $('#slider-wrap4').hover(
               function(){clearTimeout(slideTime); pause = true;},
               function(){pause = false; rotator();
               });
            
        var clicking = false;
        var prevX;
        $('.slide4').mousedown(function(e){
            clicking = true;
            prevX = e.clientX;
        });
    
        $('.slide4').mouseup(function() {
         clicking = false;
        });
    
        $(document).mouseup(function(){
            clicking = false;
        });
    
        $('.slide4').mousemove(function(e){
            if(clicking == true)
             {
                 if(e.clientX < prevX) { animSlide("next4"); clearTimeout(slideTime); }
                 if(e.clientX > prevX) { animSlide("prew4"); clearTimeout(slideTime); }
               clicking = false;
            }
        });
        $('.slide4').hover().css('cursor', 'pointer');
        rotator();  
    
    });