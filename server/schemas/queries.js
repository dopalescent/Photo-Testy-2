import { gql } from '@apollo/client';


export const GET_ME = gql`
query me {
  me {
    _id
    username
    email
    password
    books {
      title
      bookId
      authors
      description
      image
      link
    }
  }
}
`;