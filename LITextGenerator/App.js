function generate(){
    var str = "pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor";
    var strArray = str.split(" ");
    var finalStr = "";
    for(i=0;i<document.getElementById('number').value;i++){
        var x= Math.floor(Math.random()*20);
        finalStr = finalStr + strArray[x]+" ";
    }
    document.getElementById('textA').value = finalStr;
}
