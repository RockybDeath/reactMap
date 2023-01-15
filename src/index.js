import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import {Provider} from "react-redux";
import store from './main/store/store.js'
import {Map} from "./main/mapComponent/Map.js"
import {TableDrawer} from "./main/tableComponent/tableDrawer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <div className={'mainContainer'}>
          <div className={'tableContainer'}>
              <TableDrawer/>
          </div>
          <div id={"map"} className={'mapContainer'}>
            <Map />
          </div>
      </div>
  </Provider>
);
