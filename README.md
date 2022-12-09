# base-vue3-plugin
Plugin que dibuja una barra horizontal de stack de porcentaje.

## instalación
para instalar la dependencia:

```
npm install @elcoruco/vue3-simplestack-chart-plugin
```

para incluirla en el componente hay que registrarla en el app de Vue:

```js
import { createApp } from 'vue'
import App from './App.vue'
import SimpleStack from "@elcoruco/vue3-simplestack-chart-plugin"
createApp(App)
  .use(SimpleStack)
  .mount('#app')
```

## Uso básico
Para generar un gráfica es necesario pasar por lo menos un array con objetos que tengan una propiedad "value" dentro de _data_, que indique un porcentaje (de cero a cien):

```vue
<gf-simple-stack :data="[{ value : 50}, {value : 10}]" />
```