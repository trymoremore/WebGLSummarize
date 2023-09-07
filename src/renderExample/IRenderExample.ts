export interface IRenderExample{

    name : string;
    Init : (gl : WebGL2RenderingContext)=>void;
    Destroy : ()=>void;
    Update : (dt:number)=>void;

}