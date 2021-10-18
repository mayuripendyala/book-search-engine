import gql from 'graphql-tag';


export const GET_ME =gql`
{
    me {
        _id
        username
        email
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