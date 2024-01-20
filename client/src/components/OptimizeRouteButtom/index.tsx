import React from "react";
import { Button } from "./styles";

interface OptimizeRouteButtonProps {
  onClick: () => void;
}

const OptimizeRouteButton: React.FC<OptimizeRouteButtonProps> = ({
  onClick,
}) => {
  return <Button onClick={onClick}>Otimizar Rota</Button>;
};

export default OptimizeRouteButton;
