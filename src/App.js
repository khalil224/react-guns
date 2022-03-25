
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

function App() {

  const [guns, setGuns] = useState([]);
  const [carts, setCart] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);
  console.log(carts)

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleAddToCart = (gun) => {
    const newCart = [...carts, gun]

    setCart(newCart)
  }

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])

  return (
    <div className="App">
      <Navbar carts={carts} openModal={openModal}></Navbar>


      <div className='cart-grid'>
        {
          guns.map(gun => (
            <Cart key={gun.id} gun={gun} handleAddToCart={handleAddToCart} ></Cart>

          ))
        }

      </div>
      <Modal
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <button onClick={closeModal}>Close</button>
        <div>
          {
            carts.map((item) => (<h1 key={item.id}>{item.name}</h1>))
          }
        </div>
      </Modal>

    </div>
  );
}

export default App;
