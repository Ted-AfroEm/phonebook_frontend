const Persons = ({ persons, deleteHandle }) => {
  return (
    <>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}{" "}
          <button onClick={() => deleteHandle(person)}>delete</button>
        </p>
      ))}
    </>
  );
};

export default Persons;
