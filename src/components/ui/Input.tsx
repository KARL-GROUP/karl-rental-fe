
interface Props{
  name?: string,
  value?: any,
  inputLabel?: string,
  onChange?: any,
  placeholder ?: string,
  className ?: string,
  type?: string,
  rows ?: number,
  children ?: string
}

export const Input = ({name, value, inputLabel, onChange, className, type}: Props) => {
  return ( <>
  <div className="relative z-0">
    <input type={type} id="floating_standard" name={name} placeholder=" " onChange={onChange} value={value} className={` ${className} block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer text-gray-500`}/>
    <label htmlFor="floating_standard" className="absolute text-lg text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{inputLabel}</label>
</div>
  </> );
}
 
export const AdminInput = ({name, value, inputLabel, onChange, className, type}: Props) => {
  return(
    <>
    <input placeholder={inputLabel} name={name} value={value} onChange={onChange} type={type} className={`${className} border border-gray-300 py-3 px-5 outline-none rounded`}/>
    </>
  )
}

export const TextArea = ({rows, name, value, inputLabel, onChange, className, children}: Props) => {
  return(
    <>
    <textarea rows={rows} placeholder={inputLabel} name={name}  value={value} onChange={onChange}  className={`${className} border border-gray-300 py-3 px-5 outline-none rounded`} />
    </>
  )
}