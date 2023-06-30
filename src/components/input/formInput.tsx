export const formInput = () => {
  return (
    <input
      className={emailError ? "error email" : "email"}
      onChange={({ target }) => {
        setEmail(target.value);
      }}
      placeholder="Введите email"
      onKeyUp={({ key }) => {
        key === "Enter" && handleClick();
      }}
    />
  );
};
