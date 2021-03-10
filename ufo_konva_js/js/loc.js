//********************************************
width = 600;
height = 480;
console.log(123456);
function draw(images) {
    //******************************************** ******************************************
    var bgGroup = new Konva.Group({
        x: 0,
        y: 0,
        draggable: false
    });
    var topGroup = new Konva.Group({
        x: 0,
        y: 0,
        draggable: false
    });
    var expGroup = new Konva.Group({
        x: 63,
        y: 5,
        draggable: false
    });
    var enrgGroup = new Konva.Group({
        x: 230,
        y: 5,
        draggable: false
    });
    //******************************************** ******************************************
    var panelTopBg = new Konva.Shape({
      sceneFunc: function(context) {
        pastFigure(context, [{x:0,y:0},{x:800,y:0},{x:800,y:30},{x:60,y:30},{x:60,y:60},{x:0,y:60}], "#0e193e");
        context.fillStrokeShape(this);
      },
      fill: '#0e193e'
    });
    
    var boxCur = 0;
    
    //******************************************** ******************************************
    var exp = 1000;
    var lvl =5;
    var lvlExp = lvl*1000;
    
    var expBar = new Konva.Rect({
        x: 0,
        y: 0,
        width: 150,
        height: 20,
        fill: '#0e193e',
        stroke: '#009846',
        strokeWidth: 3
    });
    expGroup.add(expBar);
    //******************
    var expProgressBar = new Konva.Rect({
        x: 0,
        y: 0,
        width: exp*150/lvlExp,
        height: 20,
        fill: '#009846'
    });
    expGroup.add(expProgressBar);
    //******************
    var expProgressVal = new Konva.Text({
        x: 0,
        y: 5,
        fill: '#fff',
        fontSize: '12',
        fontFamily: 'Arial',
        align:'center',
        width: 150,
        text: exp + ' / ' + lvlExp
    });
    expGroup.add(expProgressVal);
    //******************
    var lvlbox = new Konva.Shape({
        sceneFunc: function(context) {
            pastFigure(context, [{x:0,y:20},{x:30,y:20},{x:30,y:50},{x:15,y:45},{x:0,y:50}], "#009846");
            context.fillStrokeShape(this);
        },
        fill: '#009846',
        stroke: '#009846',
        strokeWidth: 3
    });
    expGroup.add(lvlbox);
    //******************
    var lvlVal = new Konva.Text({
        x: 0,
        y: 25,
        fill: '#fff',
        fontSize: '16',
        fontFamily: 'Arial',
        align:'center',
        width: 30,
        text: '5'
    });
    expGroup.add(lvlVal);
    //******************
    
    /*
    setInterval(function() 
    {
        exp = exp + 1300;
        
        if(exp>=lvlExp)
        {
            lvl++;
            exp = exp - lvlExp;
            lvlExp = lvl*1000;
            lvlVal.text(lvl);
            
        }
        expProgressVal.text(exp + ' / ' + lvlExp);
        expProgressBar.width(exp*150/lvlExp);
        expGroup.setZIndex(2);
        expGroup.draw();
        //fade.hide();
        //fade.draw();
        groupBox.draw();
        fade.setZIndex(500);
        groupBox.setZIndex(1000);
        
    }
    , 1500);*/
    
    //******************************************** ******************************************
    var maxEnrg = 50;
    var curEnrg = maxEnrg;
    
    var enrgBar = new Konva.Rect({
        x: 0,
        y: 0,
        width: 150,
        height: 20,
        fill: '#0e193e',
        stroke: '#008DD2',
        strokeWidth: 3
    });
    enrgGroup.add(enrgBar);
    //******************
    var enrgProgressBar = new Konva.Rect({
        x: 0,
        y: 0,
        width: curEnrg*150/maxEnrg,
        height: 20,
        fill: '#008DD2'
    });
    enrgGroup.add(enrgProgressBar);
    //******************
    var enrgProgressVal = new Konva.Text({
        x: 0,
        y: 5,
        fill: '#fff',
        fontSize: '12',
        fontFamily: 'Arial',
        align:'center',
        width: 150,
        text: curEnrg + ' / ' + maxEnrg
    });
    enrgGroup.add(enrgProgressVal);
    //******************
    var enrgIco = new Konva.Shape({
        sceneFunc: function(context) {
            pastFigure(context, [{x:10,y:5},{x:13,y:5},{x:9,y:9},{x:13,y:9},{x:5,y:17},{x:9,y:11},{x:5,y:11}], "#fff");
            context.fillStrokeShape(this);
        },
        fill: '#fff'
    });
    enrgGroup.add(enrgIco);
    
    enrgGroup.on(clickTouch, function () {
        enrgDecrease(5);
        bg();
        //layer.draw();
      });
    
    var timerId;
    
    function enrgDecrease(val)
    {
        curEnrg = curEnrg - val;
        if(curEnrg < 0) curEnrg = 0;
        if(curEnrg > maxEnrg) curEnrg = maxEnrg;
        if(curEnrg < 50) 
        {
            clearInterval(timerId);
            enrgUp();
        }
        enrgProgressBar.width(curEnrg*150/maxEnrg);
        enrgProgressVal.text(curEnrg + ' / ' + maxEnrg);
        enrgGroup.draw();
        
    }
    
    function enrgUp()
    {
            timerId = setInterval(function() {
            curEnrg = curEnrg + 1;
            
            if(curEnrg >= maxEnrg) 
            {
                curEnrg = maxEnrg;
                clearInterval(timerId);
            }
            enrgProgressBar.width(curEnrg * 150 / maxEnrg);
            enrgProgressVal.text(curEnrg + ' / ' + maxEnrg);
            enrgGroup.draw();
        }, 1000*60*5);
        
        
        enrgGroup.draw();
    }
    
    //******************************************** ******************************************
    
    
      var Bg = new Konva.Image({
        x: 0,
        y: 0,
        image: images.bg,
        width: 800,
        height: 480
      });
      
      bgGroup.add(Bg);
      //bgGroup.setZIndex(0);
      layer.add(bgGroup);
      stage.add(layer);
      
      
      layer.draw();
    
    
    
    var Ava = new Konva.Rect({
    	x: 5,
     	y: 5,
     	width: 50,
      	height: 50,
        fillPatternImage: images.ava,
        stroke: 'black',
        strokeWidth: 1
    });
    topGroup.add(Ava);
      
    topGroup.add(panelTopBg);
      
    topGroup.add(expGroup);
    topGroup.add(enrgGroup);
      
    Ava.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
    });
    Ava.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
    });
    Ava.on(clickTouch, function () {
        boxInfo(box[boxCur]['name'],0);
    });
      
    Ava.setZIndex(2);
    layer.add(topGroup);
    layer.draw();
    
    
    
    //********************************************
    var groupBox = new Konva.Group({
        x: 100,
        y: 50,
        draggable: true
    });
    
    var box = {};
    var contI = 0;
    
    box[contI++] = {name: 'inventory', 
                    container: new Konva.Shape({
                          sceneFunc: function(context) {
                            context.beginPath();
                            context.moveTo(0, 30);
                            context.lineTo(590, 30);
                            context.quadraticCurveTo(600, 30, 600, 40);
                            context.lineTo(600, 370);
                            context.quadraticCurveTo(600, 380, 590, 380);
                            context.lineTo(10, 380);
                            context.quadraticCurveTo(0, 380, 0, 370);
                            
                            context.closePath();
                            context.fillStrokeShape(this);
                          },
                          fill: '#F9E7C3',
                          stroke: '#6B6861',
                          strokeWidth: 1,
                          visible: false
                        }),
                  text: new Konva.Text({
                          x: 110,
                          y: 100,
                          text: 'Здесь будет инвентарь',
                          fontSize: 18,
                          fontFamily: 'Calibri',
                          fill: '#555',
                          width: 300,
                          padding: 20,
                          align: 'center',
                          visible: false
                        }), 
                  btn: new Konva.Shape({
                          sceneFunc: function(context) {
                            context.beginPath();
                            context.moveTo(0, 30);
                            context.lineTo(0, 5);
                            context.quadraticCurveTo(0, 0, 5, 0);
                            context.lineTo(100, 0);
                            context.quadraticCurveTo(105, 0, 105, 5);
                            context.lineTo(105, 30);
                            
                            context.closePath();
                            context.fillStrokeShape(this);
                          },
                          fill: '#EECAA6',//no active
                          stroke: '#6B6861',
                          strokeWidth: 1,
                          visible: false
                        }),
                  btnText: new Konva.Text({
                          x: 0,
                          y: 0,
                          text: 'Инвентарь',
                          fontSize: 18,
                          fontFamily: 'Calibri',
                          fill: '#555',
                          width: 100,
                          padding: 5,
                          align: 'center',
                          visible: false
                        })
                };
    box[contI++] = {name: 'char', 
                    container: new Konva.Shape({
                          sceneFunc: function(context) {
                            context.beginPath();
                            context.moveTo(0, 30);
                            context.lineTo(590, 30);
                            context.quadraticCurveTo(600, 30, 600, 40);
                            context.lineTo(600, 370);
                            context.quadraticCurveTo(600, 380, 590, 380);
                            context.lineTo(10, 380);
                            context.quadraticCurveTo(0, 380, 0, 370);
                            
                            context.closePath();
                            context.fillStrokeShape(this);
                          },
                          fill: '#F9E7C3',
                          stroke: '#6B6861',
                          strokeWidth: 1,
                          visible: false
                        }),
                  text: new Konva.Text({
                          x: 110,
                          y: 100,
                          text: 'Здесь будут статы',
                          fontSize: 18,
                          fontFamily: 'Calibri',
                          fill: '#555',
                          width: 300,
                          padding: 20,
                          align: 'center',
                          visible: false
                        }), 
                  btn: new Konva.Shape({
                          sceneFunc: function(context) {
                            context.beginPath();
                            context.moveTo(105, 30);
                            context.lineTo(105, 5);
                            context.quadraticCurveTo(105, 0, 110, 0);
                            context.lineTo(200, 0);
                            context.quadraticCurveTo(205, 0, 205, 5);
                            context.lineTo(205, 30);
                            
                            context.closePath();
                            context.fillStrokeShape(this);
                          },
                          fill: '#EECAA6',//no active
                          stroke: '#6B6861',
                          strokeWidth: 1,
                          visible: false
                        }),
                  btnText: new Konva.Text({
                          x: 100,
                          y: 0,
                          text: 'Инфо',
                          fontSize: 18,
                          fontFamily: 'Calibri',
                          fill: '#555',
                          width: 100,
                          padding: 5,
                          align: 'center',
                          visible: false
                        })
                };
                
            var fade =  new Konva.Rect({
                x: 0,
                y: 0,
                width: stage.width(),
                height: stage.height(),
                fill: '#000',
                opacity: 0.5,
                visible:false
            });
            
            layer.add(fade);
            fade.on(clickTouch, function () {
                boxInfo(box[boxCur]['name'],0);
            });
            
            for (var key in box)
            {
                groupBox.add(box[key]['container'],box[key]['text'],box[key]['btn'],box[key]['btnText']);
                layer.add(groupBox);
                
                  box[key]['btnText'].on('mouseenter', function () {
                    stage.container().style.cursor = 'pointer';
                  });
                  box[key]['btnText'].on('mouseleave', function () {
                    stage.container().style.cursor = 'default';
                  });
            } 
                  box[0]['btnText'].on(clickTouch, function () {
                    boxInfo(box[0]['name'],1);
                    boxCur = 0;
                  });
                  box[1]['btnText'].on(clickTouch, function () {
                    boxInfo(box[1]['name'],1);
                    boxCur = 1;
                  });
                  
      
            
            stage.add(layer);
            //layer.draw();
            
            //****************************************
    function boxInfo(name,ch)
    {
        fade.setZIndex(500);
        groupBox.setZIndex(1000);
        
        
        for (var key in box)
        {
            if(ch == 0)
            {
                if(box[key]['container'].isVisible() == false && box[key]['btn'].isVisible() == false)
                {//open
                    //box['BTN'+arg].setFill('#F9E7C3');//active
                    //box['INFO'+arg].setFill('#F9E7C3');//active
                    fade.show();
                    if(box[key]['name'] == name ) 
                    {
                        box[key]['btn'].setFill('#F9E7C3');//active
                        box[key]['text'].show();
                        box[key].container.show();
                    }
                    else
                    {
                        box[key]['btn'].setFill('#EECAA6');//no active
                        box[key]['text'].hide();
                        box[key].container.hide();
                    }
                    box[key]['btn'].show();
                    box[key]['btnText'].show();
                    groupBox.setX(100);
                    groupBox.setY(50);
                    
                }
                else
                {//close
                    box[key]['btn'].setFill('#EECAA6');//no active
                    box[key]['container'].hide();
                    box[key]['btn'].hide();
                    box[key]['btnText'].hide();
                    box[key]['text'].hide();
                    fade.hide();
                }
                layer.draw();
            }
            if(ch == 1)
            {
                if(box[key]['name'] == name ) 
                {
                    box[key]['btn'].setFill('#F9E7C3');//active
                    box[key].container.show();
                    box[key]['text'].show();
                }
                else
                {
                    box[key]['btn'].setFill('#EECAA6');//no active
                    box[key].container.hide();
                    box[key]['text'].hide();
                    
                }
                box[key].btn.show();
                box[key]['btnText'].show();
                layer.draw();
            }
            
        }
          
        
    }
}

