"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const renderURL = `${process.env.NEXT_PUBLIC_RENDER_URL}`;

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
    setSocketConection(io(renderURL));
  }, []);

  return (
    <ServerContext.Provider value={{ socket: socket }}>
      {children}
    </ServerContext.Provider>
  );
};

export const useServerContext = () => useContext(ServerContext);
