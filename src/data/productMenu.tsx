import InventoryIcon from '@mui/icons-material/Inventory';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
const Menu = [
  {
    id: 1,
    type: "all",
    name: "All Products",
    icon:  <InventoryIcon /> ,
  },
  {
    id: 2,
    type: "medical",
    name: "Medical",
    icon:  <MedicalServicesIcon /> ,
  },
  {
    id: 3,
    type: "automobile",
    name: "Automobile",
    icon:  <TimeToLeaveIcon /> ,
  },
  {
    id: 4,
    type: "coffee",
    name: "Coffee",
    icon:  <CoffeeMakerIcon /> ,
  },
];

export default Menu;
