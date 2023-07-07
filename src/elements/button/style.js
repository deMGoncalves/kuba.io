import colors from './colors'
import css from '@standard/css'

const button = css`
  .button {
    align-items: center;
    background-color: var(--color-pure-white);
    border: 1px solid var(--color-master-light);
    border-radius: var(--border-radius-sm);
    color: var(--color-pure-black);
    display: flex;
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-medium);
    gap: var(--spacing_inset-nano);
    height: 40px;
    justify-content: center;
    letter-spacing: .618px;
    padding: 0 var(--spacing_inset-sm);
  }

  .button[pill] {
    border-radius: var(--border-radius-pill);
  }

  .button[elevated] {
    box-shadow: var(--shadow-level-1);
  }

  ${
    colors
      .map((color) => (`
        .button[${color}] {
          color: var(--color-pure-white);
        }
      `))
  }

  .button:hover {
    background-color: var(--color-master-lightest);
  }

  .button:active,
  .button:focus {
    background-color: var(--color-master-lighter);
  }

  ${
    colors
      .map((color) => (`
        .button[${color}] {
          background-color: var(--color-${color});
          border-color: var(--color-${color});
        }

        .button[${color}]:hover {
          background-color: var(--color-${color}-light);
          border-color: var(--color-${color}-light);
        }

        .button[${color}]:active,
        .button[${color}]:focus {
          background-color: var(--color-${color}-dark);
          border-color: var(--color-${color}-dark);
        }
      `))
  }
`

export default button
