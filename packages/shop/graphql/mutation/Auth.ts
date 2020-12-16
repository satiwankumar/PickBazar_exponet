import gql from 'graphql-tag';

export const LOGIN = gql`
 mutation login($input: LoginInput){
  login(input: $input )
  {
  token
  status
  message
  }
}`

export const REGISTER = gql`
    mutation register($input: RegisterInput){
  register(input:$input ) {
    token
    message
    status
  }
}`




export const LOGOUT = gql`
mutation logout{
    logout
}
`

export const FORGOT = gql`  
mutation forgotPassword($input: ForgotPasswordInput!){
fogotPassword(input : $input ) {
  status
  message
}
}
`


// loginUser(email: "hosting2k17@gmail.com", password: "12345678") {