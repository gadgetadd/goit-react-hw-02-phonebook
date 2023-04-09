import { ContactItem } from "components/ContactItem/ContactItem"

export const ContactList = ({ contacts, onDelete }) => {
    return(<ul>
        {contacts.map(({id,name,number}) => <ContactItem key={id} name={name} number={number} onDelete={()=>{onDelete(id)}}/> )}
        </ul>)
}