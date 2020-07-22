class Marker {
  constructor(color) {
    this.color = color;
    this.inkAmount = 100;
  }

  print(textToPrint) {
    if (textToPrint.length < (this.inkAmount / 2)) {
      const body = document.querySelector("body");
      const span = document.createElement('span');
      span.style.color = this.color;
      span.append(textToPrint);
      body.append(span);

      
      this.inkAmount -= textToPrint.length * 2;
    } else {
      alert(`Not enough ink, left for ${this.inkAmount / 2} symbols`);
    }
  }
}

const blueMarker = new Marker('blue');

blueMarker.print('Hello');
blueMarker.print('Hello Hello');
blueMarker.print('Hello Hello Hello');
blueMarker.print('Hello Hello');
blueMarker.print('Hello 1');

class RechargeableMarker extends Marker {
  recharge(rechargeAmount) {
    const amountAfterCharge = this.inkAmount + rechargeAmount

    if (this.inkAmount < 100 && amountAfterCharge > 100) {
      alert('Не можливо заправити!');
    } else {
      this.inkAmount += amountAfterCharge;
    }
  }
}

const redRechargebleMarker = new RechargeableMarker('red');

redRechargebleMarker.print('Hello Hello Hello Hello');
redRechargebleMarker.print('Hello Hello Hello Hello');
redRechargebleMarker.recharge(50);

redRechargebleMarker.print('Hello Hello Hello Hello');