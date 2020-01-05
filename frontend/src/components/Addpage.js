import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Descriptions, Form, Button, Col, Row, Input, Select, DatePicker, Modal } from 'antd';
import Mytable from './Mytable';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;

class Addpage extends Component {
    state = {
        collapsed: false,
        visible: false
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout style={{ minHeight: '100vh' }}>

                <Modal
                    title="เพิ่มเอกสาร"
                    width={720}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    bodyStyle={{ paddingBottom: 80 }}
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="เลขที่เอกสาร">
                                 
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="วันที่">
                                    {getFieldDecorator('dateTime', {
                                        rules: [{ required: true, message: 'Please choose the dateTime' }],
                                    })(
                                        <DatePicker.RangePicker
                                            style={{ width: '100%' }}
                                            getPopupContainer={trigger => trigger.parentNode}
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="เรื่อง">
                                    {getFieldDecorator('owner', {
                                        rules: [{ required: true, message: 'กรุณาใส่ชื่อเรื่อง' }],
                                    })(
                                        <Select placeholder="Please select an owner">
                                            <Option value="xiao">Xiaoxiao Fu</Option>
                                            <Option value="mao">Maomao Zhou</Option>
                                        </Select>,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="เลือกส่วนงานที่รับ">
                                    {getFieldDecorator('url', {
                                        rules: [{ required: true, message: 'กรุณาเลือกส่วนงานที่รับ' }],
                                    })(
                                        <Input
                                            style={{ width: '100%' }}
                                           
        
                                            placeholder="กรุณาเลือกส่วนงานที่รับ"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item label="รายละเอียด">
                                    {getFieldDecorator('description', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'กรุณาใส่รายละเอียด',
                                            },
                                        ],
                                    })(<Input.TextArea rows={4} placeholder="กรุณาใส่รายละเอียด" />)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <div
                        style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            borderTop: '1px solid #e9e9e9',
                            padding: '10px 16px',
                            background: '#fff',
                            textAlign: 'right',
                        }}
                    >
                    </div>
                </Modal>

                <Sider style={{ backgroundColor: "gainsboro" }} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Express docoments Tracking</span>
                        </Menu.Item>
                        <Menu.Item key="2" onClick={this.showModal}>
                            <Icon type="desktop" />
                            <span>เพิ่มเอกสาร</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    <span>แฟ้มเอกสารส่ง</span>
                                </span>
                            }
                        >
                            <Menu.Item key="3">รอดำเนินการ</Menu.Item>
                            <Menu.Item key="4">ดำเนินการแล้วเสร็จ</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="team" />
                                    <span>Team</span>
                                </span>
                            }
                        >
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>กลับสู่หน้าหลัก</span>
                        </Menu.Item>
                    </Menu >
                </Sider>
                <Layout>
                    <Header style={{ background: "dark", padding: 0, }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            
                        </Breadcrumb>
                    
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}><Mytable /></div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Express docoments Tracking</Footer>
                </Layout>
            </Layout>
        );
    }
}
export default Form.create()(Addpage)