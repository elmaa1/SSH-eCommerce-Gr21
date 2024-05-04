import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-lg-6 d-flex align-items-center">
            <div>
              <h2 className="mb-4">About Us</h2>
              <p className="text-justify">
                Welcome to <strong>[Your Company Name]</strong>, your ultimate destination for cutting-edge technology products. Since [year], we've been dedicated to bringing innovation and excitement to the world of technology, making it more accessible and enjoyable for everyone.
              </p>
              <p className="text-justify">
                At <strong>[Your Company Name]</strong>, we believe that technology should enhance every aspect of our lives. That's why we carefully select and curate our products to ensure that we offer only the best and most advanced technology available on the market.
              </p>
              <p className="text-justify">
                Our team of experts is passionate about exploring the latest trends and innovations to bring you a diverse range of products that cater to all your tech needs and preferences. Whether you're a gamer, a photographer, a fitness enthusiast, or a business professional, we have something for you.
              </p>
              <p className="text-justify">
                But <strong>[Your Company Name]</strong> is more than just a store – we're a community of tech enthusiasts who share a common passion for creativity and innovation. We're here to inspire and empower you to discover the endless possibilities of technology and unleash your full potential.
              </p>
              <p className="text-justify">
                Thank you for choosing <strong>[Your Company Name]</strong>. We're excited to embark on this journey with you and help you explore the amazing world of technology!
              </p>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default About