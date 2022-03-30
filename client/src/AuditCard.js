import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import post_data from "./data/post_data";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'

function AuditCard(props) {

    let{post} = props;


    return(
        <Card variant = "outlined"
        sx={{
            height:"10%",
            bgcolor:"#ecf3ff"
        }}
        >
            <CardContent sx={{display:"flex",}}>
                <Stack direction="row" spacing = {5} justifyContent="center">
                    <Typography variant = "body1">
                        {post.change_type}
                    </Typography>
                    <Typography variant = "body1">
                        {post.date}
                    </Typography>
                    <Typography variant = "body1">
                        {post.author}
                    </Typography>
                    <Typography variant = "body1">
                        {post.post_title}
                    </Typography>

                </Stack>

            </CardContent>
        </Card>
    );
}

AuditCard.propTypes = {
    post: PropTypes.object.isRequired
  };

  export default AuditCard;
