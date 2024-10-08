export default function Input({ type, name, placeholder }) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="contact_input"
        required=""
      />
    </>
  );
}
