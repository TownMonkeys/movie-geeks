import React, { memo,createRef } from 'react';
import settingImage from '../../../images/setting.svg';

import { Img, SettingContainer, Container, SettingLi } from '../style';

const Setting = ({deleteMovie}) => {
  const settingRef = createRef();
  const visibility = ()=>{
      settingRef.current.style.visibility == "visible" ? 
          settingRef.current.style.visibility="hidden":
          settingRef.current.style.visibility = "visible"
  };
  return (
    <Container>
      <Img src={settingImage} alt="Setting Icon" onClick={visibility} />
      <SettingContainer   ref={settingRef}>
        <SettingLi>Edit</SettingLi>
        <SettingLi>Delete</SettingLi>
      </SettingContainer>
    </Container>
  );
};

export default memo(Setting);