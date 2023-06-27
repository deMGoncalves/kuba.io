import css from '@kuba/css'

const style = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a,
  button {
    cursor: pointer;
    user-select: none;
  }
`

export default style
