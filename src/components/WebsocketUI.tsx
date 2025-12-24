import { useEffect, useRef, useState } from "react";

export default function WebsocketUI() {
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectRef = useRef<number | null>(null);

  const [status, setStatus] = useState("disconnected");
  const [messages, setMessages] = useState({
    cpu: { percent: 0.0 },
    ram: { percent: 0.0 },
    storage: { percent: "0%" },
    bandwidth: { rx_mb: 0, tx_mb: 0 },
    uptime: { uptime: "" },
    timestamp: "",
    clients: 0
  });

  const formatBandwidth = (mb: number) => {
    return mb >= 1000 ? `${(mb / 1024).toFixed(2)} GB` : `${mb.toFixed(2)} MB`;
  };

  const connect = () => {
    if (wsRef.current) return;

    console.log("Attempting WebSocket connection...");
    setStatus("connecting");

    const ws = new WebSocket("ws://riverside.rocks/ws");
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("WebSocket connected");
      setStatus("connected");
    };

    ws.onmessage = (event) => {
      setMessages(JSON.parse(event.data));
    };

    ws.onerror = (err) => {
      console.error("WebSocket error", err);
    };

    ws.onclose = () => {
      console.log("WebSocket closed, retrying...");
      wsRef.current = null;
      setStatus("disconnected");

      reconnectRef.current = window.setTimeout(connect, 3000);
    };
  };

  useEffect(() => {
    connect();

    return () => {
      if (reconnectRef.current) {
        clearTimeout(reconnectRef.current);
      }
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {status !== "disconnected" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="btn btn-lg rounded-lg btn-primary m-1">
            <i className="fa-solid fa-upload"></i>
            <span className="ml-2">Users Online - {messages.clients}</span>
          </button>

          <button className="btn btn-lg rounded-lg btn-primary m-1">
            <i className="fa-solid fa-server"></i>
            <span className="ml-2">
              CPU - {messages.cpu.percent.toFixed(2)}%
            </span>
          </button>

          <button className="btn btn-lg rounded-lg btn-primary m-1">
            <i className="fa-solid fa-server"></i>
            <span className="ml-2">
              RAM - {messages.ram.percent.toFixed(2)}%
            </span>
          </button>

          <button className="btn btn-lg rounded-lg btn-primary m-1">
            <i className="fa-solid fa-floppy-disk"></i>
            <span className="ml-2">
              Storage - {messages.storage.percent}
            </span>
          </button>

          <button className="btn btn-lg rounded-lg btn-primary m-1">
            <i className="fa-solid fa-circle-check"></i>
            <span className="ml-2">
              Uptime - {messages.uptime.uptime}
            </span>
          </button>

          <button className="btn btn-lg rounded-lg btn-primary m-1">
            <i className="fa-solid fa-download"></i>
            <span className="ml-2">
              Daily Download - {formatBandwidth(messages.bandwidth.rx_mb)}
            </span>
          </button>

          <button className="btn btn-lg rounded-lg btn-primary m-1">
            <i className="fa-solid fa-upload"></i>
            <span className="ml-2">
              Daily Upload - {formatBandwidth(messages.bandwidth.tx_mb)}
            </span>
          </button>
        </div>
      )}

      {status === "disconnected" && (
        <span className="subway-sign">
          Not In Service - WebSocket Offline
        </span>
      )}
    </>
  );
}
