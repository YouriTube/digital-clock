var numbers = [0,1,2,3,4,5,6,7,8,9];
var selectedNumber = numbers[9];
var widthHeight ={w:50,h:5};
var rectColors ={r:195,g:252,b:252};
var timeCol= {hr:'',min:'',sec:''};
var startPoint ={x:50,y:50};
var numberRegions={
    0:['horizontal_up','horizontal_below','vertical_right_top','vertical_right_below','vertical_left_top','vertical_left_bottom','vertical_right_bottom'],
    1:['vertical_right_top','vertical_right_bottom'],
    2:['horizontal_up','horizontal_below','horizontal_middle','vertical_right_top','vertical_left_bottom'],
    3:['horizontal_up','horizontal_below','horizontal_middle','vertical_right_top','vertical_right_bottom'],
    4:['horizontal_middle','vertical_right_top','vertical_right_bottom', 'vertical_right_top','vertical_left_top'],
    5:['horizontal_up','horizontal_middle','horizontal_below', 'vertical_left_top', 'vertical_right_bottom' ],
    6:['vertical_left_top', 'vertical_left_bottom', 'horizontal_below', 'vertical_right_bottom', 'horizontal_middle' ],
    7:['horizontal_up','vertical_right_top','vertical_right_bottom'],
    8:['horizontal_up','horizontal_below','horizontal_middle','vertical_right_top','vertical_right_below','vertical_left_top','vertical_left_bottom','vertical_right_bottom'],
    9:['horizontal_up','horizontal_below','horizontal_middle','vertical_right_top','vertical_right_below','vertical_left_top','vertical_right_bottom'],
}
var dotColor = [{r:195,g:252,b:252},{r:58,g:76,b:76}];
var selectedDotColor = dotColor[0];
var dimLine = {r:10,g:10,b:10};
var brightLine ={r:195,g:252,b:252};
function setup() {
    createCanvas(1200,300);
}
function draw() {
    background(0);
    rectColors ={r:195,g:252,b:252};
    selectedDotColor = dotColor[isEven(timeCol.sec)];
    var d = new Date();
    timeCol.hr = d.getHours();
    timeCol.min = d.getMinutes();
    timeCol.sec = d.getSeconds();
    
    if(typeof (''+ timeCol.hr )[1] === 'undefined'){
        timeCol.hr = '0'+ timeCol.hr;
    }
    drawFirst((''+ timeCol.hr )[0],50);
    drawFirst((''+ timeCol.hr )[1],200);
    
    
    fill(selectedDotColor.r,selectedDotColor.b,selectedDotColor.g);
    rect(350, 140, 20, 20);
    fill(selectedDotColor.r,selectedDotColor.b,selectedDotColor.g);
    rect(350, 200, 20, 20);
    
    if(typeof (''+ timeCol.min )[1] === 'undefined'){
         timeCol.min = '0'+ timeCol.min;
    }
    drawFirst((''+ timeCol.min )[0],420);
    drawFirst((''+ timeCol.min )[1],550);

    fill(selectedDotColor.r,selectedDotColor.b,selectedDotColor.g);
    rect(700, 140, 20, 20);
    fill(selectedDotColor.r,selectedDotColor.b,selectedDotColor.g);
    rect(700, 200, 20, 20);
    
    if(typeof (''+ timeCol.sec )[1] === 'undefined'){
        timeCol.sec = '0'+ timeCol.sec;
    }
    drawFirst((''+ timeCol.sec )[0],750);
    drawFirst((''+ timeCol.sec )[1],900);
}
function drawFirst(selectedNumber,xCo){   
    // vertical_left_top
    timeChecker(selectedNumber,'vertical_left_top') > -1?rectColors =brightLine:rectColors =dimLine;
    startPoint ={x:xCo,y:50};
    fill(rectColors.r,rectColors.g,rectColors.b);
    rect(startPoint.x, startPoint.y, widthHeight.h, widthHeight.w,20);
    fill(rectColors.r,rectColors.g,rectColors.b);
    rect(startPoint.x, startPoint.y + 50, widthHeight.h, widthHeight.w,20);
    
//    //vertical_left_bottom
    timeChecker(selectedNumber,'vertical_left_bottom') > -1 ?rectColors =brightLine:rectColors =dimLine;
    fill(rectColors.r,rectColors.g,rectColors.b);
    rect(startPoint.x, startPoint.y + 100, widthHeight.h, widthHeight.w,20);
    fill(rectColors.r,rectColors.g,rectColors.b);
    rect(startPoint.x, startPoint.y + 150, widthHeight.h, widthHeight.w,20);
    
    
//    ////horizontal_up
   timeChecker(selectedNumber,'horizontal_up') > -1?rectColors =brightLine:rectColors =dimLine;
    fill(rectColors.r,rectColors.g,rectColors.b);
    rect(startPoint.x, startPoint.y, widthHeight.w, widthHeight.h,20); //top horizontal left
    fill(rectColors.r,rectColors.g,rectColors.b);
    rect(startPoint.x + 50, startPoint.y, widthHeight.w, widthHeight.h,20); //top horizontal right
    
//    
//    //horizontal_middle 
    timeChecker(selectedNumber,'horizontal_middle') > -1?rectColors =brightLine:rectColors =dimLine;
    fill(rectColors.r,rectColors.g,rectColors.b);
    rect(startPoint.x, startPoint.y + 100, widthHeight.w, widthHeight.h,20);
    fill(rectColors.r,rectColors.g,rectColors.b);
    rect(startPoint.x + 50, startPoint.y + 100, widthHeight.w, widthHeight.h,20);
    
//    //horizontal_below
    timeChecker(selectedNumber,'horizontal_below') > -1?rectColors ={r:195,g:252,b:252}:rectColors =dimLine;
    fill(rectColors.r,rectColors.g,rectColors.b);
    rect(startPoint.x, startPoint.y + 200, widthHeight.w, widthHeight.h,20);
    fill(rectColors.r,rectColors.g,rectColors.b);
    rect(startPoint.x + 50, startPoint.y + 200, widthHeight.w, widthHeight.h,20);
    
    
    
//    //vertical_right_top
    timeChecker(selectedNumber,'vertical_right_top') > -1?rectColors =brightLine:rectColors =dimLine;
    fill(rectColors.r,rectColors.g,rectColors.b);
    rect(startPoint.x + 100, startPoint.y, widthHeight.h, widthHeight.w,20);
    fill(rectColors.r,rectColors.g,rectColors.b);
     rect(startPoint.x + 100, startPoint.y + 50, widthHeight.h, widthHeight.w,20);
//    
//    //vertical_right_bottom
    timeChecker(selectedNumber,'vertical_right_bottom') > -1 ?rectColors =brightLine:rectColors =dimLine;
    fill(rectColors.r,rectColors.g,rectColors.b);
    rect(startPoint.x + 100, startPoint.y + 100, widthHeight.h, widthHeight.w,20);
    fill(rectColors.r,rectColors.g,rectColors.b);
    rect(startPoint.x + 100, startPoint.y + 150, widthHeight.h, widthHeight.w,20);

}


function timeChecker(num,region){
    if(!!numberRegions[num])
        return  numberRegions[num].indexOf(region);
}
function isEven(n){
    return n % 2;
}
function isOdd(n){
    return Math.abs( n % 2);
}