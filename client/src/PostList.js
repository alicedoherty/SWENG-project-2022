import React from 'react';
import PostCard from './PostCard.js';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';

class PostList extends React.Component {
  render() {
    return (
      <Container>
        {
          this.props.postData.map(post => (
            <PostCard
              key={post.id}
              post={post} />
          ))
        }
      </Container>
    );
  }
}

PostList.propTypes = {
  postData: PropTypes.arrayOf(PropTypes.object).isRequired
};

PostList.defaultProps = {
  postData: []
};

export default PostList;