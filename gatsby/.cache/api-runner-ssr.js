var plugins = [{
      plugin: require('/home/russell/Desktop/projects/congratsby/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/russell/Desktop/projects/congratsby/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"v9yq2cbv","dataset":"production","watchMode":true,"token":"sk2iMmyUoTRk0OhPxgWx60enuLspIMmRdZUba7oqZ3Q6NkSYGIRiR1R9EcpEX9b2MEcWNg7W5zoNy9Tulqt20OL0tGEO8V2vavnoGXaVTs3WCVYTmZ7wO0pula9EUJmmyLCgaVUtfPdByMfoiwPMpw8lf5P1r3ELlWaeh8rExvgXZjr6SHK4"},
    },{
      plugin: require('/home/russell/Desktop/projects/congratsby/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
