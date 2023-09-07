<script lang="ts">

    import {RenderExample} from "../RenderExample"
    import { onMounted } from "vue";

    class TestRender extends RenderExample{

        protected override Render(dt: number): void {
            
            console.log(dt);

        }

    }


    export default {

        name : "123",
        setup(){
            onMounted(() => {
                console.log(23333)
            });
        }

    }

</script>
<template>
    <a style="color: aliceblue;">tttttttttttttttttt</a>
</template>