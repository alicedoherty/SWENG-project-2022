import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import PostList from './PostList';
import post_data from './data/post_data';
import './Search.css';


// const filterFreelancers = (cards, query) => {
//   if (!query) {
//       return cards;
//   }

//   return cards.filter((card) => {
//       const cardName = card.name.toLowerCase();
//       const cardJob = card.job_title.toLowerCase();
//       const cardSector = card.sector.toLowerCase();

//       if(cardName.includes(query))
//         return cardName.includes(query);
//       else if(cardJob.includes(query))
//         return cardJob.includes(query);
//       else if(cardSector.includes(query))
//         return cardSector.includes(query);
//   });
// };

  
function Search() {
//   const { search } = window.location;
//   const query = new URLSearchParams(search).get('s');
//   const [searchQuery, setSearchQuery] = useState(query || '');
//   const filteredFreelancers = filterFreelancers(freelancer_info, searchQuery);
  
      return (
        <div>
        <Header />
        <Container className="content">
          {/* <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
          />
          <Filters
              setSearchQuery={setSearchQuery}
          /> */}
          <PostList
            post_data={post_data} />
          {/* <Footer /> */}
        </Container>
        </div>
      );
}
  
export default Search;



