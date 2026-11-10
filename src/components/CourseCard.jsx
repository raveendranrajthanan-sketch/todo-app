function CourseCard({title,hours,level = "Beginner"}) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>
        {hours} hours · {level}
      </p>
    </article>
  );
}

export default CourseCard;