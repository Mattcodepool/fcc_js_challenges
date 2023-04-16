function telephoneCheck(str) {
  //idea would be to use a regex
  return (/^1?\s?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/).test(str);
}
