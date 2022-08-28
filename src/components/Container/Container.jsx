import React from 'react'
import PropTypes from 'prop-types'
import { clsx } from 'clsx'
import styles from './style.module.scss'

const Container = ({ children, className, ...props }) => {
  return (
    <div className={clsx(styles.container, className)} {...props}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node
}
export default Container
