const Events = () => {
    const handleMyEvent = (e)=> {
        console.log(e);
        console.log("ativou");
    };

    const renderSomething = (x) =>
    {
        if (x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>ou pode ser isso</h1>
        }
    }
    return(
        <>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou aqui")}>clique aqui também</button>
            </div>
            {renderSomething(false)}
            {renderSomething(true)}
        </>
    );
};

export default Events;