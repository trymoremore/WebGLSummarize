export default class Graphic{

    private static _gl : WebGL2RenderingContext;
    private static canvas : HTMLCanvasElement;
    public static get gl() : WebGL2RenderingContext {
        return this._gl;
    }

    public static Init(canvas : HTMLCanvasElement):boolean{

        let context = canvas.getContext("webgl2");
        if(context == null)return false;
        this.canvas = canvas;
        this._gl = context;

        this.ListenWindowSize();
        window.onresize = this.ListenWindowSize.bind(this);

        return true;

    }

    private static ListenWindowSize(){

        this._gl.viewport(0,0,this.canvas.width,this.canvas.height);

    }
    

}