import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <div className='container mx-auto p-4 mt-4 bg-white rounded-md shadow'>

        <h1 className='text-3xl font-bold underline'>
            Welcome to Your Personalized Dashboard
        </h1>
        
      </div>
    </Layout>
  )
}

export default HomePage