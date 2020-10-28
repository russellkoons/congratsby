import React from 'react';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';

export default function OrderPage() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
  });
  return (
    <>
      <SEO title="Order a Pizza!" />
      <form>
        <fieldset>
          <legend>Your info</legend>
          <label htmlFor="name">
            Name
            <input
              type="text"
              htmlFor="name"
              id="name"
              value={values.name}
              onChange={updateValue}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              htmlFor="email"
              id="email"
              value={values.email}
              onChange={updateValue}
            />
          </label>
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
