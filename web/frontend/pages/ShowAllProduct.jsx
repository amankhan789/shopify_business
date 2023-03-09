import React, { useState, Fragment } from "react";
import { MDBDataTableV5 } from 'mdbreact';
import { MDBBtn } from "mdbreact";
import {FormLayout, Select } from '@shopify/polaris';

// import Button from 'react-bootstrap/Button';
const options = [
  { label: 'Today', value: 'today' },
  { label: 'Yesterday', value: 'yesterday' },
  { label: 'Last 7 days', value: 'lastWeek' },
];

const ShowAllProduct = () => {

    const [sortBy, setSortBy] = useState('');
    const [datatable, setDatatable] = React.useState({
      columns: [
        {
          label: 'Customer Name',
          field: 'CustomerName',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: 'Registration Date',
          field: 'RegistrationDate',
          width: 270,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: 'Afilation group name',
          field: 'Afilationgroupname',
          width: 200,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: 'Discount type',
          field: 'Discounttype',
          sort: 'asc',
          width: 100,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: 'Status',
          field: 'Status',
          sort: 'disabled',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: '',
          field: 'button',
          sort: '',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
          
        },
      ],
      rows: [
   
        {
          CustomerName: 'Bruno Nash',
          RegistrationDate: 'Software Engineer',
          Afilationgroupname: 'London',
          Discounttype: '38',
          Status: 'Active',
          button: [<button type="button" class="btn btn-dark">Check order history</button>,
          <button type="button" class="btn btn-dark">Customer information editing</button>,<button type="button" 
          class="btn btn-dark">Billing history confermation</button>,<button type="button" class="btn btn-dark">Delete customer information</button>]
            
        },
        {
          CustomerName: 'Sakura Yamamoto',
          RegistrationDate: 'Support Engineer',
          Afilationgroupname: 'Tokyo',
          Discounttype: '37',
          Status: 'Active',
          button: [<button type="button" class="btn btn-dark">Check order history</button>,
          <button type="button" class="btn btn-dark">Customer information editing</button>,<button type="button" 
          class="btn btn-dark">Billing history confermation</button>,<button type="button" class="btn btn-dark">Delete customer information</button>]
        }
  
      ],
    });

    return (
        <>

        {/* <FormLayout>
          <FormLayout.Group>

            <Select
              placeholder='Sort by'
              options={options}
              onChange={(value) => setSortBy(value)}
              value={sortBy}
            />
          </FormLayout.Group>
        </FormLayout>
        <div className="customer-btn">
          <MDBBtn outline color="primary">New customer Registration</MDBBtn>
        </div>

        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4}
          data={datatable} searchTop searchBottom={false} paging={false} />
          */}

    
  </>
    )
}

export default ShowAllProduct