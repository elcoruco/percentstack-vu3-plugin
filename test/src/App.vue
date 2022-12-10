<script setup>
</script>
<template>
  <div>
    <gf-simple-stack v-bind="{
      data : [{ value : 150}, {value : 10}],
      hideTicks : true, 
      showTooltip : false,
      margin : {top: 10},
      max : 200
    }" />
  </div>
</template>
