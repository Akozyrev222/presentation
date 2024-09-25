import React from 'react';
import {Layout, Menu, theme} from 'antd';
import Canvas from "./components/Canvas/Canvas.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";

const {Sider} = Layout;


/*const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);*/

const App: React.FC = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    console.log(colorBgContainer)
    return (
        <Layout style={{padding: 0}}>
            <Toolbar/>
            <Layout>
                <Sider width={200} style={{background: colorBgContainer}}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                    />
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Canvas/>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default App;