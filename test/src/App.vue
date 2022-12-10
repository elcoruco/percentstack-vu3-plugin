<script setup>
</script>
<template>
  <div>
    <gf-simple-stack v-bind="{
      data : [{ value : 50}, {value : 10}],
      hideTicks : true, 
      showTooltip : false,
      margin : {top: 10}
    }" />
  </div>
</template>
