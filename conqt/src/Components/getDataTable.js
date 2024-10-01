import { React, useState, useEffect } from 'react';
import './getDataTable.css';
const GetDataTable = () => {
    const [data, setData] = useState([]);

    const [responseData, setResponseData] = useState(null);


    const payload = {
        itemDetails: {
            itemName: "Mac Book",
            quantity: 5,
            unitPrice: "2000",
            currency: "$",
            submissionDate: "2021-07-21",
        },
        supplier: {
            supplierName: "Adil",
            companyName: "Apple",
            email: "adilismail@apple.co",
            phoneCode: "+91",
            phoneNumber: "7007402688",
            countryId: "1",
            stateId: "1",
            cityId: "1",
        },
    };

    // Function to post data
    const postData = async () => {
        try {
            const response = await fetch(
                "https://apis-technical-test.conqt.com/Api/Item-Supplier/Save-Items-Suppliers",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );
            const data = await response.json();
            setResponseData(data);
        } catch (error) {
            console.error("Error posting data", error);
        }
    };

    useEffect(() => {
        fetch('https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList').then((responce) => {
            responce.json().then((result) => {
                console.log('result= ', result)
                setData(result.data);
            })
        })
    }, [])
    return (
        <>
            <div className="container mt-5">
            <div className='table-main'>
            <div className='table-header'>
                <h2 className="mb-4 get-data-table-heading">Uploaded Data</h2>
                <button className='btn btn-outline-secondary btn-sm'>Clear All</button>
                </div>
                <div className="table-responsive mt-4">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th className="col"><input type='checkbox' /></th>
                                <th className="col">Item Name</th>
                                <th className="col">Quantity</th>
                                <th className="col">City</th>
                                <th className="col">Country</th>
                                <th className="col">Email</th>
                                <th className="col">Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type='checkbox' /></td>
                                <td>Olivia Rhye</td>
                                <td>12</td>
                                <td>Cape Town</td>
                                <td>South Africa</td>
                                <td>jackson.graham@example.com</td>
                                <td>(406) 555-0120</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </>
    )
}

export default GetDataTable

