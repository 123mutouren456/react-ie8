import React from 'react';
import { Table, Menu, Dropdown,Icon } from 'antd';
import 'antd/lib/index.css';
import axios from 'axios';

const columns = [
  { title: '姓名', width: 100, dataIndex: 'title', key: 'title' },
  { title: '年龄', width: 100, dataIndex: 'description', key: 'description'},
  { title: '列1', dataIndex: 'description', key: '1', width: 150 },
  { title: '列2', dataIndex: 'description', key: '2', width: 150 },
  { title: '列3', dataIndex: 'description', key: '3', width: 150 },
  { title: '列4', dataIndex: 'description', key: '4', width: 150 },
  { title: '列5', dataIndex: 'description', key: '5', width: 150 },
  { title: '列6', dataIndex: 'description', key: '6', width: 150 },
  { title: '列7', dataIndex: 'description', key: '7', width: 150 },
  { title: '列8', dataIndex: 'description', key: '8', width: 150 },
  {
    title: '操作',
    key: 'operation',
    width: 100,
    render: () => <a href="#">操作</a>,
  },
];

// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: `李大嘴${i}`,
//     age: 32,
//     address: `西湖区湖底公园${i}号`,
//   });
// }
// 通过 rowSelection 对象表明需要行选择
const rowSelection = {
  onChange(selectedRowKeys, selectedRows) {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect(record, selected, selectedRows) {
    console.log(record, selected, selectedRows);
  },
  onSelectAll(selected, selectedRows, changeRows) {
    console.log(selected, selectedRows, changeRows);
  },
  getCheckboxProps: record => {
    //console.log(record)
    return {
    disabled: record.type === 'matrix',    // 配置无法勾选的列
  }},
};
export default class AntdDemo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    axios.get('/ke/map/getcapabilityList').then(res=>{
      let datas = res.data;
      if(datas.code==0){
        if(datas.success){
          this.setState({data:datas.data});
        }else{
          alert(datas.message);
        }
      }else{
        alert('服务器异常');
      }
    },error=>{
      alert('服务器异常');
    })
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">第一个菜单项</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">第二个菜单项</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">第三个菜单项</Menu.Item>
      </Menu>
    );
    return (
      <div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} scroll={{ x: 1500, y: 300 }} />
      <Menu>
        <Menu.Item key="1">菜单项1</Menu.Item>
        <Menu.Item key="2">菜单项2</Menu.Item>
        <Menu.Item key="3">菜单项3</Menu.Item>
      </Menu>
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" href="#">
          点击触发 <Icon type="down" />
        </a>
      </Dropdown>
      </div>
    );
  }
}
