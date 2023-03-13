window.onload = function(){

    /*SideBar*/
    let menu = document.getElementById('menu');
    let closeScreen = document.getElementById('screen');
    menu.addEventListener('click', openNav);
    closeScreen.addEventListener('click', openNav);
    
    /*Square IDLE*/
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    let x = 215;
    let y = 215;
    let Xspeed = 100;
    let Yspeed = 100;
    let t = Date.now();
    let Xdir = 1;
    let Ydir = 1;

    function draw(){
        let timePassed = (Date.now() - t) / 1000;
        t = Date.now();
        let fps = Math.round(1 / timePassed);

        context.clearRect(0, 0, 500, 500);

        context.font = '16px Arial';
        context.fillStyle = 'black';
        context.fillText('FPS: ' + fps, 10, 20);

        context.beginPath();
        context.rect(x, y, 75, 75);
        context.fillStyle = 'red';
        context.fill();

        x += Xdir * (Xspeed * timePassed);
        y += Ydir * (Yspeed * timePassed);

        if(x >= 500 - 75){
            Xdir = -1;
            Xspeed = Math.random() * (200);
            Yspeed = Math.random() * (200);
        }
        
        if(x <= 0){
            Xdir = 1;
            Xspeed = Math.random() * (200);
            Yspeed = Math.random() * (200);
        }

        if(y >= 500 - 75){
            Ydir = -1;
            Xspeed = Math.random() * (200);
            Yspeed = Math.random() * (200);
          
        }
        
        if(y <= 0){
            Ydir = 1;
            Xspeed = Math.random() * (200);
            Yspeed = Math.random() * (200);
            
        }
        
        window.requestAnimationFrame(draw);
    }

    function ui(){

        context.beginPath();
        context.arc(250, 250, 1, 0, 2 * Math.PI);
        context.fillStyle = 'black';
        context.fill();

        window.requestAnimationFrame(ui);

    }

    
    draw();
    ui();

}

/*Side Nav functionality*/
let count = -1;

function openNav(){

    if(count == -1){
        document.getElementById('Sidebar').style.width = '300px';
        document.getElementById('screen').style.display = 'block';
    }

    if(count == 1){
        document.getElementById('Sidebar').style.width = '0';
        document.getElementById('screen').style.display = 'none';
    }

    if(count == 1){
        count = -1;
    }
    else{
        count = 1;
    }
}

/*Square IDLE*/