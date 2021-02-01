export const deleteIndent = (str: string, indentCount = 2) => {
  const regExp = new RegExp(`^ {${indentCount}}`, "gm");
  return str.replace(regExp, "");
};

