function ProfileCard({ name,role,city = "Jaffna"}) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{city}</p>
    </div>
  );
}

export default ProfileCard;