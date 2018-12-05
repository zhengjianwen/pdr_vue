import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Back from '../../assets/img/back.png'
import Right from '../../assets/img/right.png'
import './index.scss'
import {info} from '../../services/code'

export default class Note extends Component {
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
        const {location: {state}} = this.props
        return (<div className='Note'>
            <div className='head'>
                <Link to='/main'><img src={Back}/></Link>
                <span>
                    {state && state.msg}
                </span>
            </div>
        </div>
        )
    }
}
