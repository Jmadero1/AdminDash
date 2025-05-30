'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline'

const products = [
  { name: 'Analytics', description: 'Understand your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Engage with customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Keep data safe', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Convert more users', href: '#', icon: ArrowPathIcon },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

 function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl flex items-center justify-between p-4 lg:px-6" aria-label="Global">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
            className="h-8 w-auto"
          />
        </a>

        {/* Botón menú móvil */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-gray-700">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Navegación desktop */}
        <PopoverGroup className="hidden lg:flex gap-x-10">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-1 text-sm font-medium text-gray-700">
              Product
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            </PopoverButton>

            <PopoverPanel className="absolute z-10 mt-3 w-80 rounded-lg bg-white shadow-lg ring-1 ring-black/10 p-4">
              {products.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-start gap-4 p-2 rounded-md hover:bg-gray-50"
                >
                  <item.icon className="h-6 w-6 text-gray-500" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </a>
              ))}
              <div className="mt-4 border-t border-gray-100 pt-2 grid grid-cols-2 gap-2">
                {callsToAction.map((action) => (
                  <a key={action.name} href={action.href} className="flex items-center gap-2 text-sm text-gray-700 hover:underline">
                    <action.icon className="h-4 w-4" />
                    {action.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Features</a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Marketplace</a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Company</a>
        </PopoverGroup>

        {/* Login */}
        <div className="hidden lg:block">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">Log in →</a>
        </div>
      </nav>

      {/* Menú mobile */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-black/30" />
        <DialogPanel className="fixed top-0 right-0 z-20 w-3/4 max-w-sm h-full bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" className="h-8" alt="Logo" />
            <button onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div className="mt-6">
            <Disclosure>
              <DisclosureButton className="w-full flex justify-between items-center text-left text-sm font-medium text-gray-700 py-2">
                Product
                <ChevronDownIcon className="h-5 w-5" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 space-y-2">
                {[...products, ...callsToAction].map((item) => (
                  <a key={item.name} href={item.href} className="block text-sm text-gray-700 pl-4">
                    {item.name}
                  </a>
                ))}
              </DisclosurePanel>
            </Disclosure>

            {['Features', 'Marketplace', 'Company'].map((item) => (
              <a key={item} href="#" className="block py-2 text-sm text-gray-700">{item}</a>
            ))}

            <a href="#" className="block mt-4 text-sm font-semibold text-gray-700">Log in</a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header;