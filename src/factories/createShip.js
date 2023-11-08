const createShip = (length, hitTimes = 0, sunk = false) => {
    const hit = function () {
      this.hitTimes++;
    }
    return {
      length: length,
      hitTimes: hitTimes,
      sunk: sunk,
      hit: hit,
    }
  };
  
  module.exports = {
    createShip
  };