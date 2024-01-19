import { useRef, useState } from "react";
import "./styles.css";

const items = [
    {
        name: "build",
        subItems: ["description", "folder", "article"],
    },
    {
        name: "devices",
        subItems: ["storage", "mouse", "keyboard", "headphones"],
    },
    {
        name: "logout",
    },
];

const MenuButton = ({
    name,
    icon,
    index,
    hasSubItems,
    subMenuHeight,
    onClick,
}) => {
    return (
        <button onClick={() => (onClick ? onClick(index, subMenuHeight) : null)}>
            <span className="material-symbols-outlined">{icon || name}</span>
            {name}
            {hasSubItems && (
                <span className="chevron material-symbols-outlined">chevron_right</span>
            )}
        </button>
    );
};



const MenuItem = ({ name, index, activeSubMenu, subItems, onClick, selectName, switchClick }) => {
    const subMenuRef = useRef(null);
    const isActive = activeSubMenu === index;
    return (
        <>
            <MenuButton
                onClick={subItems ? onClick : () => null}
                name={name}
                index={index}
                hasSubItems={Boolean(subItems)}
            />
            {subItems?.length && (
                <div ref={subMenuRef} className={`sub-menu ${isActive ? "open" : ""}`}>
                    <>
                        <MenuButton onClick={() => switchClick(index, selectName)} icon="arrow_back" name={selectName} />
                        {subItems.map((subItem) => (
                            <MenuButton key={subItem} name={subItem} onClick={() => onClick(index,subItem)} />
                        ))}
                    </>
                </div>
            )}
        </>
    );
};


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSubItem, setSelectedSubItem] = useState("Preferences");
    const [selectedIcon, setSelectedIcon] = useState("settings");

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [subMenuHeight, setSubMenuHeight] = useState();
    const [activeSubMenu, setActiveSubMenu] = useState();

    const handleClick = (index, subItem) => {;
        if (index > -1) {
            setActiveSubMenu(index);
            setIsSubMenuOpen(index > -1)
        }
        if(subItem){
            setSelectedSubItem(subItem);
            setSelectedIcon(getIconForSubItem(subItem));
        }
        setSubMenuHeight(subMenuHeight)

    };

    const clickHandle = (index) => {
        setIsSubMenuOpen(index < -1)
    }

    const getIconForSubItem = (subItem) => {
        // Implement logic to determine the icon based on the subItem
        // For now, I'm assuming the icon name is the same as the subItem
        return subItem;
    };

    return (
        <div
            style={{ translate: "0 -50px" }}
            className={`dropdown ${isOpen ? "open" : ""}`}
        >
            <button onClick={() => setIsOpen(!isOpen)}>
                <span className="material-symbols-outlined"> {selectedIcon} </span>
                {selectedSubItem}
                <span className="chevron material-symbols-outlined"> expand_more </span>
            </button>
            <div style={{ height: `${subMenuHeight || 168}px` }} className="menu">
                <div className={`menu-inner ${isSubMenuOpen ? "open" : ""}`}>
                    <div className="main-menu">
                        {items.map((item, index) => (
                            <MenuItem
                                key={item.name}
                                name={item.name}
                                selectName={item.name ? item.name :  selectedSubItem}
                                switchClick={clickHandle}
                                index={index}
                                activeSubMenu={activeSubMenu}
                                onClick={handleClick}
                                subItems={item.subItems}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Dropdown;