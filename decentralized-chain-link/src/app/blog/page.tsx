import React from 'react';

// Sample posts data
const posts = [
  {
    id: 1,
    title: 'First Blog Post',
    content: 'This is the content of the first blog post.'
  },
  {
    id: 2,
    title: 'Second Blog Post',
    content: 'This is the content of the second blog post.'
  },
  {
    id: 3,
    title: 'Third Blog Post',
    content: 'This is the content of the third blog post.'
  },
];

function Blog() {
  return (
    <div className="container mx-auto p-4">
      {posts.map(post => (
        <div key={post.id} className="mb-6 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
          <p className="text-gray-700">{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
