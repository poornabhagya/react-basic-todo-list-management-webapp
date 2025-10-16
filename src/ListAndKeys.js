const todos = ['learn react', 'learn angular', 'learn vue'];

function ListAndKeys() { //List and Keys practice
  return (
    <div>
    <h3>ToDo List</h3>
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
    </div>
  );
}
export default ListAndKeys;