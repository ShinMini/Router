import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { findContentsById, deleteContentsById } from '../Data/DetailsData';

export default function Details() {
   let navigate = useNavigate();
   let params = useParams();
   let userDetail = findContentsById(parseInt(params.id, 10));
   return (
      <main style={{ padding: '1rem' }}>
         <h2> Hi! {userDetail.name}</h2>
         <p>
            {userDetail.description}
         </p>
         <p>
            <button
               onClick={() => {
                  deleteContentsById(parseInt(userDetail.id, 10));
                  navigate('/Details');
               }}
            >DELETE</button>
         </p>
      </main>
   );
}