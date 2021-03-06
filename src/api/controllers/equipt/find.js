module.exports = {


  friendlyName: 'Find',


  description: 'Find equipt.',


  inputs: {

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
    //取得所有特殊檔期
    let closedCat = undefined;
    if(this.req.session.dateRange)
    closedCat = await sails.helpers.specialEventArrayHelper(this.req.session.dateRange);
    // 取得所有器材資料
      let data = await Equipt.find({});

    //管理員仍能看到所有器材 available 2為隱藏，管理員將看到4為隱藏的器材
    if(this.req.session.user?.admin){
      let dataTmp = new Array();
      data.forEach(element=>{
        if(element.available == 2){
          element.available = 4;
          dataTmp.push(element);
        }
      })
      data.concat(dataTmp);
    }
      data = data.filter(data=>{
        return data.available != 2;
      })
      if(closedCat){
        data.forEach((element, index)=>{
          if(closedCat.includes(element.cat)){
            data[index].available = 3;
          }
        })
      }
    // All done.
      return exits.success({data: data});
  }


};
