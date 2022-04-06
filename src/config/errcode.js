module.exports.errcode = {
    code: {
      //- 100: 帳號相關
        100: {
          msg: '註冊失敗：已有相同的使用者',
          status: 400
        },
        101: {
          msg: '登入失敗：找不到該使用者',
          status: 400
        },
        102: {
          msg: '登入失敗：密碼錯誤',
          status: 400
        },
        103: {
          msg: '讀取失敗：找不到該筆使用者',
          status: 400
        },
        104: {
          msg: '刪除失敗：找不到該筆使用者',
          status: 400
        },
        105: {
          msg: "登入失敗：圖形認證錯誤",
          status:400
        },
        106: {
          msg: '註冊失敗：註冊格式錯誤',
          status: 400
        },
        107: {
          msg: "修改失敗：請檢查您的格式和密碼是否正確",
          status: 400
        },
        108:{
          msg:"註冊失敗：請確認您的Email格式是否正確",
          status: 400
        },
      //- 200: 器材品牌相關
        201: {
          msg: '新增失敗：相關格式錯誤',
          status: 400
        },
        202: {
          msg: '讀取失敗：找不到相關品牌資料',
          status: 400
        },
        203: {
          msg: '更新失敗：找不到品牌資料',
          status: 400
        },
        204: {
          msg: '刪除失敗：找不到品牌資料',
          status: 400
        },
      //- 300: 器材分類相關
        301: {
          msg: '新增失敗：相關格式錯誤',
          status: 400
        },
        302: {
          msg: '讀取失敗：找不到器材分類',
          status: 400
        },
        303: {
          msg: '更新失敗：找不到器材分類',
          status: 400
        },
        304: {
          msg: '刪除失敗：找不到器材分類',
          status: 400
        },
      //- 400: 器材相關
        401: {
          msg: '新增失敗：相關格式錯誤',
          status: 400
        },
        402: {
          msg: '讀取失敗：找不到此筆器材資料',
          status: 400
        },
        403: {
          msg: '更新失敗：找不到器材',
          status: 400
        },
        404: {
          msg: '刪除失敗：找不到器材',
          status: 400
        },
        405: {
          msg: '讀取失敗：權限不足',
          status: 400
        },
      //- 500: 訂單系統
        501: {
          msg: '新增失敗：相關格式錯誤',
          status: 400
        },
        502: {
          msg: '讀取失敗：找不到此筆訂單資料',
          status: 400
        },
        503: {
          msg: '更新失敗：找不到此筆訂單',
          status: 400
        },
        504: {
          msg: '刪除失敗：找不到此筆訂單',
          status: 400
        },
        505: {
          msg: '用戶信箱尚未被認證，不接收訂單',
          status: 400
        },
        //-600: 日期相關
        600:{
          msg: '日期格式錯誤',
          status: 400
        },
        601:{
          msg: '伺服器尚未有您的日期資料',
          status: 202
        },

        //-700: 購物車相關
        700:{
          msg:"購物車中找不到此ID",
          status: 404
        },
        701:{
          msg:"購物車中已存在相同物品",
          status:400
        },

        //-800: 優惠券相關
        800:{
          msg: "系統無法找到該器材",
          status: 400,
        },
        801:{
          msg:"優惠碼無效",
          status: 400,
        },
        802:{
          msg:"優惠碼正確，但購物車為空，請先新增商品至購物車",
          status: 400
        }
    }
  };
