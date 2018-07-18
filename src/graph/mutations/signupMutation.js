import gql from "graphql-tag";

export const SIGNUP_MUTATION = gql`
    mutation signup(
      $firstname: String
      $lastname: String
      $email: String
      $password: String
      $phone: String
      $address: String
      $bvn:String
      $account_number:String
      ) {
          signup(
            firstname: $firstname
            lastname: $lastname
            password: $password
            email:$email
            phone: $phone
            address: $address
            bvn:$bvn
            account_number:$account_number
          ) {
            message,status, code
          }
        }
`;

export const userQuery = gql `query users {
  users{
    email
  }
}`


