
require.config({
  baseUrl:'js/',
  paths:{
      moduleA:'module1',
      jquery:'jquery-1.11.1.min'
  },
  shim:{
      jquery:{
          deps:[],
          exports:'$'
      }
  }
});

require(['moduleA'],function(mod){
    mod.append();
});
