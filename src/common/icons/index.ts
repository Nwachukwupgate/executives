import AccessIcon from "./pack/AccessIcon";
import AngleLeft from "./pack/AngleLeft";
import ArrowNorthEast from "./pack/ArrowNortEast";
import AssignUser from "./pack/AssignUser";
import BikeIcon from "./pack/BikeIcon";
import BinFill from "./pack/BinFill";
import BuildingOutline from "./pack/BuildingOutline";
import BuildingTwoTree from "./pack/BuildingTwoTree";
import CalendarIcon from "./pack/CalendarIcon";
import CamcorderFill from "./pack/CamcorderFill";
import CamcorderOutline from "./pack/CamcorderOutline";
import CameraIcon from "./pack/Camera";
import CancelIcon from "./pack/CancelIcon";
import Caution from "./pack/Caution";
import ChatIcon from "./pack/ChatIcon";
import CheckArrow from "./pack/CheckArrow";
import CheckOutline from "./pack/CheckOutline";
import ChimneyHouse from "./pack/ChimneyHouse";
import ComfirmIcon from "./pack/ComfirmIcon";
import CompleteIcon from "./pack/CompleteIcon";
import CoordinateOutline from "./pack/Coordinates";
import DoorEntrance from "./pack/DoorEntrance";
import DoorExit from "./pack/DoorExit";
import DoorLock from "./pack/DoorLockIcon";
import EditIcon from "./pack/EditIcon";
import EditSquared from "./pack/EditSquared";
import Emergency from "./pack/Emergency";
import ExportFile from "./pack/ExportFile";
import EyeOpen from "./pack/EyeOpenIcon";
import FileIcon from "./pack/FileIcon";
import FilterIcon from "./pack/FilterIcon";
import GreenCheck from "./pack/GreenCheck";
import HandBell from "./pack/HandBell";
import HouseCam from "./pack/HouseCam";
import HousePlus from "./pack/HousePlus";
import ImageIcon from "./pack/ImageIcon";
import InsideFacility from "./pack/InsideFacility";
import JamArrowDown from "./pack/JamArrowDown";
import JamArrowUp from "./pack/JamArrowUp";
import LightIcon from "./pack/LightIcon";
import LockIcon from "./pack/LockIcon";
import ManageAcctIcon from "./pack/ManageAcct";
import ManInDocument from "./pack/ManInDocument";
import ManWithTie from "./pack/ManWithTie";
import MapOutline from "./pack/MapOutline";
import MicrophoneOutline from "./pack/MicrophoneOutline";
import OptionsIcon from "./pack/OptionsIcon";
import OutilineProfileOne from "./pack/OutilineProfileOne";
import PaperPlaneIcon from "./pack/PaperPlaneIcon";
import PartiallyFullCircle from "./pack/PartiallyFullCircle";
import Pedestrian from "./pack/Pedestrian";
import PeopleMoney from "./pack/PeopleMoney";
import PersonInHouse from "./pack/PersonInHouse";
import PersonKey from "./pack/PersonKey";
import PersonNavigation from "./pack/PersonNavigation";
import PhoneFill from "./pack/PhoneFill";
import PhoneOutline from "./pack/PhoneOutline";
import PlayButtonBlue from "./pack/PlayButtonBlue";
import PlusIcon from "./pack/PlusIcon";
import RemoveUserIcon from "./pack/RemoveUserIcon";
import ReportOutline from "./pack/ReportOutline";
import RoundEdgeocument from "./pack/RoundEdgeocument";
import SecurityOfficer from "./pack/SecurityOfficer";
import ServiceR from "./pack/ServiceR";
import ServiceRequest from "./pack/ServiceRequest";
import SettingsIcon from "./pack/SettingsIcon";
import ShieldSecurity from "./pack/SheildSecurity";
import SignOutIcon from "./pack/SignOut";
import Spanner from "./pack/Spanner";
import SquareExclamation from "./pack/SquareExclamation";
import StatDocument from "./pack/StatDocument";
import Surveillance from "./pack/Survellance";
import ThreeUsers from "./pack/ThreeUsers";
import UnlockIcon from "./pack/Unlock";
import UserGroupTwo from "./pack/UserGroupTwo";
import UserOnPad from "./pack/UserOnPad";
import UserOutline from "./pack/UserOutline";
import UserWithClock from "./pack/UserWithClock";
import VehicleIcon from "./pack/VehicleIcon";
import ViewLog from "./pack/ViewLog";
import visitorIcon from "./pack/VisitorIcon";
import WalletOutline from "./pack/WalletOutline";
import WorkerFill from "./pack/WorkerFill";

const iconPack = {
  JamArrowDown,
  JamArrowUp,
  EditIcon,
  EyeOpen,
  RemoveUserIcon,
  AngleLeft,
  FilterIcon,
  PlusIcon,
  HandBell,
  ManWithTie,
  PersonInHouse,
  SecurityOfficer,
  ArrowNorthEast,
  OptionsIcon,
  GreenCheck,
  CoordinateOutline,
  BuildingOutline,
  ChimneyHouse,
  DoorEntrance,
  DoorExit,
  Pedestrian,
  CancelIcon,
  ImageIcon,
  ManInDocument,
  ShieldSecurity,
  Spanner,
  EditSquared,
  WorkerFill,
  BuildingTwoTree,
  BinFill,
  SquareExclamation,
  AssignUser,
  HousePlus,
  PeopleMoney,
  PersonKey,
  PaperPlaneIcon,
  PhoneFill,
  PartiallyFullCircle,
  CamcorderFill,
  MicrophoneOutline,
  PhoneOutline,
  CamcorderOutline,
  UserOutline,
  StatDocument,
  FileIcon,
  SignOutIcon,
  SettingsIcon,
  CameraIcon,
  ViewLog,
  ServiceRequest,
  ChatIcon,
  VehicleIcon,
  visitorIcon,
  BikeIcon,
  AccessIcon,
  InsideFacility,
  CalendarIcon,
  ComfirmIcon,
  ServiceR,
  Emergency,
  ManageAcctIcon,
  LockIcon,
  UserWithClock,
  CheckOutline,
  MapOutline,
  UserGroupTwo,
  CheckArrow,
  PlayButtonBlue,
  ExportFile,
  CompleteIcon,
  LightIcon,
  UnlockIcon,
  PersonNavigation,
  HouseCam,
  Surveillance,
  Caution,
  DoorLock,
  UserOnPad,
  WalletOutline,
  RoundEdgeocument,
  OutilineProfileOne,
  ReportOutline,
  ThreeUsers,
};

export { iconPack };

export type TIconPack = keyof typeof iconPack;

export const iconNames = Object.keys(iconPack) as TIconPack[];
