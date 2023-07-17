import React, {Fragment} from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { FiBell } from 'react-icons/fi'

export default function Header() {
    const navigate = useNavigate()
    
  return (
    <div className='top-0 z-0 w-full bg-white'>
        <div className='sm:flex md:flex float-right items-center py-4 pr-2 h-[64px] min-h-[64px]'>
    
            <div className='flex items-center float-right gap-2 mr-2'>
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={classNames(
                                open && 'bg-blue-700 text-white',
                                'p-1.5 rounded-lg inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                            )}
                        >
                            <FiBell fontSize={24} />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                            >
                            <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                                <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                                    <strong className='font-medium text-gray-700'>Notifications</strong>
                                    <div className='py-1 mt-2 text-sm'>
                                        This is the notification panel
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
            <Menu as="div" className="relative">
                <div>
                    <Menu.Button className="inline-flex ml-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700">
                        <span className='sr-only'>open user menu</span>
                        <div className='w-10 h-10 bg-center bg-no-repeat bg-cover rounded-full bg-sky-500' 
                                style={{background: 'url("https://source.unsplash.com/50x50?face")'}}>
                            <span className='sr-only'> Hugh jackman</span>
                        </div>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className="absolute right-0 z-10 w-48 p-1 mt-2 origin-top-right bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            {({ active }) => (
                                <div className={classNames(
                                    active && 'bg-gray-100',
                                    'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2'
                                    )}
                                    onClick={() => navigate('/counsellorprofile')}>
                                    Your Profile 
                                </div>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <div className={classNames(
                                    active && 'bg-gray-100',
                                    'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2'
                                    )}
                                    onClick={() => navigate('/logout')}>
                                    Logout
                                </div>
                            )}
                        </Menu.Item>
                    </Menu.Items>
              </Transition>
            </Menu>
        </div>
        </div>
    </div>
  )
}
