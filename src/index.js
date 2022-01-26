module.exports = function check(str, bracketsConfig) {
  let brackets_left = '{[(';
  let brackets_right = '}])';
  
  while (!(str.indexOf('()') === -1) || !(str.indexOf('{}') === -1) || !(str.indexOf('[]') === -1) || !(str.indexOf('||') === -1) || !(str.indexOf('12') === -1) || !(str.indexOf('34') === -1) || !(str.indexOf('56') === -1) || !(str.indexOf('77') === -1) || !(str.indexOf('88') === -1)) {

    
    str = str.replace('()', '');
    str = str.replace('{}', '');
    str = str.replace('[]', '');
    str = str.replace('||', '');
    str = str.replace('12', '');
    str = str.replace('34', '');
    str = str.replace('56', '');
    str = str.replace('77', '');
    str = str.replace('88', '');    
  }
  //console.log(str);
  //console.log(str.length === 0);

  return str.length === 0;
};
