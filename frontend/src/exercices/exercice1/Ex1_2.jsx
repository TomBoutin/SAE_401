function Button({ children, ...restProps }) {
  let color = "facebook"
  return (
    <button
      className={`rounded-lg bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-500 active:bg-emerald-700 bg-${color}`}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default function Ex1bis() {
  return (
    <div className="grid h-screen place-content-center">
      <Button style={{padding:"10rem"}}>Click</Button>
    </div>
  );
}
