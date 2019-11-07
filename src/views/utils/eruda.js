if (process.env.VUE_APP_ENV !== "production") {
  ;(function() {
    var script = document.createElement("script")
    script.src = "//cdn.jsdelivr.net/npm/eruda"
    document.body.appendChild(script)
    script.onload = function() {
      eruda.init()
    }
  })()
}
