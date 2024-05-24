type ThreeForms = [string, string, string];
type TwoForms = [string, string];

function getNounPluralForm(a: number) {
  if (a % 10 === 1 && a % 100 !== 11) {
    return 0;
  } else if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)) {
    return 1;
  } else {
    return 2;
  }
}

export function pluralize(num: number, ...args: ThreeForms | TwoForms) {
  const forms = Array.prototype.slice.call(args, 1);

  let str;

  switch (forms.length) {
    case 1:
      throw new Error("Not enough forms");

    case 2:
      str = num > 1 ? forms[1] : forms[0];
      break;

    default:
      str = forms[getNounPluralForm(num)];
      break;
  }

  return str.replace(/%d/g, num);
}
