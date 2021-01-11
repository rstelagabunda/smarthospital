<template>
<div>
  <img :class="'w-5 '+color" :src="'/icons/'+folder+'/'+icon+'.svg'"  alt="">
<!-- <svgelement/> -->
</div>
  <!-- <object type="image/svg+xml" :class="'w-5 '+color" :data="'/icons/'+folder+'/'+icon+'.svg'"></object> -->
</template>

<script>
export default {
props:[
    'icon','folder',
        'color'
    
],
data(){
    return{
        // svgelement:document.createElementNS('/icons/'+folder+'/'+icon+'.svg', "svg"),
    }
}
}
</script>

<style>

</style>