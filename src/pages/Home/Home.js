import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increment} from './../../redux/actions/counter';
import store from './../../redux/store';

const mapStateToProps = (state)=>{
    let {count} = state.counter;
    //console.log(count)
    return {
        count: count
    }
}
const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        increment: increment
    },dispatch)
}

 class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
       // console.log(this.props)
        const { increment}  = this.props;
        return (
            <div>
                this is home~<br/>
                当前计数：{this.props.count}<br/>
                <button onClick={increment}>自增</button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)