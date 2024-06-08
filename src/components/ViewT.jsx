import React, { useEffect, useState } from 'react'
import NavT from './NavT'
import axios from 'axios'

const ViewT = () => {
    const [todos,setTodos]=useState([])
    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/todos").then(
        (response)=>{
          setTodos(response.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{
      fetchData()
    },[]
  )
  return (
    <div>
        <NavT/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">USER ID</th>
      <th scope="col">ID</th>
      <th scope="col">TITLE</th>
    </tr>
  </thead>
  <tbody>
    {
        todos.map(
            (value,index)=>{
                return <tr>
                <td>{value.userId}</td>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.completed}</td>
              </tr>
            }
        )
    }
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewT