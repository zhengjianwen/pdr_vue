import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Back from '../../assets/img/back.png'
import Right from '../../assets/img/right.png'
import './index.scss'
import {setInfo, info} from '../../services/code'
import {Form, Input, Button, DatePicker, Select} from 'antd'
import moment from 'moment'

const FormItem = Form.Item;
const Option = Select.Option;

class SetInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
          infoData: null
        }
      }
    componentDidMount(){
        info()
        .then(res => res.json())
        .then(res => {
            const data = res.data;
            data && this.setState({infoData: data, name: data.cnname, 
                birthday: data.birthday, sex: data.sex, autograph: data.autograph,
                province: data.province})
        })
    }
    onSubmit = () => {
        const {autograph, birthday, name, province, sex} = this.state
        console.log(this.state)
        
            setInfo({autograph, birthday, name, province, sex})
            .then(res => res.json())
            .then(res => {
              if(res.status){
                this.context.router.history.push('/info')
              } else {
                this.setState({
                  msg: res.msg
                })
              }
            })
          
    }
    render() {
        const dateFormat = 'YYYY-MM-DD'
        const {infoData, name, birthday, sex, autograph,province} = this.state
        const { getFieldDecorator } = this.props.form;
        return (<div className='SetInfo'>
        <Form>
        <div className='head'>
            <Link to='/info'><img src={Back}/></Link>
            <span>
                修改信息
            </span>
            <span onClick={this.onSubmit}>保存</span>
        </div>
        <div className='section'>
        <FormItem label='昵称' colon={false}>
            <Input placeholder='点击输入您的手机号码'  value={name}/>
        </FormItem>
        <FormItem label='生日' className='code_num' colon={false}>
           {
               birthday &&  <DatePicker 
               defaultValue={moment(birthday, dateFormat)}
               onChange={(e) => {console.log(e, 'eeeeee')}} />
           }
        </FormItem>
        <FormItem label='性别' colon={false}>
            <Select style={{ width: 120 }} value={sex == 1 ? '男' : '女'} onChange={(val) => {this.setState({sex: val})}}>
                <Option value="0">女</Option>
                <Option value="1">男</Option>
            </Select>
        </FormItem>
        <FormItem label='家乡' className='code_num' colon={false}>
            <Input value={province}/>
        </FormItem>
        <FormItem label='个性签名' className='code_num' colon={false}>
            <Input value={autograph}/>
        </FormItem>
        </div>
      </Form></div>
        )
    }
}

const WrappedApp = Form.create()(SetInfo);

export default WrappedApp
