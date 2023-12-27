import React, {useState} from 'react';
import { Table, Button } from 'react-bootstrap'; 

const UserDetail = () => {
    const [data, setData] = useState([]); 
    const [arrItem1, setArrItem1] = useState('');
    const [arrItem2, setArrItem2] = useState(''); 
    const [itemToAdd, setItemToAdd] = useState([]); 
    const [srNo, setSrNo] = useState(1); 
    const addToArrFunction = () => { 
        setItemToAdd([...itemToAdd, { id: srNo, value1: arrItem1, value2: arrItem2 }]); 
        setArrItem1(''); 
        setArrItem2(''); 
        setSrNo(srNo + 1); 
    }; 
    const addToTable = () => { 
        setData([...data, ...itemToAdd]); 
        setItemToAdd([]); 
    }; 
    return ( 
     <>   
        <div className="app-container"> 
            <h1 className="app-title">User Details</h1> 
            <h4>Adding Array to Table</h4> 
            
            <input 
                type="text"
                value={arrItem1} 
                onChange={(e) => setArrItem1(e.target.value)} 
                placeholder="Enter Name"
                className="data-input"
            /> 
              <input 
                type="text"
                value={arrItem2} 
                onChange={(e) => setArrItem2(e.target.value)} 
                placeholder="Enter Email"
                className="data-input"
            /> 
            <div className="buttons-container"> 
                <Button onClick={addToArrFunction} className="add-button"> 
                    Add to User Array 
                </Button> 
                <Button onClick={addToTable} className="add-button"> 
                    Add All to User Table
                </Button> 
            </div> 
            <div className="elements-to-add"> 
                <h3>Elements of User Array:</h3> 
                <ul> 
                    {itemToAdd.map((item, index) => ( 
                        <li key={index}>{`${item.id}: ${item.value1}, ${item.value2} `}</li> 
                    ))} 
                </ul> 
            </div> 
        </div> 
        <Table striped bordered hover className="custom-table"> 
        <thead> 
            <tr> 
                <th>Sr. No</th> 
                <th>Name</th> 
                <th>Email</th>
            </tr> 
        </thead> 
        <tbody> 
            {data.map((item, index) => ( 
                <tr key={index}> 
                    <td>{item.id}</td> 
                    <td>{item.value1}</td> 
                    <td>{item.value2}</td> 
                </tr> 
            ))} 
        </tbody> 
    </Table> 
  </>  
); 
}

export default UserDetail
