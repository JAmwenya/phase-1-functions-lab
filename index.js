function distanceFromHqInBlocks(location) {
    //returns the number of blocks given a value
    const hq = 42;
    return Math.abs(location - hq);
}
// Convert distance to feet
function distanceFromHqInFeet(location) {
  const feet = 264;
  const distanceInBlocks = distanceFromHqInBlocks(location);

  return distanceInBlocks * feet;
  }

   //returns the number of feet traveled
  function distanceTravelledInFeet(start, destination) {
   const feet = 264;
    const distanceCovered = Math.abs(start - destination);
    return distanceCovered * feet;
  }

  //returns the fare for the customer
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    const flatFare = 25;
    if (distance <= 400) {
      return 0;
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      return flatFare;
    } else {
      return 'cannot travel that far';
    }
  }