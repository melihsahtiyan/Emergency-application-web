export default function SelectBox(props){
    return (
        <div className="input-group">
            <label className="input-group-text"
                   htmlFor={props.id}>{props.label}</label>
            <select id={props.id}
                    type="text"
                    name={props.name}
                    value={props.value}
                    onChange={props.handleChange}
                    onClick={props.handleClick}
                    className="form-control">
                {
                    props.options.map( (fullname,id) => (
                            <option key={id}>{fullname}</option>
                        )
                    )
                }
            </select>
        </div>
    );
}