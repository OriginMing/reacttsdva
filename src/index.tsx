import dva from 'dva';

// 初始化 dva
const app = dva();

// 这里可以导入一些 dva 插件，如果不需要就不用写
// app.use({});

// 这里是导入 model 后续我们新建一个dva model 模块就要这里引入才能使用
let fileNames = require.context('./models/', false, /\.ts$/).keys();
fileNames = fileNames.map((item,index)=>{return './models'+item.slice(1)})
fileNames.forEach((item,index)=>{
app.model(require(item+'').default)

})

// app.model(require('./models/product.ts').default)
// 导入路由 类似之前代码里的 <Router />
app.router(require('./router.tsx').default);

app.start('#app');
