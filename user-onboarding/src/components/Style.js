import styled from "styled-components";
import { Field } from "formik";

export const StyledLabel = styled.label`
  text-align: center;
  justify-content: center;
  width: 100px;
  margin: 10px;
  border-radius: 10px;
  font-weight: bold;
  background-color: lightgreen;
`;

export const StyledField = styled(Field)`
  height: 25px;
  border: none;
  border-radius: 10px;
  padding-top: 5px;
`;

export const StyledDropDown = styled(Field)`
  height: 25px;
  border: none;
  border-radius: 10px;
  padding-top: 5px;
`;

export const FormStyle = styled.div`
  margin: 0 auto;
  justify-content: center;
  width: 200px;
  margin-top: 25px;
  background-color: #e63;
  border-radius: 10px;
  border: 1px solid lightslategray;
`;

// .form {
//   display: flex;
//   flex-flow: column nowrap;
//   margin: 0 auto;
//   padding-top: 45px;
//   margin-bottom: 5px;
//   border-radius: 10px;
// }

// .input {
//   margin-top: 5px;
//

// .checkbox-container {
//   margin: 0 auto;
// }

// button {
//   margin: 10px auto;
//   font-weight: bold;
//   background-color: lightslategrey;
//   color: #eee;
//   border: none;
//   border-radius: 10px;
//   width: 150px;
//   height: 30px;
//   box-shadow: #222;
// }

// button:hover {
//   color: #eee;
//   background-color: #222;
// }
