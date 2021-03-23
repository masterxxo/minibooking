function prepareDateKey(date) {
  const dateObj = new Date(date);
  const month = dateObj.getUTCMonth() + 1;
  const year = dateObj.getUTCFullYear();
  return `${month}/${year}`;
}

function sortKeys(keys) {
  return keys.sort((a, b) => {
    const firstKey = a.split('/').reverse().join('');
    const secondKey = b.split('/').reverse().join('');

    return firstKey.localeCompare(secondKey);
  });
}

function prepareFinalData(bookingsDates) {
  const bookingsData = {};

  for (let i = 0; i < bookingsDates.length; i += 1) {
    const date = bookingsDates[i];
    if (!(date in bookingsData)) {
      bookingsData[date] = 1;
    } else {
      bookingsData[date] += 1;
    }
  }

  return bookingsData;
}

export {
  prepareDateKey,
  sortKeys,
  prepareFinalData,
};