//****************************************
function pastText(context, color, text, x, y, fontstyle)
{
    switch (fontstyle) {
        case 'h1':
            context.font = "bold 16px Verdana,sans-serif";
            break;
        case 'p':
            context.font = "14px Verdana,sans-serif";
            break;
        default:
            context.font = "bold 16px Verdana,sans-serif";
            break;                      
    }
    context.fillStyle = color;
    context.fillText(text, x, y);
}
//****************************************
function pastFigure(context, pointArr, fillStyle)
{
    context.beginPath();
    context.moveTo(pointArr[0].x,pointArr[0].y);
    for(var i = 0; i<pointArr.length; i++)
    {
        context.lineTo(pointArr[i].x,pointArr[i].y);
    }
    // Заливка
    context.fillStyle = fillStyle;
    context.fill();
    context.closePath();
    context.stroke();
}

//****************************************
    var imageBg = new Image();
    imageBg.onload = function() {
      var Bg = new Konva.Image({
        x: 0,
        y: 0,
        image: imageBg,
        //width: 800,
        height: 480
      });
      // add the shape to the layer
      //layer.add(Bg);
      // add the layer to the stage
      //layer.add(panelTop);
      stage.add(layer);
      Bg.setZIndex(0);
      layer.draw();
    };
 
 
imageBg.src = "https://cs8.pikabu.ru/post_img/big/2016/08/24/2/147200395612713356.jpg";//"https://habrastorage.org/files/98b/a12/467/98ba12467af3434595b10a1dfa4bde42.jpg";

draw(imageBg);//"https://cs8.pikabu.ru/post_img/big/2016/08/24/2/147200395612713356.jpg"