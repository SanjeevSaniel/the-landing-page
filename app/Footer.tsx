import React from 'react';

const Footer = () => {
  return (
    <section className='bg-amber-200 px-20 py-5 font-medium'>
      <div>&copy; {new Date().getFullYear()}, SK. Connecting is better.</div>
    </section>
  );
};

export default Footer;
