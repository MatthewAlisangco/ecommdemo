
import React, { useRef, useEffect, useCallback } from 'react';
import connect from "react-redux/es/connect/connect";

// import { useSpring, animated } from 'react-spring';
// import styled from 'styled-components';
// import { MdClose } from 'react-icons/md';
//
// const Background = styled.div`
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.8);
//   position: fixed;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
//
// const ModalWrapper = styled.div`
//   width: 800px;
//   height: 500px;
//   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
//   background: #fff;
//   color: #000;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   position: relative;
//   z-index: 10;
//   border-radius: 10px;
// `;
//
// const ModalImg = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 10px 0 0 10px;
//   background: #000;
// `;
//
// const ModalContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   line-height: 1.8;
//   color: #141414;
//   p {
//     margin-bottom: 1rem;
//   }
//   button {
//     padding: 10px 24px;
//     background: #141414;
//     color: #fff;
//     border: none;
//   }
// `;

class ItemsModal extends React.Component {


    addCart(){
        console.log("added" + this.props.modalitem.Title)
        // this.props.closeItem()
    }
    render() {
        const showHideClassName = this.props.modaltoggle ? "modal display-block" : "modal display-none";

        if(!this.props.modalitem) {
            return (<div className={"modal display-none"}>ss </div>
)
        }




        return (
                // const showHideClassName = show ? "modal display-block" : "modal display-none";
            <div className={showHideClassName}>
            <div className="modal"  onClick={() =>this.props.closeItem()}>
                <section className="modal-main" onClick={(e) => {e.stopPropagation();
                }}>


                    <div>
                        <div className="card-text">{this.props.modalitem.Brand} </div>
                        <div className="card-text">{this.props.modalitem.Style} </div>
                        <div className="card-text">{this.props.modalitem.Title} </div>
                        <div className="card-text"> ${this.props.modalitem.Price} </div>
                    </div>

                    <button type="button" onClick={() =>this.props.closeItem()}>
                        Close
                    </button>

                    <button type="button" onClick={() => this.addCart()}>
                        Add Cart
                    </button>
                </section>
            </div>
        </div>)
    }

}

const mapStateToProps = state => {
    return  {
        modalitem : state.itemmodal.modalitem,
        modaltoggle : state.itemmodal.modaltoggle
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeItem: () => dispatch({type: 'CLOSE_CURRENT_ITEM', modaltoggle: null})
    };
};

export default connect(mapStateToProps,mapDispatchToProps) (ItemsModal);

// export default ItemsModal;
// const ItemModal = ({ handleClose, show, children, keyz, item}) => {
//     const showHideClassName = show ? "modal display-block" : "modal display-none";
//     // const content = itemb.map((item) =>
//     //     <div key={keyz}>
//     //         <div>
//     //             <div className="card-text" key={item.id}> </div>
//     //             <div className="card-text" >{item.Brand} </div>
//     //             <div className="card-text" >{item.Style} </div>
//     //             <div className="card-text" >{item.Title} </div>
//     //             <div className="card-text" > ${item.Price} </div>
//     //         </div>
//     //     </div>
//     // );
//     console.log("itemmodal" , item , "key", keyz)
//     return (
//
//         <div className={showHideClassName}>
//             <section className="modal-main">
//                 <div key={keyz}>
//                     <div className="card-text" >{item.Brand} </div>
//                     <div className="card-text" >{item.Style} </div>
//                     <div className="card-text" >{item.Title} </div>
//                     <div className="card-text" > ${item.Price} </div>
//                 </div>
//
//                 {/*{children}*/}
//                 <button type="button" onClick={handleClose}>
//                     Close
//                 </button>
//             </section>
//         </div>
//     );
// };



//
// const ItemModal = ({ showModal, setShowModal }) => {
//     const modalRef = useRef();
//
//     // const animation = useSpring({
//     //     config: {
//     //         duration: 250
//     //     },
//     //     opacity: showModal ? 1 : 0,
//     //     transform: showModal ? `translateY(0%)` : `translateY(-100%)`
//     // });
//
//     const closeModal = e => {
//         if (modalRef.current === e.target) {
//             setShowModal(false);
//         }
//     };
//
//     const keyPress = useCallback(
//         e => {
//             if (e.key === 'Escape' && showModal) {
//                 setShowModal(false);
//                 console.log('I pressed');
//             }
//         },
//         [setShowModal, showModal]
//     );
//
//     useEffect(
//         () => {
//             document.addEventListener('keydown', keyPress);
//             return () => document.removeEventListener('keydown', keyPress);
//         },
//         [keyPress]
//     );
//
//     return (
//         <>
//             {showModal ? (
//                 <button onClick={closeModal} ref={modalRef}>
//                     {/*<animated.div style={animation}>*/}
//                     {/*    <ModalWrapper showModal={showModal}>*/}
//                     {/*        <ModalImg src={require('./modal.jpg')} alt='camera' />*/}
//                     {/*        <ModalContent>*/}
//                     {/*            <h1>Are you ready?</h1>*/}
//                     {/*            <p>Get exclusive access to our next launch.</p>*/}
//                     {/*            <button>Join Now</button>*/}
//                     {/*        </ModalContent>*/}
//                     {/*        <CloseModalButton*/}
//                     {/*            aria-label='Close modal'*/}
//                     {/*            onClick={() => setShowModal(prev => !prev)}*/}
//                     {/*        />*/}
//                     {/*    </ModalWrapper>*/}
//                     {/*</animated.div>*/}
//                 </button>
//             ) : null}
//         </>
//     );
// };

