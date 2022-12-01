/**
 * Menu.jsx
 */

// Component(s)
import Menu from './Menu'

const config = {
  title: 'Menu',
  component: Menu,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZWac9AlG8DnI4qKIfQtpaS/Spotify-Ubiquity-(FOMOLOL)?node-id=25%3A1496&t=8LyfDiWsNaCQuytA-4',
    },
  },
  args: { variant: 'light' },
  argTypes: {
    // tagName: {
    //   options: '',
    //   control: { type: 'text' },
    // },
    // items: {
    //   options: [],
    //   control: { type: 'array' },
    // },
    // className: {
    //   options: '',
    //   control: { type: 'text' },
    // },
    variant: {
      options: ['light', 'dark'],
      control: { type: 'select' },
    },
  },
}

export default config

const Template = ({ variant }) => {
  console.log('variant', variant)
  return <Menu variant={variant} />
}

export const Default = Template.bind({})

Default.storyName = 'default'
