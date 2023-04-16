function convertToRoman(num) {
  if (isNaN(num))
          return NaN;
    let num_lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman = '';
    for ( let i in num_lookup ) {
      while ( num >= num_lookup[i] ) {
        roman += i;
        num -= num_lookup[i];
      }
    }
    return roman;
  }
