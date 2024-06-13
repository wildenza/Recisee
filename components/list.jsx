import PropTypes from 'prop-types'

function List(props){
    return(
        <div>
            <ul>
                <li>
                    <p>Key: {props.name}</p>
                    <p>Key2: {props.value}</p>
                </li>
            </ul>
        </div>



    );



}
List.defaultProps ={
    name:'Default',
    value:0

}
export default List