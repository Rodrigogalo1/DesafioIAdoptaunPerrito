import React from 'react';
import { Card } from './Card';

export const MyCard = ({ posts }) => {
    return (
        <div className='cards-container'>
          {posts.length ? (
            posts.map((post) => (
              <Card key={post.id} {...post} />
            ))
          ) : (
            <h1>no hay posts</h1>
          )}
        </div>
      );
    };