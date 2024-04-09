const Filter = ({ filter, setFilter }) => {
  const handleChange = (event) => {
    let value = event.target.value;
    setFilter(value);
  };
  return (
    <div>
      filter shown with:{" "}
      <input name="filter" value={filter} onChange={handleChange} />
    </div>
  );
};

export default Filter;
