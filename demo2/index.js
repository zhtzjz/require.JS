
require.config({
  paths:{
      moduleA:'module1'
  }
});

require(['moduleA'],function(mod){
    console.log(mod.math(2,5));
});
