import styles from './Canvas.module.scss';
import {observer} from "mobx-react-lite";
import {RefObject, useEffect, useRef} from "react";
import canvasState from "../../store/canvasState.ts";
import toolState from "../../store/toolState.ts";
import Brush from "../../tools/Brush.ts";

const Canvas = observer(() => {
        const canvasRef: RefObject<HTMLCanvasElement> = useRef(canvasState.canvas)
        useEffect(() => {
            canvasState.setCanvas(canvasRef.current)
            toolState.setTool(new Brush(canvasRef.current))
        }, []);
        return (
            <div className={styles.canvas}>
                <canvas width={600} height={800} ref={canvasRef}></canvas>
            </div>
        );
    }
);

export default Canvas;