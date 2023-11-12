
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;

export const ADD_PHOTO = gql`

mutation addPhoto($photo: PhotoInput!) {
    addPhoto(photos: $photo) {
# mutation addPhoto($userId: ID!, $photoLink: String!, $deleteHash: String!) {
#    addPhoto(userId: $userId, photoLink: $photoLink, deleteHash: $deleteHash) {
      _id
      username
      email
      password
      photos {
        title
        photoId
        description
        photoLink
        deleteHash
        date
        comments {
          editPhoto
          user
          date
          text
          likes 
          dislikes
        }
      }
    }
  }
  `;

export const REMOVE_PHOTO = gql`
mutation removePhoto($photo: String!) {
  removePhoto(photos: $photo) {
    _id
    username
    email
    password
    photos {
        title
        photoId
        description
        imagelink
        date
        comments {
          editPhoto
          user
          date
          text
          likes 
          dislikes
      }
    }
  }
}
`;


export const ADD_COMMENT = gql`

mutation addComment($userId: ID!, $comment: commentInput!) {
  addComment(userId: $userId, comments: $comment) {
      _id
      username
      email
      password
      photos {
        title
        photoId
        description
        imagelink
        date
        comments {
          editPhoto
          user
          date
          text
          likes 
          dislikes
        }
      }
    }
  }
  `;


