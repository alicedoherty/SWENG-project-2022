import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Search.css';

function PostCard(props) {
  let {
    post
  } = props;


  return (
    <Card variant="outlined"
      sx={{
        mt: 2,
        bgcolor: "#ecf3ff"
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {post.postVersions[post.postVersions.length - 1].date}
        </Typography>
        <Typography variant="h5" sx={{ color: "#1c3564" }} component="div">
          {post.postVersions[post.postVersions.length - 1].post_title}
        </Typography>
        <Typography sx={{ mb: 1.5, color: "#1c3564" }}>
          {post.postVersions[post.postVersions.length - 1].author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ color: "#f37026" }} size="small" component={Link} to={`/posts/${post.id}`}>View Post</Button>
      </CardActions>
    </Card>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostCard;