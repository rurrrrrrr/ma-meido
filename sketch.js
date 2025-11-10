let x;
let y;
let vy;
let vx;
let g;
let r;

function setup() {
    createCanvas(400, 400);
    x=20;
    y=0;
    vy=20;
    vx=100;
    r=20;
    g=1;
}

function draw() {
    background(0,0,0,1);

    x = x + vx;
    vy = vy + g;
    y= y + vy;

    if (y > height - r) {
        y = height - r
        vy= -vy* 0.9;

    }
    if (x<r) {
        x=r;
        vx=-vx;
    }

    if (x>width - r) {
        x=width - r;
        vx=-vx;
    }
    fill(random(0), random(0),random(255));
    circle(x,y,r * 5);
}
