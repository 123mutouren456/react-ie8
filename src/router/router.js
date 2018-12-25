import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import AntdDemo from 'bundle-loader?lazy&name=antdDemo!pages/AntdDemo/AntdDemo';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
// import Editor from 'bundle-loader?lazy&name=editor!pages/Editor/Editor';

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={createComponent(Home)}/>
            <Route path="/page1" component={createComponent(Page1)}/>
            <Route path="/counter" component={createComponent(Counter)}/>
            <Route path="/userinfo" component={createComponent(UserInfo)}/>
            <Route path="/antd" component={createComponent(AntdDemo)}/>
            {/* <Route path="/editor" component={createComponent(Editor)}/> */}
            <Route component={createComponent(NotFound)}/>
        </Switch>
    </div>
);
