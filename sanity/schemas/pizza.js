import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  // Computer name
  name: 'pizza',
  // Visible title
  title: 'pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
  ],
};
