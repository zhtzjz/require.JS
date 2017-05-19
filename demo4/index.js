
require.config({
  baseUrl:'js/',
  paths:{
      moduleA:'module1',
      moduleB:'module2'
  }
});

require(['moduleB'],function(mod){
    console.log(mod.num);
});
