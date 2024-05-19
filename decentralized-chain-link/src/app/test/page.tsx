import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div>
        <div className="flex flex-col min-h-screen">
        <Navbar/>
        </div>
        <div>
        <Footer />
        </div>
    </div>
  )
}

export default page