// @flow
import React, { useEffect } from 'react';
import type { Element } from 'react';

import { useDispatch } from 'react-redux';

import { connectToLobby } from '../redux/action/lobby.action';

import Hand from '../component/Hand';
import Pyramid from '../component/Pyramid';

export const Lobby = (): Element<'div'> => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectToLobby());
  }, [dispatch]);

  return (
    <div className="Lobby">
      <Pyramid />
      <Hand />
    </div>
  );
};

export default Lobby;
