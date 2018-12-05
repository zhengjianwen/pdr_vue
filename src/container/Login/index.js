import React, {Component} from 'react'
import {Form, Input, Button, message} from 'antd'
import './index.scss'
import {sendCode, token, sign} from '../../services/code'
import PropTypes from 'prop-types';


const FormItem = Form.Item;



class Login extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }
  constructor(props){
    super(props)
    this.state = {
      token: '',
      msg: ''
    }
  }
  onGetCode = () => {
    this.props.form.validateFields((err, values) => {
      const {phone} = values
      token({key:phone})
      .then(res => res.json())
      .then(res => {this.setState({token: res.data});sendCode(res.data, {phone})})
    });
  }
  handleSubmit = (e) => {
    const {token} = this.state
    const _this = this
    e.preventDefault();
    _this.props.form.validateFields((err, values) => {
      if (!err) {
        const {phone, code} = values
        sign(token,{phone, code})
        .then(res => res.json())
        .then(res => {
          if(res.status){
            _this.context.router.history.push('/')
          } else {
            this.setState({
              msg: res.msg
            })
          }
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (<div className='login-page'>
      <div className='head'>
        登录
      </div>
      <div className='operation'>
      <h3>欢迎进入评大人</h3>
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
        {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入您的手机号' }],
          })(
            <Input placeholder='点击输入您的手机号码'/>
          )}
        </FormItem>
        <FormItem className='code_num'>
        {getFieldDecorator('code', {
            rules: [{ required: true, message: '请输入验证码'}],
          })(
            <Input placeholder='点击输入验证码'/>
          )}
          <Button onClick={this.onGetCode}>获取验证码</Button>
        </FormItem>
        <p>{this.state.msg}</p>
        <FormItem className='bom_submit'>
          <Button className='submit' htmlType="submit">确定</Button>
        </FormItem>
      </Form></div>
    </div>
    )
  }
}

const WrappedApp = Form.create()(Login);

export default WrappedApp
