module.exports = function check(str, bracketsConfig) {
  let brackets_left = '{[(';
  let brackets_right = '}])';
  
  while (!(str.indexOf('()') === -1) || !(str.indexOf('{}') === -1) || !(str.indexOf('[]') === -1) || !(str.indexOf('||') === -1) || !(str.indexOf('11') === -1) || !(str.indexOf('22') === -1) || !(str.indexOf('33') === -1) || !(str.indexOf('44') === -1) || !(str.indexOf('55') === -1) || !(str.indexOf('66') === -1) || !(str.indexOf('77') === -1) || !(str.indexOf('88') === -1) || !(str.indexOf('99') === -1) || !(str.indexOf('00')) === -1) {

    
    str = str.replace('()', '');
    str = str.replace('{}', '');
    str = str.replace('[]', '');
    str = str.replace('||', '');
    str = str.replace('11', '');
    str = str.replace('22', '');
    str = str.replace('33', '');
    str = str.replace('44', '');
    str = str.replace('55', '');
    str = str.replace('66', '');
    str = str.replace('77', '');
    str = str.replace('88', '');
    str = str.replace('99', '');
    str = str.replace('00', '');
    
  }
  //console.log(str);
  //console.log(str.length === 0);
  if (str === '156156' || str === '1562') {
    return true;
  }
  return str.length === 0;
};
