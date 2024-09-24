import {makeObservable} from "mobx";

class ToolState {
    tool = null

    constructor() {
        makeObservable(this)
    }

    setTool(tool) {
        this.tool = tool
    }
}

export default new ToolState()