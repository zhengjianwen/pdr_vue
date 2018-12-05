import React, {Component} from 'react'
import './index.scss'
import Back from '../../assets/img/back.png'
import {Link} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
class Add extends Component {


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (<div>
      <div className='add-box'>
        <Link to='/'><img src={Back}/></Link>
        <span>
            添加
        </span>
      </div>

      <div className='add-box-submit'>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
             发布
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
    )
  }
}

export default  Form.create()(Add);