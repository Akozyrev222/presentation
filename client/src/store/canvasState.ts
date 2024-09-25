import {makeObservable} from "mobx";

class CanvasState {
    canvas: HTMLCanvasElement | null = null

    constructor() {
        makeObservable(this)
    }

    setCanvas(canvas) {
        this.canvas = canvas
    }

}

export default new CanvasState()