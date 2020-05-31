export const repeat = (str, delimiter, count) => {
  const repeatedWithTrailingDelimiter = (str + delimiter).repeat(count);
  return repeatedWithTrailingDelimiter.slice(
    0,
    repeatedWithTrailingDelimiter.length - delimiter.length
  );
};
