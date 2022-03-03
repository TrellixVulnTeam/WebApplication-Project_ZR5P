import React from 'react'
import SubcribeForm from './form/SubcribeForm'
import "./Subcribe.css";
/* https://imquocbao.github.io/Rubix-Fashion/img/banner/bg-newsleter-fashion-1.jpg */
function Subcribe() {
  return (
    <>
      <div className="subcribe-container">
        <div className="subcribe-form">
          <div className="subcribe-form-item">
            <h2>Subcribe To Our Newsletter</h2>
            <p>
              Sign up for the weekly newsletter and build better ecommerce
              stores.
            </p>
            <SubcribeForm />
            <p>We respect your privacy, so we never share your info</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subcribe