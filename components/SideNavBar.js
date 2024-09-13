import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Dashboard, Map, RequestPage, People, Notifications, Report, Settings, Help, ExitToApp } from '@mui/icons-material';
import { Drawer } from '@mui/material';

const drawerWidth = 200; // Adjust width as needed

const Sidebar = ({ onNavigate }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          color: '#000',
          paddingTop: 2,
          paddingBottom: 2,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem button onClick={() => onNavigate('dashboard')}>
          <ListItemIcon><Dashboard sx={{ color: '#000' }} /></ListItemIcon>
          <ListItemText 
            primary="Dashboard" 
            primaryTypographyProps={{ style: { fontSize: '0.875rem', color: '#000' } }} 
          />
        </ListItem>
        <ListItem button onClick={() => onNavigate('map')}>
          <ListItemIcon><Map sx={{ color: '#000' }} /></ListItemIcon>
          <ListItemText 
            primary="Map View" 
            primaryTypographyProps={{ style: { fontSize: '0.875rem', color: '#000' } }} 
          />
        </ListItem>
        <ListItem button onClick={() => onNavigate('requests')}>
          <ListItemIcon><RequestPage sx={{ color: '#000' }} /></ListItemIcon>
          <ListItemText 
            primary="Requests" 
            primaryTypographyProps={{ style: { fontSize: '0.875rem', color: '#000' } }} 
          />
        </ListItem>
        <ListItem button onClick={() => onNavigate('donors')}>
          <ListItemIcon><People sx={{ color: '#000' }} /></ListItemIcon>
          <ListItemText 
            primary="Donors" 
            primaryTypographyProps={{ style: { fontSize: '0.875rem', color: '#000' } }} 
          />
        </ListItem>
        <ListItem button onClick={() => onNavigate('alerts')}>
          <ListItemIcon><Notifications sx={{ color: '#000' }} /></ListItemIcon>
          <ListItemText 
            primary="Alerts" 
            primaryTypographyProps={{ style: { fontSize: '0.875rem', color: '#000' } }} 
          />
        </ListItem>
        <ListItem button onClick={() => onNavigate('reports')}>
          <ListItemIcon><Report sx={{ color: '#000' }} /></ListItemIcon>
          <ListItemText 
            primary="Reports" 
            primaryTypographyProps={{ style: { fontSize: '0.875rem', color: '#000' } }} 
          />
        </ListItem>
        <ListItem button onClick={() => onNavigate('settings')}>
          <ListItemIcon><Settings sx={{ color: '#000' }} /></ListItemIcon>
          <ListItemText 
            primary="Settings" 
            primaryTypographyProps={{ style: { fontSize: '0.875rem', color: '#000' } }} 
          />
        </ListItem>
        <ListItem button onClick={() => onNavigate('help')}>
          <ListItemIcon><Help sx={{ color: '#000' }} /></ListItemIcon>
          <ListItemText 
            primary="Help" 
            primaryTypographyProps={{ style: { fontSize: '0.875rem', color: '#000' } }} 
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => onNavigate('logout')}>
          <ListItemIcon><ExitToApp sx={{ color: '#000' }} /></ListItemIcon>
          <ListItemText 
            primary="Logout" 
            primaryTypographyProps={{ style: { fontSize: '0.875rem', color: '#000' } }} 
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
