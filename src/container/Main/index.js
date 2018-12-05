import React, {Component} from 'react'
import './index.scss'
import Back from '../../assets/img/back.png'
import Right from '../../assets/img/right.png'
import {Link} from 'react-router-dom'
import {info} from '../../services/code'
import PropTypes from 'prop-types';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      infoData: null
    }
  }
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }
  componentDidMount(){
    info()
    .then(res => res.json())
    .then(res => this.setState({infoData: res.data}))
  }
  onGetArticle = (val) => {
    this.context.router.history.push({pathname: '/note', state: {msg: val}})
  }
  render() {
    const {infoData} = this.state
    return (<div className='main'>
      <div className='head'>
        <Link to='/'><img src={Back}/></Link>
        <span>
            个人中心
        </span>
      </div>
      {
        infoData && <div className='section'>
        
          <dl>
            <dt>
              <img src={`http://m.pingdaren.cn/${infoData.photo}`}/>
            </dt>
            <Link to='/info'>
              <dd>
                <h3>{infoData.cnname}</h3>
                <p><span>{infoData.sex == 1 ? '男' : '女'}</span><span>{infoData.age}</span>
                <span>{infoData.cnname}</span></p>
                <p>{infoData.autograph}</p>
                <img src={Right}/>
              </dd>
            </Link>
          </dl>
          <div onClick={() => this.onGetArticle('我的帖子')} className='num'><span>我的帖子</span><span>{infoData.note_nub}<img src={Right}/></span></div>
          <div onClick={() => this.onGetArticle('我的点评')} className='num'><span>我的点评</span><span>{infoData.comment_nub}<img src={Right}/></span></div>
          <div onClick={() => this.onGetArticle('我的喜欢')} className='num'><span>我的喜欢</span><span>{infoData.like_nub}<img src={Right}/></span></div>
          <div onClick={() => this.onGetArticle('我的关注')} className='num'><span>我的关注</span><span>{infoData.follow_nub}<img src={Right}/></span></div>
          <div onClick={() => this.onGetArticle('我的粉丝')} className='num'><span>我的粉丝</span><span>{infoData.fans_nub}<img src={Right}/></span></div>
        </div>
      }
    </div>
    )
  }
}