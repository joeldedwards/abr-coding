import React from 'react'
import { Form } from 'react-bootstrap'

const Search = (props) => {

  return (
    <div id='searchWrap' className='container'>
        <Form.Control 
            size='lg' 
            type='text'
            className='search-field'
            value={props.value}
            onChange={(e) => props.setSearchVal(e.target.value)}
            placeholder='Search Movies...' />
    </div>
  )
}

export default Search