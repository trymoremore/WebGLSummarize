import { IRenderExample } from "./IRenderExample";

export abstract class RenderExample implements IRenderExample {
    
    public static instance : IRenderExample | null;

    public name: string = "";
    protected gl : WebGL2RenderingContext | undefined;

    public Init(gl : WebGL2RenderingContext){

        RenderExample.instance = this;
        this.gl = gl;

    }

    public Destroy(){

        RenderExample.instance = null;

    }

    public Update(dt: number){

        this.Render(dt);

    }

    protected abstract Render(dt: number):void;


}
