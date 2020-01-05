import React, { Component } from 'react'
import { Table, Divider, Tag } from 'antd';


export default class Mytable extends Component {
	render() {
      const columns = [
        {
          title: 'เลขที่เอกสาร',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'วันที่',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'เรื่อง',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'ส่วนงานที่รับ',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'สถานะ',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <span>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          ),
        },
        {
          title: 'รายละเอียด',
          key: 'action',
         
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['อนุมัติ'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['ไม่อนุมัติ'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['อนุมัติ', 'ไม่อนุมัติ'],
        },
      ];
      return (
        <Table columns={columns} dataSource={data} />
      )  
    }
}