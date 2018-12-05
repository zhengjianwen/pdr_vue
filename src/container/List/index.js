import React from 'react'
import './index.scss'
import {Input, Icon} from 'antd';
import {list} from "../../services/code";

const Search = Input.Search;

export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: ''
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    let data = ''
    let images_info =''
    list().then(res => res.json()).then(res => {
      if (res.status) {
        data = res.data.map((item,index) => {
          let tm = index % 3 ?  1 : 3
          if(item.images_info.length <= 0){
            tm = 2
            images_info = ''
          }else {
            images_info = item.images_info[0].path
          }
          return {...item, tm, images_info}
        })
      }
      this.setState({
        listData: data
      })
    })
  }

  render() {
    const {listData} =  this.state
    return <div className='list-box'>
      <div className='search-box'>
        <Search
            placeholder="请输入商品名称或内容"
            onSearch={value => console.log(value)}
        />
      </div>
      <div className='list-item-box'>
        {
          listData && listData.length > 0 && listData.map((item, index) => {
            let dom = ''
            switch (item.tm) {
              case 1:
                dom = <ListItemOne data={item} key={index}/>
                break;
              case 2:
                dom = <ListItemTwo data={item} key={index}/>
                break;
              case 3:
                dom = <ListItemThree data={item} key={index}/>
                break;
            }
            return dom
          })
        }
      </div>
    </div>
  }
}

const ListItemOne = ({data}) => {
  return <div className='list-item-box-'>
    <div className='list-item-box-one'>
      <div className='list-item-box-one-left'>
        <div><i></i>{data.name}</div>
        <div>{data.title}</div>
        <div>{data.content}</div>
      </div>
      <div className='list-item-box-one-right'>
        <div className='img-box'>
          <img src={`http://m.pingdaren.cn/${data.images_info}`} alt=""/>
        </div>
      </div>
    </div>
    <ListItemBoxBottom data={data}/>
  </div>
}
const ListItemTwo = ({data}) => {
  return <div className='list-item-box- list-item-box-two'>
    <div className='list-item-box-two'>
      <div className='list-item-box-two-left'>
        <div><i></i>{data.name}</div>
        <div>{data.title}</div>
        <div>{data.content}</div>
      </div>
    </div>
    <ListItemBoxBottom data={data}/>
  </div>
}
const ListItemThree = ({data}) => {
  return <div className='list-item-box-'>
    <div className='list-item-box-three'>
      <div className='list-item-box-three-left'>
        <div><i></i>{data.name}</div>
        <div><img src={`http://m.pingdaren.cn/${data.images_info}`} alt=""/></div>
        <div>{data.title}</div>
        <div>{data.content}</div>
      </div>
    </div>
    <ListItemBoxBottom data={data}/>
  </div>
}

const ListItemBoxBottom = ({data}) => {
  return <div className='list-item-box-bottom'>
    <div className='list-item-box-bottom-left'>
      <div>{`@${data.classify_name}`}</div>
    </div>
    <div className='list-item-box-bottom-right'>
      <div>
        <Icon type="heart" style={{marginRight: '4px'}}/>
        {data.like_nub}
      </div>
      <div>
        <Icon type="edit" style={{marginRight: '4px'}}/>
        {data.comment_nub}
      </div>
    </div>
  </div>
}