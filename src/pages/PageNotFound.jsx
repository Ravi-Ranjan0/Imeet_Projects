import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const Pagenotfound = () => {
  return (
    <Layout>
        <div className='text-center'>
          <h1 className='text-5xl font-bold'>404</h1>
          <h2 className='text-3xl py-6 text-gray-500'>Oops: Page Not Found</h2>
          <Link to='/Imeet_Projects' className='pnf-btn'>
            Go Back
          </Link>
        </div>
    </Layout>
  )
}

export default Pagenotfound