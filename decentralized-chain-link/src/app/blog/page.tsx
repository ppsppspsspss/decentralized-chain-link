'use client'
import React, { useState, useEffect } from 'react';

const posts = [
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  },
  {
    id: 1,
    title: 'First Blog Postaaaaaaaaaaaaaaaa',
    content: 'This is the content of the first blog post.',
    upvotes: 0,
    downvotes: 0,
    comments: 0,
    createdAt: new Date('2024-05-20T08:00:00Z')
  }
];

function Blog() {
  const [postVotes, setPostVotes] = useState(posts);

  useEffect(() => {
    const interval = setInterval(updateTimers, 1000); 
    return () => clearInterval(interval);
  }, []);

  const updateTimers = () => {
    setPostVotes(prevState =>
      prevState.map(post => {
        return {
          ...post,
          timer: calculateTimer(post.createdAt)
        };
      })
    );
  };

  const calculateTimer = (createdAt: Date) => {
    const currentTime = new Date();
    const elapsedTime = currentTime.getTime() - createdAt.getTime(); 
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }
  };

  const handleVote = (postId: number, type: string) => {
    setPostVotes(prevState =>
      prevState.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            upvotes: type === 'upvote' ? post.upvotes + 1 : post.upvotes,
            downvotes: type === 'downvote' ? post.downvotes + 1 : post.downvotes,
          };
        }
        return post;
      })
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {postVotes.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={`https://source.unsplash.com/800x600/?${post.title}`} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold mb-2">{post.title.length > 15 ? post.title.substring(0, 17) + '...' : post.title}</h2>
                <span className="text-sm text-gray-500">{post.timer}</span>
              </div>
              <p className="text-gray-600 mt-2">{post.content.length > 40 ? post.content.substring(0, 40) + '...' : post.content}</p>
              <div className="flex items-center justify-between mt-4 pt-3">
                <div className="flex items-center">
                  <button onClick={() => handleVote(post.id, 'upvote')} className="mr-2 flex items-center">
                    👍
                  </button>
                  <div className='mr-2'>{post.upvotes - post.downvotes}</div>
                  <button onClick={() => handleVote(post.id, 'downvote')} className="mr-2 flex items-center">
                    👎
                  </button>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2c-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8-3.5817-8-8-8zm-3 9a1 1 0 00-1 1v1a1 1 0 001 1h6a1 1 0 001-1v-1a1 1 0 00-1-1H7z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-500 px-1">{post.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
