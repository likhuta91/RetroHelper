import React from 'react';
import Button from '@material-ui/core/Button';

import './main-page.scss';

function MainPage(props) {
    const handleClickSignOut = () => {
        props.handleClickLogout(false);
    }
    return (
        <div className="main-page">
            <header>
                <Button variant="contained" color={'inherit'} onClick={handleClickSignOut}>Sign out</Button>
            </header>
        </div>
    );
}

export default MainPage;
