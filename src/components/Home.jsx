import "./Home.css"
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from "axios";

const Home = () => {
    var [value,setValue]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/users').then((response)=>{
            console.log(response.data.users);
            setValue(response.data.users);
        });
    },[])

  return (
    <div className="tablediv"><br></br>
        <Table className='table'>
            <TableHead className="tablehead">
                <TableRow className="tablerow">
                    <TableCell className="tablecell">First Name</TableCell>
                    <TableCell className="tablecell">Last Name</TableCell>
                    <TableCell className="tablecell">Age</TableCell>
                    <TableCell className="tablecell">City</TableCell>
                </TableRow>
            </TableHead>
            <TableBody className="tablehead">
                {value.map((data,ind)=>{
                    return<TableRow>
                        <TableCell className="tablecell">{data.firstName}</TableCell>
                        <TableCell className="tablecell">{data.lastName}</TableCell>
                        <TableCell className="tablecell">{data.age}</TableCell>
                        <TableCell className="tablecell">{data.address.city}</TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
        <div className="footer">

        </div>
    </div>
  )
}

export default Home
