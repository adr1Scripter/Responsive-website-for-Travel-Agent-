$(document).ready(function(){
    counter=1;
    counterB=1;
    //counterL=0;
    function displayImage(){ //depending on counter value
        if (counter===1){
            $('#display1').removeAttr('src');
            $('#display1').attr('src', 'sakura.jpg');
        }else if(counter===2){
            $('#display1').removeAttr('src');
            $('#display1').attr('src', 'macaques1.jpg');
        }else if(counter===3){
            $('#display1').removeAttr('src');
            $('#display1').attr('src', 'japan-fuji.jpg');
        }
    }
    
    $('#next').click(function(){counter+=1;
                                if(counter===4){ //if counter value is higher than number of images->reset
                                    counter=1;
                                }
                               displayImage();
                               });
    
    $('#previous').click(function(){counter-=1;
                                   if(counter===0){ //if counter value is lesser than number of images->reset
                                    counter=3;
                                   }
                                    displayImage();
                                   });
    
    function displayImageb(){ //depending on counterB value
        if (counterB===1){
            $('#display2').removeAttr('src');
            $('#display2').attr('src', 'tiger_shopped.jpg');
        }else if(counterB===2){
            $('#display2').removeAttr('src');
            $('#display2').attr('src', 'wave.jpg');
        }else if(counterB===3){
            $('#display2').removeAttr('src');
            $('#display2').attr('src', 'red_temple.jpg');
        }
    }
    
    $('#next2').click(function(){counterB+=1;
                                if(counterB===4){ //if counterB value is higher than number of images->reset
                                    counterB=1;
                                }
                               displayImageb();
                               });
    
    $('#previous2').click(function(){counterB-=1;
                                   if(counterB===0){ //if counterB value is lesser than number of images->reset
                                    counterB=3;
                                   }
                                    displayImageb();
                                   });
    
    
  
    
}); 