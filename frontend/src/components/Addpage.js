import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Form,Col, Row, Input, Select, DatePicker, Modal } from 'antd';
import Tableaddpage from './Tableaddpage';
import moment from 'moment';
import Axios from '../config/axios.setup'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;

class Addpage extends Component {
    state = {
        collapsed: false,
        visible: false,
        create_date: new Date(),
        title:"",
        work_section:"",
        detail:"",
        status:"wait",
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };


    handleTextArea = (e) => {
        console.log(e.target.value)
        this.setState({
            title: e.target.value
        })
    } 

    handleSelect = value => {
        console.log(value)
        this.setState({
            work_section: value
        })
    }

    handleTextdetail = e =>{
        console.log(e.target.value)
        this.setState({
            detail:e.target.value
        })
    }

    handleOk =()=>{
    Axios.post('/CreateNewJob', {
        create_date:this.state.create_date,
        title:this.state.title,
        work_section:this.state.work_section,
        detail:this.state.detail,
        status:this.state.status
        
    })
    .then(result =>{
        console.log("Add data success" ,result.data)
        this.setState({
            visible: false,
          });
        
    })
    .catch(err=>{
        console.log(err)
})
    }
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handdleClick = ()=>{
        this.props.history.push('/home')
    }
    clickShow =()=>{

    }
  
    render() {
        const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
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
                            {/* <Col span={12}>
                                <Form.Item label="เลขที่เอกสาร">
                                 
                                </Form.Item>
                            </Col> */}
                           
                            <Col span={12}>
                            <Form.Item label="เรื่อง">
                                    {getFieldDecorator('title', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'กรุณาใส่ชื่อเรื่อง',
                                            },
                                        ],
                                    })(<Input.TextArea placeholder="กรุณาใส่ชื่อเรื่อง" onChange={this.handleTextArea} />)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="เลือกส่วนงานที่รับ">
                                    {getFieldDecorator('work_section', {
                                        rules: [{ required: true, message: 'กรุณาเลือกส่วนงานที่รับ' }],
                                    })(
                                        <Select placeholder="Please select an owner" onSelect={this.handleSelect}>
                                        <Option value="ฝทน.">ฝทน.</Option>
                                        <Option value="ฝกธ.">ฝกธ.</Option>
                                        <Option value="ฝกง.">ฝกง.</Option>
                                        <Option value="ฝกม.">ฝกม.</Option>
                                    </Select>,      
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item label="รายละเอียด">
                                    {getFieldDecorator('detail', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'กรุณาใส่รายละเอียด',
                                            },
                                        ],
                                    })(<Input.TextArea rows={4} placeholder="กรุณาใส่รายละเอียด" onChange={this.handleTextdetail} />)}
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
                            <Menu.Item key="3" onClick={this.clickShow}>รอดำเนินการ</Menu.Item>
                            <Menu.Item key="4">ระหว่างดำเนินการ</Menu.Item>
                        </SubMenu>
                        <Menu.Item  key="9" onClick={this.handdleClick}>
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
                    
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}><Tableaddpage /></div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Express docoments Tracking</Footer>
                </Layout>
            </Layout>
        );
    }
}
export default Form.create()(Addpage)