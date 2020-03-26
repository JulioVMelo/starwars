import React, { memo } from 'react';
import * as Ui from './styles';
import Logo from '../../assets/images/logo-large.png';
import SaberBlue from '../../assets/images/lightsaber-blue.webp';

function Header() {
  return (
    <Ui.Container>
      <div className="wrapperImage">
        <img src={Logo} alt="Star Wars" />
      </div>
      <div className="saber">
        <img src={SaberBlue} alt="Saber" />
      </div>
    </Ui.Container>
  );
}

export default memo(Header);
