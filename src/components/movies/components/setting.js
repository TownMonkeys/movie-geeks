import React, { memo } from 'react';
import settingImage from '../../../images/setting.svg';

import { Img, SettingContainer, Container, SettingLi } from '../style';

const Setting = (props) => {
  const { deleteMovie } = props;

  return (
    <Container>
      <Img src={settingImage} alt="Setting Icon" />
      <SettingContainer>
        <SettingLi>Edit</SettingLi>
        <SettingLi>Delete</SettingLi>
      </SettingContainer>
    </Container>
  );
};

export default memo(Setting);
