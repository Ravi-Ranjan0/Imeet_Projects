import React from 'react'
import Banner from '../components/Banner' 
import Layout from '../components/Layout/Layout'
import { NavLink } from 'react-router-dom'

const Homepage = () => {
  return (
    <Layout>
    <section className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src='https://static.vecteezy.com/system/resources/thumbnails/000/518/208/small/10.jpg' alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-5xl font-bold'>Join our thriving <br></br> <span className="text-blue-400">Imeet community!</span></p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'><NavLink to='/register'> Get Started</NavLink></button>
        </div>
      </div>
    </section>
    <Banner />
    </Layout>
  )
}

export default Homepage