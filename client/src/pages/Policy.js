import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
    <div className="row contactus ">
      <div className="col-md-6 ">
        <img
          src="/images/contactus.jpeg"
          alt="contactus"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md-6">
          <h2>Privacy Policy</h2>
          
          <h3>Information Collection and Use</h3>
          <p>
            We collect certain personal information, including but not limited to your name, email address, shipping address, and payment details, when you make a purchase or register for an account on our website. This information is used to process your orders, communicate with you about your purchases, and provide you with a personalized shopping experience.
          </p>
          <h3>Information Sharing</h3>
          <p>
            We may share your personal information with third-party service providers who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential. We may also disclose your information when we believe it is necessary to comply with the law, enforce our site policies, or protect our or others' rights, property, or safety.
          </p>
          <h3>Security</h3>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
          </p>
          
        
        </div>
      </div>
    </Layout>
  )
}

export default Policy