import css from '@kuba/css'

/**
 * The reset CSS styles.
 *
 * The styles include resetting the box-sizing to border-box, setting margins and paddings to 0 for all elements,
 * and setting cursor to pointer and user-select to none for anchor links and buttons.
 */
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
