import { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import * as HeroActionCreators from '../../actions/heroCreators';
import FormData from './FormData';

const HeroForm = props => {
  const [powerName, setPowerName] = useState([]);
  const [imagePath, setImagePath] = useState([]);

  const { createHeroAction } = props;
  
  const valuePower = useCallback(e => {  //not workers
    setPowerName(e.target.value);
  }, []);
  
  const valueImage = useCallback(e => {  //not workers
    setImagePath(e.target.value);
  }, []);

  const onSubmit = (values, formikBag) => {
    createHeroAction(values);
    formikBag.resetForm();
  };

  return (
    <FormData
      onSubmit={onSubmit}
      powerName={powerName}
      valuePower={valuePower}
      imagePath={imagePath}
      valueImage={valueImage}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  createHeroAction: values =>
    dispatch(HeroActionCreators.createHeroRequest(values)),
});

export default connect(null, mapDispatchToProps)(HeroForm);
