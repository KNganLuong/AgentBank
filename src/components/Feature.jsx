/* eslint-disable no-undef */
import { homeContent } from '../datas/FeaturesData'

const FeatureContent = () => {
  return (
    <section className='features'>
      <h2 className='sr-only'>Features</h2>
      {homeContent.map(({ picture, title, description }) => (
        <div key={title} className='feature-item'>
          <img
            src={new URL(`../assets/img/${picture}`, import.meta.url)}
            alt='Chat Icon'
            className='feature-icon'
          ></img>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </section>
  )
}

export default FeatureContent
