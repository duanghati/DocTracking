import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Menu,Button,Timeline} from 'antd';
import Axios from '../config/axios.setup'
import moment from 'moment'

export default class Navbar extends Component { 

  state = {
    idRef: '',
    listDataTimeline :['-','-','-']
  }



  showDataTimeline_onClick =()=>{
    let currIdRef = this.state.idRef
    Axios.post('/GetTimelineJob', {
      idRef: currIdRef
  })
  .then(result =>{
    let currData = result.data.map(s => `สถานะ:${s.StateValue} วันที่ ${moment(`${s.updatedAt}`).format("DD-MM-YYYY  HH:mm")}`)
    this.setState({listDataTimeline : currData})
  })
  .catch(err=>{
      console.log(err)
  })
  }

  updateIdRef_onChange =(e)=>{
    console.log(e.target.value)
    this.setState({
      idRef: e.target.value
    })
  }


render() {
  const onChange = e => {
    console.log(e);
    
  };
  return (

    <div style={{width: '100%'}}>
     
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '100px', display: "flex", justifyContent: "flex-end" }}
      >
        <Menu.Item key="1">
          ติดตามเอกสาร
          {/* <Link to="/dashboard" /> */}
        </Menu.Item>
        <Menu.Item key="2">
          <span>ลงทะเบียน</span>
          <Link to="/Signup" />
        </Menu.Item>
        <Menu.Item key="3">
          <span>เข้าสู่ระบบ</span>
          <Link to="/login" />
        </Menu.Item>
        <Menu.Item key="4">
          <span>ออกจากระบบ</span>
          {/* <Link to="/logout" /> */}
        </Menu.Item>
       
      </Menu>
      

      <div style={{textAlign:'center',marginTop:'40px'}}>
        <div>

        </div>
        <div>
          <input placeholder="Enter your tracking" allowClear onChange={this.updateIdRef_onChange} />
        
          <Button type="danger" onClick={this.showDataTimeline_onClick}>ติดตาม </Button>
        
          </div>
        <div style={{marginTop:'40px'}}>
          <Timeline mode="alternate">
            {this.state.listDataTimeline.map(s => {
              return (<Timeline.Item>{s}</Timeline.Item>)

            })}
           
            {/* <Timeline.Item key={"name"}></Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item> */}
          </Timeline>,
        </div>
      </div>
    </div>
  )}
}