import './info.css'
import styles from './info.module.css'
// import styles from './info.module.css'это способ экспорта модуля css

function Info(){
    
    
    return (
        <div className={styles.info}>
        <h1>Hello from the Info component</h1>
        <button className='my-button'>Click me</button>
        </div>
    )
}
export default Info