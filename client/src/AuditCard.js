import React from 'react';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function AuditCard(props) {

    let{post} = props;


    return(
        <Card variant = "outlined"
        sx={{
            height:"8%",
            bgcolor:"#e6efff"
        }}
        >
            <CardContent sx={{display:"flex"}}>
                
                    <Typography variant = "h6" sx={{ color: "#1c3664", fontWeight: "normal" }}>
                        {post.post_version_id+1}
                    </Typography>
                    <Typography variant = "h6" sx={{ color: "#1c3664", position:"absolute", left:"18%", fontWeight: "normal" }}>
                        {post.date}
                    </Typography>
                    <Typography variant = "h6" sx={{ color: "#1c3664", position:"absolute", left:"36%", fontWeight: "normal"  }}>
                        {post.author}
                    </Typography>
                    <Typography variant = "h6" sx={{ color: "#1c3664", position:"absolute", left:"60%", fontWeight: "normal"  }}>
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
