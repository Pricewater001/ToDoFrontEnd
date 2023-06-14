

import { gql, useMutation } from '@apollo/client';

const register = gql` 
mutation Register($registerInput: RegisterInput) {
    register(registerInput: $registerInput) {
      id
      username
      email
      createdAt
      updatedAt
      token
    }
  }
`;
module.exports = {register}