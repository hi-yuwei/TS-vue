const path = require("path")
const CompressionWebpackPlugin = require("compression-webpack-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
function resolve(dir) {
  return path.join(__dirname, dir)
}

const isProduction = process.env.NODE_ENV === "production"

// 是否使用gzip
const productionGzip = true
// 需要gzip压缩的文件后缀
const productionGzipExtensions = ["js", "css"]

module.exports = {
  publicPath: "/",
  outputDir: "public/master",
  productionSourceMap: false,
  devServer: {
    port: 8089,
    proxy: {
      "/dev": {
        target: "http://zuul.51daegou.cn",
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          "^/dev": ""
        }
      }
    }
  },
  // 配置全局scss变量
  css: {
    loaderOptions: {
      sass: {
        // data: `@import "@/styles/color.scss";`
      },
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 100, // 换算的基数
            selectorBlackList: [], // 忽略转换正则匹配项
            propList: ["*"]
          })
        ]
      }
    }
  },

  configureWebpack: config => {
    config.devtool = "source-map"
    if (isProduction) {
      // 生产环境
      productionGzip &&
        config.plugins.push(
          new CompressionWebpackPlugin({
            test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
            threshold: 8192,
            minRatio: 0.8
          })
        )
    }
  },

  chainWebpack: config => {
    config.resolve.alias.set("@assets", resolve("src/assets"))
    config.output.filename("[name].[hash].js").end()

    // 打包分析
    if (process.env.IS_ANALYZ) {
      config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
        {
          analyzerMode: "static"
        }
      ])
    }
  }
}
