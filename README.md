# CrimeClix

Create realistic portraits of criminals from textual description or a sketch and save them to a public database.
Identify these criminals from live CCTV feeds in real time and raise alerts.

# Technologies
- **Frontend**: [Next.js](https://nextjs.org)
- **Backend**: [flask](https://flask.palletsprojects.com/)

# Backend API endpoints

| S. No.  |  Method  | Endpoints               |          Description          |
| :-----  |:---------| :-----------------------| :---------------------------- |
| 1       | GET      | portraits/              | Get all generated portraits   |
| 2       | POST     | portraits/              | Upload generated portrait     |
| 3       | GET      | portraits/{name}        | Get specific portrait         |
