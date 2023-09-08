<script setup lang="ts">

    import { onMounted, onUnmounted, ref, watch } from "vue";
    import Graphic from "../../core/Graphic";
    import {RenderExample} from "../RenderExample"

    class instanceRender extends RenderExample{

        protected override Render(dt: number): void {
            
            this.gl?.clearColor(1,0,0,1);
            this.gl?.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        }

    }

    let drawWay = ref("point");
    watch(drawWay,(newValue,oldValue)=>{
        console.log(newValue);
    });

    let pointSize = ref(1);


    const render = new instanceRender();
    onMounted(() => {
        render.Init(Graphic.gl);
    });
    onUnmounted(() => {
        render.Destroy();
    });

</script>
<template>
    <div id="container">
        <el-radio-group v-model="drawWay" id="drawway">
        <el-radio-button label="point">点</el-radio-button>
        <el-radio-button label="line">线</el-radio-button>
        <el-radio-button label="face">面</el-radio-button>
        </el-radio-group>
        <div v-show="drawWay == 'point'">
            <span style="color: burlywood;">点大小</span>
            <el-slider v-model="pointSize" id="pointslider"></el-slider>
        </div>
    </div>
</template>
<style>
    #container{
        margin-top: 10px;
        margin-left: 10px;
    }
    #drawway{
        font-size: large;
    }
    .el-slider{
        width: 20%;
    }
</style>