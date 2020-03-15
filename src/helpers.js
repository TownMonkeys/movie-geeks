export const ConditionalWrapper = (props) => {
  const { condition, children, wrapper } = props;

  return (
    condition ?
    wrapper(children) :
    children
  )
<<<<<<< HEAD
} 
=======
}
>>>>>>> 1381882650cf298c3d6f2a2070fe6466b9f2f953
