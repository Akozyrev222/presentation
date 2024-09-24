export default class Tool {
    protected canvas: any;
    protected ctx: any;
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
    }
    destroyEvents(){
        this.canvas.onmousemove = null
        this.canvas.onmouseup = null
        this.canvas.onmousedown = null
    }
}