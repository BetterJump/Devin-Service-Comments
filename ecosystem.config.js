module.exports = {
  apps: [{
    name: 'Comments-Service',
    script: './server.js'
  }],
  env_production: {
    NODE_ENV: 'production'
  },
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-188-20-60.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/frontend.pem',
      ref: 'origin/master',
      repo: 'git@github.com:DevinKrok/Devin-Service-Comments.git',
      path: '/home/ubuntu/frontendCapstoneServiceComments',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
}

