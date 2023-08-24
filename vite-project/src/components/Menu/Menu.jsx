import { BiMenuAltRight } from 'react-icons/bi'
import './Menu.scss'
import MenuList from './MenuList'
import { useState} from 'react'

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleOpen = () => {
        setShowMenu(true)
    }

    const handleClose = () => {
        setShowMenu(false)
    }

    return (
        <div className={showMenu ? "menu-active" : ""}> 
            <div>
                <BiMenuAltRight onClick={handleOpen} className='text-white text-4xl cursor-pointer'/>
            </div>
    
            <div className='menu__backdrop' onClick={handleClose}>
                <MenuList close={handleClose}/>
            </div>
        </div>
    )
}

export default Menu