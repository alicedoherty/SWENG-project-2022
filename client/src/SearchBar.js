import React from 'react';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <FormControl bg="dark" action="/" method="get">
            <Input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search Posts"
                name="s" 
            />
        </FormControl>
    );
    
};

export default SearchBar;