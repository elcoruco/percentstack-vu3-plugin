import Name from "./NameView.vue"
export default {
  install : (app, options) => {
    app.component("gf-name", Name);
  }
}