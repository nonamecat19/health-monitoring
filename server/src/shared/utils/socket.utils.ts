import {Server, Socket} from 'socket.io';
import {UnauthorizedException} from '@nestjs/common';
import {CurrentConnectionList} from '../types/socket.types';
import {RoleEnum} from '../../modules/user/entities/user.entity';

interface User {
  id: number;
  role: keyof typeof RoleEnum;
  nickname: string;
}

export function getUserFromClient(client: Socket): User {
  const user = client.data.user.user;
  if (!user) {
    throw new UnauthorizedException();
  }
  return user;
}

export function getCurrentConnectionsFromClient(client: Socket): CurrentConnectionList {
  const socketsMap = client.nsp.sockets;
  return Array.from(socketsMap, ([name, value]) => ({name, value}));
}

export function getConnectedClientsFromServer(server: Server) {
  return [...server.sockets.sockets.keys()];
}
