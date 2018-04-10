const glob = require('glob')
var path = require('path')
let utils = require('./build/utils')
console.log(utils.getMultiEntry('pages'))


// let str = './src/pages/sub/page1/index.js'

// str = str.replace(/^\.\/src\/(.*)\.js$/, '$1')
// console.log(str)


var entries = {},
    basename, tmp, pathname
    globPath ='./src/pages/**/**/*.js'

glob.sync(globPath).forEach(function (entry) {
  basename = path.basename(entry, path.extname(entry));
  tmp = entry.split('/').splice(-4);
  var pathsrc = tmp[0]+'/'+tmp[1];
  if( tmp[0] == 'src' ){
    pathsrc = tmp[1];
  }
//console.log(pathsrc)
  pathname = pathsrc + '/' + basename; // 正确输出js和html的路径
  entries[pathname] = entry;
  //console.log(pathname+'-----------'+entry);
});
console.log(entries)
