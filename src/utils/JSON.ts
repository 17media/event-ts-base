export const parseJSON = (stringLikeJSON = '') =>
  new Function(`return ${stringLikeJSON}`)(); // tslint:disable-line no-function-constructor-with-string-args

export const stringify = (jsonObj: Object) => JSON.stringify(jsonObj, null, 2);
