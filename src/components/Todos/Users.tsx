type TProps = {
  title: string,
  styled: boolean,
  users?: any[],
}

export const Users: React.FC<TProps> = ({ title, users = [], styled }) => {
  return (
    <label>
      <span>{title}</span>

      {users && (
        <ul style={{listStyle: styled ? 'circle' : 'none'}}>
          {users.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      )}
    </label>
  )
}