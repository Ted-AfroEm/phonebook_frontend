const PersonForm = ({
  addName,
  newName,
  newNumber,
  setNewName,
  setNewNumber,
}) => {
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "name") setNewName(value);
    else setNewNumber(value);
  };

  return (
    <form onSubmit={addName}>
      <div>
        name: <input name="name" value={newName} onChange={handleChange} />
      </div>
      <div>
        number:{" "}
        <input name="number" value={newNumber} onChange={handleChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default PersonForm;
