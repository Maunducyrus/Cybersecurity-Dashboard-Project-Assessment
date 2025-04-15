import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Grid, 
  Card, 
  CardContent, 
  Chip, 
  Button, 
  Tabs,
  Tab
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Resources = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const resourceTypes = ["All", "Videos", "Articles", "PDFs", "Case Studies", "Infographics"];

  const resources = {
    All: [
      {
        title: "Understanding Zero Trust Architecture",
        type: ["Video", "PDF", "Article"],
        description: "Learn about the principles of Zero Trust and how to implement this security model in your organization.",
        date: "May 12, 2023",
        action: "View 💬"
      },
      {
        title: "Ransomware Protection Guide",
        type: ["PDF"],
        description: "A comprehensive guide on how to protect your organization from ransomware attacks.",
        date: "May 8, 2023",
        action: "View 💬"
      },
      {
        title: "Social Engineering Tactics and Defense",
        type: ["Article"],
        description: "This article explores common social engineering techniques used by attackers and how to defend against them.",
        date: "May 5, 2023",
        action: "View 💬"
      },
      {
        title: "Cloud Security Best Practices",
        type: ["Video", "Infographic"],
        description: "Essential security measures for cloud-based infrastructure.",
        date: "April 28, 2023",
        action: "View 💬"
      },
      {
        title: "Incident Response Case Study",
        type: ["Case Study"],
        description: "Real-world example of handling a major security breach.",
        date: "April 20, 2023",
        action: "View 💬"
      },
      {
        title: "Password Management Infographic",
        type: ["Infographic"],
        description: "Visual guide to creating and managing secure passwords.",
        date: "April 15, 2023",
        action: "View 💬"
      }
    ],
    Videos: [
      {
        title: "Understanding Zero Trust Architecture",
        type: ["Video"],
        description: "Video explanation of Zero Trust principles.",
        date: "May 12, 2023",
        action: "View 💬"
      },
      {
        title: "Cloud Security Best Practices",
        type: ["Video"],
        description: "Video tutorial on cloud security measures.",
        date: "April 28, 2023",
        action: "View 💬"
      }
    ],
    Articles: [
      {
        title: "Social Engineering Tactics and Defense",
        type: ["Article"],
        description: "Detailed article about social engineering attacks.",
        date: "May 5, 2023",
        action: "View 💬"
      },
      {
        title: "Understanding Zero Trust Architecture",
        type: ["Article"],
        description: "Written guide to Zero Trust implementation.",
        date: "May 12, 2023",
        action: "View 💬"
      }
    ],
    PDFs: [
      {
        title: "Ransomware Protection Guide",
        type: ["PDF"],
        description: "Downloadable PDF guide for ransomware protection.",
        date: "May 8, 2023",
        action: "View 💬"
      },
      {
        title: "Understanding Zero Trust Architecture",
        type: ["PDF"],
        description: "PDF version of Zero Trust documentation.",
        date: "May 12, 2023",
        action: "View 💬"
      }
    ],
    "Case Studies": [
      {
        title: "Incident Response Case Study",
        type: ["Case Study"],
        description: "Detailed analysis of a security incident.",
        date: "April 20, 2023",
        action: "View 💬"
      }
    ],
    Infographics: [
      {
        title: "Password Management Infographic",
        type: ["Infographic"],
        description: "Visual password security guide.",
        date: "April 15, 2023",
        action: "View 💬"
      },
      {
        title: "Cloud Security Best Practices",
        type: ["Infographic"],
        description: "Visual cloud security summary.",
        date: "April 28, 2023",
        action: "View 💬"
      }
    ]
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const filteredResources = resources[resourceTypes[activeTab]].filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h2" gutterBottom>
        Educational Resources
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        Browse and learn from our cybersecurity educational content
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <SearchIcon sx={{ mr: 1, color: 'action.active' }} />
        <TextField 
          variant="outlined" 
          placeholder="Search resources..." 
          size="small"
          sx={{ width: '300px' }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>
      
      <Tabs 
        value={activeTab} 
        onChange={handleTabChange}
        sx={{ 
          mb: 3,
          '& .MuiTab-root': {
            textTransform: 'none',
            minWidth: 'unset',
            padding: '6px 12px'
          },
          '& .Mui-selected': {
            color: '#1976d2',
            fontWeight: 'bold'
          }
        }}
      >
        {resourceTypes.map((type) => (
          <Tab key={type} label={type} />
        ))}
      </Tabs>
      
      <Grid container spacing={3}>
        {filteredResources.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                border: '1px solid #e0e0e0',
                '&:hover': {
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  {resource.type.map((t) => (
                    <Chip 
                      key={t} 
                      label={t} 
                      size="small" 
                      sx={{ 
                        backgroundColor: '#e3f2fd',
                        color: '#1976d2'
                      }}
                    />
                  ))}
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {resource.title}
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ color: 'text.secondary', mb: 2 }}>
                  {resource.description}
                </Typography>
                <Typography variant="caption" display="block" sx={{ color: 'text.secondary', mb: 2 }}>
                  {resource.date}
                </Typography>
                <Button 
                  variant="text" 
                  size="small"
                  sx={{ 
                    color: '#1976d2',
                    textTransform: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  {resource.action}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Resources;