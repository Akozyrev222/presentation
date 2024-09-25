import {Dispatch, SetStateAction, useState} from "react";
import {Header} from "antd/es/layout/layout";
import {Radio} from 'antd';
import {FaMarker, FaPencilAlt, FaRegCircle} from "react-icons/fa";
import {FaRegSquareFull} from "react-icons/fa6";
import styles from './Toolbar.module.scss'
import {ColorPicker} from 'antd';
import toolState from "../../store/toolState.ts";
import Brush from "../../tools/Brush.ts";
import canvasState from "../../store/canvasState.ts";
import {AggregationColor} from "antd/es/color-picker/color";


const Toolbar = () => {
    const [color, setColor]: AggregationColor = useState()
    return (
        <Header style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60px',
            backgroundColor: 'transparent'
        }}>
            <Radio.Group className={styles.group} onChange={() => {
            }}>
                <div className={styles.groupItem} onClick={() => {
                    toolState.setTool(new Brush(canvasState.canvas))
                }}>
                    <FaPencilAlt className={styles.icon} size={20}/>
                </div>
                <div className={styles.groupItem}>
                    <FaRegCircle
                        className={styles.icon} size={20}/>
                </div>
                <div className={styles.groupItem}>
                    <FaRegSquareFull className={styles.icon} size={20}/>
                </div>
                <div className={styles.groupItem}>
                    <FaMarker className={styles.icon} size={20}/>
                </div>
                <div className={styles.groupItem}>
                    <ColorPicker
                        value={color}
                        allowClear
                        onChange={(c) => {
                            setColor(c);
                        }}
                    />
                </div>
            </Radio.Group>
        </Header>
    );
};

export default Toolbar;