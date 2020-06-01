
export function amount(gross, year) {

  // Returns the income tax payable

  return incomeTax(gross, year);
}

export function net(gross, year) {

  // Returns the net income

  return gross - amount(gross, year);
}

function incomeTax(gross, year) {

  // Returns the resident tax amount for the given financial year
  // Default is currently 2020 or 2019 (both have the same tax rates)

  if ( year === 2020 || year === 2019 || year === undefined ) {

    // Checks the income threshold applicable and returns the tax payable
    
    if ( gross <= 18200 ) {
      return 0;
    }

    else if ( gross > 18200 && gross <= 37000 ) {
      return (gross - 18200) * 0.19;
    }

    else if ( gross > 37000 && gross <= 90000 ) {
      return 3572 + ((gross - 37000) * 0.325);
    }

    else if ( gross > 90000 && gross <= 180000 ) {
      return 20797 + ((gross - 90000) * 0.37);
    }

    else {
      return 54097 + ((gross - 180000) * 0.45);
    }
  }

  else if ( year === 2018 ) {

    // Checks the income threshold applicable and returns the tax payable
    
    if ( gross <= 18200 ) {
      return 0;
    }

    else if ( gross > 18200 && gross <= 37000 ) {
      return (gross - 18200) * 0.19;
    }

    else if ( gross > 37000 && gross <= 87000 ) {
      return 3572 + ((gross - 37000) * 0.325);
    }

    else if ( gross > 87000 && gross <= 180000 ) {
      return 19822 + ((gross - 87000) * 0.37);
    }

    else {
      return 54232 + ((gross - 180000) * 0.45);
    }
  }
}