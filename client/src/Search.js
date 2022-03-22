import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import PostList from './PostList';
import SearchBar from './SearchBar';
import post_data from './data/post_data';
import './Search.css';


const filterPosts = (cards, query) => {
  if (!query) {
      return cards;
  }

  return cards.filter((card) => {
      const cardAuthor = card.postVersions[card.postVersions.length-1].author.toLowerCase();
      const cardTitle = card.postVersions[card.postVersions.length-1].post_title.toLowerCase();

      if(cardAuthor.includes(query.toLowerCase()))
        return cardAuthor.includes(query.toLowerCase());
      else if(cardTitle.includes(query.toLowerCase()))
        return cardTitle.includes(query.toLowerCase());
  });
};

  
function Search() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  //const filteredPosts = filterPosts(post_data, searchQuery);
  const filteredPosts = filterPosts(post_data, searchQuery);
  
      return (
        <div>
        <Header />
        <Container className="content">
          <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
          />
          {/* <Filters
              setSearchQuery={setSearchQuery}
          /> */}
          <PostList
            post_data={filteredPosts} />
          {/* <Footer /> */}
        </Container>
        </div>
      );
}
  
export default Search;



