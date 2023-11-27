const createShip = (length, hitTimes = 0, sunk = false) => {
    let isHor;

    const hit = function () {
      this.hitTimes++;
      this.isSunk();
    }

    const isSunk = function() {
        if (this.hitTimes === this.length) {
            this.sunk = true;
        }
    }

    const changeDir = function(val) {
      if (val === true) {
        this.isHor = false;
      } else {
        this.isHor = true;
      }
    }

    return {
      length: length,
      hitTimes: hitTimes,
      sunk: sunk,
      hit: hit,
      isSunk: isSunk,
      surCells: [], //to store surrounding cells
      changeDir: changeDir,
    }
};
  
module.exports = createShip;
