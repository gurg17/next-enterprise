import { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"
import { action } from "@storybook/addon-actions"

const meta: Meta<typeof Button> = {
  title: "Components/ui/button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      description: "Button variants",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      description: "Button sizes",
      options: ["default", "sm", "lg", "icon"],
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>
export const Default: Story = {
  args: {
    variant: "default",
    size: "sm",
    disabled: false,
    onClick: action("default click"),
    children: "Default Button",
    className: "shadow-xs",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "sm",
    disabled: false,
    onClick: action("destructive click"),
    children: "Destructive Button",
    className: "shadow-xs",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "sm",
    disabled: false,
    onClick: action("outline click"),
    children: "Outline Button",
    className: "shadow-xs",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "sm",
    disabled: false,
    onClick: action("secondary click"),
    children: "Secondary Button",
    className: "shadow-xs",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "sm",
    disabled: false,
    onClick: action("ghost click"),
    children: "Ghost Button",
    className: "shadow-xs",
  },
}

export const Link: Story = {
  args: {
    variant: "link",
    size: "sm",
    disabled: false,
    onClick: action("link click"),
    children: "Link Button",
    className: "",
  },
}
