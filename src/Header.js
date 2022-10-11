import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import './Header.css'
import {useDataLayerValue} from './DataLayer'


function Header() {
    const [{user}] = useDataLayerValue();

  return (
    <div className='header'>
        <div className='header__left'>
            <SearchIcon />
            <input 
                placeholder='Serch for Artists, songs, podcast ...etc'
                type='text'
            />
        </div>

        <div className='header__right'>
            <Avatar src={user?.images[0]?.url}  alt={user?.display__name}/>
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header