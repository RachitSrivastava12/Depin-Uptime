# DePIN Monitor for Solana

## Overview
DePIN Monitor for Solana is a decentralized uptime monitoring platform for all websites (Web2 and Web3), built on the Solana blockchain. It uses a Decentralized Physical Infrastructure Network (DePIN) of incentivized nodes to track website uptime globally, logs data on Solana for transparency, and provides a dashboard for users. This project was developed with a Solana Foundation & CoinDCX Grant to empower Solana developers with a reliable monitoring tool while promoting decentralization.

## Problem
Centralized uptime monitoring platforms lack global coverage, transparency, and introduce single points of failure, impacting developers building services reliant on any website, including Web2 sites like `google.com`.

## Solution
DePIN Monitor for Solana creates a decentralized network of nodes to monitor website uptime. Nodes ping websites, log data on Solana, and users can view uptime metrics (e.g., 99.8% uptime) on a dashboard. It leverages Solana’s high throughput and low costs for scalability and transparency.

## Features
- Decentralized monitoring with a DePIN network of 20+ nodes.
- Real-time uptime data logged on Solana for transparency.
- Dashboard to view uptime metrics for any website.
- Open-source deployment on Solana’s Mainnet Beta.

## Project Goals
- Launch a basic uptime monitoring platform for Solana developers.
- Onboard 20 nodes to the DePIN network for initial global coverage.
- Deploy as open-source on Solana’s Mainnet Beta.

## How It Works
1. Users submit a website (e.g., `google.com`) via the platform.
2. DePIN nodes ping the website every 5 minutes from different regions.
3. Uptime data is logged on Solana via a smart contract.
4. Users view metrics (e.g., uptime percentage, latency) on a dashboard.

## Setup Instructions
### Prerequisites
- Node.js (v16 or higher)
- Solana CLI (for interacting with Solana blockchain)
- A Solana wallet (e.g., Phantom) to receive node incentives

### Running a Node
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/depin-monitor-solana.git
   cd depin-monitor-solana
