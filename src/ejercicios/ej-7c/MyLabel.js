import React from 'react';

class MyLabel extends React.Component {
    
    render(props){
    return (
        <p><b>Has dado {this.props.state} clicks</b></p>
    );
    }
};

export default MyLabel;