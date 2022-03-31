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
            height:"8%",
            bgcolor:"#ecf3ff"
        }}
        >
            <CardContent sx={{display:"flex"}}>
                
                    <Typography variant = "h5" sx={{ color: "#1c3664" }}>
                        {post.post_version_id}
                    </Typography>
                    <Typography variant = "h5" sx={{ color: "#1c3664", position:"absolute", left:"20%" }}>
                        {post.date}
                    </Typography>
                    <Typography variant = "h5" sx={{ color: "#1c3664", position:"absolute", left:"37%"  }}>
                        {post.author}
                    </Typography>
                    <Typography variant = "h5" sx={{ color: "#1c3664", position:"absolute", left:"62%"   }}>
                        {post.post_title}
                    </Typography>

                

            </CardContent>
        </Card>
    );
}

AuditCard.propTypes = {
    post: PropTypes.object.isRequired
  };

  export default AuditCard;
