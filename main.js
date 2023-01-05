//var touchEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    colrr = "green"
    widthh=5

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
       widthh= document.getElementById("width").value 

       colrr=document.getElementById("color").value 
      
     
        //Addictonal Activity ends

        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop

        
    }
 

    if(screen.width<996){
        canvas.height=screen.height-300
        
        canvas.width=screen.width-70
        document.body.style.overflow="hidden"
       

    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;


      
        ctx.beginPath();
        ctx.strokeStyle = colrr;
        ctx.lineWidth = widthh;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
       

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

