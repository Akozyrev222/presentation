import {makeObservable} from "mobx";
import Brush from "../tools/Brush.ts";

class ToolState {
    tool = null

    constructor() {
        makeObservable(this)
    }

    setTool(tool: Brush) {
        console.log(tool)
        this.tool = tool
    }
}

export default new ToolState()