module.exports = {


  friendlyName: 'Logout',


  description: 'Logout user.',


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

    // 在Session裡找尋Token，找到後刪除Token登出
  this.req.session.user=undefined
    // All done.
    return exits.success({});


  }


};
