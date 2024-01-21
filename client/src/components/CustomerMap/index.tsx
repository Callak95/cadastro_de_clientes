import { FC } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Customer } from "../../types/customer";

interface CustomerMapProps {
  customers: Customer[];
}

const tileLayerUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

export const CustomerMap: FC<CustomerMapProps> = ({ customers }) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={5}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url={tileLayerUrl} />
      {customers.map((customer, index) => (
        <Marker
          key={index}
          position={[parseFloat(customer.ycoord), parseFloat(customer.xcoord)]}
        >
          <Popup>
            {index + 1}° Cliente para atendimento: - {customer.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
