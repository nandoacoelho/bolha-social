// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-project-jsx": preferDefault(require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/src/templates/project.jsx")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/dev-404-page.js")),
  "component---src-pages-404-jsx": preferDefault(require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/src/pages/404.jsx")),
  "component---src-pages-bubble-jsx": preferDefault(require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/src/pages/bubble.jsx")),
  "component---src-pages-contact-jsx": preferDefault(require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/src/pages/contact.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/src/pages/index.jsx")),
  "component---src-pages-results-jsx": preferDefault(require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/src/pages/results.jsx")),
  "component---src-pages-share-jsx": preferDefault(require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/src/pages/share.jsx")),
  "component---src-pages-team-jsx": preferDefault(require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/src/pages/team.jsx")),
  "component---src-pages-what-jsx": preferDefault(require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/src/pages/what.jsx"))
}

exports.json = {
  "layout-index.json": require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/json/layout-index.json"),
  "smart-triangle-make-triangles-smart.json": require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/json/smart-triangle-make-triangles-smart.json"),
  "blob-sphere-make-spheres-blob.json": require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/json/blob-sphere-make-spheres-blob.json"),
  "cube-round-make-cubes-round.json": require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/json/cube-round-make-cubes-round.json"),
  "leko-arts-your-theme-creator.json": require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/json/leko-arts-your-theme-creator.json"),
  "dev-404-page.json": require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/json/404.json"),
  "bubble.json": require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/json/bubble.json"),
  "contact.json": require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/json/contact.json"),
  "index.json": require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/json/index.json"),
  "results.json": require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/json/results.json"),
  "share.json": require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/json/share.json"),
  "team.json": require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/json/team.json"),
  "what.json": require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/json/what.json"),
  "404-html.json": require("/Users/fernandodealmeidacoelho/Code/bolha-social-website/.cache/json/404-html.json")
}