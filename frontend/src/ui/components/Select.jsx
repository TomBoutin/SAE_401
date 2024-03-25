export default function Select({ categories,className, ...rest }) {
  return (
    <select
      {...rest}
      className={`${className} rounded-lg border-transparent bg-main text-white hover:bg-red-400 hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-white text-base py-2 px-2`}
    >
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}
