import color from './color'
import styled from '@standard/styled'

/**
 * A reusable Button component with customizable styles.
 *
 * @param {Object} props - The props object for the Button component.
 * @returns {Component} A styled button component.
 */
const button = styled.button`
  align-items: center;
  background-color: ${color};
  border: none;
  border-radius: var(--border-radius-sm);
  color: var(--color-pure-white);
  display: flex;
  font-family: var(--font-family-base);
  font-size: var(--font-size-xxs);
  font-weight: var(--font-weight-medium);
  gap: var(--spacing_inset-nano);
  height: 40px;
  justify-content: center;
  letter-spacing: .618px;
  padding: 0 var(--spacing_inset-sm);
`

export default button
