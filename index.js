function takeANumber(line, name){
  var length = line.length + 1; 
  return `Welcome, ${name}. You are number ${length} in line.`
}
function nowServing(line) {
  if (line.length == 0){
    return ("There is nobody waiting to be served!")
  } 
  else{
    var temp = line[0] ; 
    line.shift() ; 
    return temp ; 
  }
}