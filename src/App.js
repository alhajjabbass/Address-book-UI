import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';
import axios from 'axios';

export const App = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };

        axios.get("https://localhost:5001/api/v1/people?page=1", headers).then(res => {
            console.log(res);
            setData(res.data)
        })
    }, [])

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Job</th>
                    <th>Location</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((element) => {
                    return (
                        <tr key = {element.email}>
                            <td>{element.firstname}</td>
                            <td>{element.lastname}</td>
                            <td>{element.age}</td>
                            <td>{element.email}</td>
                            <td>{element.job}</td>
                            <td>{element.location}</td>
                            <td>{element.phone}</td>
                        </tr>
                    )
                })}

            </tbody>
        </Table>
    );
}
