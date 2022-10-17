<script setup>
/**
 * DEPENDENCIES
 * 
 */
import { ref, computed } from "vue";

/**
 * PROPERTIES
 * 
 */
const props = defineProps({ 
  width      : Number, 
  height     : Number, 
  background : String,
  data       : Array,
  margin     : Object,
  color      : String,
  baseColor  : String
});

const chartName = "simplestack";

/**
 * CONFIG
 * 
 */

// DEFAULT VALUES
//
const defaultMargin = ref({top : 10, right : 10, bottom : 50, left : 50});
const defaultHeight = ref(400);
const defaultWidth  = ref(400);
const defaultColor      = ref('black');
const defaultBackground = ref("white");
const defaultBaseColor  = ref("grey");

// PROPERTIES
//
const width      = computed( () => props.width || defaultWidth.value)
const height     = computed( () => props.height || defaultHeight.value)
const background = computed( () => props.background || defaultBackground.value)
const margin     = computed( () => props.margin || defaultMargin.value)
const color      = computed( () => props.color || defaultColor.value)
const baseColor  = computed( () => props.baseColor || defaultBaseColor.value)

const rect = computed( () => {
  return {
    width : width.value - margin.value.left - margin.value.right,
    height : height.value - margin.value.top - margin.value.bottom
  }
});
</script>
<template>
  <div :class="`gf_${chartName}_container`">
    <h1></h1>
    <svg
      ref="svg"
      xmlns="http://www.w3.org/2000/svg"
      :style="{ background: background }"
      version="1.2"
      baseProfile="tiny"
      width="100%"
      height="100%"
      :viewBox="`0 0 ${width} ${height}`"
      stroke-linecap="round"
      stroke-linejoin="round"
      :class="`gf_${chartName}_svg`">

      <!-- bars -->
      <g :transform="`translate(${margin.left}, ${margin.top})`">
        <rect :width="rect.width" :height="rect.height" :fill="baseColor"></rect>
      </g>

      <!-- xScaleAxis -->
      <g :transform="`translate(0, ${height - margin.bottom})`">
        <text x="0" y="0" alignment-baseline="hanging">0%</text>
        <text :x="rect.width/2" y="0" alignment-baseline="hanging">50%</text>
        <text :x="rect.width" y="0" alignment-baseline="hanging">100%</text>
      </g>
    </svg>
  </div>
</template>