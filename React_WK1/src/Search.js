import React from 'react';
import './Search.css';

function Search(){


    return(
        <div className='Search'>
            <form>
                <input type='search' className='formInput' placeholder='Enter a city' />
                <button type='submit'>Search</button>
            </form>
        </div>
    );
    
}

export default Search;