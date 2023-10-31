const ConvertDate = (date) => {
  let convertedDate = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(Date.parse(date));

  return convertedDate;
};

export default ConvertDate;
