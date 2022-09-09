

const ErrorComponent = (props:any)=>{
    // console.log(props,"propsss!!")
    const {text, retry} = props
    return (
        <>
     {text}
     <button className="border border-red-300 mx-6 p-3" onClick={retry}>try again</button>

        </>
    )
}

export default ErrorComponent