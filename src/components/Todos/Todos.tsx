type TProps = {
  title: string,
  todos: any[],
  styled: boolean,
}

export const Todos: React.FC<TProps> = ({ title, todos, styled }) => {
  return (
    <label>
      <span>{title}</span>

      {todos && (
        <ul style={{listStyle: styled ? 'circle' : 'none'}}>
          {todos.map((todo) => (
            <li>{todo.name}</li>
          ))}
        </ul>
      )}
    </label>
  )
}