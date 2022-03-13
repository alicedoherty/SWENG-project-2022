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
        }}
    >
        <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
                {post.date}
            </Typography>
            <Typography variant="h5" sx={{color:"#1c3564"}} component="div">
                {post.post_title}
            </Typography>
            <Typography sx={{ mb: 1.5, color:"#1c3564"}}>
                {post.author}
            </Typography>
        </CardContent>
        <CardActions>
            <Button sx={{color:"#f37026"}} size="small" component={Link} to={`/posts/${post.id}`}>View Post</Button>
        </CardActions>
      </Card>

    // <Col xs={12} md={6} lg={4} xl={3}>
    //   <Card className="freelancer_card yellow-font" key={freelancer.id} style={{ flex: 1, justifyContent: 'center', borderRadius: 8 }}>

    //     <Image className="card_image" variant="top" src={freelancer.thumbnail} rounded />

    //     <LinkContainer to={`freelancers/portfolio/${freelancer.id}`} className="card_btn">
    //       <Card.Body>
    //         <Image className="profile_pic" src={freelancer.profile_photo} roundedCircle />


    //         <Card.Title className="font-weight-bold">{freelancer.name}</Card.Title>

    //         <Card.Subtitle>{freelancer.job_title}</Card.Subtitle>
    //         <Card.Text>{freelancer.sector}</Card.Text>

    //       </Card.Body>
    //     </LinkContainer>

    //     <Accordion defaultActiveKey="0">
    //       <Accordion.Toggle as={Button} variant="link" eventKey="1">
    //         See More
    //             </Accordion.Toggle>

    //       <Accordion.Collapse eventKey="1">
    //         <ListGroup className="list-group">
    //           <ListGroup.Item className="light-blue-bg">{freelancer.card_description}</ListGroup.Item>
    //           <ListGroup.Item className="light-blue-bg">Full Day Rate: {freelancer.full_day_rate}</ListGroup.Item>
    //         </ListGroup>
    //       </Accordion.Collapse>
    //     </Accordion>
    //   </Card>
    // </ Col>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostCard;