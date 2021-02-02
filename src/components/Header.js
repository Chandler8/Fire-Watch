import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'


export const Header = () => {
    return (
        // Give icon a prop
        <header className="header">
            
            <h1><Icon icon={locationIcon} /> Global Fire Watch </h1>
            
        </header>
    )
}

export default Header