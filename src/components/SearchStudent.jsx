import React, { useState } from 'react'
import NavBar from './NavBar'

const SearchStudent = () => {
    const [data,setdata]=useState(
           { 
            "search":""

           }
    )
    const inputhandler=(event)=>{
        setdata({...data,[event.target.name]:event.target.name})
    }
    const readvalue=()=>{
        console.log(data)
    }
    return (

            <div>
                <NavBar/>
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">search</label>
                                    <input type="text" className="form-control" name='search' value={data.search} onChange={inputhandler}/>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-success" onClick={readvalue}>search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default SearchStudent