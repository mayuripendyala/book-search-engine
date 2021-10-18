import gql from 'graphql-tag';

export const LOGIN_USER =gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            name
        }
    }
}
`;

export const ADD_USER =gql`
    mutation addUser($username: String!,$password: String!,$email: String!) {
        addUser (username: $username, password: $password, email: $email) {
            token
            user {
                username
                _id
                email
            }

        }

    }
`;

export const SAVE_BOOKS = gql`
    mutation saveBook($input: SavedBookInput){
        saveBook (input: $input) {
            username
            _id
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!){
        removeBook (bookId: $bookId) {
            _id
            username
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;