import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const contents = [
    { id: 1, title: 'HTML', description: 'HTML is ...' },
    { id: 2, title: 'CSS', description: 'CSS is ...' },
    { id: 3, title: 'JS', description: 'JS is ...' },
]

// 원리: params가 클릭하는 content.id value를 topic_id로 받아온다. 
// 아래 Routes path={'/topic/:topic_id'} 로 받아오도록 설정해줌.
// 때문에 params.topic_id로 URL로 부터 받아온 값을 let topic_id 변수에 저장해 활용해준다. 
function Topic() {   // 파라미터를 Topic 함수에서 사용할 것을 암시.
    let params = useParams()
    let topic_id = params.topic_id;
    let selected_topic = {  //초기값을 sprry와 not found로 설정해, 아무런 값이 들어오지 않았을 경우, 해당 초기값 내용이 user에게 보여짐. 
        title: 'Sorry',
        description: 'Not Found'
    }
    for (let i = 0; i < contents.length; i++) { // 3번 반복
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

function Topics() {
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

function App() {
    return (
        <div>
            <h1>React Router Dom example</h1>
            <ul>
                <li>
                    <NavLink to={'./topics'}>Topics</NavLink >
                </li>
                <Route path="topics">
                    <Topics />  {/* 결국 호출 파트는 Topics이며, Topic함수는 Topics를 구현하기 위한 함수를 만들어주는 역할 */}
                </Route>
            </ul>
        </div>
    );
}
