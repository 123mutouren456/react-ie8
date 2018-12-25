import React, { Component } from 'react';

import './Page1.scss';
import 'antd/lib/index.css';
import { DatePicker, Tree,Table } from 'antd';
import image from './images/brickpsert.jpg';
const TreeNode = Tree.TreeNode;

const dataSource = [{
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  }, {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  }];
  
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }];

export default class Page1 extends Component {
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
      }
    
      onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
      }
    render() {
        return (
            <div>
                <div className="page-box">
                    this is page1~1111
                    <img src={image} />
                </div>
                <DatePicker />
                <Tree
                    checkable
                    defaultExpandedKeys={['0-0-0', '0-0-1']}
                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                    onSelect={this.onSelect}
                    onCheck={this.onCheck}
                >
                    <TreeNode title="parent 1" key="0-0">
                        <TreeNode title="parent 1-0" key="0-0-0" disabled>
                            <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                            <TreeNode title="leaf" key="0-0-0-1" />
                        </TreeNode>
                        <TreeNode title="parent 1-1" key="0-0-1">
                            <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
                        </TreeNode>
                    </TreeNode>
                </Tree>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        )
    }
}