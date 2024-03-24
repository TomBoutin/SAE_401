

export default function Input({className, ...rest }) {
  return <input {...rest} className={`${className} py-2 bg-transparent text-white border-2 border-white rounded-lg pl-4 focus:outline-main`} />;
}

export function Input_View() {
  return (
    <div className="grid h-screen place-content-center bg-black font-openSans" >
      <Input className="mb-5"/>
    </div>
  );
}
