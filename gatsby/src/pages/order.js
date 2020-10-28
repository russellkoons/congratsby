import React, { useState } from 'react';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';

export default function OrderPage() {
  const { values, updateValues } = useForm({
    name: '',
    email: '',
  });
  return (
    <>
      <SEO title="Order a Pizza!" />
      <form>
        <fieldset>
          <legend>Your info</legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            htmlFor="name"
            value={values.name}
            onChange={updateValues}
          />
          <label htmlFor="email">Email</label>
          <input type="email" htmlFor="email" />
        </fieldset>
        <fieldset>
          <legend>Menu</legend>
        </fieldset>
        <fieldset>
          <legend>Order</legend>
        </fieldset>
      </form>
    </>
  );
}
