import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Back from '../../assets/img/back.png'
import Right from '../../assets/img/right.png'
import './index.scss'
import {info} from '../../services/code'

export default class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
          infoData: null
        }
      }
    componentDidMount(){
        info()
        .then(res => res.json())
        .then(res => this.setState({infoData: res.data}))
    }
    render() {
        const {infoData} = this.state
        console.log(infoData)
        return (<div className='Info'>
        <div className='head'>
            <Link to='/main'><img src={Back}/></Link>
            <span>
                基本信息
            </span>
        </div>
        {infoData &&  <div className='section'>
            <Infos tit='昵称' val={infoData.nickname}/>
            <Infos tit='生日' val={infoData.birthday}/>
            <Infos tit='性别' val={infoData.sex == 1 ? '男' : '女'}/>
            <Infos tit='家乡' val={infoData.province}/>
            <Infos tit='个性签名' val={infoData.autograph}/>
        </div>}
        <Link className='goBack' to='/login'><button>退出</button></Link>
        </div>
        )
    }
}

const Infos = (props) => {
    const {tit, val} = props
    return <Link to='/setInfo'><p><span>{tit}</span><span>{val}</span>
    <img src={Right}/></p></Link>
}