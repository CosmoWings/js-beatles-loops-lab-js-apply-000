// add solution here
function theBeatlesPlay(musicianArr,instruArr){
  let newArr = [];
  
  for (let i=0;i<musicianArr.length;i++){
    let strToPush = `${musicianArr[i]} plays the ${instruArr[i]}.`;
    newArr.push(strToPush);
    return newArr;
  }
}

function johnLennonFacts(factsArr){
  let newFactsArr = [];
  let i=0;
  while (i<factsArr.length){
    let strToPush = factsArr[i] + "!!!";
    newFactsArr.push(strToPush);
    i=i+1;
  }
  return newFactsArr;
}

function iLoveTheBeatles(num){
  
}