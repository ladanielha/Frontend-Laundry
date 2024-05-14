import PropTypes from "prop-types";

const MessageValidator = ({ messages }) => {
  return (
    <>
      {messages?.map((message, index) => (
        <small key={index} className={"d-block text-danger "}>
          {message.msg}
        </small>
      ))}
    </>
  )
}

MessageValidator.propTypes = {
  messages: PropTypes.array
}

export default MessageValidator;
