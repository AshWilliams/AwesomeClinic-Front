import App from '../App';
import MenuBar from '../components/navigations/MenuBar'
import Profile from '../data/Profile'
import MyProfile from '../components/pages/MyProfile'
import MyAppointments from '../components/pages/MyAppointments'

import { configure,shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

//App
it("Renders App without crashing", () => {
  shallow(<App />);
});

//MenuBar
it("MenuBar renders without crashing", () => {
  shallow(<MenuBar />);
});

it("Renders Home Menu Link", () => {
  const wrapper = shallow(<MenuBar />);
  const home = <li><a href="/">Home</a></li>;
  expect(wrapper.contains(home)).toEqual(true);
});

it("Renders My Profile Menu Link", () => {
  const wrapper = shallow(<MenuBar />);
  const profile = <li><a href="/MyProfile">My Profile</a></li>
  expect(wrapper.contains(profile)).toEqual(true);
});

it("Renders My Appointments Menu Link", () => {
  const wrapper = shallow(<MenuBar />);
  const profile = <li><a href="/MyAppointments">My Appointments</a></li> 
  expect(wrapper.contains(profile)).toEqual(true);
});

//MyProfile Page
it("MyProfile page renders without crashing", () => {
  shallow(<MyProfile />);
});
it("MyProfile check h2 element", () => {
  const wrapper = shallow(<MyProfile />);
  const h2 = <h2>My Profile</h2>;
  expect(wrapper.contains(h2)).toEqual(true);
});

//MyAppointments Page
it("MyAppointments page renders without crashing", () => {
  shallow(<MyAppointments />);
});
it("MyAppointments check h2 element", () => {
  const wrapper = shallow(<MyAppointments />);
  const h = <h2>My Appointments</h2>;
  expect(wrapper.contains(h)).toEqual(true);
});


//Profile
it("Profile renders without crashing", () => {
  shallow(<Profile />);
});

it("Profile check static image placeholder", () => {
  const wrapper = shallow(<Profile />);
  const pic = <img src="https://randomuser.me/api/portraits/thumb/men/40.jpg"></img>;
  expect(wrapper.contains(pic)).toEqual(true);
});