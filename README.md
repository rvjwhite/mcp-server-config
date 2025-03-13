# MCP Server Configuration

This repository contains a fixed configuration for the Model Context Protocol (MCP) server with proper dependencies to resolve the `ERR_MODULE_NOT_FOUND` error related to `zod-to-json-schema`.

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/rvjwhite/mcp-server-config.git
   cd mcp-server-config
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

## Alternative Quick Fix

If you prefer not to use this repository, you can also fix the issue with these steps:

1. Create a new directory and initialize a Node.js project:
   ```bash
   mkdir mcp-server
   cd mcp-server
   npm init -y
   ```

2. Install the required dependencies explicitly:
   ```bash
   npm install @modelcontextprotocol/server-filesystem zod zod-to-json-schema
   ```

3. Add `"type": "module"` to your package.json

4. Create a simple index.js file:
   ```javascript
   import { createServer } from '@modelcontextprotocol/server-filesystem';
   const server = createServer();
   ```

5. Run with: `node index.js`
