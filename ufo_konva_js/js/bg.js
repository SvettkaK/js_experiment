function bg()
{
    //var layerB = new Konva.Layer();
    
    var groupBg= new Konva.Group({
        x: 0,
        y: 0,
        draggable: false
    });
    
    
    var fade1 =  new Konva.Rect({
                x: 0,
                y: 0,
                width: 1064,//1064,
                height: 480,
                visible:true
            });
    var fade2 =  new Konva.Rect({
                x: 1064,
                y: 0,
                width: 1064,
                height: 480,
                visible:true
            });
    
    
    //groupBg.add(fade1);
    //groupBg.add(fade2);
    
    
    /*
    var groupPers = new Konva.Group({
        x:40,
        y:(stage.getHeight() - 160),
        draggable: false
        
    });*/
    
    
    //var bg1 = new Konva.Sprite();
   // var bg2 = new Konva.Sprite();
    
    var imageBg = new Image();
    imageBg.onload = function() {
      fade1.fillPatternImage(imageBg);
      fade2.fillPatternImage(imageBg);
      //fade1.setZIndex(9);
      //fade2.setZIndex(9);
      
      groupBg.add(fade1);
      groupBg.add(fade2);
      
      ///layer.add(panelTop);
      
      ///Bg.setZIndex(0);
      
      
      layer.add(groupBg);
      stage.add(layer);
      layer.draw();
      
      moveObj(fade1,fade2);
      battle();
      draw(imageBg);
      
      
    };
    var anim = new Konva.Animation(function(frame) {
            goRightBG(fade1,fade2) 
               
        }, layer);
    
        anim.start();
 
    imageBg.src = "img/forest.jpg"; 
    //imageBg.src = "img/sahara.jpg";
    //imageBg.src = "img/prare.jpg";
    
    
    
}

function moveObj(obj1,obj2 = null)
{
    var container = stage.container();
    container.tabIndex = 1;
    container.focus();
    const DELTA = 5;
    var upKey = 87;
    var downKey = 83;
    var leftKey = 65;
    var rightKey = 68;
    var jumpKey = 32;

    container.addEventListener('keydown', function (e) 
    {
        //////////////////////////////////////////////
        if (e.keyCode === leftKey) {
            goLeftBG(obj1,obj2);
            /*
            obj1.x(obj1.x() + DELTA); 
            if(obj2 != null)
            {
               
               
               //+перставить бокс вправо /идем влево фон влево
               /*
               if(obj1.x() > obj2.x())
               {
                    //21
                    if(obj2.x() + obj2.width() <= 0)
                    {
                        //12
                        obj2.x(obj1.x() + obj1.width());
                    }
               }
               if(obj2.x() > obj1.x())
               {
                    //12
                    if(obj1.x()  + obj1.width() <= 0)
                    {
                        //21
                        obj1.x(obj2.x() + obj2.width());
                    }
               }
               */
               //-перставить бокс вправо
            //}   */
            
               
            //console.log("obj1:" + obj1.x()+"x" + obj1.y()+"_"+obj1.width() + " obj2:" + obj2.x()+"x" + obj2.y()+"_"+obj2.width());
        }
        //////////////////////////////////////////////
        if (e.keyCode === upKey) {
            //pers.y(pers.y() - DELTA);
        } 
        //////////////////////////////////////////////
        if (e.keyCode === rightKey) 
        {
            goRightBG(obj1,obj2);
            /*obj1.x(obj1.x() - DELTA);
            if(obj2 != null)
            {
               
               
               //-перставить бокс вправо
               //+перставить бокс влево //идем вправо, фон вправо
               /*
               if(obj1.x() > obj2.x())
               {
                    //21
                    if(obj2.x() >= 0)
                    {
                        //12
                        obj1.x(obj2.x() - obj1.width());
                    }
               }
               if(obj2.x() > obj1.x())
               {
                    //12
                    if(obj1.x() >= 0)
                    {
                        //21
                        obj2.x(obj1.x() - obj2.width());
                    }
               }
               */
               //-перставить бокс влево
            //} */
            //console.log("obj1:" + obj1.x()+"x" + obj1.y()+"_"+obj1.width() + " obj2:" + obj2.x()+"x" + obj2.y()+"_"+obj2.width()); 
        } 
        //////////////////////////////////////////////
        
        if (e.keyCode === downKey) {
            //pers.y(pers.y() + DELTA);
        } 
        //////////////////////////////////////////////
        if (e.keyCode === jumpKey) {
            
        } 
        //////////////////////////////////////////////
      //console.log("h:" + pers.frameIndex() + " w:" + pers.strokeWidth());
      e.preventDefault();
      layer.batchDraw();
    });
    
    container.addEventListener('keyup', function (e) {
      if (e.keyCode === leftKey) {
        //pers.setAnimation('stand');
        //pers.x(pers.x() - DELTA);
      } else if (e.keyCode === upKey) {
        //pers.y(pers.y() - DELTA);
      } else if (e.keyCode === rightKey) {
        //pers.setAnimation('stand');
      } else if (e.keyCode === downKey) {
        //pers.y(pers.y() + DELTA);
      } else if (e.keyCode === jumpKey) {
        //pers.setAnimation('stand');
      }  else {
        return;
      }
      e.preventDefault();
      layer.batchDraw();
    });
    
}

function goRightBG(obj1,obj2)
{
    const DELTA = 3;
    obj1.x(obj1.x() - DELTA);
    if(obj2 != null)
    {
        obj2.x(obj2.x() - DELTA);  
               //+перставить бокс вправо /идем влево фон влево
               
               if(obj1.x() > obj2.x())
               {
                    //21
                    if(obj2.x() + obj2.width() <= 0)
                    {
                        //12
                        obj2.x(obj1.x() + obj1.width());
                    }
               }
               if(obj2.x() > obj1.x())
               {
                    //12
                    if(obj1.x()  + obj1.width() <= 0)
                    {
                        //21
                        obj1.x(obj2.x() + obj2.width());
                    }
               }
    }
     
}

function goLeftBG(obj1,obj2)
{
    const DELTA = 3;
    obj1.x(obj1.x() + DELTA); 
    if(obj2 != null)
    {
        obj2.x(obj2.x() + DELTA);
               

               //+перставить бокс влево //идем вправо, фон вправо
               if(obj1.x() > obj2.x())
               {
                    //21
                    if(obj2.x() >= 0)
                    {
                        //12
                        obj1.x(obj2.x() - obj1.width());
                    }
               }
               if(obj2.x() > obj1.x())
               {
                    //12
                    if(obj1.x() >= 0)
                    {
                        //21
                        obj2.x(obj1.x() - obj2.width());
                    }
               }   
    }
    
}
//bg();