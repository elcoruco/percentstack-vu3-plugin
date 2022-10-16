import SimpleStack from "./SimpleStackView.vue"
export default {
  install : (app, options) => {
    app.component("gf-simple-stack", SimpleStack);
  }
}