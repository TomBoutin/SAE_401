

export default function Input({className, ...rest }) {
  return <input {...rest} className={`${className} py-2 bg-transparent text-white border-2 border-white rounded-lg pl-4 focus:outline-main`} />;
}

