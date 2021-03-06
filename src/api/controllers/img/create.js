const fs = require('fs');
module.exports = {


    friendlyName: 'Upload Img.',
  
  
    description: 'A tool to let admin upload img.',

    files:['file'],
  
    inputs: {
  
      title: {type: "string", required: true, friendlyName:"The userfriendly title for the image" }, // 圖片標題
      description:{type: "string", required: true ,friendlyName:"description of the image"}, // 描述
      file: {type:"ref", required:true, friendlyName:"The file to upload"}, // 檔案

    },
  
    
    exits: {
      success: {
        responseType: 'ok'
      },
      err: {
        responseType: 'err'
      }
    },
  
  
    fn: async function (inputs,exits) {
      let fileReg =  /(.*?)\.(jpg|bmp|jpeg|png)$/;
      // upload the file
      inputs.file.upload({
        maxBytes: 1000000000,
        
        dirname: require('path').resolve(sails.config.appPath, 'assets/images'),
      },async function(err, uploaded){
        if(err){
          sails.log.error(err);
          return exits.err(900)}
        try{ 
          if(!uploaded[0].fd.match(fileReg)){
            fs.unlinkSync(require('path').resolve(sails.config.appPath, 'assets/images/'+uploaded[0].fd.split("/images/")[1]));
            return exits.err(904);
          }
          let _img = await Image.create({
              title: inputs.title,
              description: inputs.description,
              file: uploaded[0].fd.split("/images/")[1]
            }).fetch();

            return exits.success(_img);
          }
        catch(err){
          try{
            fs.unlinkSync(require('path').resolve(sails.config.appPath, 'assets/images/'+uploaded[0].fd.split("/images/")[1]));
          }catch(e){
            sails.log.error(e);
          }
          return exits.err(901);
        }
        })
    
    }
  
  
  };
  