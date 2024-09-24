export default class Tool {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    constructor(canvas) {
        console.log(canvas)
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
    }
    destroyEvents(){
        this.canvas.onmousemove = null
        this.canvas.onmouseup = null
        this.canvas.onmousedown = null
    }
}