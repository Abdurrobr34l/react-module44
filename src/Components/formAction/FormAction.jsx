import React from 'react';

const FormAction = () => {

  const handleFormAction = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  }

  return (
    <div>
      <h2 className="title">Form Action</h2>

      <form action={handleFormAction} className="text-center">
        <input type="text" name="name" placeholder='Your Name' />
        <br />
        <input type="email" name="email" placeholder='Your email' />
        <br />
        <button type='submit'>Submit</button>
      </form>

      <p className='keyNote'>
        Form er action attribute ta ekane use kora hoise to get input value.
      </p>
    </div>
  );
};

export default FormAction;