import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { GroupContainer } from './components/GroupContainer';
import { MainContainer } from './components/MainContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));

let URL = 'https://my-json-server.typicode.com/kosipov/1425-iro-placeholder-api/disciplines'
const response = await fetch(URL)
const data = await response.json()

const newGroups = []
const newStudents = []

data.forEach((item, i) => {
  newGroups.push({id: item.id, group_name: item.group, title: item.title})
})

data.forEach((item, k) => {
  item.students.forEach((student, i) => {
      newStudents.push({id: item.id, name: `${student.firstName} ${student.lastName}`, 
                        group_name: item.group, group_id: item.id, 
                        stats: student.stats.map((stat, s) => {
                          return {id: s, date: stat.date, value: stat.value}
                        })})
  })
})


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainContainer />,
    loader: () => {
      return newGroups
    },
    children: [
      {
        path: '/group/:groupId',
        element: <GroupContainer />,
        loader: () => {
          return newStudents
        }
      }
  ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
