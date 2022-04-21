import * as React from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { getContents, deleteContentsById } from '../Data/DetailsData';

export default function Detail() {
   let navigate = useNavigate();
   let params = useParams();
   let detailAbout = params.
      // parseInt(int형으로 바꿔줄 변수, 변형시켜줄 int형 진수(2, 8, 10, 16))
      // ex) let invoice = parseInt(params.invoiceId, 10);
      // 이때, params를 통해, <Link to="xxxxx" key={invoice.number} > Link </Link>
      // 이런식으로 설정된 Link를 클릭해 데이터 전송시, key값이 params에 저장된다. 

      return(

      )
}