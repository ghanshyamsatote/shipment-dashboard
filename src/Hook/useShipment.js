import { Shipments } from "../data/Shipment";
import { useState } from "react";
export default function useShipment(){
    const [shipments, setShipments] = useState(() => {
    const saved = localStorage.getItem("shipments");
    return saved ? JSON.parse(saved) : Shipments;
  });

  const updateStatus = (id, newStatus) => {
    const updated = shipments.map(s =>
      s.id === id ? { ...s, status: newStatus } : s
    );
    setShipments(updated);
    localStorage.setItem("shipments", JSON.stringify(updated));
  };

  return { shipments, setShipments, updateStatus };
}