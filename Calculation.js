// Wilson's Confidence Interval Thomas Yonaha-McCoy
let sampleArray = [{ id: 1, likes: 3, dislikes: 7 }, { id: 2, likes: 4, dislikes: 0 }, { id: 3, likes: 25, dislikes: 30 }, { id: 4, likes: 10, dislikes: 2 },] //array of comments (objects) which would be fetched as JSON from DB
lowerBoundary = (likes,dislikes,id) => { //intervalFunction (lower boundary)
  n = likes + dislikes //Sample size
  z = 1.64485 //90% (quantile of standard normal distribution)
  p = likes / n //like to dislike ratio (sample success rate)
  
  // calculationResult = ((p + 1 / (2 * n) * (z**2)) - (z * Math.sqrt((p * (1 - p) / n) + ((z**2))))) / (4 * (n**2))  //transcription of equation

  topPart = p + 1 / (2 * n) * (z**2)-z * Math.sqrt((p * (1 - p) / n) + ((z**2) / (4 * (n**2)))) //top part of transcribed equation
  bottomPart = 1 + 1 / n * (z**2) //bottom part of transcribed equation
  
  calculationResult = topPart/bottomPart //final result

  return calculationResult
}
// upperBoundary = (likes,dislikes,id) => { //intervalFunction (lower boundary)
//   n = likes + dislikes //Sample size
//   z = 1.2816 //90% (quantile of standard normal distribution)
//   p = likes / n //like to dislike ratio (sample success rate)
  
//   calculationResult = (p + ((z ^ 2) / (2 * (n))) + z * Math.sqrt((p * (1 - p) / n) + ((z ^ 2) / (4 * (n ^ 2)))) / (1 + ((z ^ 2) / n))) //transcription of equation

//   return { calculationResult, id }
// }

const lower = sampleArray.map(element => lowerBoundary(element.likes, element.dislikes,element.id)) //mapping all results to a new array
console.log(lower)
// const higher = sampleArray.map(element => upperBoundary(element.likes, element.dislikes, element.id))
// console.log(higher)