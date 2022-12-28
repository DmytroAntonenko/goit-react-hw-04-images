import ProtoTypes from 'prop-types';
const Button = ({ onClick }) => (
  <button type="button" className="Button" onClick={onClick}>
    <span className="">Load more</span>
  </button>
);

Button.propTypes = {
  onClick: ProtoTypes.func.isRequired,
};
export default Button;