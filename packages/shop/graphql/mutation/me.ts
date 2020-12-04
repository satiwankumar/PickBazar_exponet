import gql from 'graphql-tag';


export const UPDATE_PROFILE = gql`
  mutation profileUpdate($first_name: String!,$last_name:String!,$email:String!,$file: Upload) {
    profileUpdate(first_name: $first_name,last_name:$last_name,email:$email,file:$file)
  }
`;
