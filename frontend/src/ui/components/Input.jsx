

export default function Input({className, ...rest }) {
  return <input {...rest} className={`${className} `} />;
}

export function Input_View() {
  return (
    <div className="grid h-screen place-content-center bg-black font-openSans" >
      <Input className="mb-5"/>
    </div>
  );
}
