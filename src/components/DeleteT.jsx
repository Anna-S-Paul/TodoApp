import React from 'react'
import NavT from './NavT'

const DeleteT = () => {
  return (
    <div>
        <NavT/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">ID:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <butoon className="btn btn-danger">Delete</butoon>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteT