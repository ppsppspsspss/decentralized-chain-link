import axios from 'axios'
import React from 'react'

export interface IPOST {
    id: number;
    title: string;
    content: string;
    postedOn: Date;
    user?: any[];
    comments?: any[];
    votes: number;
    isEdited: boolean;
    timer?: string
}

async function GetAllPost() : Promise<IPOST[]> {
  const res = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/posts")
  const _posts: IPOST[] = res.data

  const posts : IPOST[]= _posts.map(value => {
    return {
        ...value,
        votes: 0
    }
  })

  return posts
}

export default GetAllPost
