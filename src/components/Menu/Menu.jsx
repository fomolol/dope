/**
 * @file Menu.js
 */
import { useState } from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import cn from 'clsx'

import s from './Menu.module.css'

const BtnClose = ({
  className = 'absolute w-[38px] h-[38px]',
  strokeWidth = 5,
  strokeLinecap = 'round',
  active = false,
  onClick = () => console.log('Clicked close'),
  width = '38px',
}) => {
  return (
    <div
      className={className}
      style={{
        height: width,
        minHeight: width,
        width,
        minWidth: width,
      }}
    >
      <motion.button
        layout
        key="closeBtn"
        className="transition-color flex h-full w-full items-center justify-center rounded-full border border-transparent bg-[#2A2A2A] text-white duration-500 ease-in-out-expo hover:border-current hover:bg-transparent"
        initial="initial"
        animate={active ? 'animate' : 'exit'}
        exit="exit"
        variants={{
          initial: {
            opacity: 0,
            translateX: '0%',
          },
          animate: {
            opacity: 1,
            transition: {
              duration: 0.25,
              ease: 'easeInOut',
            },
          },
          exit: {
            opacity: 0,
            transition: {
              duration: 0.15,
              ease: 'easeInOut',
            },
          },
        }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 42 42"
          className="block"
          style={{
            height: `calc(${width} / 2.5)`,
            width: `calc(${width} / 2.5)`,
          }}
        >
          <path
            stroke="currentColor"
            strokeLinecap={strokeLinecap}
            strokeWidth={strokeWidth}
            d="m3 3 36.172 36.172m-36 0L39.343 3"
          />
        </svg>
      </motion.button>
    </div>
  )
}

const BtnSubMenuItem = ({ children, variants, onClick, selected }) => (
  <motion.button
    className=""
    onClick={onClick}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={variants}
  >
    <span
      className={`z-0 flex h-full w-full transform items-center justify-center whitespace-nowrap border px-5 transition-all duration-1000 ease-in-out-expo ${
        selected
          ? 'translate-x-[-20px] rounded-r-full border-[#65D46E] bg-[#65D46E]/50'
          : 'translate-x-0 rounded-full border-white bg-transparent hover:bg-[#20612B]'
      }`}
    >
      {children}
    </span>
  </motion.button>
)

const BtnMenuItem = ({
  index,
  variant,
  disabled = false,
  selected = false,
  children = 'Lorem',
  onSelect = (item) => console.log('Clicked item', item),
  onSubmenuSelect = (item) => console.log('Clicked submenu item', item),
  onClose = (item) => console.log('Clicked close', item),
  height = '38px',
  subMenu,
}) => {
  const [subSelected, setSubSelected] = useState(false)

  const defaultVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      // translateX: '-100%',
      transitionEnd: {
        display: 'none',
      },
      transition: {
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.li
      layout="preserve-aspect"
      className={`relative flex min-w-max`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={defaultVariant}
      style={{
        height,
      }}
    >
      <button
        onClick={
          selected
            ? () => onClose(children, index)
            : () => onSelect(children, index)
        }
        className={`transition-color z-10 flex h-full items-center justify-center rounded-full border px-5 font-sans duration-500 ease-in-out-expo ${
          selected
            ? 'border-[#65D46E] bg-[#65D46E]'
            : 'border-current bg-transparent'
        }`}
      >
        {children}
      </button>
      {/* Sub menu items (if they exist) */}
      <motion.div
        layout="preserve-aspect"
        className="flex w-auto pl-2 space-x-2"
      >
        <AnimatePresence>
          {subMenu &&
            subMenu.map(({ name }, i) => {
              return subSelected && subSelected === i + 1 ? (
                <BtnSubMenuItem
                  selected={subSelected}
                  variants={defaultVariant}
                  key={`submenu-${i}`}
                  onClick={() => setSubSelected(false)}
                >
                  {name}
                </BtnSubMenuItem>
              ) : !subSelected ? (
                <BtnSubMenuItem
                  selected={subSelected}
                  variants={defaultVariant}
                  key={`submenu-${i}`}
                  onClick={() => setSubSelected(i + 1)}
                >
                  {name}
                </BtnSubMenuItem>
              ) : null
            })}
        </AnimatePresence>
      </motion.div>
    </motion.li>
  )
}

const Menu = ({
  tagName: Tag = 'div',
  className = 'absolute flex items-start justify-start w-full left-3',
  variant = 'light',
  items = [
    {
      name: 'F',
      position: 'Pizza of Pizza',
      image: 'https://assets.fomolol.com/pizza.png',
    },
    {
      name: 'O',
      position: 'Ipsum of Lorem',
      image: 'https://assets.fomolol.com/pizza.png',
      subMenu: [{ name: 'Two Data' }],
    },
    {
      name: 'M',
      position: 'Ipsum of Lorem',
      image: 'https://assets.fomolol.com/pizza.png',
      subMenu: [{ name: 'Three Data' }, { name: 'More data' }],
    },
    {
      name: 'O',
      position: 'Ipsum of Lorem',
      image: 'https://assets.fomolol.com/pizza.png',
    },
  ],
}) => {
  const [selected, setSelected] = useState('undefined')

  let variantClassName = 'text-white'
  switch (variant) {
    case 'light':
      variantClassName = 'text-black'
      break
    case 'dark':
      variantClassName = 'text-white'
      break
    default:
      break
  }

  const onSelect = (item, index) => {
    setSelected(index)
  }

  const onClose = () => {
    setSelected('undefined')
  }

  return (
    <Tag className={cn(s.menu, s[`menu__${variant}`], className)}>
      <LayoutGroup id="main-menu">
        <BtnClose
          variant={variant}
          onClick={onClose}
          active={selected !== 'undefined'}
        />
        <motion.ul
          className={cn(
            variantClassName,
            `flex w-auto transform space-x-2 duration-1000 ease-in-out-expo will-change-transform ${
              selected !== 'undefined'
                ? 'translate-x-[44px]'
                : 'translate-x-[0px]'
            }`
          )}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
              transition: {
                duration: 1,
                ease: 'easeInOut',
              },
            },
            exit: {
              opacity: 0,
              transition: {
                duration: 1,
                ease: 'easeInOut',
              },
            },
          }}
        >
          {items.map(({ name, subMenu }, i) => {
            return selected !== 'undefined' && selected == i ? (
              <BtnMenuItem
                variant={variant}
                selected={true}
                onSelect={onSelect}
                onClose={onClose}
                index={i}
                key={`item-${i}`}
                subMenu={subMenu}
              >
                {name}
              </BtnMenuItem>
            ) : selected === 'undefined' ? (
              <BtnMenuItem
                variant={variant}
                onSelect={onSelect}
                index={i}
                key={`item-${i}`}
              >
                {name}
              </BtnMenuItem>
            ) : null
          })}
        </motion.ul>
      </LayoutGroup>
    </Tag>
  )
}

Menu.propTypes = {
  tagName: PropTypes.object,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'dark']),
  items: PropTypes.object,
}

export default Menu
