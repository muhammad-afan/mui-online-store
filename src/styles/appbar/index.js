import { Box, IconButton, List, Typography, styled } from "@mui/material";
import { Colors, DrawerWidth } from "../theme";
import "@fontsource/montez"

// Container
export const AppbarContainer = styled(Box)(() => ({

    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'
}))

// Header
export const AppbarHeader = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontFamily: '"Montez", "cursive"',
    fontSize: '4em',
    color: Colors.secondary
}))


export const MyList = styled(List)(({ type }) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center'
}))

export const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0
}))

export const ActionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`
}))

export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: 10,
    left: DrawerWidth,
    zIndex: 1999,
}));