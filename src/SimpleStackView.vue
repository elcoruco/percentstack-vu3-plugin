<script setup>
/**
 * DEPENDENCIES
 * 
 */
import { ref, computed } from "vue";
import { scaleLinear } from "d3-scale";
import { off } from "process";

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
  axis       : Object,
  tooltipFn  : Function,
  hideTicks  : Boolean
});

const chartName = "simplestack";

/**
 * CONFIG
 * 
 */

// DEFAULT VALUES
//
const defaultHideTicks  = false;      
const defaultProportion = 1/6;
const defaultWidth      = 400;
const defaultHeight     = defaultWidth * defaultProportion;
const defaultColor      = 'orange';
const defaultBackground = "white";
const defaultBaseColor  = "#ECECEC";
const defaultTextColor  = "#C6C6C6";
const defaultTextMargin = 5;
const defaultDomain     = [0, 100];
const defaultMarginSize = 5;
const defaultPosition   = "bottom";
const defaultAxis       = { position : defaultPosition, textClass : "", domain :defaultDomain}
const defaultMargin     = {top : defaultMarginSize, right : defaultMarginSize, bottom : defaultHeight / 4, left : defaultMarginSize};

// Tooltip
const showTooltip       = ref(false);
const defaultTooltipFn  = d => `${d.key} : ${d.value}`
const tooltipHTML       = ref("");
const tooltipTop        = ref('0px');
const tooltipLeft       = ref('0px');
const tooltipBackground = ref("white");
const tooltipOffset     = ref(7);

// PROPERTIES
//
const width      = computed( () => props.width || defaultWidth)
const height     = computed( () => props.height || defaultHeight)
const hideTicks  = computed( () => props.hideTicks || defaultHideTicks)
const background = computed( () => props.background || defaultBackground)
const margin     = computed( () => {
  let mr;
  if(props.axis?.position == 'top'){
    defaultMargin.bottom = defaultMarginSize;
    defaultMargin.top = defaultHeight / 4
  }
  if(props.hideTicks){
    defaultMargin.top    = defaultMarginSize;
    defaultMargin.bottom = defaultMarginSize;
  }
  if(props.margin){
    mr = Object.assign({}, defaultMargin, props.margin)
  }
  else{
    mr = defaultMargin;
  }

  return mr;
})
const color      = computed( () => props.color || defaultColor)
const baseColor  = computed( () => props.baseColor || defaultBaseColor)
const axis       = computed( () => props.axis ? Object.assign(defaultAxis, props.axis) : defaultAxis )
const tooltipFn  = computed( () => props.tooltipFn || defaultTooltipFn );

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

/**
 * TOOLTIP HELPERS
 * 
 */
 const tooltipEnter = (e,d) => {
  showTooltip.value = true;
  tooltipHTML.value = tooltipFn.value(d);
  tooltipTop.value  = `${e.clientY + tooltipOffset.value}px`;
  tooltipLeft.value = `${e.clientX + tooltipOffset.value}px`;
}

const tooltipMove = e => {
  tooltipTop.value  = `${e.clientY + tooltipOffset.value}px`;
  tooltipLeft.value = `${e.clientX + tooltipOffset.value}px`;
}

const tooltipOut = () => {
  showTooltip.value = false;
}

// Methods
function* colorGenerator() {
  // infinite loop
  while (true) {
    // generate random values for red, green, and blue
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // yield the generated color as a string in the RGB format
    yield `rgb(${r}, ${g}, ${b})`;
  }
}

const cGenerator = colorGenerator();

const setFill = item => {
  if(item.color) return item.color;
  item.color = cGenerator.next().value;
  return item.color;
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
        :fill="setFill(d)"
        :x="leftMargin(data, i)"
        @mouseenter="e => tooltipEnter(e, d)"
        @mousemove="tooltipMove"
        @mouseout="tooltipOut"
        :key="`bar-${i}`"></rect>
      </g>

      <!-- xScaleAxis -->
      <g :transform="`translate(0, ${height - margin.bottom})`" v-if="!hideTicks">
        <text :class="axis.textClass" :fill="defaultTextColor" :x="margin.left" :y="defaultTextMargin" alignment-baseline="hanging" text-anchor="start">0%</text>
        <text :class="axis.textClass" :fill="defaultTextColor" :x="margin.left + rect.width/2" :y="defaultTextMargin" alignment-baseline="hanging"  text-anchor="middle">50%</text>
        <text :class="axis.textClass" :fill="defaultTextColor" :x="margin.left + rect.width" :y="defaultTextMargin" alignment-baseline="hanging"  text-anchor="end">100%</text>
      </g>
    </svg>
    <div class="gf-tooltip" 
    :style="{
      top : tooltipTop, 
      left : tooltipLeft,
      display : 'block',
      position : 'fixed',
      background : tooltipBackground
    }"
    v-if="showTooltip"
    v-html="tooltipHTML"></div>
  </div>
</template>