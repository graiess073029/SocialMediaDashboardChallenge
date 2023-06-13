import './App.css';

import {Header} from '../Header/Header'
import { Overview } from '../Overview/Overview';
import { Followers } from '../Followers/Followers';
import { useState } from 'react';

function App() {
  let [theme,setTheme] = useState("dark")
  return (
    <div theme={theme} className={"root_inner " + theme}>
      <div className="ap"></div>
      <Header theme={theme} setTheme={setTheme} />
      <div className="allFollows">
        <Followers appName={"Facebook"} username={"@nathanf"} changement={12} nfollows={1987} />
        <Followers appName={"Twitter"} username={"@nathanf"} changement={99} nfollows={1044} />
        <Followers appName={"Instagram"} username={"@realnathanf"} changement={1099} nfollows={11000} />
        <Followers appName={"Youtube"} username={"@Nathan.F"} changement={-144} nfollows={8239} />
      </div>
      <div className="overviews">
        <h1>Overview - Today</h1>
        <div className="container">
          <Overview appName={"Facebook"} value={87} changement={3} title={'Page Views'} />
          <Overview appName={"Facebook"} value={52} changement={-2} title={'Likes'} />
          <Overview appName={"Instagram"} value={5462} changement={2257} title={'Likes'} />
          <Overview appName={"Instagram"} value={52000} changement={1375} title={'Profile Views'} />
          <Overview appName={"Twitter"} value={117} changement={307} title={'Retweets'} />
          <Overview appName={"Twitter"} value={507} changement={553} title={'Likes'} />
          <Overview appName={"Youtube"} value={107} changement={-19} title={'Likes'} />
          <Overview appName={"Youtube"} value={1407} changement={-12} title={'Total Views'} />

        </div>
      </div>
    </div>
  );
}

export default App;
