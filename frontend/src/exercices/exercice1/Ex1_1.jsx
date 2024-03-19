function Button({ children, ...restProps }) {
  return (
    <button
    className="rounded-lg bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-500 active:bg-emerald-700"
      {...restProps}
    >
      {children}
    </button>
  );
}

export default function Ex1() {
  return (
    <div className="grid h-screen place-content-center">
      <Button className="bg-red-500">Click</Button>
    </div>
  );
}
