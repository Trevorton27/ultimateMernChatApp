import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import baseUrl from '../clientUtils/baseUrl';
import CreatePost from '../components/Posts/CreatePost';
import PostCard from '../components/Posts/PostCard';
import { Segment } from 'semantic-ui-react';
import { parseCookies } from 'nookies';
import { NoPosts } from '../components/Layout/NoData';
import InfiniteScroll from 'react-infinite-scroll-component';

function Index({ user, postsData, errorLoading }) {
  const [posts, setPosts] = useState(postsData || []);
  const [showToastr, setShowToastr] = useState(false);
  console.log('user: ', user);
  useEffect(() => {
    document.title = `Welcome, ${user.name.split(' ')[0]}`;
  }, []);

  return (
    <Segment>
      <CreatePost user={user} setPosts={setPosts} />

      {posts.length === 0 || errorLoading ? (
        <NoPosts />
      ) : (
        <InfiniteScroll
          hasMore={hasMore}
          next={fetchDataOnScroll}
          loader={<PlaceHolderPosts />}
          endMessage={<EndMessage />}
          dataLength={posts.length}
        >
          {posts.map((post) => (
            <PostCard
              //socket={socket}
              key={post._id}
              post={post}
              user={user}
              setPosts={setPosts}
              setShowToastr={setShowToastr}
            />
          ))}
        </InfiniteScroll>
      )}
    </Segment>
  );
}

Index.getInitialProps = async (ctx) => {
  try {
    const { token } = parseCookies(ctx);

    const res = await axios.get(`${baseUrl}/api/posts`, {
      headers: { Authorization: token }
    });

    return { props: { postsData: res.data } };
  } catch (error) {
    return { errorLoading: true };
  }
};

export default Index;
