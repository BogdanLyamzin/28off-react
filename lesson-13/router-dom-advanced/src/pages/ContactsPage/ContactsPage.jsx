import PageContainer from "../../shared/containers/PageContainer";

const ContactsPage = ({title})=> {
    return (
        <PageContainer title={title}>
            <p>Email: bogdan@gmail.com</p>
            <p>Phone: +38 (067) 555-55-55</p>
        </PageContainer>
    )
}

export default ContactsPage