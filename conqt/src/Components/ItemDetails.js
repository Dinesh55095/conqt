import { React, useState } from 'react'
import './ItemDetails.css';

function ItemDetails(props) {
    return (
        <div className='container main mt-4'>
            <h1 className='main-title'>Item Details</h1>
            <form className='main-form mt-4'>
                <div className='row'>
                    <div className='col'>
                        <label>Input Item</label>
                        <input type='text' value={props.itemName} onChange={(e) => props.setInemName(e.target.value)} placeholder='Enter item name' ></input>
                        <p>Max 50 charactors</p>
                    </div>
                    <div className='col'>
                        <label>Quantity</label>
                        <input type='text' value={props.itemQuantity} onChange={(e) => props.setItemQuantity(e.target.value)} placeholder='Enter quantity'></input>
                        <p>Numeric Value</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <label>Unit Price</label>
                        <input type='text' value={props.unitPrice} onChange={(e) => props.setUnitPrice(e.target.value)} placeholder='Enter unit price'></input>
                        <p>Numeric Value (USD)</p>
                    </div>
                    <div className='col'>
                        <label>Date of Submission</label>
                        <input type='text' value={props.dateSubmit} onChange={(e) => props.setDateSubmit(e.target.value)} placeholder='Select date'></input>
                        <p>Format: MM/DD/YYY</p>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default ItemDetails;