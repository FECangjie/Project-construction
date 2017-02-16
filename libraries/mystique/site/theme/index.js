

module.exports = {
  typeOrder:{
    // 布局
    "Layout":0,
    // Form
    "Form":1,
    // 公共组件
    "common":2
  },
  routes: [
    {
      path:"/",
      component:'./template/Index/index'
    },{
      path:"/lib/*",
      component:'./template/Index/index'
    },
  ]
};
