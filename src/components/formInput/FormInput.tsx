import "./formInput.css";

export const FormInput = (props: any) => {
  return (
      <>
      <input className="formInput" type="text" placeholder={props.placeholder} />
      </>
  );
};
