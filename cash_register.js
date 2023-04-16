function checkCashRegister(price, cash, cid) {
  const UNIT_AMOUNT = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
	"FIFTY": 50.00,
    "ONE HUNDRED": 100.00
  }
  let avalCash = 0;

  for (const element of cid) {
    avalCash += element[1];
  }
  avalCash = avalCash.toFixed(2);

  let due = cash - price;
  const rest = [];
  if (due > avalCash) {
    return { status: "INSUFFICIENT_FUNDS", change: rest };
  } else if (due.toFixed(2) === avalCash) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    for (let elem of cid) {
      let temp = [elem[0], 0];
      while (due >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
        temp[1] += UNIT_AMOUNT[elem[0]];
        elem[1] -= UNIT_AMOUNT[elem[0]];
        due -= UNIT_AMOUNT[elem[0]];
        due = due.toFixed(2);
      }
      if (temp[1] > 0) {
        rest.push(temp);
      }
    }
  }
  if (due > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: rest};
}
