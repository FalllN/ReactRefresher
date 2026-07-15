---
name: Add summary counts and empty state
about: Calculate live ticket counts and show an empty-state message
title: "Add summary counts and empty state"
labels: assessment
---

## Goal

Display calculated summary counts and an empty state when no tickets match.

## Summary counts

Show counts for:

- Total tickets
- Open tickets
- In Progress tickets
- Closed tickets

These values must be calculated from the current ticket state and must not be hardcoded.

## Empty state

When no tickets match the active filters or search query, display:

```text
No tickets match your current filters.
```

## Acceptance criteria

- [ ] Counts update when tickets are added or statuses change
- [ ] Counts are derived from state, not hardcoded numbers
- [ ] Empty state appears when filters/search match nothing
- [ ] Empty state disappears when matching tickets exist again
