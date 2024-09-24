import { dataInfo } from '@components/Info/constants'
import InfoCard from '@components/Info/InfoCard/InfoCard'
import MainLayout from '@components/Layout/Layout'
import styles from './styles.module.scss'
function Info() {
  const { container } = styles
  return (
    <MainLayout>
      <div className={container}>
        {dataInfo.map((item, index) => (
          <InfoCard
            content={item.title}
            des={item.description}
            src={item.src}
            key={`infocard_${index}`}
          />
        ))}
      </div>
    </MainLayout>
  )
}

export default Info
