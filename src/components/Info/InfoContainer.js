import {connect} from 'react-redux';
import Info from './Info';

const mapStateToProps = state => ({
  title: state.lists[0].title,
  image: state.lists[0].image,
});

export default connect(mapStateToProps)(Info);