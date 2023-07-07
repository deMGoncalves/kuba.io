import css from '@standard/css'

/**
 * CSS-in-JS tokens for shadow values.
 */
const style = css`
  :root {
    --shadow-level-0: none;
    --shadow-level-1: 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%), 0 1px 3px 0 rgb(0 0 0 / 20%);
    --shadow-level-2: 0 3px 4px 0 rgb(0 0 0 / 14%), 0 3px 3px -2px rgb(0 0 0 / 12%), 0 1px 8px 0 rgb(0 0 0 / 20%);
    --shadow-level-3: 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%), 0 3px 5px -1px rgb(0 0 0 / 20%);
    --shadow-level-4: 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%), 0 5px 5px -3px rgb(0 0 0 / 20%);
    --shadow-level-5: 0 12px 17px 2px rgb(0 0 0 / 14%), 0 5px 22px 4px rgb(0 0 0 / 12%), 0 7px 8px -4px rgb(0 0 0 / 20%);
  }
`

export default style
