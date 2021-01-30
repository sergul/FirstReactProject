export const deleteIndent = (str: string, indentCount = 4) => {
  const regExp = new RegExp(`^ {${indentCount}}`, "gm");
  return str.replace(regExp, "");
};