# Dropdown Component

The Dropdown component is a React-based dropdown menu designed to display a list of items with optional submenus. It provides a user-friendly interface for navigation and selection within a hierarchical menu structure.

![Dropdown Component](https://strapi.dhiwise.com/uploads/618fa90c201104b94458e1fb_64ddb28aa9dd5b7e80d74f18_react_dropown_menu_Main_Image_c968bfff5b.jpg?w=1920&q=75)

## Components

### 1. MenuButton Component

The `MenuButton` component represents a button within the dropdown menu. It can display an icon, a name, and an optional chevron icon indicating the presence of sub-items.

#### Props
- `name`: The name of the button.
- `icon`: The icon to display, if any.
- `index`: The index of the button within the menu.
- `hasSubItems`: A boolean indicating whether the button has sub-items.
- `subMenuHeight`: The height of the submenu, used for handling clicks.
- `onClick`: Callback function triggered on button click.

### 2. MenuItem Component

The `MenuItem` component represents an item within the dropdown menu. It can contain sub-items, and it utilizes the `MenuButton` component.

#### Props
- `name`: The name of the menu item.
- `index`: The index of the menu item within the menu.
- `activeSubMenu`: The index of the currently active submenu.
- `subItems`: An array of sub-items for the menu item.
- `onClick`: Callback function triggered on menu item click.
- `selectName`: The name to display when a sub-item is selected.
- `switchClick`: Callback function triggered on back button click.

### 3. Dropdown Component

The `Dropdown` component is the main component that orchestrates the dropdown menu. It manages the state of the menu, including its openness, the selected sub-item, and active submenu.

#### State
- `isOpen`: A boolean indicating whether the dropdown is open.
- `selectedSubItem`: The currently selected sub-item.
- `selectedIcon`: The icon associated with the selected sub-item.
- `isSubMenuOpen`: A boolean indicating whether a submenu is open.
- `subMenuHeight`: The height of the submenu.
- `activeSubMenu`: The index of the currently active submenu.

#### Methods
- `handleClick(index, subItem)`: Handles menu item clicks, setting the active submenu and selected sub-item.
- `clickHandle(index)`: Handles back button clicks, closing the submenu if necessary.

## Example Usage

```jsx
import React from "react";
import Dropdown from "./Dropdown";

const App = () => {
  return (
    <div>
      <Dropdown />
    </div>
  );
};

export default App;
