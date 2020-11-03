import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import './main-page.scss';


function MainPage(props) {
    const { tickets } = props;
    const handleClickSignOut = () => {
        props.handleClickLogout(false);
    }

    const ticketElements = () => {
        return tickets.map(el => {
            return <div key={el.name}>{el.name}</div>
        });
    }
    return (
        <div className="main-page">
            <header>
                <Button variant="contained" color={'inherit'} onClick={handleClickSignOut}>Sign out</Button>
                {ticketElements()}
            </header>
        </div>
    );
}
const mapStateToProps = ({tickets})=>{
    return {
        tickets
    }
}
export default connect(mapStateToProps,{})(MainPage);


// export default MainPage;
