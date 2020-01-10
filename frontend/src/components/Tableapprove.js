import React, { Component } from 'react';
import { Table, Divider, Button } from 'antd';
import Axios from '../config/axios.setup'
import moment from 'moment';


async function changeState_onClick(state, id){
    let currBody = {id: id, status: state}
    const result = await Axios.post("/UpdateJobState" , currBody);

    
}
const columns = [
  {
    title: 'เลขที่เอกสาร',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'วันที่',
    dataIndex: 'approve_date',
    key: 'approve_date',
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
    render: (text, record) => (
    <span>
    <Button onClick={() => changeState_onClick('Approve', record.id)}>Approve </Button>
    <Button onClick={() => changeState_onClick('Reject', record.id)}>Reject</Button>
    </span>
    )
    }
];
class Tableapprove extends Component {
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
      console.log(item.status)
      const s = moment();
      const startdate = s.format("DD-MM-YYYY")
      return {
          id: item.id,
          approve_date:startdate,
          title:item.title,
          work_section:item.work_section,
          detail:item.detail,
          status:item.status
        }
      });
      this.setState({ data: temp.filter(s => s.status === 'wait') }, ()=>{console.log(this.state.data)});
  }

  componentDidMount = async () => {
    this.showData()
     const intervalId = setInterval(
       ()=>this.showData(),2000
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

export default Tableapprove;
     
      
      
