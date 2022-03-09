// import { Component, createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles, SubmitHandler } from '@unform/core';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { useRef } from 'react';
import { FoodProps } from '../../pages/Dashboard';

type ModalEditFoodProps = {
  isOpen: boolean,
  setIsOpen: () => void, 
  handleUpdateFood: (data: FoodProps) => Promise<void>,
  editingFood: FoodProps,
}

export const ModalEditFood = ({ isOpen, setIsOpen, handleUpdateFood, editingFood }: ModalEditFoodProps) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FoodProps> = async (data) => {
    await handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui"/>

        <Input name="name" placeholder="Ex: Moda Italiana"/>
        <Input name="price" placeholder="Ex: 19.90"/>

        <Input name="description" placeholder="Descrição"/>
        <Input name="id" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
};



// CÓDIGO EM JSX ANTES DA MIGRAÇÃO PARA TSX 

// class ModalEditFood extends Component {
//   constructor(props) {
//     super(props);

//     this.formRef = createRef()
//   }

//   handleSubmit = async (data) => {
//     const { setIsOpen, handleUpdateFood } = this.props;

//     handleUpdateFood(data);
//     setIsOpen();
//   };

//   render() {
//     const { isOpen, setIsOpen, editingFood } = this.props;

//     return (
//       <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
//         <Form ref={this.formRef} onSubmit={this.handleSubmit} initialData={editingFood}>
//           <h1>Editar Prato</h1>
//           <Input name="image" placeholder="Cole o link aqui" />

//           <Input name="name" placeholder="Ex: Moda Italiana" />
//           <Input name="price" placeholder="Ex: 19.90" />

//           <Input name="description" placeholder="Descrição" />

//           <button type="submit" data-testid="edit-food-button">
//             <div className="text">Editar Prato</div>
//             <div className="icon">
//               <FiCheckSquare size={24} />
//             </div>
//           </button>
//         </Form>
//       </Modal>
//     );
//   }
// };

// export default ModalEditFood;