function palindrome(str) {
  //cleanup the string
  let arr = str.toLowerCase().split(/\_|\W|/);
  arr = arr.filter(item => item !== "");
  //cross check going from extremes to center
  for (let i = 0; i < arr.length; i++){
    if (arr[i] != arr[arr.length - i -1]){
      return false;
    }
  }
  return true;
}
