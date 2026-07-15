---
name: Display ticket data
about: Create and render the initial support ticket dataset
title: "Display ticket data"
labels: assessment
---

## Goal

Create at least six support tickets and make them available to the application.

## Requirements

Each ticket must include:

- `id`
- `customer`
- `subject`
- `status`
- `priority`

Allowed statuses: `Open`, `In Progress`, `Closed`

## Acceptance criteria

- [ ] At least six tickets exist in the project
- [ ] Ticket data is stored in a dedicated file (for example `src/data/tickets.js`)
- [ ] Tickets can be imported and used by the app

## Notes

Do not implement filtering, search, forms, or status updates in this issue.
