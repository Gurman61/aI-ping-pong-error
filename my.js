Wristx = "";
Wristy = "";
Score = "";

function setup()
{
    canvas = createCanvas(430,500);
    canvas.parent("canvas");

    video = createCapture(VIDEO);
    video.size(800,400);
    video.parent("game_console");

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log('Model Is Loaded!');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	console.log(results);
    Wristx = results[0].pose.rightWrist.x;
    Wristy = results[0].pose.rightWrist.y;
    Score  = 
  }
}