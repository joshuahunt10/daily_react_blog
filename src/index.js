import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import CreatePost from './components/CreatePost'
import ShowPost from './components/ShowPost'
import PostList from './components/PostList'
import Splash from './components/Splash'
import Layout from './components/Layout'

ReactDOM.render(

<BrowserRouter>
  <Layout>
    <Switch>
      <Route path='/createpost' component={CreatePost} />
      <Route path='/postlist/:postID' component={ShowPost} />

      <Route path='/postlist' component={PostList} />
      <Route path='/' component={Splash} />
    </Switch>
  </Layout>
</BrowserRouter>



, document.getElementById('root'));
registerServiceWorker();
