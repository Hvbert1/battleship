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

    const setIsHor = function(val) {
      let i = 0;
      console.log(++i);
      console.log("old orientation: " + val);
      if (val === true) {
        this.isHor = false;
        console.log("new orientation: " + val);
      } else {
        this.isHor = true;
        console.log("new orientation: " + val);
      }
    }

    return {
      length: length,
      hitTimes: hitTimes,
      sunk: sunk,
      hit: hit,
      isSunk: isSunk,
      surCells: [], //to store surrounding cells
      setIsHor: setIsHor,
    }
};
  
module.exports = createShip;
