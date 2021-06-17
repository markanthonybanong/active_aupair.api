module.exports = {
  apps : [{
    name: 'active_aupair.api',
    script: 'src/server.js',
    autorestart: true,
    watch: ['/src'], //watch all changes in this directory
    watch_options: {
      followSymlinks: false,
    },
    "env": {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'activeau_workplatform',
      port: '3000' 
    },
  }],
  // Deployment part
  // Here you describe each environment
  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
