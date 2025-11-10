"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [gas, setGas] = useState(null);

  const loadGas = async () => {
    try {
      const { data } = await axios.get("/api/gas");
      setGas(data);
    } catch (err) {
      setGas({ error: "Failed to fetch gas price" });
    }
  };

  useEffect(() => {
    loadGas();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Base Gas Tracker</h1>
      {!gas ? (
        <p>Loading...</p>
      ) : gas.error ? (
        <p>{gas.error}</p>
      ) : (
        <p>Gas Price: {gas.gasPrice}</p>
      )}
      <button onClick={loadGas}>Refresh</button>
    </div>
  );
}
