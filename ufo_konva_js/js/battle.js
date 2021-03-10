var way = 'r';
function battle()
{    
    var groupBattle = new Konva.Group({
        x: 0,
        y: 0,
        draggable: false
    });
    

    var groupPers = new Konva.Group({
        x:150,
        y:(stage.getHeight() - 185),
        draggable: false
    });
    
    
    var pers = new Konva.Sprite();
    setParamPers(pers, "pers1");
    drawPers(groupPers,pers);
    
    
    
    
    stage.container().addEventListener('keydown', function (e)  
    {
        //coordnull.x(pers.x());
        //console.log("coordnull:" + coordnull.offsetX() + " pers:" + pers.offsetX()); 
        //console.log("coordnull x:" + coordnull.x() + " pers x:" + pers.x());
    });
      
    

    pers.on('frameIndexChange.button', function() 
    {
        if (this.frameIndex() === 2 && this.animation() === 'punch') 
        {//
            /*
            if(getContact(pers,pers2))
            {
               console.log("attak"); 
            }
            else
            {
                console.log("no attak"); 
            }*/
        }
    });
    
    console.log("scaleX " + pers.scaleX());
    
    groupBattle.add(groupPers);
    layer.add(groupBattle);
    drawMeter();
    stage.add(layer);
    //layer.draw();
    
    var anim = new Konva.Animation(function(frame) {
        goRight(pers); 
           
    }, layer);

    anim.start();
    
    //movePers(pers);
    
}

function drawMeter()
{
    var line = new Konva.Line({
//        [x1, y1, x2, y2, x3, y3].
      points: [0, stage.getHeight()-5, stage.getWidth(), stage.getHeight()-5],
      stroke: 'yellow',
      strokeWidth: 1,
      lineCap: 'round',
      lineJoin: 'round'
    });
    layer.add(line);
    
    for(i = 0; i < stage.getWidth(); i = i+10)
    {
        var line = new Konva.Line({
          points: [i, stage.getHeight(), i, stage.getHeight()-10*(i%100?1:2)],
          stroke: 'yellow',
          strokeWidth: 1,
          lineCap: 'round',
          lineJoin: 'round'
        });
        layer.add(line);
    }
}

function getPunchWidth()
{
    console.log("punch");
    return 51;
}

function getContact(pers,pers2)
{
    var res = false;
    var x1 = pers.x();
    var y1 = pers.y();
    var frId1 = pers.frameIndex();
    var doName1 = pers.getAnimation();
    var width1 = getPersAnimations()[doName1][frId1*4+2]; 
    
    var x2 = pers2.x();
    var y2 = pers2.y();
    var frId2 = pers2.frameIndex();
    var doName2 = pers2.getAnimation();
    var width2 = getPersAnimations()[doName2][frId2*4+2]; 
    
    //getPersAnimations()[doName1];
    console.log("width1: " + width1 + "  width2: " + width2 + "  doName2: " + doName2 + "  frId2*4+2: " + (frId2*4+2));
    console.log("x1:" + x1 + " way1:"+getWay(pers) + "  x2:" + x2 + " way2:"+getWay(pers2));
    
    var coordw = stage.find('.coordw');
    
    if(x1<x2)
    {
        //pers1 левее
        if(getWay(pers) > 0)
        {
            punch1 = x1+width1*pers.scaleX();
            punch2 = x2+width2*pers2.scaleX();
            console.log("xw1:" + punch1 + "  xw2 " + punch2); 
            if(punch1 >= punch2 || punch1 >= x2) res = true;
            else res = false;
        }
        else
        {
            res = false;
        }
          
    }
    else
    {
       //pers2 левее
        if(getWay(pers) < 0)
        {
            punch1 = x1+width1;
            punch2 = x2+width2*getWay(pers2);
            console.log("xw1:" + punch1 + "  xw2 " + punch2); 
            if(punch1 <= punch2 || punch1 <= x2) res = true;
            else res = false;
        }
        else
        {
            res = false;
        }  
    }
    coordw.x(punch1);
    console.log("res: " + res);
    return res;
}


function drawPers(groupPers,pers)
{   
        
    var imagePers = new Image();
    
    imagePers.onload = function() {
        pers.setImage(imagePers);
        
        groupPers.add(pers);
        layer.add(groupPers);
        
        layer.draw();
        pers.start();
      /*
        pers.on(clickTouch, function () {
            var container = stage.container();
            container.tabIndex = 1;
            container.focus();
            console.log("frameIndex " + pers.frameIndex());
        });*/
        /*
        pers.on('frameIndexChange.button', function() 
        {
            if (this.frameIndex() === 2 && this.animation() === 'punch') {//
            console.log("punc " + this.frameIndex());
            }
        });*/
      
      console.log(" name " + pers.name()) ; 
      if(pers.name() == 'pers1') movePers(pers);
    };
    
    imagePers.src = "img/pers.png"; 
    //return pers;
}

