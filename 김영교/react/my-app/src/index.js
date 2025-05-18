import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './chpater_04/clock';
import CommentList from './chapter_05/commentList';
import NotificationList from './chapter_06/Notificaton_list';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';

// React 18 방식 사용
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>
);
reportWebVitals();

//React 18에서는 더 이상 ReactDOM.render(...)를 쓰지 않습니다.
//→ createRoot(...)를 사용해야 해요.
