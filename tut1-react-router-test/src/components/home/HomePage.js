import React from 'react'

const ContactCard = (props) => (
 <div data-reactroot="">
     <h1>Contacts</h1>
     <ul>
      { props.contacts.map(({name, email}) => {
        return <li><h2>{name}</h2>
            <a href="mailto:{email}">{email}</a>
        </li>
      }) }
    </ul>
</div>
);

class HomePage extends React.Component {
    render(){
        var obj =[{name: "tom", email: "tom@ymail.com"},{ name: "Jerry", email: "jerry@gmail.com"}]
        return (
            <div >Home 

                 <ContactCard contacts={obj}/>
            </div>
        )
    }
}
export default HomePage

