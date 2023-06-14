export const formatNumber = (number) => {
  // Check if the number is valid
  if (typeof number !== "number" || isNaN(number)) {
    return "";
  }

  // Format the number with commas for thousands separator
  const formattedNumber = number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedNumber;
};
