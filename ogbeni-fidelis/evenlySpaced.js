
function evenlySpaced(first, second, last) {
    //Provide your solution here

    if (first > second && first > last && second > last){
        return first - second == second - last;   
      }
      return last-second ==second - first;
    }
    // you can also try this
    // var num = (last +first)/2; return num == second;

evenlySpaced(2,4,6) // -> should return true
evenlySpaced(3,6,12) // -> should return false

module.exports = evenlySpaced;