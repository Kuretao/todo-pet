import './sidebar.scss'

function Sidebar(props) {
    return(
        <aside className={props.sidebar ? "sidebar" : "sidebar sidebar--close"} style={props.sidebar ? {transform: 'translateX(0)'} : {transform: 'translateX(-75%)'}}>
            <ul>
                <li>adresssssssssssssssssssssssssssssssssssss</li>
            </ul>
        </aside>
    )
}

export default Sidebar;