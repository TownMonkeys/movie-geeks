export const ConditionalWrapper = (props) => {
  const { condition, children, wrapper } = props;

  return (
    condition ?
    wrapper(children) :
    children
  )
}