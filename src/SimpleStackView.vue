<script setup>
/**
 * DEPENDENCIES
 * 
 */
import { ref, computed } from "vue";
import { scaleLinear } from "d3-scale";

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
  baseColor  : String,
  axis       : Object
});

const chartName = "simplestack";

/**
 * CONFIG
 * 
 */

// DEFAULT VALUES
//
const defaultMargin     = ref({top : 10, right : 10, bottom : 50, left : 50});
const defaultHeight     = ref(400);
const defaultWidth      = ref(400);
const defaultColor      = ref('black');
const defaultBackground = ref("white");
const defaultBaseColor  = ref("#ECECEC");
const defaultTextColor  = ref("#C6C6C6");
const defaultTextMargin = ref(5);
const defaultAxis       = { position : "bottom", textClass : "", domain : [0, 100]}

// PROPERTIES
//
const width      = computed( () => props.width || defaultWidth.value)
const height     = computed( () => props.height || defaultHeight.value)
const background = computed( () => props.background || defaultBackground.value)
const margin     = computed( () => props.margin || defaultMargin.value)
const color      = computed( () => props.color || defaultColor.value)
const baseColor  = computed( () => props.baseColor || defaultBaseColor.value)
const axis       = computed( () => props.axis ? Object.assign(defaultAxis, props.axis) : defaultAxis )

const rect = computed( () => {
  return {
    width : width.value - margin.value.left - margin.value.right,
    height : height.value - margin.value.top - margin.value.bottom
  }
});

const scale = computed( () => {
  return scaleLinear().domain([0, 100]).range([0, rect.value.width])
});

const leftMargin = (data, index) => {
  if(!index) return 0;

  let margin = 0;
  for(let i = 0; i < index; i++){
    margin += scale.value(data[i].value)
  }

  return margin;
}
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

        <rect v-for="(d, i) of data" 
        :width="scale(d.value)" 
        :height="rect.height" 
        :fill="d.color || color"
        :x="leftMargin(data, i)"
        :key="`bar-${i}`"></rect>
      </g>

      <!-- xScaleAxis -->
      <g :transform="`translate(0, ${height - margin.bottom})`">
        <text :class="axis.textClass" :fill="defaultTextColor" :x="margin.left" :y="defaultTextMargin" alignment-baseline="hanging" text-anchor="start">0%</text>
        <text :class="axis.textClass" :fill="defaultTextColor" :x="margin.left + rect.width/2" :y="defaultTextMargin" alignment-baseline="hanging"  text-anchor="middle">50%</text>
        <text :class="axis.textClass" :fill="defaultTextColor" :x="margin.left + rect.width" :y="defaultTextMargin" alignment-baseline="hanging"  text-anchor="end">100%</text>
      </g>
    </svg>
  </div>
</template>