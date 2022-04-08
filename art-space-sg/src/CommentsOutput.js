import React from 'react';
import Typography from '@mui/material/Typography';

export default class CommentsOutput extends React.Component{
    state={

    }

    retrieveDate(data) {
        let date = new Date(data)
        return date.toLocaleDateString()
    }

    renderComment = () => {
        let data = this.props.commentData
        return data.map(event => {
            return (
                <div key={event._id}>
                    <Typography variant="body2" color="text.secondary" sx={{ m: 2 }}>
                        <label>Name :</label>
                        {event.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ m: 2 }}>
                        <label>Comment :</label>
                        {event.comment}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ m: 2 }}>
                        <label>Last time stamp :</label>
                        {this.retrieveDate(event.last_time_stamp)}
                    </Typography>
                </div>
            )
        })
    }

    render(){
        return (
            <React.Fragment>
                {this.renderComment()}
            </React.Fragment>
        )
    }
}