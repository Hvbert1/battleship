const createShip = (length, hitTimes = 0, sunk = false) => {
    const hit = function () {
      this.hitTimes++;
      this.isSunk();
    }
    const isSunk = function() {
        if (this.hitTimes === this.length) {
            this.sunk = true;
            console.log(" Ship is sunk!")
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
  
module.exports = createShip;
