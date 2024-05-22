import { connect } from 'react-redux';
import * as actions  from '../actions';
import Product from '../components/product'

const mapStateToProps = state => {
  return {
    selectedCategory: state.selectedCategory,
    cart:state.cart
  };
};

export default connect(mapStateToProps, actions)(Product);
