import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from "./Logo.png"; 

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Products', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function DairyNavbar() {
  return (
    <Disclosure as="nav" className="bg-yellow-50 shadow-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
          </div>

          {/* Logo for Mobile and Desktop */}
          <div className="flex flex-1 items-center justify-center sm:justify-start">
          <div className="flex-shrink-0 md:align-start">
            <div>
              <img
                className="h-auto w-[120px] md:h-[140px] md:w-[250px] md:mt-16 "
                src={logo}
                alt="Dairy Logo"
              />
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-yellow-500 text-white shadow-xl' : 'text-blue-800 hover:bg-yellow-100 hover:text-yellow-600',
                      'rounded-md px-3 py-2 text-sm font-medium transition duration-200'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="flex flex-col items-center space-y-3 px-2 pb-3 pt-2">
          {/* Centered logo in mobile view */}
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-yellow-500 text-blue-600' : 'text-gray-700 hover:bg-yellow-100 hover:text-yellow-600',
                'block rounded-md px-3 py-2 text-base font-medium transition duration-200'
              )}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
