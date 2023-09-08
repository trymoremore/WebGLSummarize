import { App, createApp } from "vue";
import DrawWays from "./base/DrawWays.vue"

interface ExampleDetail{

    name : string;
    app  : App<Element>;

}

interface ExampleList{

    isShow : boolean;
    label : string;
    example : ExampleDetail[]

}

const renderExampleCollect : ExampleList[] = [
    {
        isShow : false,
        label : "base",
        example : [
            {
                name : "绘制方式",
                app : createApp(DrawWays)
            }
        ]
    }
]

export type{ExampleDetail,ExampleList}
export {renderExampleCollect}