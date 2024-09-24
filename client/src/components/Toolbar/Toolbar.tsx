import {Button, Menu} from "antd";
import React, {useState} from "react";
import {Header} from "antd/es/layout/layout";
import {Radio} from 'antd';
import {FaMarker, FaPencilAlt, FaRegCircle} from "react-icons/fa";
import {FaRegSquareFull} from "react-icons/fa6";
import {IoMdColorPalette} from "react-icons/io";
import styles from './Toolbar.module.scss'
import {ColorPicker} from 'antd';
import toolState from "../../store/toolState.ts";
import Brush from "../../tools/Brush.ts";
import canvasState from "../../store/canvasState.ts";


const Toolbar = () => {
    const [color, setColor] = useState()
    const instruments: { icon: React.JSX.Element; key: string }[] =
        [
            {
                label: 'Pencil',
                icon: <FaPencilAlt size={25}/>
            },
            {
                label: 'Square',
                icon: <FaRegSquareFull size={25}/>
            },
            {
                label: 'Circle',
                icon: <FaRegCircle size={25}/>
            },
            {
                label: 'Size',
                icon: <FaMarker size={25}/>
            },
            {
                label: 'Palette',
                icon: <IoMdColorPalette size={25}/>
            }


        ].map((item, index) => {
            const key = String(index + 1)
            return {
                key,
                label: item.label,
                icon: <div className={styles.icon}>{item.icon}</div>,
            }
        });
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
                            setColor(c.toHexString());
                        }}
                    />
                </div>
            </Radio.Group>
        </Header>
    );
};

export default Toolbar;