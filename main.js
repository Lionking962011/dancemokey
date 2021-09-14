function start()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/kA4F-80yW/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    } 
    else{
       r = Math.floor(Math.random*255)+1;
       g = Math.floor(Math.random*255)+1;
       b = Math.floor(Math.random*255)+1;

       document.getElementById("sound_play").innerHTML = results[0].label;
       document.getElementById("percentage").innerHTML = (results[0].confidence*100).toFixed(2)+"%";
       document.getElementById("sound_play").style.color = "rgb("+r+","+g+","+b+")";
       document.getElementById("percentage").style.color = "rgb("+r+","+g+","+b+")";

       img1 = document.getElementById("1");
       img2= document.getElementById("2");
       img3 = document.getElementById("3");
       img4 = document.getElementById("4");

       if(results[0].label == "Clap")
       {
           img1.src = "/img/1/aliens-04.gif";
           img2.src = "/img/2/aliens-02.png";
           img3.src = "/img/3/aliens-03.png";
           img4.src = "/img/4/aliens-01.png";
       }
       else if(results[0].label == "Bell")
       {
           img1.src = "/img/1/aliens-04.png";
           img2.src = "/img/2/aliens-02.gif";
           img3.src = "/img/3/aliens-03.png";
           img4.src = "/img/4/aliens-01.png";
       }
       else if(results[0].label == "Snapping")
       {
           img1.src = "/img/1/aliens-04.png";
           img2.src = "/img/2/aliens-02.png";
           img3.src = "/img/3/aliens-03.gif";
           img4.src = "/img/4/aliens-01.png";
       }
       else
       {
           img1.src = "/img/1/aliens-04.png";
           img2.src = "/img/2/aliens-02.png";
           img3.src = "/img/3/aliens-03.png";
           img4.src = "/img/4/aliens-01.gif";
       }
    }
}