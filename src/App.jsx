import './App.css'
//import Card from './components/Card/Card'
import CardList from './components/CardList/CardList'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <Header/>
      <div className='card_arrea'>
        <CardList/>
      </div>
    </>
  )
}

export default App
