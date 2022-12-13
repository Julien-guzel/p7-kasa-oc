const Host = ({host}) => {
    return (
            <>
                <div className="host">
                    <h3 className="host__name">{host.name}</h3>
                    <img className="host__image"src={host.picture} alt={host.name} />
                </div>
            </>  
 
    );
};

export default Host;