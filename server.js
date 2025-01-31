const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let subscriptions = new Map(); // Store client subscriptions

// Simulated market data storage
let symbolData = {
  "BTC/USD": {
    time: Date.now(),
    open: 50000,
    high: 50500,
    low: 49500,
    close: 50200,
  },
  USD_CHF: {
    time: Date.now(),
    open: 0.91,
    high: 0.915,
    low: 0.905,
    close: 0.9105,
  },
};

// Simulate different timeframes (1m, 5m, 1h, 1D)
const timeframes = {
  "1m": 60 * 1000,
  "5m": 5 * 60 * 1000,
  60: 60 * 60 * 1000,
  "1D": 24 * 60 * 60 * 1000,
};

// Function to generate new market data
function generateMarketData(symbol) {
  if (!symbolData[symbol]) return;

  let market = symbolData[symbol];
  market.time = Date.now();
  market.open = market.close;
  market.close = market.open + (Math.random() * 0.005 - 0.0025); // Small fluctuation
  market.high = Math.max(market.high, market.close);
  market.low = Math.min(market.low, market.close);
}

// Function to broadcast data to subscribed clients
function broadcast(symbol, resolution) {
  if (!symbolData[symbol]) return;

  let data = {
    s: "ok",
    symbol: symbol,
    resolution: resolution,
    bar: symbolData[symbol],
  };

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      const clientSubscriptions = subscriptions.get(client);
      if (clientSubscriptions && clientSubscriptions.has(symbol)) {
        client.send(JSON.stringify(data));
      }
    }
  });
}

// Simulate market data updates
setInterval(() => {
  Object.keys(symbolData).forEach((symbol) => {
    generateMarketData(symbol);
    // Broadcast for all resolutions
    Object.keys(timeframes).forEach((resolution) =>
      broadcast(symbol, resolution)
    );
  });
}, 1000);

// Handle WebSocket connections
wss.on("connection", (ws) => {
  console.log("🔗 Client connected");

  // Store client subscriptions
  subscriptions.set(ws, new Set());

  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message);

      if (data.type === "subscribe" && data.symbol && data.resolution) {
        console.log(`📡 Subscribed to: ${data.symbol} (${data.resolution})`);

        // Store the subscription
        subscriptions.get(ws).add(data.symbol);

        // Send the latest data immediately
        if (symbolData[data.symbol]) {
          ws.send(
            JSON.stringify({
              s: "ok",
              symbol: data.symbol,
              resolution: data.resolution,
              bar: symbolData[data.symbol],
            })
          );
        }
      }

      if (data.type === "unsubscribe" && data.symbol) {
        console.log(`❌ Unsubscribed from: ${data.symbol}`);
        subscriptions.get(ws).delete(data.symbol);
      }
    } catch (error) {
      console.error("❌ Error processing message:", error);
    }
  });

  ws.on("close", () => {
    console.log("❌ Client disconnected");
    subscriptions.delete(ws); // Remove client's subscriptions
  });
});

server.listen(8080, () => {
  console.log("🚀 WebSocket server running on ws://localhost:8080");
});
