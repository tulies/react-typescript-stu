import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Main from './pages/main';
import Ref from './pages/ref';
import Effect from './pages/effect';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="header-nav">
          <NavLink to="/" exact>首页</NavLink>
          <NavLink to="/effect">useEffect</NavLink>
          <NavLink to="/ref">useRef</NavLink>
        </div>
        <Route path="/" exact><Main /></Route>
        <Route path="/ref" exact><Ref /></Route>
        <Route path="/effect" exact><Effect /></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
