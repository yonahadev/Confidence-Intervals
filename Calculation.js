// Wilson's Confidence Interval Thomas Yonaha-McCoy
let sampleArray = [ //sample array of comments (objects) which would be fetched as JSON from DB
  { id: 1, likes: 3, dislikes: 7 },
  { id: 2, likes: 4, dislikes: 0 },
  { id: 3, likes: 25, dislikes: 30 },
  { id: 4, likes: 10, dislikes: 2 },] 

wilsonCI = (likes, dislikes, id) => { //intervalFunction (lower boundary)
  n = likes + dislikes //Sample size
  z = 1.64485 //90% (quantile of standard normal distribution)
  p = likes / n //like to dislike ratio (sample success rate)

  //parts of transcribed equation - now seperated to three parts for efficiency
  leftPart = p + 1 / (2 * n) * (z**2)
  rightPart = z * Math.sqrt((p * (1 - p) / n) + ((z**2) / (4 * (n**2)))) 
  bottomPart = 1 + 1 / n * (z ** 2) 
  
  lowerBoundResult = (leftPart - rightPart) / bottomPart
  upperBoundResult = (leftPart + rightPart) / bottomPart

  return { lowerBoundResult,upperBoundResult, id } //object containing new data
}

//mapping all results to a new array
const results = sampleArray.map(element => wilsonCI(element.likes, element.dislikes,element.id)) 
console.log(results)