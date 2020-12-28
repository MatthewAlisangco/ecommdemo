//
//
// const itemsList = ({ todos }) => (
//     <ul className="todo-list">
//         {todos && todos.length
//             ? todos.map((todo, index) => {
//                 return <Todo key={`todo-${todo.id}`} todo={todo} />;
//             })
//             : "No todos, yay!"}
//     </ul>
// );
//
//
// const mapStateToProps = state => {
//     const { visibilityFilter } = state;
//     const todos = getTodosByVisibilityFilter(state, visibilityFilter);
//     return { todos };
//     //   const allTodos = getTodos(state);
//     //   return {
//     //     todos:
//     //       visibilityFilter === VISIBILITY_FILTERS.ALL
//     //         ? allTodos
//     //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
//     //           ? allTodos.filter(todo => todo.completed)
//     //           : allTodos.filter(todo => !todo.completed)
//     //   };
// };
// // export default TodoList;
// export default connect(mapStateToProps)(itemsList);