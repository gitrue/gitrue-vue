const path = require('path')

function addStyleResource (rule) {
    rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './sass/mystyles.scss'),
        ],
      })
  }

module.exports = {
    // 子 app 配置
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    outputDir: 'public/dist',

    assetsDir: './',

    filenameHashing: true,

    
    // When building in multi-pages mode, the webpack config will contain different plugins
    // (there will be multiple instances of html-webpack-plugin and preload-webpack-plugin).
    // Make sure to run vue inspect if you are trying to modify the options for those plugins.
    pages: {
        index: {
            // entry for the pages
            entry: 'src/main.ts',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: '原子弹',
            // chunks to include on this pages, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        // subpage: ''
    },

    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,

    // 是否使用包含运行时编译器的Vue核心的构建
    runtimeCompiler: false,

    // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
    transpileDependencies: [],

    // 生产环境 sourceMap
    productionSourceMap: false,

    // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
    // corsUseCredentials: false,
    // webpack 配置，键值对象时会合并配置，为方法时会改写配置
    // https://cli.vuejs.org/guide/webpack.html#simple-configuration
    configureWebpack: (config) => {},

    // webpack 链接 API，用于生成和修改 webapck 配置
    // https://github.com/mozilla-neutrino/webpack-chain
    chainWebpack: (config) => {
        // cdn 配置
        // const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        // types.forEach(type => addStyleResource(config.module.rule('sass').oneOf(type)))
        // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
        config.optimization
            .splitChunks({
                cacheGroups: {}
            });
        config.resolve.alias
            .set('@', path.resolve(__dirname, './src'))
            // .set('assets',resolve('src/assets'))
            // .set('@components',path.resolve(__dirname, './src'))
            // .set('layout',resolve('src/layout'))
            // .set('base',resolve('src/base'))
            // .set('static',resolve('src/static'))
 
        // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
        // config.module
        //     .rule('eslint')
        //     .exclude
        //     // .add(path.resolve(__dirname, './src/styles/imports.styl'))
        //     .end()
    },

    // 配置高于chainWebpack中关于 css loader 的配置
    css: {
        // 是否开启支持 foo.module.css 样式
        modules: false,

        // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
        extract: true,

        // 是否构建样式地图，false 将提高构建速度
        sourceMap: false,

        // css预设器配置项
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },

            // postcss: {
            //     // options here will be passed to postcss-loader
            // }
        }
    },

    // All options for webpack-dev-server are supported
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        open: true,

        host: '127.0.0.1',

        port: 8080,

        https: false,

        hotOnly: false,

        proxy: {
            '/api': {
              target: 'http://localhost:9999',
              ws: true,
              changeOrigin: true
            } 
          },

        before: app => {}
    },
    // 构建时开启多进程处理 babel 编译
    parallel: require('os').cpus().length > 4,

    // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},

    // 第三方插件配置
    pluginOptions: {}
};

