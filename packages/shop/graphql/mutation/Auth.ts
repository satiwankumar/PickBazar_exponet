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

export const FORGOT_CODE = gql`
    mutation forgotCode($code: String){
      forgotCode(code:$code ) {
        status
        message
  }
}`

export const RESET_PASSWORD = gql`
    mutation resetPassword($code:String,$password:String){
      resetPassword(code:$code,password:$password ) {
        status
        message
  }
}`


export const LOGOUT = gql`
mutation logout{
    logout
}
`




// loginUser(email: "hosting2k17@gmail.com", password: "12345678") {