interface EmailTemplateProps {
  firstName: string
  lastName: string
  message: string
  email: string
}

const EmailTemplate = ({ message, email }: EmailTemplateProps) => {
  return (
    <div>
      <p>{message}</p>
      <h4>{email}</h4>
    </div>
  )
}

export default EmailTemplate
