import React from 'react';
import { Media } from 'react-bootstrap';
import Loader from '../components/Loader';
import useStoryFetcher from '../hooks/storyFetcher';
import { convertToTimeAgo } from '../utils/helper';

const Comment = ({ id }) => {
  const { isLoading, story } = useStoryFetcher(id);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Media className={`${story.parent ? 'pl-4' : ''}`}>
          <div className="mr-2">&#9654;</div>
          <Media.Body>
            <h6>{story.by} <span className='text-muted' style={{ fontSize: '11px' }}>{`created ${convertToTimeAgo(story.time)}`}</span></h6>
            <p dangerouslySetInnerHTML={{ __html: story.text }}></p>

            {story.kids && story.kids.length >= 1 ? (
              story.kids.map(id => (
                <Comment key={id} id={id} />
              ))
            ) :
              <></>}
          </Media.Body>
        </Media>
      )}
    </>
  );
};

export default Comment