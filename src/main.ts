import { createApp } from "vue";
import { createPinia } from "pinia";
import app from "./app.vue";
import router from "@/packages/vue-router/index";
/***************** 样式相关 ***************/
import "virtual:svg-icons-register";
//通用字体
// import "vfonts/Lato.css";
//等宽字体
// import "vfonts/FiraCode.css";
//引入全局样式
import "@/styles/index.scss";
//vant组件样式注册
import "vant/es/toast/style";
import "vant/es/dialog/style";
import "vant/es/notify/style";
import "vant/es/image-preview/style";
import "@vant/touch-emulator";

/***************** vue相关 ***************/
//导入布局相关初始化处理
import "@/packages/init/index";
//引入全局自定义指令
import directive from "@/resources/directive";
import VueDOMPurifyHTML from "vue-dompurify-html";
//vant组件相关
import { Lazyload } from "vant";

const App = createApp(app);
App.use(createPinia());
App.use(router);
App.use(VueDOMPurifyHTML);
App.use(Lazyload);
Object.keys(directive).forEach((key) => {
    App.directive(key, directive[key]);
});
App.mount("#app");
