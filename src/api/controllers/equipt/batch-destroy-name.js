module.exports = {


    friendlyName: 'Batch Destroy By Name',
  
  
    description: 'Batch destroy the data of chosen equipt. using Equipt. name',
  
  
    inputs: {
        name: {type:'json',columnType:'array',required:true}, // 器材ID
    },
  
    
    exits: {
      success: {
        responseType: 'ok'
      },
      err: {
        responseType: 'err'
      },
      warning: {
        responseType: 'warning'
      }
    },
  
  
    fn: async function (inputs,exits) {
      var failed = 0; 
      for(let i in inputs.name){
        try {
              await new Promise(async (resolve, reject)=>{
              var _update = await Equipt.update({
                name:inputs.name[i]
              }).set({active: false}).fetch()
              if(_update.length){
                resolve(_update);
                if(i == inputs.name.length-1){
                  doneFunc();
                }
              }else{
                reject("Error: Database cannot set the info that user provided");
              }
            })}catch(e){
              failed++;
              if(i == inputs.name.length-1){
                doneFunc();
              }
            }
      }
      
      // All done.
      function doneFunc(){
        if(!failed)
          return exits.success();
          
          return exits.warning(
            `有${failed}個器材更動失敗，請檢查ID是否正確或聯絡資訊人員。`
          )
    }
    }
  
  
  };
  