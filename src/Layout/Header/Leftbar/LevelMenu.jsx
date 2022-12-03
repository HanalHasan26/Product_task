import React, { useContext } from 'react';

import { GitPullRequest, User, Users, UserMinus, UserCheck, Airplay, Zap, Heart, Inbox } from 'react-feather';
import { Link } from 'react-router-dom';
import { LI, UL } from '../../../AbstractElements';
import { Bookmark, FileManager, KanbanBoard, LevelMenu, SocialApp, UserEdit, UserProfile, UsersCards } from '../../../Constant';
import CustomizerContext from '../../../_helper/Customizer';

const LevelMenus = ({ levelMenu, setLevelMenu, setBonusUI }) => {
  const { layoutURL } = useContext(CustomizerContext);
  const OnLevelMenu = (menu) => {
    setBonusUI(false);
    document.querySelector('.mega-menu-container').classList.remove('d-block');
    setLevelMenu(!menu);
  };
  return (
    <LI attrLI={{ className: 'level-menu outside' }}>
      <a className={levelMenu ? 'nav-link active' : 'nav-link'} href='#javascript' onClick={() => OnLevelMenu(levelMenu)}>
        <Inbox />
        <span>{LevelMenu}</span>
      </a>
      <ul className='header-level-menu menu-to-be-close' style={levelMenu ? { display: '' } : { display: 'none' }}>
        <LI attrLI={{ className: 'border-0' }}>
          <Link to={`${process.env.PUBLIC_URL}/app/file-manager/${layoutURL}`}>
            <GitPullRequest />
            <span>{FileManager}</span>
          </Link>
        </LI>
        <LI attrLI={{ className: 'border-0' }}>
          <a href='#javascript'>
            <Users />
            <span>{'Users'}</span>
          </a>
          <UL attrUL={{ className: 'header-level-sub-menu' }}>
            <LI attrLI={{ className: 'border-0' }}>
              <Link to={`${process.env.PUBLIC_URL}/app/users/profile/${layoutURL}`}>
                <User />
                <span>{UserProfile}</span>
              </Link>
            </LI>
            <LI attrLI={{ className: 'border-0' }}>
              <Link to={`${process.env.PUBLIC_URL}/app/users/edit/${layoutURL}`}>
                <UserMinus />
                <span>{UserEdit}</span>
              </Link>
            </LI>
            <LI attrLI={{ className: 'border-0' }}>
              <Link to={`${process.env.PUBLIC_URL}/app/users/cards/${layoutURL}`}>
                <UserCheck />
                <span>{UsersCards}</span>
              </Link>
            </LI>
          </UL>
        </LI>
        <LI attrLI={{ className: 'border-0' }}>
          <Link to={`${process.env.PUBLIC_URL}/app/kanban-board/${layoutURL}`}>
            <Airplay />
            <span>{KanbanBoard}</span>
          </Link>
        </LI>
        <LI attrLI={{ className: 'border-0' }}>
          <Link to={`${process.env.PUBLIC_URL}/app/bookmark/${layoutURL}`}>
            <Heart />
            <span>{Bookmark}</span>
          </Link>
        </LI>
        <LI attrLI={{ className: 'border-0' }}>
          <Link to={`${process.env.PUBLIC_URL}/app/social-app/${layoutURL}`}>
            <Zap />
            <span>{SocialApp}</span>
          </Link>
        </LI>
      </ul>
    </LI>
  );
};

export default LevelMenus;
