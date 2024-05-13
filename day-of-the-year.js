function dayOfTheYear(date) {
    const startOfYear = new Date(Date.UTC(date.getUTCFullYear(), 0, 1)); // Create a new UTC Date object for the 1st of January of the same year
    const input = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())); // Create a new UTC Date object for the 1st of January of the same year
    const diffTime = input - startOfYear; // Calculate the time difference in milliseconds
    const diffDays = (diffTime / (1000 * 60 * 60 * 24)); // Convert the time difference to days, rounding up
  
    return diffDays+1;
  }
