import React from 'react';
import contents from '../Data/Topic_Data';
import { NavLink, Route } from 'react-router-dom';
import Topic from './Topic';

export default function Topics() {
   let contents = contents;
   let topicTitleList = [];    // 생성해둔 data array를 받아와 사용해줄 지역변수 배열 생성. 
   for (let i = 0; i < contents.length; i++) {
      topicTitleList.push(    // topicTitleList 배열에 할당해줄 UI 저장. 
         <li>
            <NavLink to={'/topics/' + contents[i].id}>
               {contents[i].title}
            </NavLink>
         </li>
      )
   }
   return (
      <div>
         <h2>Topics</h2>
         <ul>
            {topicTitleList}
         </ul>
         <Route path={'/topics/:topic_id'}>  {/* :topic_id 를 통해 해당 부분이 파라미터일 것을 암시 */}
            <Topic />
         </Route>
      </div>
   );
}