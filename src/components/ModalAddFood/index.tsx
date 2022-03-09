// import { Component, createRef } from 'react';
import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles, SubmitHandler } from '@unform/core';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { FoodProps } from '../../pages/Dashboard';
import { MdAttachMoney } from 'react-icons/md';
import {  } from 'react-icons';

type ModalAddFoodProps = {
  isOpen: boolean, 
  setIsOpen: () => void, 
  handleAddFood: (food: FoodProps) => Promise<void>,
}

export const  ModalAddFood = ({ isOpen, setIsOpen, handleAddFood }: ModalAddFoodProps) => {
  const formRef = useRef<FormHandles>(null); 

  const handleSubmit: SubmitHandler<FoodProps>  = async (food) => {
    await handleAddFood(food);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />
        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" icon={({size}) => <MdAttachMoney size={size}/>}/>
        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button" >
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};


// CÓDIGO EM JSX ANTES DA MIGRAÇÃO PARA TSX 


// class ModalAddFood extends Component {
//   constructor(props) {
//     super(props);

//     this.formRef = createRef();
//   }

//   handleSubmit = async data => {
//     const { setIsOpen, handleAddFood } = this.props;

//     handleAddFood(data);
//     setIsOpen();
//   };

//   render() {
//     const { isOpen, setIsOpen } = this.props;

//     return (
//       <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
//         <Form ref={this.formRef} onSubmit={this.handleSubmit}>
//           <h1>Novo Prato</h1>
//           <Input name="image" placeholder="Cole o link aqui" />

//           <Input name="name" placeholder="Ex: Moda Italiana" />
//           <Input name="price" placeholder="Ex: 19.90" />

//           <Input name="description" placeholder="Descrição" />
//           <button type="submit" data-testid="add-food-button">
//             <p className="text">Adicionar Prato</p>
//             <div className="icon">
//               <FiCheckSquare size={24} />
//             </div>
//           </button>
//         </Form>
//       </Modal>
//     );
//   }
// };

// export default ModalAddFood;
