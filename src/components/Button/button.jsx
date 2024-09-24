import styles from './styles.module.scss'
function button({ content }) {
  const { btn } = styles
  return <button className={btn}>{content}</button>
}

export default button
