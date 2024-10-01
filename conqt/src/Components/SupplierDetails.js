import React from 'react'
import './ItemDetails.css';


function SupplierDetails() {
    return (
        <div className='container main mt-4'>
            <h1 className='main-title'>Supplier Details</h1>
            <form className='main-form mt-4'>
                <div className='row'>
                    <div className='col'>
                        <label>Supplier Name</label>
                        <input type='text' placeholder='Enter Supplier Name'></input>
                        <p>Max 50 charactors</p>
                    </div>
                    <div className='col'>
                        <label>Company Name</label>
                        <input type='text' placeholder='Enter Company Name'></input>
                        <p>Max 50 charactors</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <label>Country</label>
                        <select>
                            <option>USA</option>
                            <option>UK</option>
                            <option>INDAI</option>
                        </select>
                        <p>Numeric Value (USD)</p>
                    </div>
                    <div className='col'>
                        <label>State</label>
                        <select>
                            <option>USA</option>
                            <option>UK</option>
                            <option>INDAI</option>
                        </select>
                        <p>Format: MM/DD/YYY</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <label>City</label>
                        <input type='text' placeholder='Enter City'></input>
                        <p>Max 50 charactors</p>
                    </div>
                    <div className='col'>
                        <label>Email Address</label>
                        <input type='text' placeholder='Enter email address'></input>
                        <p>valid email format</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <label>Email Address</label>
                        <input type='text' placeholder='Enter email address'></input>
                        <p>valid email format</p>
                    </div>

                </div>
            </form>
        </div>
    )
}
export default SupplierDetails;