function movePers(pers)
{
    var container = stage.container();

    // make it focusable

    container.tabIndex = 1;
    // focus it
    // also stage will be in focus on its click
    container.focus();
    const DELTA = 1;
    var upKey = 87;
    var downKey = 83;
    var leftKey = 65;
    var rightKey = 68;
    var jumpKey = 32;

    container.addEventListener('keydown', function (e) 
    {
        //////////////////////////////////////////////
        if (e.keyCode === leftKey) {
            //pers.x(pers.x() + DELTA  * getWay(pers));
            //pers.offsetX(pers.offsetX() + DELTA  * getWay(pers));
            //console.log(" offsetX  - DELTA("+DELTA  * getWay(pers)+") " + pers.offsetX()) ;
            goLeft(pers);
        
        }
        //////////////////////////////////////////////
        if (e.keyCode === upKey) {
            //pers.y(pers.y() - DELTA);
        } 
        //////////////////////////////////////////////
        if (e.keyCode === rightKey) 
        {
            //pers.x(pers.x() + DELTA  * getWay(pers));
            //pers.offsetX(pers.offsetX() + DELTA  * getWay(pers));
            //console.log(" offsetX + DELTA("+(DELTA  * getWay(pers))+") " + pers.offsetX()) ;
           goRight(pers);
            
        
        } 
        //////////////////////////////////////////////
        
        if (e.keyCode === downKey) {
            //pers.y(pers.y() + DELTA);
        } 
        //////////////////////////////////////////////
        if (e.keyCode === jumpKey) {
            pers.setAnimation('punch');
            pers.setFrameRate(8);
        } 
        //////////////////////////////////////////////
      //console.log("h:" + pers.frameIndex() + " w:" + pers.strokeWidth());
      e.preventDefault();
      layer.batchDraw();
    });
    
    container.addEventListener('keyup', function (e) {
      if (e.keyCode === leftKey) {
        pers.setAnimation('stand');
        //pers.x(pers.x() - DELTA);
      } else if (e.keyCode === upKey) {
        //pers.y(pers.y() - DELTA);
      } else if (e.keyCode === rightKey) {
        pers.setAnimation('stand');
      } else if (e.keyCode === downKey) {
        //pers.y(pers.y() + DELTA);
      } else if (e.keyCode === jumpKey) {
        pers.setAnimation('stand');
        pers.setFrameRate(2);
      }  else {
        return;
      }
      e.preventDefault();
      layer.batchDraw();
    });
}

function goRight(pers)
{
     pers.setAnimation('walk');
     pers.setFrameRate(4);
            
     console.log(" getWay " + getWay(pers)) ; 
     if(getWay(pers) < 0) 
     {
                //pers.offsetX(-34);
        pers.scaleX(pers.scaleX()*getWay(pers));//+2
        pers.x(pers.x()-34*pers.scaleX()); //x-68
                //console.log(" offsetX " + pers.offsetX()) ;  
     }
}

function goLeft(pers)
{
    pers.setAnimation('walk');
    pers.setFrameRate(4);
            
    console.log(" getWay " + getWay(pers)) ;
    if(getWay(pers) > 0) 
    {
                //развернулся, нужно ...
                
        pers.scaleX(pers.scaleX()*-1*getWay(pers));//-2
        pers.x(pers.x()-34*pers.scaleX()); //x+68
                //console.log(" offsetX " + pers.offsetX()) ;   
    }
}

function setParamPers(pers, name)
{
    pers.x(0);
    pers.y(0);
    pers.setAnimation('stand');
    pers.setAnimations(getPersAnimations());
    pers.setFrameRate(1);
    pers.setFrameIndex(0);
    pers.scale({
                    x: (name == 'pers1')?1:-1,
                    y: 1
                    });
    pers.name(name);
    pers.offsetX(0);
    //pers.fill('red');
}

function getWay(ob)
{
    var way;
    if(ob.scaleX()<0) way = -1; //l
    else way = 1;//r
       
    return way;
}

//function

function getPersAnimations()
{
    var animations = {
      stand: [
      // x, y, width, height (6 frames)
        101, 20, 101, 180,
        303, 20, 101, 180
      ],
      walk: [
      // x, y, width, height (6 frames)
        0, 20, 101, 180,
        101, 20, 101, 180,
        202, 20, 101, 180,
        303, 20, 101, 180
      ],
      punch: [
      // x, y, width, height (6 frames)
        91, 42, 48, 75,
        139, 42, 38, 75,
        179, 42, 51, 75
      ]
    };
    
    return animations;
} 
 

//battle();