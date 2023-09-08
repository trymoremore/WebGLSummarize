<script setup lang="ts">
  import {onMounted, reactive } from "vue";
  import Graphic from "./core/Graphic"
  import { RenderExample } from "./renderExample/RenderExample";
  import { ExampleDetail, ExampleList, renderExampleCollect } from "./renderExample/RenderExampleCollect";

  

  onMounted(()=>{
    
    Graphic.Init(document.getElementById("render") as HTMLCanvasElement);

  });

  let lastTime : number = 0;
  const render = (t : number)=>{

    if(RenderExample.instance != null){
      RenderExample.instance.Update(t - lastTime);
      lastTime = t;
    }

    window.requestAnimationFrame(render);

  }
  window.requestAnimationFrame(render);
  
  let lastExample : ExampleDetail | null = null;
  const app = reactive({

    list : renderExampleCollect,
    
    ListClick(list : ExampleList){

      list.isShow = !list.isShow;

    },

    ExampleClick(example : ExampleDetail){

      if(lastExample == example)return;
      if(lastExample != null)lastExample.app.unmount();
      example.app.mount('#hud');
      lastExample = example;

    }

  });

</script>

<template>
  <div id="panel">
      <div class="container">
        <h1 id="title"><a href="./#" class="nav-link">Summarize</a></h1>
        <a href="https://github.com/austinEng/webgpu-samples">Github</a>
        <hr />
        <div v-for="item in app.list">
          <a class="example-list"  @click="app.ListClick(item)">{{item.label}}</a>
          <a class="example-link nav-link" @click="app.ExampleClick(detial)" v-show="item.isShow"  v-for="detial in item.example">{{detial.name}}</a>
          <hr v-show="item.isShow"/>
        </div>
      </div>
  </div>
  <div id="maincontainer">
    <div id="hud" ref="render">
    </div>
    <canvas id="render">
    </canvas>
  </div>
</template>

<style scoped>
.container {
  padding-left: 15px;
  padding-right: 15px;
}

a {
  text-decoration: none;
  cursor: pointer;
}

a:link, a:visited {
  color: #045b88;
}

a:hover {
  text-decoration: underline;
}

.example-list{
  padding: 0.5em 0;
  font-size: 3vh;
  color: #002fff;
}

#panel {
  position: relative;
  left: 0px;
  flex: 1;
  width: 15%;
  /* max-width: 300px; */
  height: 100vh;
  overflow: auto;
  background: #fafafa;
}
#maincontainer{
  position: absolute;
  top: 0%;
  right: 0px;
  width: 85%;
  height: 100%;
  background:#000000
}
#hud{
  position: relative;
  z-index: 5;
}
#render {
  text-align: center;
  position: absolute;
  top: 2%;
  right: 2%;
  width: 96%;
  height: 96%;
  /* z-index: -5; */
}
.example-link {
  display: block;
  padding: 0.3em 0;
}

@media only screen and (max-width: 768px) {
  /* More padding on mobile for easier touch screen use */
  .example-link {
    padding: 0.5em 0;
  }
}

.example-link.selected {
  color: #ff0000;
}

main {
  position: relative;
  flex: 1;
  height: 100vh;
  overflow: auto;
  background: black;
  color: #ddd;
}

main.no-demo {
  background: white;
}

#intro-text {
  display: none;
}

main.no-demo #intro-text {
  display: block;
  color: #222;
}

#canvas-container {
  text-align: center;
  position: relative;
  margin-top: 10px;
}

.CodeMirror {
  border: 1px solid #ddd;
  height: auto!important;
  margin: 1em 0;
}
</style>
