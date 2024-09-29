"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export interface IServerContext {
  socket?: Socket;
}

export const ServerContext = createContext<IServerContext>(
  {} as IServerContext
);

export const ServerProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket>();

  const setSocketConection = (data: Socket) => {
    setSocket(data);
  };

  useEffect(() => {
    setSocketConection(io("http://localhost:10000"));
  }, []);

  return (
    <ServerContext.Provider value={{ socket: socket }}>
      {children}
    </ServerContext.Provider>
  );
};

export const useServerContext = () => useContext(ServerContext);
