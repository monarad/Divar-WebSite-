import React from 'react'
import Main from 'components/templates/Main'
import Sidebar from 'components/templates/Sidebar'
import { useQuery } from '@tanstack/react-query';
import { getAllPosts } from 'services/user';
import Loader from 'components/modules/Loader';
import { getCategory } from 'src/services/admin';

const style={display:"flex"};

function HomePage() {
  const{data:posts,isLoading:postLoading}=useQuery(["post-list"],getAllPosts)
  const {data:categories,isLoading:categoryLoading}=useQuery(["get-categories"],getCategory)
  return (
    <>
    {postLoading || categoryLoading ?(<Loader/>)
    :(
      <div style={style}>
      <Sidebar categories={categories}/>
      <Main posts={posts}/>
    </div>
    )}
    </>
    
  )
}

export default HomePage