/* eslint-disable react/prop-types */
export default function Contactitem({
  imgUrl = "../../public/images/placeholder.jpg",
  name,
  email,
}) {
  return (
    <>
      <section className="contact">
        <div className="contact_image">
          <img src={imgUrl} width={128} height={128} alt={name} />
        </div>
        <div className="contact_body">
          <p className="contact_title">{name}</p>
          <p className="contact_username">{email}</p>
        </div>
        <button className="contact_delete">X</button>
      </section>
    </>
  );
}
