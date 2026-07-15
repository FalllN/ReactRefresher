---
name: Update ticket status
about: Allow moving tickets Open to In Progress to Closed with immutable updates
title: "Update ticket status"
labels: assessment
---

## Goal

Allow each ticket to move through statuses:

`Open` → `In Progress` → `Closed`

## Requirements

- Provide a UI control on each ticket to advance status
- Update React state immutably
- Do not mutate the existing ticket object directly

## Acceptance criteria

- [ ] A ticket can move from Open to In Progress
- [ ] A ticket can move from In Progress to Closed
- [ ] State updates create a new tickets array / ticket object
- [ ] Existing ticket objects are not mutated directly

## Be ready to explain

- Why direct mutation is a problem in React
- How you created a new state value instead of mutating the old one
