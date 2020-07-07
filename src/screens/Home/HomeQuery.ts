import gql from 'graphql-tag';

/**
 * Get users query
 */
export const GET_USERS = gql`
  query getUser {
    users {
      username
      _id
    }
  }
`;
