import React from 'react';
import contents from '../Data/DetailsData';
import { useParams } from 'react-router-dom';

// 원리: params가 클릭하는 content.id value를 topic_id로 받아온다. 
// 아래 Routes path={'/topic/:topic_id'} 로 받아오도록 설정해줌.
// 때문에 params.topic_id로 URL로 부터 받아온 값을 let topic_id 변수에 저장해 활용해준다. 
export default function Topic() {   // 파라미터를 Topic 함수에서 사용할 것을 암시.
   let contentLength = contents.length;
   let params = useParams()
   let topic_id = params.topic_id;
   let selected_topic = {  //초기값을 sprry와 not found로 설정해, 아무런 값이 들어오지 않았을 경우, 해당 초기값 내용이 user에게 보여짐. 
      title: 'Sorry',
      description: 'Not Found'
   }
   for (let i = 0; i < contentLength; i++) {
      if (contents[i].id === Number(topic_id)) {  // 이때 useParams 로 받아온 topic_id 값은 string이므로, Number타입으로 형변환 시켜줌. 
         selected_topic = contents[i];   // 배열의 key값이 같은 object끼리 변수값 전달.(자동) 
         break;
      }
   }
   return (
      <div>
         <h3>{selected_topic.title}</h3>
         {selected_topic.description}
      </div>
   );
}