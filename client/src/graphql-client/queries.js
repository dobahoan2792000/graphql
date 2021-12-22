import {gql} from '@apollo/client'

export const getBooks = gql`
    query getBooksQuery {
        books{
            name 
            id
        }
    }
`

