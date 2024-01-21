import { FC } from "react";
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
      zoom={3}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer key={tileLayerUrl} url={tileLayerUrl} />
      {customers.map((customer, index) => (
        <Marker
          key={index}
          position={[parseFloat(customer.ycoord), parseFloat(customer.xcoord)]}
        >
          <Popup>{customer.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
