import React, { Component } from "react";
import { Button,DatePicker } from "antd";
import "antd/dist/antd.css";
import {
  WechatOutlined,
  StarOutlined,
  StarFilled,
  StarTwoTone,
  SearchOutlined
} from "@ant-design/icons";

const { RangePicker } = DatePicker

export default class App extends Component {
  onChange = (data, dataString) => {
    console.log(data,'data')
    console.log(dataString,'data')
  }
  render() {
    return (
      <div>
        App...
        <button>点我</button>
        <Button type="primary" size="large">
          Primary Button
        </Button>
        <Button type="primary" danger ghost shape="round" icon={<SearchOutlined />}>Search</Button>
        <WechatOutlined
          rotate="90"
          twoToneColor="#eb2f96"
          style={{ fontSize: "38px" }}
        />
        <StarOutlined />
        <StarFilled />
        <StarTwoTone twoToneColor="#000" />
        <hr></hr>
        <h2>日期组件</h2>
        <DatePicker onChange={this.onChange}></DatePicker>
        <h2>时间段组件</h2>
        <RangePicker></RangePicker>
      </div>
    );
  }
}
