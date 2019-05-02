export default (path:string='') => {
  return require(`./${path}`);
}