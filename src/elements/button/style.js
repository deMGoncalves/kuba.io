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

  .button:hover {
    background-color: var(--color-master-lightest);
  }

  .button:active,
  .button:focus {
    background-color: var(--color-master-lighter);
  }


  .button[elevated] {
    box-shadow: var(--shadow-level-1);
  }

  .button[filled] {
    border-color: var(--color-pure-white);
    color: var(--color-master-darker);
  }

  .button[filled]:hover {
    background-color: var(--color-master-lightest);
    border-color: var(--color-master-lightest);
  }

  .button[filled]:active,
  .button[filled]:focus {
    background-color: var(--color-master-lighter);
    border-color: var(--color-master-lighter);
  }

  .button[pill] {
    border-radius: var(--border-radius-pill);
  }

  ${
    colors
      .map((color) => (`
        .button[${color}] {
          color: var(--color-pure-white);
        }
      `))
  }

  ${
    colors
      .map((color) => (`
        .button[${color}][filled] {
          color: var(--color-${color}-darker);
        }
      `))
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

  ${
    colors
      .map((color) => (`
        .button[${color}][filled] {
          background-color: var(--color-${color}-lighter);
          border-color: var(--color-${color}-lighter);
        }

        .button[${color}][filled]:hover {
          background-color: var(--color-${color}-light);
          border-color: var(--color-${color}-light);
        }

        .button[${color}][filled]:active,
        .button[${color}][filled]:focus {
          background-color: var(--color-${color});
          border-color: var(--color-${color});
        }
      `))
  }
`

export default button
