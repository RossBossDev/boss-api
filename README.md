# rossboss.dev

Personal website and portfolio hosted at [rossboss.dev](https://rossboss.dev)

## Local Development

```bash
yarn install
yarn dev
```

This will start the Nest.js backend and Vite frontend, and start up a postgres database locally.

## Production Build

This project uses Docker for production deployment. The Docker configuration ensures consistent builds across different environments.

### Building the Docker Image

```bash
docker build -t rossboss-dev --platform linux/arm64 .
```

### Running the Docker Container

```bash
docker run -d -p 3000:3000 rossboss-dev
```

## Deployment

This site is deployed using [Coolify](https://coolify.io/), a self-hosted Heroku/Netlify alternative.

### Deployment Configuration

The site is automatically deployed when changes are pushed to the main branch. Coolify handles:
- Building the Docker container
- Environment variable management
- SSL certificate management
- Automatic restarts and health checks

## License

[MIT](LICENSE)
