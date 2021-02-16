const fs = require(`fs`)

exports.onRenderBody = (
  { setHeadComponents, pathname, pathPrefix, loadPageDataSync },
  pluginOptions
) => {
  console.log({ pathname })
  console.log({ pathname })
  console.log({ pathname })
  fs.writeFileSync(`./wat.sh`, `tada`)
}
