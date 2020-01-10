import React, { Component } from 'react';
import moment from 'moment';
import { Table, Divider, Tag } from 'antd';
import Axios from '../config/axios.setup'

const columns = [
  {
    title: 'เลขที่เอกสาร',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'วันที่',
    dataIndex: 'create_date',
    key: 'create_date',
  },
  {
    title: 'เรื่อง',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'ส่วนงานที่รับ',
    dataIndex: 'work_section',
    key: 'work_section',
  },
  {
    
    title: 'รายละเอียด',
dataIndex: 'detail',
    key: 'detail',
  },
  {
  title: 'สถานะ',
  dataIndex:'status',
  key:'status',
 
},

];

class Tableaddpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      intervalId: null
    };
  }

  async showData(){
    
    const result = await Axios.get("/showdata");
    console.log(result)
    let temp = result.data.map((item) => {
      const s = moment(`${item.create_date}`);
    const startdate = s.format("DD-MM-YYYY")
      return {
          id: item.id,
          create_date: startdate,
          title:item.title,
          work_section:item.work_section,
          detail:item.detail,
          status:item.status
        }
      });
      this.setState({ data: temp }, ()=>{console.log(this.state.data)});
  }

  componentDidMount = async () => {
    this.showData()
    const intervalId = setInterval(
      ()=>this.showData(),5000
    )

    this.setState({intervalId})
  };

  componentWillUnmount(){
    clearInterval(this.state.intervalId);
  }

  render() {
    console.log(columns, this.state.data)
    return (
      <div>
        <Table 
          columns={columns} 
          dataSource={this.state.data}
          pagination={{position: 'bottom', pageSize: '5'}}
        />
      </div>
    );
  }
}

export default Tableaddpage;
     
      
      
