const TemplateExpressions = () => {
    const name = "Pedro"
    const data = {
        age: 31,
        job: "Programmer"
    }
    return (
        <>
            <h1> olá {name}, tudo bem?</h1>
            você atua como: {data.job}
            <p>{4+ 4}</p>
        </>
    )


}

export default TemplateExpressions