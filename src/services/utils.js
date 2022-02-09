export function firstLetterToUpperCase(string) {
  //checks if there is a string to capitalize which there might not be if it hasnt fetched from server yet
  if (!string) return '';
  const newString = string.charAt(0).toUpperCase() + string.slice(1);
  return newString;

}