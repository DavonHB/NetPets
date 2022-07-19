import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query users{
    users {
      _id
      username
    }
  }
`
export const QUERY_ME = gql`
query me{
    me {
      _id
      username
      friends{
        _id
        username
      }
      pets{
        _id
        nickname
        species
      }
    }
}`

export const QUERY_USER = gql`
query User($username: String!) {
  user(username: $username) {
    username
  }
}`

export const PET_QUERY = gql`
query pet{
    pet{
      _id
      nickname
      species
    }
}`