import css from '@standard/css'

const style = css`
  .button {
    align-items: center;
    background-color: var(--color-master);
    border: none;
    border-radius: var(--border-radius-pill);
    color: var(--color-master-lightest);
    display: flex;
    gap: var(--spacing_inset-nano);
    height: 40px;
    justify-content: center;
    padding: 0 var(--spacing_inset-sm);
  }

  .button[primary] {
    background-color: var(--color-primary);
  }

  .button[primary]:hover {
    background-color: var(--color-primary-light);
  }

  .button[primary]:active,
  .button[primary]:focus {
    background-color: var(--color-primary-dark);
  }
`

export default style
