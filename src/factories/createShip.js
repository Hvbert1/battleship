const createShip = (length, hitTimes = 0, sunk = false) => {
    const hit = function () {
      this.hitTimes++;
    }
    const isSunk = function() {
        if (this.hitTimes === this.length) {
            this.sunk = true;
        }
    }
    return {
      length: length,
      hitTimes: hitTimes,
      sunk: sunk,
      hit: hit,
      isSunk: isSunk,
    }
  };
  
  module.exports = {
    createShip
  };