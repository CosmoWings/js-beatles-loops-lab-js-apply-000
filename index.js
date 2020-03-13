// add solution here
function theBeatlesPlay(musicianArr,instruArr){
  let newArr = [];
  
  for (let i=0;i<musicianArr.length;i++){
    let strToPush = `${musicianArr[i]} plays the ${instruArr[i]}.`;
    newArr.push(strToPush);
  }
}

function johnLennonFacts