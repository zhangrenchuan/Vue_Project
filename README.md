# Vue_project 大纲

## 准备阶段
### 1.1 知识点汇总
- 流程及开发方法
	- 了解一个项目的开发流程
	- 学会组件化\模块化\工程化的开发模式
	- 掌握使用 Vue-cli 脚手架初始化 Vue.js 项目
	- 学会 Es6+Eslint开发方式
- 第三方组件
	- 学会使用 stylus 编写模块化的CSS
	- 学会使用 vue-router 开发单页应用SPA
	- 学会使用 vue-resource 与后端数据交互
	- 学会如何在Vue.js 框架里和第三方JS插件交互
- 设计思想与模式
	- 学会使用Vue.js 的过渡编写酷炫交互动画
	- 了解移动端设备像素比的概念
	- 学会制作并使用图标字
	- 学会解决移动端 1px 边框问题
	- 学会移动端经典的 css sticky footer布局
	- 学会 flex 伸缩盒模型弹性布局
	
### 1.2 技术选项
- 前台数据处理/交互/组件化
	- vue
	- vue-cli
	- vue-router
	- vue-resource
	- vuex
- 后台处理
	- mockjs
	- json
- 模块化
	- ES6
	- babel
- 项目构建/工程化
	- webpack
	- vue-cli
	- eslint
- css预编译器
	- stylus
- 滑动库
	- better-scroll
- 编码规范检查
	- eslint

### 1.3 前端路由
- 商品
	- components/goods/goods.vue
	- /goods
- 评价
	- components/ratings/ratings.vue
	- /ratings
- 商家
	- components/seller/seller.vue
	- /seller

### 1.4 Vue路由组件
- goods.vue
	- food.vue
		- cartcontrol.vue
		- ratingselect.vue
		- split.vue
	- shopcart.vue
		- cartcontrol.vue
	- cartcontrol.vue
- ratings.vue
	- star.vue
	- ratingselect.vue
	- split.vue
- seller.vue
	- star.vue
	- split.vue

### 1.5 组件意义
1. app.vue 应用根组件
2. header.vue 页面头部显示商家基本信息的组件
3. goods.vue 商品分路由组件: 商品列表 / 购物车相关功能
4. ratings.vue 评价分路由组件: 商品评论列表
5. seller.vue 商家详情分路由组件: 显示商家详情
6. star.vue 星级评价组件
7. food.vue 商品列表组件: 显示商品分类 / 商品列表 / 购物项加减
8. cartcontrol.vue 购物项操作组件: 增加 / 减少某个购物项的数量
9. ratingselect.vue 商品评论列表组件: 过滤查看商品评价列表
10. split.vue 分隔线小组件
11. shopcart.vue 底部购物车组件: 显示购物项列表及相关操作\


----------

## 资源准备
### 2.1 使用 vue-cli 搭建项目
- npm install -g vue-cli 
- vue init webpack#1.0 vue_app 
- npm run dev
- 访问 loaclhost:8080

### 2.2 项目结构

	|-- build : webpack相关的配置文件夹(基本不需要修改)
		|-- dev-server.js : 通过express启动后台服务器
	|-- config: webpack相关的配置文件夹(基本不需要修改)
		|-- index.js: 指定的后台服务的端口号和静态资源文件夹
	|-- node_modules
	|-- src : 源码文件夹
		|-- components: vue组件及其相关资源文件夹
		|-- app.vue: 应用根主组件
		|-- main.js: 应用入口js
	|-- static: 静态资源文件夹
	|-- .babelrc: babel的配置文件
	|-- .editorconfig: 通过编辑器的编码/格式进行一定的配置
	|-- .eslintignore: eslint检查忽略的配置
	|-- .eslintrc.js: eslint检查的配置
	|-- .gitignore: git版本管制忽略的配置
	|-- index.html: 主页面文件
	|-- package.json: 应用包配置文件 
	|-- README.md: 应用描述说明的readme文件


### 2.3 资源概念
- 标注图(设计稿): 对应用界面各个组成元素进行坐标/大小/颜色等进行标签的界面图
- 切图: 将应用界面的一些静态图形部分, 通过工具(如photoshop)剪裁生成的图片
- 图片Base64: 样式中引用的小图片, 在webpack打包会自动处理转换为样式内部的Base64编码字符串
- 2x与3x图: 不同手机的屏幕密度不一样, 一般都在2以上(如iphone6为2,iphone6s为3),  为了适配不同的手机, UI设计师为同一个图片制作了2x和3x的2套图片(图形一样, 但大小不一样)

### 2.4 项目源码目录设计

	|-- common----------------通用资源文件夹
	|-- fonts ---------------字体资源文件夹(图标字体文件)
	|-- js-------------------通用js文件夹
	|-- stylus---------------通用stylus文件夹
		|-- font.styl--------图标字体样式
	|-- components------------所有vue组件文件夹
		|-- header---------------头部组件文件夹
			|-- header.vue--------前部组件vue
			|-- logo 头部相关的n个图标
				|-- xxx.png-----------头部相关的n个图标
		|-- seller---------------商家详情组件文件夹
			|-- seller.vue--------商家详情组件vue
		|-- goods----------------商品组件文件夹
			|-- goods.vue---------商品组件vue
		|-- ratings--------------评价组件文件夹
			|-- ratings.vue-------评价组件vue
	|-- app.vue---------------应用根组件vue
	|-- main.js---------------应用入口js


### 2.5 图标字体制作
- 图标字体: 使用IcoMoon将SVG格式的图标转换生成图标字体及样式
- 进入icoMoon官网: https://icomoon.io/
- 点击右上角 `IcoMoon App` 进入处理页面
- 点击左上交 `Import Icons` 选择resource\SVG\*.svg, 上传显示到页面
- 在页面选择所有svg, 点击右下角 `Generate Font` 生成图标字体样式
- 点击左上角 `Preferences` 指定 Font-Name 为 seil-icon. 点击右下角 `Download` 下载到本地
- 解压. 访问demo.html测试
- 我们项目需要的是 fonts文件夹 和 style.css

