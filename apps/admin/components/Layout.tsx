import { Layout, Menu } from 'antd';
import { ReactNode } from 'react';

const { Header, Content, Footer } = Layout;

interface TProps {
  children: ReactNode;
}

function AdminLayout({ children }: TProps) {
  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={
            new Array(5).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })
          }
        />
      </Header>
      <Content>
        {children}
      </Content>
    </Layout>
  );
}

export default AdminLayout;
