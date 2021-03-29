var container = document.getElementById("app")
// var titulo = document.createElement("h1")
// titulo.innerHTML = "Título inserido por JavaScripto"
// container.appendChild(titulo)

//props = propriedades

function Contador(props) {

    const [numero, setNumero]= React.useState(0);

    function somar(){
        setNumero(numero + 1)
        console.log("Somei e ficou: "+ numero)
    }

    function subtrair(){
        setNumero(numero - 1)
        console.log("Subtrai e ficou: "+ numero)
    }

    return (
        <React.Fragment>
            <h2>{props.titulo}</h2>
            <h2>{numero}</h2>
            <button onClick={somar} >+</button>
            <button onClick={subtrair} >-</button>
        </React.Fragment>
    );
}

function App(){

    return (
        <React.Fragment>
        <h1>Vote em quem você que eliminar: </h1>
        <Contador titulo = "Karol Konka" />
        <Contador titulo = "Sarah" />
        <Contador titulo = "Juliete" />
        </React.Fragment>
    );
}

// ReactDOM.render(App(), container);
ReactDOM.render(React.createElement(App,null,null), container);