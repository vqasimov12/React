const FormInput = ({ label, name, type, placeHolder, handleInputChange }) => {

  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>

      <input onChange={(event)=>{
        handleInputChange(event.target.name,event.target.value)
      }}
        placeholder={placeHolder}
        className="border p-2"
        name={name}
        type={type}
      />
    </div>
  );
};

export default FormInput;
