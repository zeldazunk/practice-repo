function myFunction(){
  var x=document.getElementById("textarea").value;
  var averageWords=0;
  var spaceCounter=0;
  var sentenceCounter=0;
  var wordCounter=1;
  for(var i=0;i<=x.length;i++){
    if(x[i]==' '){
      spaceCounter++;
      wordCounter++;
  }
    if(x[i]=='.'||x[i]=='?'||x[i]=='!'){
      sentenceCounter++
    }

}
averageWords=wordCounter/sentenceCounter;
document.getElementById("row1").innerHTML='average words '+averageWords;
document.getElementById("row2").innerHTML='space '+spaceCounter;
document.getElementById("row3").innerHTML='words '+wordCounter;
document.getElementById("row4").innerHTML='sentences '+sentenceCounter;
}
