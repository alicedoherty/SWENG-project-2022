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
      const cardAuthor = card.postVersions[1].author.toLowerCase();
      const cardTitle = card.postVersions[1].post_title.toLowerCase();

      if(cardAuthor.includes(query))
        return cardAuthor.includes(query);
      else if(cardTitle.includes(query))
        return cardTitle.includes(query);
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



