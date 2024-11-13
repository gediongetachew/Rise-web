import InventoryIcon from "@mui/icons-material/Inventory";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";

const Menu = [
  {
    id: 1,
    type: "all",
    name: "All",
    icon: <InventoryIcon />,
  },
  {
    id: 2,
    type: "medical",
    name: "Medical",
    icon: <MedicalServicesIcon />,
  },
  {
    id: 3,
    type: "automobile",
    name: "Automobile",
    icon: <TimeToLeaveIcon />,
  },
];

export default Menu;
