function Titulo(props) {
    
      return (
      <div className="bg-dark text-light p-3">
        <h1 className="display-4">
          {props.greeting}
        </h1>
        <h2 className="h4 text-secondary">
          {props.subtitulo}
        </h2> 
      </div>
    )
  }

  export default Titulo 