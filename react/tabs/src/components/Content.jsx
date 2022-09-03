import React from 'react'
import styles from '../css/Content.module.css'

const Content = props => {
  return (
    <div className={ styles.contentBox }>{ props.content }</div>
  )
}

export default Content