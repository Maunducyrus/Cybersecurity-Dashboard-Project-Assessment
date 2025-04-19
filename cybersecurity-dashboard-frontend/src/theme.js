import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // ===== Core Colors =====
    primary: {
      main: '#1976d2', // Blue (buttons, primary actions)
      contrastText: '#ffffff', // White text on primary
    },
    secondary: {
      main: '#f50057', // Pink (secondary actions)
    },
    
    // ===== Dashboard Colors =====
    background: {
      default: '#2a2a3d', // Page background (replaces COLORS.pageBackground)
      paper: '#4e4e6a',   // Card/table background (replaces COLORS.cardBackground)
    },
    text: {
      primary: '#ffffff',  // Main text (COLORS.textPrimary)
      secondary: '#aaaaaa', // Secondary text (COLORS.textSecondary)
    },
    
    // ===== Status Colors =====
    success: {
      main: '#4caf50', // Green (replaces COLORS.success)
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff9800', // Orange (replaces COLORS.warning)
      contrastText: '#000000',
    },
    error: {
      main: '#ef5350', // Red (replaces COLORS.error)
      contrastText: '#ffffff',
    },
    info: {
      main: '#26c6da', // Cyan (replaces COLORS.info)
      contrastText: '#000000',
    },
    
    // ===== Custom Colors =====
    custom: {
      avatarBackground: '#42425a', // For list avatars
      tableRowHover: '#3a3a4f',     // Table hover state
    }
  },
  
  // ===== Typography =====
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#ffffff', // Ensures headers use light text
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    subtitle1: {
      color: '#aaaaaa', // Secondary text for subtitles
    }
  },
  
  // ===== Component Overrides =====
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: '#42425a', // Uses custom.avatarBackground
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#3a3a4f', // Uses custom.tableRowHover
          },
        },
      },
    },
  },
});

export default theme;