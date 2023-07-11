function setup(){
//**ITS BECZ OF MY KEYBOORD */
vid=createCapture(VIDEO)
canvas=createCanvas(500,500)
canvas.position(900,100)
my_model = ml5.poseNet(vid,modelLoaded) 
my_model.on('pose',gotPoses)
} 

function modelLoaded(){
console.log("Your Model has loaded")
}

nx=0;
ny=0;
lwx=0;
rwx=0;
gap=0;

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        nx=results[0].pose.nose.x
        ny=results[0].pose.nose.y
        lwx=results[0].pose.leftWrist.x
        rwx=results[0].pose.rightWrist.x
        console.log("X position of ur nose is", nx)
        console.log("Y position of ur nose is", ny)
        console.log("X position of ur left wrist is", lwx)
        console.log("X position of ur right wrist is", rwx)
        gap= floor(lwx-rwx);
        console.log("The gap between ur wrists are",gap)
}}

function draw(){
    background("black")
    fill ("red")
    square(nx,ny,gap)
}