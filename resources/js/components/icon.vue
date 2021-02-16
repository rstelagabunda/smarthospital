<template>
<div >
  <!-- <img :id="'hid'+randomnum" class="hidden" :src="'/icons/'+folder+'/'+icon+'.svg'"  alt=""> -->
  <div :id="'svg'+randomnum" v-if="icon">

  </div>
  <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
  <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
</svg>
  <svg :id="'svgicon'+icon" :class=" width+ ' '+color" stroke="currentcolor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  </svg> -->

</div>
<!-- <div>
  <object id="yoursvg" :data="'/icons/'+folder+'/'+icon+'.svg'" type="image/svg+xml" ></object>
  <svg viewBox="0 0 100 100" :class="'w-5 '+color">
   <use :x-link:href="'/icons/'+folder+'/'+icon+'.svg'"></use>
</svg>
</div> -->
  <!-- <object type="image/svg+xml" :class="'w-5 '+color" :data="'/icons/'+folder+'/'+icon+'.svg'"></object> -->
</template>

<script>
export default {
props:[
    'icon','folder',
        'color','x','y'
    
],
mounted(){
  var rawFile = new XMLHttpRequest();
    
    
  axios.get("/icons/"+this.folder+"/"+this.icon+".svg").then((response)=>{
// console.log(response.data);
var te= response.data;
// console.log(te);
var doc = new DOMParser().parseFromString(te, "text/xml");
// console.log(doc.childNodes[0].children);
document.getElementById('svg'+this.randomnum).appendChild(doc.childNodes[0]);
document.getElementById('svg'+this.randomnum).firstChild.classList.add(this.x,this.y,this.color);
let pathlist=document.querySelectorAll('path');
// if(this.active){
//   this.stroke="#4A5568";
// }
pathlist.forEach(element => {
  element.setAttribute("stroke", this.stroke);
});
// document.getElementById('svg'+this.icon).firstChild.
});
},

data(){
    return{
      width:'w-4 h-4 ',
      randomnum:Math.floor((Math.random() * 1000000000000) + 1),
      stroke:'currentColor',
         svgelement:document.getElementById("svgicon"),
    }
}
}
</script>

<style>

</style>