# Reonic Take Home Assignment

## Overview

The goal of this task is to build an input form for simulation parameters, and create a front-end interface for the simulation output using static data.
The focus is on usability and responsiveness, with an important restriction rule of not using any UI libraries.

## Tech Choices

- React
- TypeScript
- Tailwind
- Zod (form validation)
- Recharts (data visualization)

## Prerequisites

- Node.js
- npm or yarn

## Installation

Clone the Repository<br>
`git clone https://github.com/CodingSancho/Reonic.git`<br>
`cd Reonic`

Install Dependencies<br>
`npm install`<br>
or<br>
`yarn install`<br><br>

Running the Application in Development Mode<br>
`npm start`<br>
or<br>
`yarn start`<br>

## Project Structure
src/<br>
├── components/<br>
├── types/<br>
├── utils/<br>
└── App.tsx<br>

## Features

1) Form
2) Charging Point Usage
3) Hourly Charging Profile
4) Charging Events
5) Energy Consumption

#### Input<br>
- Details:
  - The number of charge points.
  - A multiplier for the arrival probability to increase the amount of cars arriving to charge (20-200%, default: 100%).
  - The consumption of the cars (default: 18 kWh).
  - The charging power per chargepoint (default: 11 kW).<br>

- Assumptions:<br>
  - The form is controlled when user clicks on "Run Simulation".<br>

#### Output<br>
- Details:
  - The charging values (in kW) per chargepoint at a useful aggregation level.
  - An exemplary day.
  - The total energy charged (in kWh).
  - The number of charging events per year/month/week/day.
  - The amount of charging events/actual max power demand/energy consumed per day/week/month as a bar chart/heatmap.<br>

- Assumptions:<br>
  - Each ResponsiveContainer has fixed sizes, regardless of how many charging points user sets in the form.
  - Dropdowns are not changing the state, to avoid creating overall six more charts with static dummy data.

## Other

- State management is planned to be done via prop drilling from parent component (App.tsx) after a future function returns dynamic data based on form submission.
- Code refactoring is to be done according to the future of the simulator.
- Testing will be implemented later.
