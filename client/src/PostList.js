 import React from 'react';
import PostCard from './PostCard.js';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';

class PostList extends React.Component {
  render() {
    return (
      <Container>
        {/* <Row className ="justify-content-md-center" style={{display:'flex'}}> */}
            {
              this.props.post_data.map(post => (
                <PostCard
                  key={post.id}
                  post={post} />
              ))
            }
          {/* </Row> */}
      </Container>      
    );
  }
}

PostList.propTypes = {
  post_data: PropTypes.arrayOf(PropTypes.object).isRequired
};

PostList.defaultProps = {
  post_data: []
};

export default PostList;