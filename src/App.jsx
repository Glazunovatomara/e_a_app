import './App.css'
import CardInfoList from './components/CardInfoList/CardInfoList'
//import Card from './components/Card/Card'
import CardList from './components/CardList/CardList'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <Header/>
      <div className='card_arrea'>
        <CardList/>
      </div>
      <Form/>
      <CardInfoList/>
    </>
  )
}

export default App