### 2.6 stylus
- 安装 `npm install stylus stylus-loader --save-dev`
- [stylus说明文档](http://www.zhangxinxu.com/jq/stylus/)
- 基本语法: 完全通过缩进控制, 不需要大括号和分号,　冒号是可选的

![](http://i.imgur.com/TxWmjkp.jpg)

- 父级引用: 使用字符 `&` 指向父类选择器

![](http://i.imgur.com/PMQyHh4.jpg)

- 变量
	- 定义变量: 如 mainColor = #0982c1
	- 引用变量: 如 color mainColor
	- 变量命名最好用 `$` 开头 (好识别)

![](http://i.imgur.com/ojpHA57.jpg)

- 混合(Mixins)
	- 预处理器的函数
	- 函数参数可以指定默认值
	- 某段CSS样式要用到多个元素上.只有其中的1,2个样式值有变化
	
![](http://i.imgur.com/mY3lPBk.jpg)

- 导入: 通过@import引入其它样式文件

----------

## 项目骨架搭建
### 3.1 引入vue-router
- 下载: `npm install vue-router@0.7.13 --save`
- **main.js**

		import Vue from 'vue'
		import VueRouter from 'vue-router'
		import App from './App.vue'
		
		import goods from './components/goods/goods.vue'
		import ratings from './components/ratings/ratings.vue'
		import seller from './components/seller/seller.vue'
		
		Vue.use(VueRouter)
		
		var router = new VueRouter({
		
		})
		
		router.map({
		  '/goods': {
		    component: goods
		  },
		  '/ratings': {
		    component: ratings
		  },
		  '/seller': {
		    component: seller
		  }
		})
		
		router.start(App, '#app')
		
		router.go('/goods')


- **App.vue**

		<template>
		  <div>
		    <ele-header></ele-header>
		    <div class="tab">
		      <div class="tab-item">
		        <a v-link="{path: '/goods'}">商品</a>
		      </div>
		      <div class="tab-item">
		        <a v-link="{path: '/ratings'}">评价</a>
		      </div>
		      <div class="tab-item">
		        <a v-link="{path: '/seller'}">商家</a>
		      </div>
		    </div>
		    <router-view></router-view>
		  </div>
		</template>
		
		<script type="text/ecmascript-6">
		  import header from './components/header/header.vue'
		  export default {
		    components: {
		      'ele-header': header
		    }
		  }
		</script>
		
		<style lang="stylus" rel="stylesheet/stylus">
		  .tab
		    .tab-item
		      display: inline-block
		      .v-link-active
		        color: #ff1813
		</style>

### 3.2 各组件基本编码
- header.vue

		<template>
		  <div>H</div>
		</template>
		
		<script type="text/ecmascript-6">
		  export default {
		    data () {
		      return {}
		    }
		  }
		</script>
		
		<style lang="stylus" rel="stylesheet/stylus">
		
		</style>

- components/goods/goods.vue
	
		<template>
		  <div>Goods</div>
		</template>
		
		<script>
		  export default {
		    data () {
		      return {}
		    }
		  }
		</script>
		
		<style lang="stylus" rel="stylesheet/stylus">
		
		</style>

- components/ratings/ratings.vue

		<template>
		  <div>R</div>
		</template>
		
		<script type="text/ecmascript-6">
		  export default {
		    data () {
		      return {}
		    }
		  }
		</script>
		
		<style lang="stylus" rel="stylesheet/stylus">
		
		</style>

- components/seller/seller.vue

		<template>
		  <div>S</div>
		</template>
		
		<script type="text/ecmascript-6">
		  export default {
		    data () {
		      return {}
		    }
		  }
		</script>
		
		<style lang="stylus" rel="stylesheet/stylus">
		
		</style>


### 3.3 引入reset样式
- [cssreset.com](cssreset.com) 
- index.html
	- static/css/reset.css [CSS2.0]
	- `<link rel="stylesheet" href="static/css/reset.css">`
	
### 3.4 添加viewport 
- index.html

		<html>
		  <head>
		    <meta charset="utf-8">
		    <meta name="viewport"
		          content="width=device-width,
				  initial-scale=1.0,maximum-scale=1.0,
				  minimum-scale=1.0,user-scalable=no">
		    <title>Vue_Project</title>
		    <link rel="stylesheet" href="static/css/reset.css">
		  </head>
		  <body>
		    <div id="app"></div>
		    <!-- built files will be auto injected -->
		  </body>
		</html>


----------

## 简单布局 [死数据]
### 4.1 App.vue [tab标签css样式]

	<style lang="stylus" rel="stylesheet/stylus">
	  @import "common/stylus/mixins.styl"
	  .tab
	    height 40px
	    line-height 40px
	    display flex
	    border-1px(rgba(7,17,27,.1))
	    .tab-item
	      flex-grow 1
	      text-align center
	      font-size 14px
	      color rgb(77,85,93)
	      /*为a标签添加样式. 点击区域变大*/
	      a
	        display block
	        &.v-link-active /*用来描述a  &符号引用上一级*/
	          color: rgb(240,20,20)
	</style>

### 4.2 header.vue [页面布局]
- 内容区包裹 `content-wrapper`
	- 商家LOGO
	- 商家主体内容区
		- 标题[图标/name]
		- 描述
		- 支持描述(满减)[icon/text]
	- 商家描述详情按钮
		- 数量
		- 图标箭头
- 公告区包裹 `bulletin-wrapper`
	- 公告区标题
	- 公告区文本
	- 图标箭头
- 背景图 `background`
	- img
- 浮层 `detail`
	- 浮层包裹 
		- 浮层主体
			- 名字
			- 星星
			- 浮层优惠信息标题
				- 分割线
				- 文本
				- 分割线
			- 浮层满减描述 ul>li
			- 浮层商家公告标题
				- 分割线
				- 文本
				- 分割线
			- 浮层商家内容
	- 浮层关闭按钮
###### 布局样式
	<template>
	  <div class="header">
	
	    <!--头部内容主体区域-->
	    <div class="content-wrapper">
	      <!--商家logo-->
	      <div class="avatar">
	        <img src="avatar.jpg" alt="">
	      </div>
	
	      <!--商家主体内容-->
	      <div class="content">
	        <div class="title">
	          <span class="brand"></span>
	          <span class="name">粥品香坊 (回龙观)</span>
	        </div>
	        <div class="description">蜂鸟转送/38分钟到达</div>
	        <div class="support">
	          <span class="icon discount_1"></span>
	          <span class="text">在线支付满25减10</span>
	        </div>
	      </div>
	
	      <!--商家描述详情按钮-->
	      <div class="supports_count">
	        <span class="count">5个</span>
	        <span class="icon-keyboard_arrow_right"></span>
	      </div>
	    </div>
	
	    <!--头部公告区域-->
	    <div class="bulletin-wrapper">
	      <span class="bulletin-title"></span>
	      <span class="bulletin-text">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
	      <!-- 右→箭头 -->
	      <span class="icon-keyboard_arrow_right"></span>
	    </div>
	
	    <!--头部商家底层背景图-->
	    <div class="background">
	      <img src="avatar.jpg" alt="">
	    </div>
	
	    <!--浮层-->
	    <div class="detail">
	      <!--浮层主体内容-->
	      <div class="detail-wrapper">
	        <div class="detail-main">
	          <!--内容主体名-->
	          <div class="name">粥品香坊 (回龙观)</div>
	
	          <!--星星区域-->
	          <div class="star-wrapper">
	            <span class="star_48 star_48on"></span>
	            <span class="star_48 star_48on"></span>
	            <span class="star_48 star_48on"></span>
	            <span class="star_48 star_48half"></span>
	            <span class="star_48 star_48off"></span>
	          </div>
	
	          <!--浮层优惠信息标题-->
	          <div class="title">
	            <div class="line"></div>
	            <div class="text">优惠信息</div>
	            <div class="line"></div>
	          </div>
	
	          <!--浮层满减描述-->
	          <ul class="supports">
	            <li class="support">
	              <span class="icon decrease_2"></span>
	              <span class="text">在线支付满减</span>
	            </li>
	            <li class="support">
	              <span class="icon discount_2"></span>
	              <span class="text">VC果粒橙全场8折</span>
	            </li>
	            <li class="support">
	              <span class="icon guarantee_2"></span>
	              <span class="text">单人精彩套餐</span>
	            </li>
	            <li class="support">
	              <span class="icon invoice_2"></span>
	              <span class="text">该商家支持发票</span>
	            </li>
	            <li class="support">
	              <span class="icon special_2"></span>
	              <span class="text">已加入"外卖保"</span>
	            </li>
	          </ul>
	
	          <!--浮层商家公告标题-->
	          <div class="title">
	            <div class="line"></div>
	            <div class="text">商家公告</div>
	            <div class="line"></div>
	          </div>
	
	          <!--浮层商家内容-->
	          <div class="content">
	            <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
	          </div>
	        </div>
	      </div>
	
	      <!--浮层 x 图标-->
	      <div class="detail-close">
	        <span class="icon-close"></span>
	      </div>
	    </div>
	  </div>
	</template>

### 4.3  header.vue [stylus样式]
- commom/stylus/mixins.styl
- [1物理像素说明](http://www.jianshu.com/p/7e63f5a32636)
- 小图标路径 header/logo文件夹中
- header.vue中引入 `@import "../../common/stylus/mixins.styl"`

		[小图标]
		bg-image($url)
		  background-image url("./logo/"+$url +"@2x.png")
		  @media (min-device-pixel-ratio:3),(-webkit-min-device-pixel-ratio:3)
		    background-image url("./logo/"+$url +"@3x.png")

		[星星图]
		bg-star($url)
		  background-image url("../star/" +$url +"@2x.png")
		  @media (min-device-pixel-ratio:3),(-webkit-min-device-pixel-ratio:3)
		    background-image url("../star/" +$url +"@3x.png")

		[1物理像素]
		border-1px($color)
		  position relative
		  border none
		  &:after
		    position absolute
		    bottom 0
		    left 0
		    content ''
		    width 100%
		    height 1px
		    transform scaleY(0.5)
		    background $color	

		border-none()
		  &:after
		    display:none


### 4.4  header.vue [fonts样式]
- commom/fonts
- commom/stylus/fonts.styl
- [icon图网站](https://icomoon.io/#home)
- 将icomoon\fonts\下所有文件拷贝到src\common\fonts目录下

	![](http://i.imgur.com/du3x91h.jpg)

- 将iconmoon\style.css拷贝到src\common\stylus\下, 重命名为font.styl. 并修正url路径地址
- main主文件中引入 `import './common/stylus/fonts.styl'`

		[font.styl]

		@font-face {
		  font-family: 'icomoon';
		  src:  url('../fonts/icomoon.eot?zdcvz1');
		  src:  url('../fonts/icomoon.eot?zdcvz1#iefix') format('embedded-opentype'),
		    url('../fonts/icomoon.ttf?zdcvz1') format('truetype'),
		    url('../fonts/icomoon.woff?zdcvz1') format('woff'),
		    url('../fonts/icomoon.svg?zdcvz1#icomoon') format('svg');
		  font-weight: normal;
		  font-style: normal;
		}
		
		[class^="icon-"], [class*=" icon-"] {
		  /* use !important to prevent issues with browser extensions that change fonts */
		  font-family: 'icomoon' !important;
		  speak: none;
		  font-style: normal;
		  font-weight: normal;
		  font-variant: normal;
		  text-transform: none;
		  line-height: 1;
		
		  /* Better Font Rendering =========== */
		  -webkit-font-smoothing: antialiased;
		  -moz-osx-font-smoothing: grayscale;
		}
		
		.icon-add_circle:before {
		  content: "\e900";
		}
		.icon-arrow_lift:before {
		  content: "\e901";
		}
		.icon-check_circle:before {
		  content: "\e902";
		}
		.icon-close:before {
		  content: "\e903";
		}
		.icon-favorite:before {
		  content: "\e904";
		}
		.icon-keyboard_arrow_right:before {
		  content: "\e905";
		}
		.icon-remove_circle_outline:before {
		  content: "\e906";
		}
		.icon-shopping_cart:before {
		  content: "\e907";
		}
		.icon-thumb_down:before {
		  content: "\e908";
		}
		.icon-thumb_up:before {
		  content: "\e909";
		}

----------

## mock 模拟数据
### 5.1 概念
- 1)Web应用前后端(台)分离: 
	- 后台向前台提供API接口, 只负责数据的提供和计算，而完全不处理展现
	- 前台通过Http(Ajax)请求获取数据,　在浏览器端动态构建界面显示数据
- 2)设计JSON数据结构
	- JSON数据包括
		- 结构: 名称和数据类型
		- value
	- Value可变, 但结构不可以变化

### 5.2 模拟数据文件
- src/mock/data.json

### 5.3 利用Node+express提供模拟数据
- build/dev-server.js
- 问题: 如果是打包发布就无法访问模拟数据, 只能是测试时使用

		var data = require('../src/mock/data.json')
		var seller = data.seller
		var goods = data.goods
		var ratings = data.ratings
		
		  // 创建路由器
		var apiRouter = express.Router()
		  // 映射路由
		apiRouter.get('/seller',function (req,res) {
		  res.json({
		    code: 0, // 代表当前数据是否正常. 0代表正常. 1代表错误
		    data: seller
		  })
		})
		apiRouter.get('/goods',function (req,res) {
		  res.json({
		    code: 0, // 代表当前数据是否正常. 0代表正常. 1代表错误
		    data: goods
		  })
		})
		apiRouter.get('/ratings',function (req,res) {
		  res.json({
		    code: 0, // 代表当前数据是否正常. 0代表正常. 1代表错误
		    data: ratings
		  })
		})
		
		  // 启动路由器
		app.use('/api', apiRouter)

### 5.4 利用mock模拟数据
- Mockjs: 用来拦截ajax请求, 生成随机数据返回
- [http://mockjs.com/](http://mockjs.com/)
- [https://github.com/nuysoft/Mock/wiki](https://github.com/nuysoft/Mock/wiki)
- 下载: npm install mockjs --save
- 好处: 打包发布运行模拟接口也是可以用的, 这样便于大家演示
- 使用: src/mock/mockServer.js

		import Mock from 'mockjs'   // npm install mockjs --save
		import data from './data.json'
		
		// 映射接口路由
		Mock.mock('/api2/seller', {
		  code: 0,
		  data: data.seller
		})
		Mock.mock('/api2/goods', {
		  code: 0,
		  data: data.goods
		})
		Mock.mock('/api2/ratings', {
		  code: 0,
		  data: data.ratings
		})
		
		// 不需要使用export 暴露

### 5.5 引入vue-resource访问mock数据接口
- `npm install vue-resource --save`
- main.js引入: 
	- `import VueResource from 'vue-resource'`
	- Vue.use(VueResource)
	- `import './mock/mockServer'`
- App.vue使用

		<script type="text/ecmascript-6">
		  import header from './components/header/header.vue'
		  export default {
		    created () {
		      // 发送ajax请求  mock提供的接口
		      this.$http.get('/api2/seller')
		        .then(response => {
		          console.log(response.body)
		        })
		      // 发送ajax请求  express提供的
		      this.$http.get('/api/seller')
		        .then(response => {
		          console.log(response.body)
		        })
		    },
		    components: {
		      'ele-header': header
		    }
		  }
		</script>

### 5.6 使用postman工具测试接口

----------

## star 星星组件动态计算
### 6.1 star 样式

	  @import "../../common/stylus/mixins.styl"
	  /*星星 36大小*/
	  .star_36
	    display inline-block
	    width 15px
	    height 15px
	    background-repeat no-repeat
	    background-size 15px 15px
	    margin 0 10px
	  .star_36on
	    bg-star(star36_on)
	  .star_36half
	    bg-star(star36_half)
	  .star_36off
	    bg-star(star36_off)
	
	  /*星星 24大小*/
	  .star_24
	    display inline-block
	    width 10px
	    height 10px
	    background-repeat no-repeat
	    background-size 10px 10px
	    margin 0 10px
	  .star_24on
	    bg-star(star24_on)
	  .star_24half
	    bg-star(star24_half)
	  .star_24off
	    bg-star(star24_off)
	
	  /*星星 48大小*/
	  .star_48
	    display inline-block
	    width 20px
	    height 19px
	    background-repeat no-repeat
	    background-size 20px 19px
	    margin 0 10px
	  .star_48on
	    bg-star(star48_on)
	  .star_48half
	    bg-star(star48_half)
	  .star_48off
	    bg-star(star48_off)

### 6.2 页面模版
- header组件中引入: `import star from '../star/star.vue'`
- header组件里注册组件标签: `components: {star}`
- 把数据里的商家评分和星星大小数据传送给star组件
- star模版: `<span v-for="sc in starClasses" :class="sc" track-by="$index"></span>`

### 6.3 星星获取逻辑
- props定义评分和大小的数据类型: Number
- 星星数量需要遍历获得. 要通过计算属性 computed获得
- 定义空的星星数组
- 定义评分的变量: 用来接收组件中传来的评分数据
- 定义整数位评分满星的变量: 向下取整获得数量 Math.floor
- 循环整数位评分后通过push方法塞到定义的星星数组里
- 获得半星: 判断小数位是否大于0.5.
- while循环星星数组是否小于5个
- 最后return新的星星数组

		<script type="text/ecmascript-6">
		  export default {
		    props: {
		      score: Number,
		      size: Number
		    },
		    computed: {
		      starClasses () {
		        // 创建全部星星的数组
		        var scs = []
		
		        var score = this.score
		        // 得到整数部分的评分
		        var scoreInterger = Math.floor(score)
		        // 创建整星的class
		        for (var i = 0; i < scoreInterger; i++) {
		          scs.push(`star_${this.size} star_${this.size}on`)
		        }
		
		        // 得到评分的半星
		        if (score - scoreInterger >= 0.5) {
		          scs.push(`star_${this.size} star_${this.size}half`)
		        }
		
		        // 得到评分的灰星
		        while (scs.length < 5) {
		          scs.push(`star_${this.size} star_${this.size}off`)
		        }
		
		        return scs
		      }
		    }
		  }
		</script>

### 6.4 star组件所需图片列表
![](http://i.imgur.com/M6D7lOv.png)

----------

## header组件动态获取数据
### 7.1 app里请求获取商家数据seller并传递给header组件使用

	created () {
	      // 发送ajax请求  mock提供的接口
	      this.$http.get('/api2/seller')
	        .then(response => {
	          console.log(response.body)
	          // 获得返回结果
	          const result = response.body
	          if (result.code === 0) {
	            this.seller = result.data
	          }
	        })
	    },

	传送组件: <ele-header :seller="seller"></ele-header>


### 7.2 header template动态获取

	<template>
	  <div class="header">
	
	    <!--TODO 头部内容主体区域-->
	    <div class="content-wrapper">
	      <!--商家logo-->
	      <div class="avatar">
	        <img :src="seller.avatar">
	      </div>
	
	      <!--商家主体内容-->
	      <div class="content">
	        <div class="title">
	          <span class="brand"></span>
	          <span class="name">{{seller.name}}</span>
	        </div>
	        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
	        <!--seller.supports有值才显示下面的-->
	        <div class="support" v-if="seller.supports">
	          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
	          <span class="text">{{seller.supports[0].description}}</span>
	        </div>
	      </div>
	
	      <!--商家描述详情按钮-->
	      <div class="supports_count" v-if="seller.supports" @click="showDetail(true)">
	        <span class="count">{{seller.supports.length}}</span>
	        <span class="icon-keyboard_arrow_right"></span>
	      </div>
	    </div>
	
	    <!--TODO 头部公告区域-->
	    <div class="bulletin-wrapper" @click="showDetail(true)">
	      <span class="bulletin-title"></span>
	      <span class="bulletin-text">{{seller.bulletin}}</span>
	      <!-- 右→箭头 -->
	      <span class="icon-keyboard_arrow_right"></span>
	    </div>
	
	    <!--TODO 头部商家底层背景图-->
	    <div class="background">
	      <img :src="seller.avatar">
	    </div>
	
	    <!--TODO 浮层-->
	    <div class="detail" v-show="detailShow">
	      <!--浮层主体内容-->
	      <div class="detail-wrapper">
	        <div class="detail-main">
	          <!--内容主体名-->
	          <div class="name">{{seller.name}}</div>
	
	          <!--星星区域-->
	          <div class="star-wrapper">
	            <star :score="seller.score" :size="48"></star>
	          </div>
	
	          <!--浮层优惠信息标题-->
	          <div class="title">
	            <div class="line"></div>
	            <div class="text">优惠信息</div>
	            <div class="line"></div>
	          </div>
	
	          <!--浮层满减描述-->
	          <ul class="supports" v-if="seller.supports">
	            <li class="support" v-for="support in seller.supports">
	              <span class="icon" :class="classMap[support.type]"></span>
	              <span class="text">{{support.description}}</span>
	            </li>
	          </ul>
	
	          <!--浮层商家公告标题-->
	          <div class="title">
	            <div class="line"></div>
	            <div class="text">商家公告</div>
	            <div class="line"></div>
	          </div>
	
	          <!--浮层商家内容-->
	          <div class="content">
	            <p>{{seller.bulletin}}</p>
	          </div>
	        </div>
	      </div>
	
	      <!--浮层 x 图标-->
	      <div class="detail-close" @click="showDetail(false)">
	        <span class="icon-close"></span>
	      </div>
	    </div>
	  </div>
	</template>

### 7.3 显示隐藏浮层
- 有小箭头的地方传入点击显示的方法: `@click="showDetail(true)"`
- 浮层关闭图标时隐藏方法: `@click="showDetail(false)"`
- 在浮层区域设置显示隐藏的变量: `v-show="detailShow"`
- 初始化变量为false: 默认不显示
- 定义一个方法实现显示隐藏办法

		<script type="text/ecmascript-6">
			// 引入 星星组件
		  import star from '../star/star.vue'
		  export default {
		    // 接收app中data里的seller数据
		    props: ['seller'],
		    data () {
		      return {
		        // 定义浮层初始化时不显示
		        detailShow: false
		      }
		    },
		    created () {
		      // 动态获得小图标  data里type值对应样式名
		      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
		    },
		    methods: {
		      // 定义浮层显示隐藏的方法
		      showDetail (show) {
		        this.detailShow = show
		      }
		    },
		    components: {
		      star
		    }
		  }
		</script>


### 7.4 header 样式

	  @import "../../common/stylus/mixins.styl"
	  /*头部总样式*/
	  .header
	    position relative
	    background rgba(7,17,27,.5)
	    color aliceblue
	    overflow hidden
	    /*TODO 头部内容包裹区*/
	    .content-wrapper
	      position relative
	      padding 24px 12px 18px 24px
	      /*商家LOGO图*/
	      .avatar
	        display inline-block
	        width 64px
	        height 64px
	        &>img
	          width 100%
	      /*商家内容主体样式*/
	      .content
	        display inline-block
	        margin-left 16px
	        /*商家标题样式*/
	        .title
	          margin-top 2px
	          /*品牌图标样式 mixins引入*/
	          .brand
	            display inline-block
	            width 30px
	            height 18px
	            background-repeat no-repeat
	            background-size 30px 18px
	            vertical-align middle
	            bg-image(brand)
	          /*商家名*/
	          .name
	            margin-left 6px
	            font-size 16px
	            font-weight bold
	            line-height 18px
	        /*描述样式*/
	        .description
	          margin-top 8px
	          margin-bottom 10px
	          font-size 12px
	          font-weight 200
	          line-height 12px
	        /*满减支持样式*/
	        .support
	          margin-bottom 2px
	          /*满减图标样式*/
	          .icon
	            display inline-block
	            width 12px
	            height 12px
	            background-size 12px 12px
	            background-repeat no-repeat
	            vertical-align middle
	          /*mixins引入*/
	          .discount
	            bg-image(discount_1)
	          .decrease
	            bg-image(decrease_1)
	          .guarantee
	            bg-image(guarantee_1)
	          .invoice
	            bg-image(invoice_1)
	          .special
	            bg-image(special_1)
	          /*满减文本样式*/
	          .text
	            margin-left 4px
	            font-size 10px
	            font-weight 200
	            line-height 12px
	       /*满减详情数量样式*/
	      .supports_count
	        position absolute
	        right 10px
	        bottom 10px
	        height 24px
	        background rgba(0,0,0,.2)
	        padding 7px 8px
	        border-radius 7px
	        box-sizing border-box
	        /*详情'按钮'样式*/
	        .count
	          margin-right 2px
	          font-size 10px
	          font-weight 200
	          line-height 12px
	          vertical-align top
	    /*TODO 公告包裹区样式*/
	    .bulletin-wrapper
	      position relative
	      background rgba(7,17,27,0.2)
	      padding 0 20px 0 12px
	      text-overflow ellipsis
	      overflow hidden
	      white-space nowrap
	      height 28px
	      line-height 28px
	      /*公告区域标题样式*/
	      .bulletin-title
	        display inline-block
	        width 22px
	        height 12px
	        background-repeat no-repeat
	        background-size 22px 12px
	        vertical-align middle
	        bg-image(bulletin)
	      /*公告区域文本样式*/
	      .bulletin-text
	        font-size 10px
	        font-weight 200
	        margin 0 4px
	      /*右箭头样式*/
	      .icon-keyboard_arrow_right
	        position absolute
	        top 8px
	        right 0
	    /*TODO 头部底层背景样式*/
	    .background
	      position absolute
	      top 0
	      left 0
	      width 100%
	      height 100%
	      z-index -1
	      &>img /*& 表示从父级拿取*/
	        width 100%
	        height 100%
	        filter blur(10px)
	    /*TODO 浮层样式*/
	    .detail
	      position fixed
	      top 0
	      left 0
	      right 0
	      bottom 0
	      background  rgba(7,17,27,.8)
	      z-index 100
	      .detail-wrapper
	        min-height 100%
	        /*浮层主内容样式*/
	        .detail-main
	          padding-bottom 32px
	          padding-top 64px
	          /*名字*/
	          .name
	            text-align center
	            font-size 16px
	            font-weight 700
	            line-height 16px
	            margin-bottom 16px
	           /*星星区域*/
	          .star-wrapper
	            height 24px
	            line-height 24px
	            text-align center
	           /*浮层标题样式 【公用】*/
	          .title
	            padding 28px 36px 24px
	            text-align center
	            display flex
	            .line
	              flex 1
	              width 112px
	              height 2px
	              background rgba(255,255,255,.2)
	              margin-top 8px
	            .text
	              margin 0 12px
	           /*满减描述样式*/
	          .supports
	            padding 0 48px
	            .support
	              height 16px
	              margin-bottom 12px
	              /*小logo样式*/
	              .icon
	                display inline-block
	                width 16px
	                height 16px
	                background-size 16px 16px
	                background-repeat no-repeat
	                vertical-align middle
	              .discount
	                bg-image(discount_2)
	              .decrease
	                bg-image(decrease_2)
	              .guarantee
	                bg-image(guarantee_2)
	              .invoice
	                bg-image(invoice_2)
	              .special
	                bg-image(special_2)
	              /*满减描述文本样式*/
	              .text
	                margin-left 6px
	                font-size 12px
	                font-weight 200
	                line-height 12px
	          /*浮层商家公告样式*/
	          .content
	            padding 0 48px
	            font-size 12px
	            font-weight 200
	            line-height 24px
	       /*浮层关闭样式*/
	      .detail-close
	        margin-top -64px
	        font-size 32px
	        width 100%
	        height 32px
	        text-align center
	        color #666

### 7.5 header组件所需图片列表
![](http://i.imgur.com/LGhNin9.png)

----------

## goods 组件开发
- 内部使用了三个组件
	- Shopcart: 购物车组件
	- Cartcontrol: 添加购物车操作组件
	- food: 食品详情组件
- 使用 `better-scroll` 实现ul滑动
	- 安装: `npm install better-scroll`
	- 引入: `import BScroll from 'better-scroll'` 
### 8.1 goods组件所需图片列表
![](http://i.imgur.com/TV57Mfa.png)

### 8.2 goods样式

	<style lang="stylus" rel="stylesheet/stylus">
	  @import "../../common/stylus/mixins.styl"
	
	  .goods
	    display: flex
	    position: absolute
	    top: 174px
	    bottom: 46px
	    width: 100%
	    overflow: hidden
	
	    /*TODO 左侧菜单项样式*/
	    .menu-wrapper
	      flex: 0 0 80px
	      width: 80px
	      background: #f3f5f7
	      .menu-item
	        display: table
	        height: 54px
	        width: 56px
	        padding: 0 12px
	        line-height: 14px
	        /*菜单项选中时样式*/
	        &.current
	          position: relative
	          z-index: 10
	          margin-top: -1px
	          background: #fff
	          font-weight: 700
	          .text
	            border-none()
	        .icon
	          display: inline-block
	          vertical-align: top
	          width: 12px
	          height: 12px
	          margin-right: 2px
	          background-size: 12px 12px
	          background-repeat: no-repeat
	          &.decrease
	            bg-image('decrease_3')
	          &.discount
	            bg-image('discount_3')
	          &.guarantee
	            bg-image('guarantee_3')
	          &.invoice
	            bg-image('invoice_3')
	          &.special
	            bg-image('special_3')
	        .text
	          display: table-cell
	          width: 56px
	          vertical-align: middle
	          border-1px(rgba(7, 17, 27, 0.1))
	          font-size: 12px
	     /*TODO 右侧商品详情页样式*/
	    .foods-wrapper
	      flex: 1
	      .title
	        padding-left: 14px
	        height: 26px
	        line-height: 26px
	        border-left: 2px solid #d9dde1
	        font-size: 12px
	        color: rgb(147, 153, 159)
	        background: #f3f5f7
	
	      /*食物列表分类项样式*/
	      .food-item
	        display: flex
	        margin: 18px
	        padding-bottom: 18px
	        border-1px(rgba(7, 17, 27, 0.1))
	        &:last-child
	          border-none()
	          margin-bottom: 0
	        .icon
	          flex: 0 0 57px
	          margin-right: 10px
	        /*商品内容详情  */
	        .content
	          flex: 1
	          .name /*商品名*/
	            margin: 2px 0 8px 0
	            height: 14px
	            line-height: 14px
	            font-size: 14px
	            color: rgb(7, 17, 27)
	          .desc, .extra /*商品描述*/
	            line-height: 10px
	            font-size: 10px
	            color: rgb(147, 153, 159)
	          .desc
	            line-height: 12px
	            margin-bottom: 8px
	          .extra /*月售好评*/
	            .count
	              margin-right: 12px
	          .price /*价格*/
	            font-weight: 700
	            line-height: 24px
	            .now
	              margin-right: 8px
	              font-size: 14px
	              color: rgb(240, 20, 20)
	            .old
	              text-decoration: line-through
	              font-size: 10px
	              color: rgb(147, 153, 159)
	
	          /*cartcontrol组件样式  */
	          .cartcontrol-wrapper
	            position: absolute
	            right: 0
	            bottom: 12px
	</style>

### 8.3 goods页面模版
- 左右两侧菜单通过 v-el定义标识
- 列表li 通过 v-for 遍历数据(数据在created时发ajax请求获得)

	<template>
	  <div class="goods">
	    <!--TODO 左侧菜单项div-->
	    <div class="menu-wrapper" v-el:menu-wrapper>
	      <ul>
	        <!--菜单列表-->
	        <li class="menu-item"
	            v-for="good in goods"
	            :class="{current:currentIndex===$index}"
	            @click="clickMenu($index,$event)">
	           <span class="text border-1px">
	             <span class="icon"
	                   v-if="good.type >= 0"
	                   :class="classMap[good.type]"></span>{{good.name}}
	           </span>
	        </li>
	      </ul>
	    </div>
	
	    <!--TODO 右侧商品详情div-->
	    <div class="foods-wrapper" v-el:foods-wrapper>
	      <ul>
	        <li class="food-list food-list-hook" v-for="good in goods">
	          <h1 class="title">{{good.name}}</h1>
	          <ul>
	
	            <!--商品列表菜单-->
	            <li class="food-item border-1px"
	                v-for="food in good.foods"
	                @click="showFood(food)">
	
	              <!--商品图标-->
	              <div class="icon">
	                <img width="57" height="57" :src="food.icon">
	              </div>
	
	              <!--商品内容详情-->
	              <div class="content">
	                <h2 class="name">{{food.name}}</h2>
	                <p class="desc">{{food.description}}</p>
	                <div class="extra">
	                  <span class="count">月售{{food.sellCount}}份</span>
	                  <span>好评率{{food.rating}}%</span>
	                </div>
	                <div class="price">
	                  <span class="now">￥{{food.price}}</span>
	                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
	                </div>
	
	                <!--cartcontrol组件-->
	                <div class="cartcontrol-wrapper">
	                  <cartcontrol :food="food" :update-food-count="updateFoodCount"></cartcontrol>
	                </div>
	              </div>
	            </li>
	          </ul>
	        </li>
	      </ul>
	    </div>
	
	    <!--TODO 购物车底部组件-->
	    <shopcart :food-list="foodList"
	              :min-price="seller.minPrice"
	              :delivery-price="seller.deliveryPrice"
	              :update-food-count="updateFoodCount"
	              @clear="clearCart"></shopcart>
	  </div>
	
	  <food :food="selectedFood"
	        v-ref:food
	        :update-food-count="updateFoodCount"></food>
	</template>

### 8.4 goods ui滚动
- 引入better-scroll: `import BScroll from 'better-scroll'`
- 在发送ajax确认页面更新之后调用滑动函数 
	- `this.$nextTick(() => {this._initScroll()})`
- 初始化创建Scroller对象形成滚动条
- 创建左侧菜单滑动
- 创建右侧商品内容滑动
	

	    methods: {
	      // 初始化创建 Scroller对象. 行成滚动条
	      _initScroll () {
	        // 左侧菜单滑动
	        var menuScroll = new BScroll(this.$els.menuWrapper, {})
	
	        // 右侧商品内容滑动
	        var foodsScroll = new BScroll(this.$els.foodsWrapper, {})
	        console.log(menuScroll, foodsScroll)
	      }
	    }


### 8.5 计算获得指定选中菜单项
- 初始化top值获得所有li的高度并累加
- 定义点击对应li菜单项进行滚动
- 通过计算属性动态获得li所对应的index下标


### 8.6 清空购物车选项 (shopcart事件订阅)
- 点击时让商品的数量变成 0 

	      clearCart (foodList) { 
	        foodList.forEach(food => {
	          food.count = 0
	        })
	      }

### 8.7 计算商品列表 (shopcart组件)
- 定义商品的数组
- 遍历数据data里的所有goods 然后添加到数组中并返回

	      foodList () {
	        const foods = []
	        this.goods.forEach(good => {
	          good.foods.forEach(food => {
	            if (food.count) {
	              foods.push(food)
	            }
	          })
	        })
	        return foods
	      }

### goods JS代码

	<script>
	  // 引入 滑动插件
	  import BScroll from 'better-scroll'
	  // 引入控制购物车数量组件
	  import cartcontrol from '../cartcontrol/cartcontrol.vue'
	  // 引入Vue
	  import Vue from 'vue'
	  // 引入底部购物车
	  import shopcart from '../shopcart/shopcart.vue'
	
	  export default {
	    props: ['seller'],
	    data () {
	      return {
	        goods: [],
	        scrollY: 0,
	        tops: []
	      }
	    },
	    created () {
	      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
	
	      // 发ajax请求. 得到goods数据
	      this.$http.get('/api2/goods')
	        .then(response => {
	          var result = response.body
	          if (result.code === 0) {
	            this.goods = result.data
	
	            // 在页面更新之后执行
	            this.$nextTick(() => {
	              this._initScroll()
	
	              // 初始化top值
	              this._initTops()
	            })
	          }
	        })
	    },
	    methods: {
	      // TODO 初始化创建 Scroller对象. 行成滚动条
	      _initScroll () {
	        // 左侧菜单滑动
	        var menuScroll = new BScroll(this.$els.menuWrapper, {
	          click: true  // 派发点击事件
	        })
	
	        // 右侧商品内容滑动
	        this.foodsScroll = new BScroll(this.$els.foodsWrapper, {
	          click: true,
	          probeType: 3 // 让scroll 事件回调函数执行
	        })
	
	        // 监视 foodsScroll 滚动
	        this.foodsScroll.on('scroll', pos => {
	          // 保存滚动的y轴坐标
	          this.scrollY = -pos.y
	        })
	        console.log(menuScroll)
	      },
	
	      // TODO 初始化top值
	      _initTops () {
	        var tops = this.tops
	        var top = 0
	        tops.push(top) // 添加第一个top值
	
	        // 得到所有分类的li
	        var lis = this.$els.foodsWrapper.getElementsByClassName('food-list-hook')
	        ;[].slice.call(lis).forEach(li => {
	          // 获得li 的高度并累加
	          top += li.clientHeight
	          tops.push(top)
	        })
	      },
	
	      // TODO 点击菜单指定对应列表
	      clickMenu (index, event) {
	        // 过滤系统的点击回调
	/*        if (!event._constructed) {
	          return
	        }*/
	        // 得到对应的li
	        var lis = this.$els.foodsWrapper.getElementsByClassName('food-list-hook')
	        var li = lis[index]
	        // 滚动
	        this.foodsScroll.scrollToElement(li, 300)
	      },
	
	      // TODO 定义更新 商品的数量
	      updateFoodCount (food, isAdd, event) {
	        // 过滤系统的点击回调
	        if (!event._constructed) {
	          return
	        }
	        if (isAdd) { // 加
	          if (!food.count) { // 第一次操作
	            // set方法进行监视属性第一次操作
	            Vue.set(food, 'count', 1)
	          } else {
	            food.count++
	          }
	        } else { // 减
	          if (food.count) {
	            food.count --
	          }
	        }
	      },
	
	      // TODO shopcart组件事件订阅 --> 清空购物车选项
	      clearCart (foodList) { // 让购物车中所有food的count指定为0
	        foodList.forEach(food => {
	          food.count = 0
	        })
	      }
	    },
	    computed: {
	      // 计算出当前分类的下标
	      currentIndex () {
	        /*
	        *   this.scrollY
	        *   this.tops
	        */
	
	        return this.tops.findIndex((top, index) => {
	          // 如果返回true. 结果就为对应的index
	          return this.scrollY >= top && this.scrollY < this.tops[ index + 1 ]
	        })
	      },
	      // shopcart组件: 计算商品列表
	      foodList () {
	        const foods = []
	        this.goods.forEach(good => {
	          good.foods.forEach(food => {
	            if (food.count) {
	              foods.push(food)
	            }
	          })
	        })
	        return foods
	      }
	    },
	    components: {
	      cartcontrol,
	      shopcart
	    }
	  }
	</script>

----------

## cartcontrol.vue  购物车数量加减按钮
### 9.1 style样式

	  .cartcontrol
	    font-size: 0
	    .cart-decrease
	      display: inline-block
	      padding: 6px
	      transition: all 0.4s linear
	      &.move-transition
	        opacity: 1
	        transform: translate3d(0, 0, 0)
	        .inner
	          display: inline-block
	          line-height: 24px
	          font-size: 24px
	          color: rgb(0, 160, 220)
	          transition: all 0.4s linear
	          transform: rotate(0)
	      &.move-enter, &.move-leave
	        opacity: 0
	        transform: translate3d(24px, 0, 0)
	        .inner
	          transform: rotate(180deg)
	    .cart-count
	      display: inline-block
	      vertical-align: top
	      width: 12px
	      padding-top: 6px
	      line-height: 24px
	      text-align: center
	      font-size: 10px
	      color: rgb(147, 153, 159)
	    .cart-add
	      display: inline-block
	      padding: 6px
	      line-height: 24px
	      font-size: 24px
	      color: rgb(0, 160, 220)

### 9.2 通过goods传递数据动态获取
- goods组件引入 cartcontrol组件并注册
- 传递商品信息和更新商品数量的方法
	- `<cartcontrol :food="food" :update-food-count="updateFoodCount"></cartcontrol>`
- 方法中传递三个参数: 商品名, 是否是加, 事件
	- 如果是加. 进行判断是否是第一次操作.
	- 如果是第一次操作,引入Vue,调用set方法进行监视属性第一次变化
	- 如果不是第一次操作, 则food.count++
	- 如果是减且count有值 则food.count --
- 点击事件取消冒泡: @click.stop
	

			updateFoodCount (food, isAdd, event) {
		        // 过滤系统的点击回调
		        if (!event._constructed) {
		          return
		        }
		        if (isAdd) { // 加
		          if (!food.count) { // 第一次操作
					// set方法进行监视属性第一次操作
		            Vue.set(food, 'count', 1) 
		          } else {
		            food.count++
		          }
		        } else { // 减
		          if (food.count) {
		            food.count --
		          }
		        }
		      }

### 9.3 接收goods传递的数据且在模版中使用

	<script type="text/ecmascript-6">
	  export default {
	    props: {
	      food: Object,
	      updateFoodCount: Function
	    },
	    data () {
	      return {}
	    }
	  }
	</script>


###### cartcontrol 模版

	<template>
	  <div class="cartcontrol">
	    <!--初始化默认按钮-->
	    <div class="cart-decrease"
	         transition="move"
	         v-show="food.count"
	         @click="updateFoodCount(food, false, $event)">
	      
	      <!--减少的按钮-->
	      <span class="inner icon-remove_circle_outline"></span>
	    </div>
	    
	    <!--购物车添加的商品数量-->
	    <div class="cart-count" v-show="food.count">{{food.count}}</div>
	    
	    <!--添加的按钮-->
	    <div class="cart-add icon-add_circle" 
	         @click="updateFoodCount(food, true, $event)">
	    </div>
	  </div>
	</template>

----------

## shopcart.vue 底部购物车组件
### 10.1 底部样式

	<style lang="stylus" rel="stylesheet/stylus">
	  @import "../../common/stylus/mixins.styl"
	
	  .shopcart
	    position: fixed
	    left: 0
	    bottom: 0
	    z-index: 50
	    width: 100%
	    height: 48px
	    .content
	      display: flex
	      background: #141d27
	      font-size: 0
	      color: rgba(255, 255, 255, 0.4)
	      .content-left
	        flex: 1
	        .logo-wrapper
	          display: inline-block
	          vertical-align: top
	          position: relative
	          top: -10px
	          margin: 0 12px
	          padding: 6px
	          width: 56px
	          height: 56px
	          box-sizing: border-box
	          border-radius: 50%
	          background: #141d27
	          .logo
	            width: 100%
	            height: 100%
	            border-radius: 50%
	            text-align: center
	            background: #2b343c
	            &.highlight
	              background: rgb(0, 160, 220)
	            .icon-shopping_cart
	              line-height: 44px
	              font-size: 24px
	              color: #80858a
	              &.highlight
	                color: #fff
	          .num
	            position: absolute
	            top: 0
	            right: 0
	            width: 24px
	            height: 16px
	            line-height: 16px
	            text-align: center
	            border-radius: 16px
	            font-size: 9px
	            font-weight: 700
	            color: #fff
	            background: rgb(240, 20, 20)
	            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
	        .price
	          display: inline-block
	          vertical-align: top
	          margin-top: 12px
	          line-height: 24px
	          padding-right: 12px
	          box-sizing: border-box
	          border-right: 1px solid rgba(255, 255, 255, 0.1)
	          font-size: 16px
	          font-weight: 700
	          &.highlight
	            color: #fff
	        .desc
	          display: inline-block
	          vertical-align: top
	          margin: 12px 0 0 12px
	          line-height: 24px
	          font-size: 10px
	      .content-right
	        flex: 0 0 105px
	        width: 105px
	        .pay
	          height: 48px
	          line-height: 48px
	          text-align: center
	          font-size: 12px
	          font-weight: 700
	          &.not-enough
	            background: #2b333b
	          &.enough
	            background: #00b43c
	            color: #fff
	    .ball-container
	      .ball
	        position: fixed
	        left: 32px
	        bottom: 22px
	        z-index: 200
	        &.drop-transition
	          transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
	          .inner
	            width: 16px
	            height: 16px
	            border-radius: 50%
	            background: rgb(0, 160, 220)
	            transition: all 0.4s linear
	    .shopcart-list
	      position: absolute
	      left: 0
	      top: 0
	      z-index: -1
	      width: 100%
	      &.fold-transition
	        transition: all 0.5s
	        transform: translate3d(0, -100%, 0)
	      &.fold-enter, &.fold-leave
	        transform: translate3d(0, 0, 0)
	      .list-header
	        height: 40px
	        line-height: 40px
	        padding: 0 18px
	        background: #f3f5f7
	        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
	        .title
	          float: left
	          font-size: 14px
	          color: rgb(7, 17, 27)
	        .empty
	          float: right
	          font-size: 12px
	          color: rgb(0, 160, 220)
	
	      .list-content
	        padding: 0 18px
	        max-height: 217px
	        overflow: hidden
	        background: #fff
	        .food
	          position: relative
	          padding: 12px 0
	          box-sizing: border-box
	          border-1px(rgba(7, 17, 27, 0.1))
	          .name
	            line-height: 24px
	            font-size: 14px
	            color: rgb(7, 17, 27)
	          .price
	            position: absolute
	            right: 90px
	            bottom: 12px
	            line-height: 24px
	            font-size: 14px
	            font-weight: 700
	            color: rgb(240, 20, 20)
	          .cartcontrol-wrapper
	            position: absolute
	            right: 0
	            bottom: 6px
	
	  .list-mask
	    position: fixed
	    top: 0
	    left: 0
	    width: 100%
	    height: 100%
	    z-index: 40
	    backdrop-filter: blur(10px)
	    &.fade-transition
	      transition: all 0.5s
	      opacity: 1
	      background: rgba(7, 17, 27, 0.6)
	    &.fade-enter, &.fade-leave
	      opacity: 0
	      background: rgba(7, 17, 27, 0)
	</style>

### 10.2 goods组件传递数据供shopcart组件使用
- goods组件引入shopcart组件并注册
- 传递商品列表数据/最小价格/运费价格/商品更新数量的方法

	    <shopcart :food-list="foodList"
              :min-price="seller.minPrice"
              :delivery-price="seller.deliveryPrice"
              :update-food-count="updateFoodCount"
              @clear="clearCart"></shopcart>
- 由于这些数据都在App里获得 要在App中进行seller传递
	- `<router-view :seller="seller"></router-view>`
- shopcart组件接收

		props: {
	      foodList: Array,
	      minPrice: Number,
	      deliveryPrice: Number,
	      updateFoodCount: Function
	    }


### 10.3 shopcart页面结构

	<template>
	  <div class="shopcart">
	    <!--TODO 购物车底层内容-->
	    <div class="content">
	      <!--TODO 购物车底部左侧-->
	      <div class="content-left" @click="toggleList">
	        <div class="logo-wrapper">
	          <!--购物车logo-->
	          <div class="logo" :class="{highlight: foodList.length}">
	            <i class="icon-shopping_cart highlight"></i>
	          </div>
	          <!--商品数量显示-->
	          <div class="num" v-if="totalCount">{{totalCount}}</div>
	        </div>
	
	        <!--商品总价-->
	        <div class="price">￥{{totalPrice}}</div>
	        <!--配送总价-->
	        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
	      </div>
	
	      <!--TODO 购物车底部右侧 确认支付按钮-->
	      <div class="content-right" @click="pay">
	        <div class="pay" :class="payClass">
	          {{payText}}
	        </div>
	      </div>
	    </div>
	    <div class="ball-container"></div>
	
	    <!--TODO 购物车商品列表详情-->
	    <div class="shopcart-list" transition="fold" v-show="listShow">
	
	      <!--TODO 列表头部-->
	      <div class="list-header">
	        <h1 class="title">购物车</h1>
	        <span class="empty" @click="clear">清空</span>
	      </div>
	
	      <!--TODO 商品列表内容-->
	      <div class="list-content" v-el:list-content>
	        <ul>
	          <!--遍历所有的商品-->
	          <li class="food" v-for="food in foodList">
	            <span class="name">{{food.name}}</span>
	            <div class="price">
	              <span>￥{{food.price}}</span>
	            </div>
	            <!--需要cartcontrol按钮组件-->
	            <div class="cartcontrol-wrapper">
	              <cartcontrol :food="food" :update-food-count="updateFoodCount"></cartcontrol>
	            </div>
	          </li>
	        </ul>
	      </div>
	    </div>
	
	  </div>
	  <!--TODO 阴影浮层-->
	  <div class="list-mask"
	       v-show="listShow"
	       transition="fade"
	       @click="toggleList"></div>
	</template>

### 10.4 shopcart交互

	<script>
	  // 引入ui滚动插件
	  import BScroll from 'better-scroll'
	  // 引入cartcontrol组件
	  import cartcontrol from '../cartcontrol/cartcontrol.vue'
	
	  export default {
	    props: {
	      foodList: Array,
	      minPrice: Number,
	      deliveryPrice: Number,
	      updateFoodCount: Function
	    },
	
	    data () {
	      return {
	        isShow: false
	      }
	    },
	
	    computed: {
	      // 计算数量
	      totalCount () {
	        var count = 0
	        this.foodList.forEach(food => {
	          count += food.count
	        })
	        return count
	      },
	      // 计算总价
	      totalPrice () {
	        var price = 0
	        this.foodList.forEach(food => {
	          price += food.count * food.price
	        })
	        return price
	      },
	      // 计算起送价格
	      payText () {
	        if (this.totalCount === 0) {
	          return `￥${this.minPrice}元起送`
	        } else if (this.totalPrice < this.minPrice) {
	          return `还差￥${this.minPrice - this.totalPrice}元起送`
	        } else {
	          return '去结算'
	        }
	      },
	      // 右侧按钮的两种显示方式
	      payClass () {
	        return this.totalPrice < this.minPrice ? 'not-enough' : 'enough'
	      },
	
	      // 商品列表计算显示
	      listShow () {
	        if (this.foodList.length === 0) { // 如果商品列表为空则不显示
	          this.isShow = false
	          return false
	        }
	
	        if (this.isShow) {
	          this.$nextTick(() => { // 延迟到界面更新完成后调用
	            if (!this.scroll) {
	              this.scroll = new BScroll(this.$els.listContent, {
	                click: true
	              })
	            } else {
	              this.scroll.refresh() // 刷新形成滚动
	            }
	          })
	        }
	
	        return this.isShow
	      }
	    },
	
	    methods: {
	      // 定义阴影浮层是否显示的方法
	      toggleList () {
	        if (this.foodList.length) {
	          this.isShow = !this.isShow
	        }
	      },
	      // 订阅事件 --> 清空购物车事件
	      clear () {
	        if (window.confirm('确定清空购物车吗?')) {
	          // 触发事件
	          this.$emit('clear', this.foodList)
	        }
	      },
	      // 定义点击支付弹窗的方法
	      pay () {
	        if (this.totalPrice - this.minPrice >= 0) {
	          window.alert(`支付${this.totalPrice + this.deliveryPrice}`)
	        }
	      }
	    },
	
	    components: {
	      cartcontrol
	    }
	  }
	</script>

----------


## 分割线组件 split
	<template>
	  <div class="split"></div>
	</template>
	
	<script type="text/ecmascript-6">
	  export default {
	
	  }
	</script>
	
	<style lang="stylus" rel="stylesheet/stylus">
	  .split
	    width: 100%
	    height: 16px
	    border-top: 1px solid rgba(7, 17, 27, 0.1)
	    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
	    background: #f3f5f7
	</style>


## ratingselect 评论过滤组件

	<template>
	  <div class="ratingselect">
	    <!--TODO 商品评价分类-->
	    <div class="rating-type border-1px">
	      <span class="block positive" :class="{active: selectType===2}" @click="select(2, $event)">
	        {{desc.all}}<span class="count">{{ratings.length}}</span>
	      </span>
	      <span class="block positive" :class="{active: selectType===0}" @click="select(0, $event)">
	        {{desc.positive}}<span class="count">{{positiveLength}}</span>
	      </span>
	      <span class="block negative" :class="{active: selectType===1}" @click="select(1, $event)">
	        {{desc.negative}}<span class="count">{{ratings.length-positiveLength}}</span>
	      </span>
	    </div>
	
	    <!--TODO 勾选项-->
	    <div class="switch" :class="{on: onlyContent}" @click="swithContent">
	      <span class="icon-check_circle"></span>
	      <span class="text">只看有内容的评价</span>
	    </div>
	
	  </div>
	</template>
	
	<script type="text/ecmascript-6">
	  export default {
	    props: {
	      desc: Object,
	      onlyContent: Boolean,
	      ratings: Array,
	      selectType: Number
	    },
	    computed: {
	      positiveLength () {
	        // 办法一: 过滤得到数组, 取出数组的length
	        // return this.ratings.filter(rating => rating.rateType === 0).length
	
	        // 方法二: 使用reduce进行统计
	        return this.ratings.reduce((preTotal, rating) => {
	          return preTotal + (rating.rateType === 0 ? 1 : 0)
	        }, 0)
	      }
	    },
	    methods: {
	      select (type, event) {
	        if (!event._constructed) {
	          return
	        }
	        // 触发事件
	        this.$emit('set-select-type', type)
	      },
	      swithContent (event) {
	        if (!event._constructed) {
	          return
	        }
	        // 触发事件
	        this.$emit('switchonlycontent')
	      }
	    }
	  }
	</script>
	
	<style lang="stylus" rel="stylesheet/stylus">
	  @import "../../common/stylus/mixins.styl"
	
	  .ratingselect
	    .rating-type
	      padding: 18px 0
	      margin: 0 18px
	      border-1px(rgba(7, 17, 27, 0.1))
	      font-size: 0
	      .block
	        display: inline-block
	        padding: 8px 12px
	        margin-right: 8px
	        line-height: 16px
	        border-radius: 1px
	        font-size: 12px
	        color: rgb(77, 85, 93)
	        &.active
	          color: #fff
	        .count
	          margin-left: 2px
	          font-size: 8px
	        &.positive
	          background: rgba(0, 160, 220, 0.2)
	          &.active
	            background: rgb(0, 160, 220)
	        &.negative
	          background: rgba(77, 85, 93, 0.2)
	          &.active
	            background: rgb(77, 85, 93)
	    .switch
	      padding: 12px 18px
	      line-height: 24px
	      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
	      color: rgb(147, 153, 159)
	      font-size: 0
	      &.on
	        .icon-check_circle
	          color: #00c850
	      .icon-check_circle
	        display: inline-block
	        vertical-align: top
	        margin-right: 4px
	        font-size: 24px
	      .text
	        display: inline-block
	        vertical-align: top
	        font-size: 12px
	</style>

## food组件 商品大图预览
### 11.1  样式

	<style lang="stylus" rel="stylesheet/stylus">
	  @import "../../common/stylus/mixins.styl"
	
	  .food
	    position: fixed
	    left: 0
	    top: 0
	    bottom: 48px
	    z-index: 30
	    width: 100%
	    background: #fff
	    &.move-transition
	      transition: all 0.2s linear
	      transform: translate3d(0, 0, 0)
	    &.move-enter, &.move-leave
	      transform: translate3d(100%, 0, 0)
	    .image-header
	      position: relative
	      width: 100%
	      height: 0
	      padding-top: 100%
	      img
	        position: absolute
	        top: 0
	        left: 0
	        width: 100%
	        height: 100%
	      .back
	        position: absolute
	        top: 10px
	        left: 0
	        .icon-arrow_lift
	          display: block
	          padding: 10px
	          font-size: 20px
	          color: #fff
	
	    .content
	      position: relative
	      padding: 18px
	      .title
	        line-height: 14px
	        margin-bottom: 8px
	        font-size: 14px
	        font-weight: 700
	        color: rgb(7, 17, 27)
	      .detail
	        margin-bottom: 18px
	        line-height: 10px
	        height: 10px
	        font-size: 0
	        .sell-count, .rating
	          font-size: 10px
	          color: rgb(147, 153, 159)
	        .sell-count
	          margin-right: 12px
	      .price
	        font-weight: 700
	        line-height: 24px
	        .now
	          margin-right: 8px
	          font-size: 14px
	          color: rgb(240, 20, 20)
	        .old
	          text-decoration: line-through
	          font-size: 10px
	          color: rgb(147, 153, 159)
	      .cartcontrol-wrapper
	        position: absolute
	        right: 12px
	        bottom: 12px
	      .buy
	        position: absolute
	        right: 18px
	        bottom: 18px
	        z-index: 10
	        height: 24px
	        line-height: 24px
	        padding: 0 12px
	        box-sizing: border-box
	        border-radius: 12px
	        font-size: 10px
	        color: #fff
	        background: rgb(0, 160, 220)
	        &.fade-transition
	          transition: all 0.2s
	          opacity: 1
	        &.fade-enter, &.fade-leave
	          opacity: 0
	    .info
	      padding: 18px
	      .title
	        line-height: 14px
	        margin-bottom: 6px
	        font-size: 14px
	        color: rgb(7, 17, 27)
	      .text
	        line-height: 24px
	        padding: 0 8px
	        font-size: 12px
	        color: rgb(77, 85, 93)
	    .rating
	      padding-top: 18px
	      .title
	        line-height: 14px
	        margin-left: 18px
	        font-size: 14px
	        color: rgb(7, 17, 27)
	      .rating-wrapper
	        padding: 0 18px
	        .rating-item
	          position: relative
	          padding: 16px 0
	          border-1px(rgba(7, 17, 27, 0.1))
	          .user
	            position: absolute
	            right: 0
	            top: 16px
	            line-height: 12px
	            font-size: 0
	            .name
	              display: inline-block
	              margin-right: 6px
	              vertical-align: top
	              font-size: 10px
	              color: rgb(147, 153, 159)
	            .avatar
	              border-radius: 50%
	          .time
	            margin-bottom: 6px
	            line-height: 12px
	            font-size: 10px
	            color: rgb(147, 153, 159)
	          .text
	            line-height: 16px
	            font-size: 12px
	            color: rgb(7, 17, 27)
	            .icon-thumb_up, .icon-thumb_down
	              margin-right: 4px
	              line-height: 16px
	              font-size: 12px
	            .icon-thumb_up
	              color: rgb(0, 160, 220)
	            .icon-thumb_down
	              color: rgb(147, 153, 159)
	
	        .no-rating
	          padding: 16px 0
	          font-size: 12px
	          color: rgb(147, 153, 159)
	</style>

### 11.2 goods组件里引入food

	  <food :food="selectedFood"
	        v-ref:food
	        :update-food-count="updateFoodCount"></food>

- 引入: `import food from '../food/food.vue'`
- 注册: `components: {food}`

### 11.3 交互行为和模版

	<template>
	  <div class="food"
	       transition="move"
	       v-show="isShow"
	       v-el:food>
	    <div class="food-content">
	      <!--TODO 食物大图-->
	      <div class="image-header">
	        <img :src="food.image">
	        <div class="back" @click="show(false)">
	          <i class="icon-arrow_lift"></i>
	        </div>
	      </div>
	
	      <!--TODO 商品内容详细-->
	      <div class="content">
	        <h1 class="title">{{food.name}}</h1>
	        <div class="detail">
	          <span class="sell-count">月售{{food.sellCount}}份</span>
	          <span class="rating">好评率{{food.rating}}%</span>
	        </div>
	        <div class="price">
	          <span class="now">￥{{food.price}}</span>
	          <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
	        </div>
	        <div class="cartcontrol-wrapper">
	          <cartcontrol :food="food" :update-food-count="updateFoodCount"></cartcontrol>
	        </div>
	        <div class="buy"
	             v-show="!food.count"
	             @click="updateFoodCount(food,true,$event)">加入购物车
	        </div>
	      </div>
	
	      <!--分割线-->
	      <split></split>
	
	      <!-- TODO 商品信息-->
	      <div class="info" v-show="food.info">
	        <h1 class="title">商品信息</h1>
	        <p class="text">{{food.info}}</p>
	      </div>
	
	      <!--分割线-->
	      <split></split>
	
	      <!--TODO 商品评论信息-->
	      <div class="rating">
	        <h1 class="title">商品评价</h1>
	
	        <!-- TODO 评论过滤组件-->
	        <ratingselect :desc="desc"
	                      :only-content="onlyContent"
	                      :ratings="food.ratings"
	                      :select-type="selectType"
	                      @switchonlycontent="switchOnlyContent"
	                      @set-select-type="setSelectType"
	                      v-if="food.ratings"></ratingselect>
	
	        <!-- 评论列表-->
	        <div class="rating-wrapper">
	          <ul v-show="food.ratings && food.ratings.length">
	            <li class="rating-item border-1px" v-for="rating in filterRatings">
	              <div class="user">
	                <span class="name">{{rating.username}}</span>
	                <img class="avatar" width="12" height="12" :src="rating.avatar">
	              </div>
	              <div class="time">{{rating.rateTime}}</div>
	              <p class="text">
	                <!--赞图标-->
	                <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>{{rating.text}}
	              </p>
	            </li>
	          </ul>
	          <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
	        </div>
	      </div>
	
	    </div>
	  </div>
	</template>
	
	<script type="text/ecmascript-6">
	  // 引入 滑动插件
	  import BScroll from 'better-scroll'
	  // 引入控制购物车数量组件
	  import cartcontrol from '../cartcontrol/cartcontrol.vue'
	  // 引入分割线组件
	  import split from '../split/split.vue'
	  // 引入评论过滤组件
	  import ratingselect from '../ratingselect/ratingselect'
	  // 代表显示是 "全部"
	  const ALL = 2
	
	  export default {
	    props: {
	      food: Object,
	      updateFoodCount: Function
	    },
	    data () {
	      return {
	        isShow: false,
	        onlyContent: false,
	        selectType: ALL
	      }
	    },
	    created () {
	      this.desc = {
	        all: '全部',
	        positive: '推荐',
	        negative: '吐槽'
	      }
	    },
	    methods: {
	      show (isShow) { // 显示隐藏方法
	        this.isShow = isShow
	        // 显示时进行滚动
	        if (this.isShow) {
	          this.$nextTick(() => {
	            if (!this.scroll) {
	              this.scroll = new BScroll(this.$els.food, {
	                click: true
	              })
	            } else {
	              this.scroll.refresh()
	            }
	          })
	        }
	      },
	      // 切换 onlyContent
	      switchOnlyContent () {
	        this.onlyContent = !this.onlyContent
	        // 刷新列表
	        this.$nextTick(() => {
	          this.scroll.refresh()
	        })
	      },
	      // 更新 selectType 的值
	      setSelectType (selectType) {
	        this.selectType = selectType
	        // 刷新列表
	        this.$nextTick(() => {
	          this.scroll.refresh()
	        })
	      }
	    },
	    computed: {
	      filterRatings () {
	        if (!this.food.ratings) {
	          return []
	        }
	        const ratings = this.food.ratings
	        const selectType = this.selectType
	        const onlyContent = this.onlyContent
	        return ratings.filter(rating => {
	          // TODO 解构赋值
	          var {rateType, text} = rating
	          if (selectType === 2) {
	            return !onlyContent || text.length > 0
	          } else {
	            return selectType === rateType && (!onlyContent || text.length > 0)
	          }
	        })
	      }
	    },
	    components: {
	      cartcontrol,
	      split,
	      ratingselect
	    }
	  }
	</script>

### 11.4 评论过滤组件需要的参数
- 描述信息
- 是否只看
- 评论列表
- 评论列表的type值
- 是否切换可看方法
- 评论列表显示的方法

		:desc="desc"
        :only-content="onlyContent"
        :ratings="food.ratings"
        :select-type="selectType"
        @switchonlycontent="switchOnlyContent"
        @set-select-type="setSelectType"
        v-if="food.ratings"

### 11.5 评论过滤的信息显示
- 通过计算属性 计算循环得到li列表里的评论
	- `v-for="rating in filterRatings"`

### 11.6 在food组件里定义方法 通过自定义事件传递给ratingselect
- switchOnlyContent 切换onlyContent方法
- setSelectType 更新 selectType 的值
- ratingselect组件里通过 $emit 使用方法


## ratings.vue 评论组件
### 12.1 样式

	<style lang="stylus" rel="stylesheet/stylus">
	  @import "../../common/stylus/mixins.styl"
	
	  .ratings
	    position: absolute
	    top: 174px
	    bottom: 0
	    left: 0
	    width: 100%
	    overflow: hidden
	    .overview
	      display: flex
	      padding: 18px 0
	      .overview-left
	        flex: 0 0 137px
	        padding: 6px 0
	        width: 137px
	        border-right: 1px solid rgba(7, 17, 27, 0.1)
	        text-align: center
	        @media only screen and (max-width: 320px)
	          flex: 0 0 120px
	          width: 120px
	        .score
	          margin-bottom: 6px
	          line-height: 28px
	          font-size: 24px
	          color: rgb(255, 153, 0)
	        .title
	          margin-bottom: 8px
	          line-height: 12px
	          font-size: 12px
	          color: rgb(7, 17, 27)
	        .rank
	          line-height: 10px
	          font-size: 10px
	          color: rgb(147, 153, 159)
	      .overview-right
	        flex: 1
	        padding: 6px 0 6px 24px
	        @media only screen and (max-width: 320px)
	          padding-left: 6px
	        .score-wrapper
	          margin-bottom: 8px
	          font-size: 0
	          .title
	            display: inline-block
	            line-height: 18px
	            vertical-align: top
	            font-size: 12px
	            color: rgb(7, 17, 27)
	          .star
	            display: inline-block
	            margin: 0 12px
	            vertical-align: top
	          .score
	            display: inline-block
	            line-height: 18px
	            vertical-align: top
	            font-size: 12px
	            color: rgb(255, 153, 0)
	        .delivery-wrapper
	          font-size: 0
	          .title
	            line-height: 18px
	            font-size: 12px
	            color: rgb(7, 17, 27)
	          .delivery
	            margin-left: 12px
	            font-size: 12px
	            color: rgb(147, 153, 159)
	    .rating-wrapper
	      padding: 0 18px
	      .rating-item
	        display: flex
	        padding: 18px 0
	        border-1px(rgba(7, 17, 27, 0.1))
	        .avatar
	          flex: 0 0 28px
	          width: 28px
	          margin-right: 12px
	          img
	            border-radius: 50%
	        .content
	          position: relative
	          flex: 1
	          .name
	            margin-bottom: 4px
	            line-height: 12px
	            font-size: 10px
	            color: rgb(7, 17, 27)
	          .star-wrapper
	            margin-bottom: 6px
	            font-size: 0
	            .star
	              display: inline-block
	              margin-right: 6px
	              vertical-align: top
	            .delivery
	              display: inline-block
	              vertical-align: top
	              line-height: 12px
	              font-size: 10px
	              color: rgb(147, 153, 159)
	          .text
	            margin-bottom: 8px
	            line-height: 18px
	            color: rgb(7, 17, 27)
	            font-size: 12px
	          .recommend
	            line-height: 16px
	            font-size: 0
	            .icon-thumb_up,.icon-thumb_down,.item
	              display: inline-block
	              margin: 0 8px 4px 0
	              font-size: 9px
	            .icon-thumb_up
	              color: rgb(0, 160, 220)
	            .icon-thumb_down
	              color: rgb(147, 153, 159)
	            .item
	              padding: 0 6px
	              border: 1px solid rgba(7, 17, 27, 0.1)
	              border-radius: 1px
	              color: rgb(147, 153, 159)
	              background: #fff
	          .time
	            position: absolute
	            top: 0
	            right: 0
	            line-height: 12px
	            font-size: 10px
	            color: rgb(147, 153, 159)
	</style>


### 12.2 模版
	<template>
	  <div class="ratings" v-el:ratings>
	    <div class="ratings-content">
	      <!-- TODO 评分系统-->
	      <div class="overview">
	        <div class="overview-left">
	          <h1 class="score">{{seller.score}}</h1>
	          <div class="title">综合评分</div>
	          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
	        </div>
	        <div class="overview-right">
	          <div class="score-wrapper">
	            <span class="title">服务态度</span>
	            <star :score="seller.serviceScore" :size="36"></star>
	            <span class="score">{{seller.serviceScore}}</span>
	          </div>
	          <div class="score-wrapper">
	            <span class="title">商品评分</span>
	            <star :size="36" :score="seller.foodScore"></star>
	            <span class="score">{{seller.foodScore}}</span>
	          </div>
	          <div class="delivery-wrapper">
	            <span class="title">送达时间</span>
	            <span class="delivery">{{seller.deliveryTime}}分钟</span>
	          </div>
	        </div>
	      </div>
	
	      <!--TODO 分割线-->
	      <split></split>
	
	      <!-- TODO 评论过滤组件-->
	      <ratingselect :desc="desc"
	                    :only-content="onlyContent"
	                    :ratings="ratings"
	                    :select-type="selectType"
	                    @switchonlycontent="switchOnlyContent"
	                    @set-select-type="setSelectType"
	                    v-if="ratings"></ratingselect>
	
	      <!--TODO 评论列表-->
	      <div class="rating-wrapper">
	        <ul>
	          <li  class="rating-item"
	               v-for="rating in ratings"
	               v-show="needShow(rating)">
	
	            <!--评论头像-->
	            <div class="avatar">
	              <img width="28" height="28" :src="rating.avatar">
	            </div>
	
	            <!--评论内容-->
	            <div class="content">
	              <h1 class="name">{{rating.username}}</h1>
	              <div class="star-wrapper">
	                <star :size="24" :score="rating.score"></star>
	                <span class="delivery">{{rating.deliveryTime}}</span>
	              </div>
	              <p class="text">{{rating.text}}</p>
	              <!--赞和小标签-->
	              <div class="recommend">
	                <span :class="{'icon-thumb_up':rating.rateType===0, 'icon-thumb_down':rating.rateType===1}"></span>
	                <span class="item" v-for="item in rating.recommend">{{item}}</span>
	              </div>
	              <div class="time">
	                {{rating.rateTime | dateString}}
	              </div>
	            </div>
	          </li>
	        </ul>
	      </div>
	    </div>
	  </div>
	</template>
	

### 12.3 交互
	<script type="text/ecmascript-6">
	  import moment from 'moment'
	  import BScroll from 'better-scroll'
	  import star from '../star/star.vue'
	  import split from '../split/split.vue'
	  import ratingselect from '../ratingselect/ratingselect.vue'
	  const ALL = 2
	
	  export default {
	    props: {
	      seller: Object
	    },
	    data () {
	      return {
	        ratings: [],
	        onlyContent: true,
	        selectType: ALL
	      }
	    },
	    created () {
	      this.desc = {
	        all: '全部',
	        positive: '满意',
	        negative: '不满意'
	      }
	      // ajax 获取 ratings
	      this.$http.get('/api2/ratings')
	        .then(response => {
	          const result = response.body
	          if (result.code === 0) {
	            this.ratings = result.data
	
	            // 创建Scroll 对象
	            this.$nextTick(() => {
	              if (this.$els.ratings) {
	                this.scroll = new BScroll(this.$els.ratings, {
	                  click: true
	                })
	              }
	            })
	          }
	        })
	    },
	    methods: {
	      // 切换 onlyContent
	      switchOnlyContent () {
	        this.onlyContent = !this.onlyContent
	        // 刷新列表
	        this.$nextTick(() => {
	          this.scroll.refresh()
	        })
	      },
	      // 更新 selectType 的值
	      setSelectType (selectType) {
	        this.selectType = selectType
	        // 刷新列表
	        this.$nextTick(() => {
	          this.scroll.refresh()
	        })
	      },
	      needShow (rating) {
	        const {rateType, text} = rating
	        const selectType = this.selectType
	        const onlyContent = this.onlyContent
	        if (selectType === 2) {
	          return !onlyContent || text.length > 0
	        } else {
	          return selectType === rateType && (!onlyContent || text.length > 0)
	        }
	      }
	    },
	    filters: {
	      dateString (value) {
	        return moment(value).format('YYYY-MM-DD HH:mm:ss')
	      }
	    },
	    components: {
	      star,
	      split,
	      ratingselect
	    }
	  }
	</script>
	
	


## seller.vue 商家信息
### 13.1 样式 

	<style lang="stylus" rel="stylesheet/stylus">
	  @import "../../common/stylus/mixins.styl"
	
	  .seller
	    position: absolute
	    top: 174px
	    bottom: 0
	    left: 0
	    width: 100%
	    overflow: hidden
	    .overview
	      position: relative
	      padding: 18px
	      .title
	        margin-bottom: 8px
	        line-height: 14px
	        color: rgb(7, 17, 27)
	        font-size: 14px
	      .desc
	        padding-bottom: 18px
	        border-1px(rgba(7, 17, 27, 0.1))
	        font-size: 0
	        .star
	          display: inline-block
	          margin-right: 8px
	          vertical-align: top
	        .text
	          display: inline-block
	          margin-right: 12px
	          line-height: 18px
	          vertical-align: top
	          font-size: 10px
	          color: rgb(77, 85, 93)
	      .remark
	        display: flex
	        padding-top: 18px
	        .block
	          flex: 1
	          text-align: center
	          border-right: 1px solid rgba(7, 17, 27, 0.1)
	          &:last-child
	            border: none
	          h2
	            margin-bottom: 4px
	            line-height: 10px
	            font-size: 10px
	            color: rgb(147, 153, 159)
	          .content
	            line-height: 24px
	            font-size: 10px
	            color: rgb(7, 17, 27)
	            .stress
	              font-size: 24px
	      .favorite
	        position: absolute
	        width: 50px
	        right: 11px
	        top: 18px
	        text-align: center
	        .icon-favorite
	          display: block
	          margin-bottom: 4px
	          line-height: 24px
	          font-size: 24px
	          color: #d4d6d9
	          &.active
	            color: rgb(240, 20, 20)
	        .text
	          line-height: 10px
	          font-size: 10px
	          color: rgb(77, 85, 93)
	    .bulletin
	      padding: 18px 18px 0 18px
	      .title
	        margin-bottom: 8px
	        line-height: 14px
	        color: rgb(7, 17, 27)
	        font-size: 14px
	      .content-wrapper
	        padding: 0 12px 16px 12px
	        border-1px(rgba(7, 17, 27, 0.1))
	        .content
	          line-height: 24px
	          font-size: 12px
	          color: rgb(240, 20, 20)
	      .supports
	        .support-item
	          padding: 16px 12px
	          border-1px(rgba(7, 17, 27, 0.1))
	          font-size: 0
	          &:last-child
	            border-none()
	        .icon
	          display: inline-block
	          width: 16px
	          height: 16px
	          vertical-align: top
	          margin-right: 6px
	          background-size: 16px 16px
	          background-repeat: no-repeat
	          &.decrease
	            bg-image('decrease_4')
	          &.discount
	            bg-image('discount_4')
	          &.guarantee
	            bg-image('guarantee_4')
	          &.invoice
	            bg-image('invoice_4')
	          &.special
	            bg-image('special_4')
	        .text
	          line-height: 16px
	          font-size: 12px
	          color: rgb(7, 17, 27)
	    .pics
	      padding: 18px
	      .title
	        margin-bottom: 12px
	        line-height: 14px
	        color: rgb(7, 17, 27)
	        font-size: 14px
	      .pic-wrapper
	        width: 100%
	        overflow: hidden
	        white-space: nowrap
	        .pic-list
	          font-size: 0
	          .pic-item
	            display: inline-block
	            margin-right: 6px
	            width: 120px
	            height: 90px
	            &:last-child
	              margin: 0
	    .info
	      padding: 18px 18px 0 18px
	      color: rgb(7, 17, 27)
	      .title
	        padding-bottom: 12px
	        line-height: 14px
	        border-1px(rgba(7, 17, 27, 0.1))
	        font-size: 14px
	      .info-item
	        padding: 16px 12px
	        line-height: 16px
	        border-1px(rgba(7, 17, 27, 0.1))
	        font-size: 12px
	        &:last-child
	          border-none()
	</style>

## 13.2 模版

	<template>
	  <div class="seller" v-el:seller>
	    <div class="seller-content">
	      <!--TODO 商家整体信息-->
	      <div class="overview">
	        <h1 class="title">{{seller.name}}</h1>
	        <div class="desc border-1px">
	          <star :size="36" :score="seller.score"></star>
	          <span class="text">({{seller.ratingCount}})</span>
	          <span class="text">月售{{seller.sellCount}}单</span>
	        </div>
	        <ul class="remark">
	          <li class="block">
	            <h2>起送价</h2>
	            <div class="content">
	              <span class="stress">{{seller.minPrice}}</span>元
	            </div>
	          </li>
	          <li class="block">
	            <h2>商家配送</h2>
	            <div class="content">
	              <span class="stress">{{seller.deliveryPrice}}</span>元
	            </div>
	          </li>
	          <li class="block">
	            <h2>平均配送时间</h2>
	            <div class="content">
	              <span class="stress">{{seller.deliveryTime}}</span>分钟
	            </div>
	          </li>
	        </ul>
	        <div class="favorite" @click="toggle">
	          <span class="icon-favorite" :class="{'active':favorite}"></span>
	          <span class="text">{{favorite ? '已收藏' : '未收藏'}}</span>
	        </div>
	      </div>
	
	      <!--TODO 分割线-->
	      <split></split>
	
	      <!--TODO 商家公告和活动-->
	      <div class="bulletin">
	        <h1 class="title">公告与活动</h1>
	        <div class="content-wrapper border-1px">
	          <p class="content">{{seller.bulletin}}</p>
	        </div>
	        <ul class="supports" v-if="seller.supports">
	          <li class="support-item border-1px" v-for="support in seller.supports">
	            <span class="icon" :class="classMap[support.type]"></span>
	            <span class="text">{{support.description}}</span>
	          </li>
	        </ul>
	      </div>
	
	      <!--TODO 分割线-->
	      <split></split>
	
	      <!--TODO 商家实景-->
	      <div class="pics">
	        <h1 class="title">商家实景</h1>
	        <div class="pic-wrapper" v-el:pic-wrapper>
	          <ul class="pic-list" v-el:pic-list>
	            <li class="pic-item" v-for="pic in seller.pics">
	              <img :src="pic" width="120" height="90">
	            </li>
	          </ul>
	        </div>
	      </div>
	
	      <!--TODO 分割线-->
	      <split></split>
	
	      <!--TODO 商家信息-->
	      <div class="info">
	        <h1 class="title border-1px">商家信息</h1>
	        <ul>
	          <li class="info-item" v-for="info in seller.infos">{{info}}</li>
	        </ul>
	      </div>
	    </div>
	  </div>
	</template>

### 13.3 交互
	
	<script type="text/ecmascript-6">
	  import BScroll from 'better-scroll'
	  import star from '../star/star.vue'
	  import split from '../split/split.vue'
	
	  export default {
	    props: {
	      seller: Object
	    },
	    data () {
	      return {
	        favorite: window.localStorage.favorite === 'true'
	      }
	    },
	    created () {
	      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
	      this.$nextTick(() => {
	        // 垂直滚动
	        if (this.$els.seller) {
	          this.sellerScroll = new BScroll(this.$els.seller, {
	            click: true
	          })
	        }
	        // 水平滚动
	        if (this.$els.picWrapper) {
	          var liWidth = 120
	          var space = 6
	          var liLenth = this.$els.picList.children.length
	          // 给包含图片的li的ul指定width
	          this.$els.picList.style.width = (liWidth + space) * liLenth - space + 'px'
	
	          this.picScroll = new BScroll(this.$els.picWrapper, {
	            click: true,
	            scrollX: true // 水平滚动
	          })
	        }
	      })
	    },
	    methods: {
	      toggle (event) {
	        // 过滤系统的点击回调
	        if (!event._constructed) {
	          return
	        }
	        this.favorite = !this.favorite
	        // 保存
	        window.localStorage.favorite = this.favorite
	      }
	    },
	    components: {
	      star,
	      split
	    }
	  }
	</script>

## 小球动画 
- goods组件给shopcart组件添加 `$ref:shopcart`
- updateFoodCount方法里最后添加
	- `this.$refs.shopcart.drop(event.target)`
- shopcart组件里添加小球组件的模版

		<div class="ball-container">
	      <div class="ball" transition="drop" v-for="ball in balls" v-show="ball.isShow">
	        <div class="inner inner-hook"></div>
	      </div>
	    </div>
### 14.1  初始化数据

    data () {
      return {
        isShow: false,
        balls: [
          {isShow: false},
          {isShow: false},
          {isShow: false},
          {isShow: false},
          {isShow: false}
        ],
        droopingBalls: [] // 保存多个待运行动画的 ball
      }
    }

### 14.2 定义方法 drop

      drop (startEle) {
        // 找到一个隐藏的小球并显示
        // 从balls数组中找出 isShow是false的
        const ball = this.balls.find(ball => !ball.isShow)
        // 只有找到时才做动画
        if (ball) {
          ball.isShow = true
          ball.startEle = startEle // 保存对应的起始位置的元素
          this.droopingBalls.push(ball) // 把启动动画的ball保存起来
        }
      }

### 14.3  配置transitions

    transitions: {
      drop: {
        // 动画开始之前, 将小球瞬间移动到点击位置
        beforeEnter (el) {
          var offsetX = 0
          var offsetY = 0

          // 取出第一个待启动动画的ball
          const ball = this.droopingBalls.shift()
          // 找到点击的startEl
          var startEle = ball.startEle
          // 得到起始位置的坐标
          const {left, top} = startEle.getBoundingClientRect()
          // 得到原始位置小球的坐标
          const elLeft = 32
          const elBottom = 22
          // 得到偏移量
          offsetX = left - elLeft
          offsetY = -(window.innerHeight - top - elBottom)
          // 瞬间移动动画起始的位置
          el.style.transform = `translate3d(0, ${offsetY}px, 0)`
          el.style.webkitTransform = `translate3d(0, ${offsetY}px, 0)`
          const innerEl = el.children[0]
          innerEl.style.transform = `translate3d(${offsetX}px, 0, 0)`
          innerEl.style.webkitTransform = `translate3d(${offsetX}px, 0, 0)`
          // 保存ball
          el.ball = ball
        },
        // 动画开始时, 指定动画结束的位置
        enter (el) {
          this.$nextTick(() => {
            el.style.transform = 'translate3d(0, 0, 0)'
            el.style.webkitTransform = 'translate3d(0, 0, 0)'
            const innerEl = el.children[0]
            innerEl.style.transform = 'translate3d(0, 0, 0)'
            innerEl.style.webkitTransform = 'translate3d(0, 0, 0)'
          })
        },
        // 动画完成之后, 做收尾工作
        // TODO 问题: 在动画生命周期回调函数中更新状态. 页面不变化
        afterEnter (el) {
          // 找到对应的ball
          const ball = el.ball
          ball.isShow = false
          ball.startEle = null
          // 让el元素消失
          el.style.display = 'none'
        }
      }
    }


----------

## 升级Vue 2.0

#### 操作
- 使用vue-cli下载基于vue2 + vue-router2的项目
	- vue init webpack Vue_Project2.0
- 下载原1.0依赖的包
	- npm install better-scroll mockjs moment vue-resource --save
	- npm install stylus stylus-loader --save-dev
	- npm install pubsub-js --save
- 拷贝代码
- 利用迁移工具工具
	- npm install --global vue-migration-helper
	
	
	> navigate to a Vue 1.x project directorycd path/to/my-vue-project
	
	> scan all files in the current directory
	
	- vue-migration-helper# scan all files in specific sub-directories
	- vue-migration-helper src folder-a folder-b
