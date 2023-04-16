function rot13(str) {
  let tra = "";
  for (let i = 0; i < str.length; i++){
    let ch = str.charCodeAt(i);
    if (ch < 64 || ch > 90){ // for whatever reason couldn't get regex to work here, so stupid
      tra += str.charAt(i);
    }
    else {
      tra += String.fromCharCode(((str.charCodeAt(i) + 13) <= 90) ?
      str.charCodeAt(i) + 13 : (str.charCodeAt(i) + 13) % 90 + 64);
    }
  }
  return tra;
}
