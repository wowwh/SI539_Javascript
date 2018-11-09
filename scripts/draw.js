//var touch =("createTouch" in document);
//var MoveEvent = touch ? "touchmove" : "mousemove"; 
window.addEventListener("touchmove mousemove",cs,false); 
var x,y;    
var z=7;
function show(){
    
    var canvas=document.getElementById("show");
    var context=canvas.getContext('2d');

    document.onkeyup=function(e){  
        // var canvas=document.getElementById("show");
        // var context=canvas.getContext('2d');
        // console.log(e.keyCode)
        e=e||window.event;  
        e.preventDefault(); 
        switch(e.keyCode){  
            case 38: 
                // console.log('up');
                z++;
                break; 
            case 40:
                // console.log('down');
                if(z>1){z--;}
                
                break;
            case 66:
                context.fillStyle="blue";
                // console.log('b');
                break;
            case 71:
                context.fillStyle="green";
                // console.log('g');
                break;
            case 82:
                context.fillStyle="red";
                // console.log('r');
                break;
            case 89:
                context.fillStyle="yellow";
                // console.log('y');
                break;
            case 32:
                context.clearRect(0,0,canvas.width,canvas.height);
                // console.log("ok!");
                break;
            }
        // console.log(e.keyCode);
        }


    context.save();
    context.beginPath(); 
    context.arc(x,y,z,0,Math.PI*2,true);
    context.closePath();

    // console.log(context.fillStyle);
    context.lineWidth=3;
    context.fill();
    

} 
function cs(event){   
var e=event||window.event;
    x=e.pageX;
    y=e.pageY;
show();
}
// b:66,g:71,r:82,y:89,up:38,down:40
