import { FiAirplay, FiMessageCircle, FiPhone, FiUsers } from "react-icons/fi"
import { BiBookOpen } from "react-icons/bi";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <FiAirplay />
	},
	{
		key: 'message',
		label: 'Message',
		path: '/message',
		icon: <FiMessageCircle />
	},
	{
		key: 'calls',
		label: 'Calls',
		path: '/calls',
		icon: <FiPhone />
	},
	{
		key: 'Clients',
		label: 'Clients',
		path: '/clients',
		icon: <FiUsers />
	},
	{
		key: 'Blogs',
		label: 'Blogs',
		path: '/blogs',
		icon: <BiBookOpen />
	}
]
